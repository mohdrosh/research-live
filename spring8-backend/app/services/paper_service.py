from bson import ObjectId
from datetime import datetime, timezone
from typing import Optional, List, Dict, Any
from app.database import get_db
from app.models.schemas import PaperCreate, PaperUpdate, PaperResponse
import logging

logger = logging.getLogger(__name__)

COLLECTION = "papers"


def _serialize_paper(doc: dict) -> dict:
    """Convert MongoDB document to API-compatible dict."""
    if doc is None:
        return None
    doc["id"] = str(doc.pop("_id"))
    return doc


async def create_paper(paper_data: PaperCreate) -> PaperResponse:
    db = get_db()
    now = datetime.now(timezone.utc)

    doc = paper_data.model_dump()
    doc["created_at"] = now
    doc["updated_at"] = now

    # Serialize form_data and related_papers for Mongo
    if doc.get("form_data"):
        doc["form_data"] = paper_data.form_data.model_dump() if paper_data.form_data else None
    if doc.get("related_papers"):
        doc["related_papers"] = [rp.model_dump() for rp in paper_data.related_papers]

    result = await db[COLLECTION].insert_one(doc)
    created = await db[COLLECTION].find_one({"_id": result.inserted_id})
    return PaperResponse(**_serialize_paper(created))


async def get_paper(paper_id: str) -> Optional[PaperResponse]:
    db = get_db()
    try:
        doc = await db[COLLECTION].find_one({"_id": ObjectId(paper_id)})
        if doc:
            return PaperResponse(**_serialize_paper(doc))
    except Exception as e:
        logger.error(f"Error fetching paper {paper_id}: {e}")
    return None


async def get_all_papers(skip: int = 0, limit: int = 100) -> List[PaperResponse]:
    db = get_db()
    cursor = db[COLLECTION].find().sort("created_at", -1).skip(skip).limit(limit)
    papers = []
    async for doc in cursor:
        papers.append(PaperResponse(**_serialize_paper(doc)))
    return papers


async def update_paper(paper_id: str, update_data: PaperUpdate) -> Optional[PaperResponse]:
    db = get_db()
    update_dict = {k: v for k, v in update_data.model_dump().items() if v is not None}
    update_dict["updated_at"] = datetime.now(timezone.utc)

    if "form_data" in update_dict and update_data.form_data:
        update_dict["form_data"] = update_data.form_data.model_dump()
    if "related_papers" in update_dict and update_data.related_papers:
        update_dict["related_papers"] = [rp.model_dump() for rp in update_data.related_papers]

    try:
        result = await db[COLLECTION].find_one_and_update(
            {"_id": ObjectId(paper_id)},
            {"$set": update_dict},
            return_document=True
        )
        if result:
            return PaperResponse(**_serialize_paper(result))
    except Exception as e:
        logger.error(f"Error updating paper {paper_id}: {e}")
    return None


async def delete_paper(paper_id: str) -> bool:
    db = get_db()
    try:
        result = await db[COLLECTION].delete_one({"_id": ObjectId(paper_id)})
        return result.deleted_count > 0
    except Exception as e:
        logger.error(f"Error deleting paper {paper_id}: {e}")
    return False


async def count_papers() -> int:
    db = get_db()
    return await db[COLLECTION].count_documents({})


async def get_filter_options() -> Dict[str, Any]:
    """Get unique values for filter dropdowns."""
    db = get_db()
    pipeline = [
        {
            "$group": {
                "_id": None,
                "fields": {"$addToSet": "$field"},
                "methods": {"$addToSet": "$method"},
                "applications": {"$addToSet": "$application"},
                "beamlines": {"$addToSet": "$beamline"},
                "years": {"$addToSet": "$year"},
            }
        }
    ]
    cursor = db[COLLECTION].aggregate(pipeline)
    result = await cursor.to_list(length=1)

    if result:
        r = result[0]
        return {
            "fields": sorted([f for f in r.get("fields", []) if f]),
            "methods": sorted([m for m in r.get("methods", []) if m]),
            "applications": sorted([a for a in r.get("applications", []) if a]),
            "beamlines": sorted([b for b in r.get("beamlines", []) if b]),
            "years": sorted([y for y in r.get("years", []) if y], reverse=True),
        }
    return {"fields": [], "methods": [], "applications": [], "beamlines": [], "years": []}