from typing import List, Dict, Any, Optional
from app.database import get_db
from app.models.schemas import PaperResponse, SearchRequest, SearchResponse
import logging
import re

logger = logging.getLogger(__name__)

COLLECTION = "papers"


def _serialize_paper(doc: dict) -> dict:
    if doc is None:
        return None
    doc["id"] = str(doc.pop("_id"))
    return doc


def _build_query(request: SearchRequest) -> Dict[str, Any]:
    """Build MongoDB query from search request."""
    query: Dict[str, Any] = {}
    conditions = []

    # Full-text keyword search across multiple fields
    if request.query and request.query.strip():
        q = request.query.strip()
        regex = re.compile(q, re.IGNORECASE)
        conditions.append({
            "$or": [
                {"title": {"$regex": regex}},
                {"title_en": {"$regex": regex}},
                {"authors": {"$regex": regex}},
                {"main_conclusion": {"$regex": regex}},
                {"industrial_application": {"$regex": regex}},
                {"cross_domain": {"$regex": regex}},
                {"field": {"$regex": regex}},
                {"method": {"$regex": regex}},
                {"form_data.novelty": {"$regex": regex}},
                {"form_data.prior_work": {"$regex": regex}},
                {"form_data.industrial_pain": {"$regex": regex}},
            ]
        })

    # Sidebar filters
    if request.filters:
        f = request.filters
        if f.field:
            conditions.append({"field": {"$in": f.field}})
        if f.method:
            conditions.append({"method": {"$in": f.method}})
        if f.application:
            conditions.append({"application": {"$in": f.application}})
        if f.beamline:
            conditions.append({"beamline": {"$in": f.beamline}})
        if f.year:
            conditions.append({"year": {"$in": f.year}})

    if conditions:
        query["$and"] = conditions

    return query


async def search_papers(request: SearchRequest) -> SearchResponse:
    db = get_db()
    query = _build_query(request)

    skip = (request.page - 1) * request.page_size
    total = await db[COLLECTION].count_documents(query)

    cursor = (
        db[COLLECTION]
        .find(query, {"pdf_data": 0})
        .sort("created_at", -1)
        .skip(skip)
        .limit(request.page_size)
    )

    papers = []
    async for doc in cursor:
        papers.append(PaperResponse(**_serialize_paper(doc)))

    total_pages = max(1, -(-total // request.page_size))  # ceiling division

    return SearchResponse(
        papers=papers,
        total=total,
        page=request.page,
        page_size=request.page_size,
        total_pages=total_pages,
    )


async def get_related_papers(paper_id: str) -> List[PaperResponse]:
    """Get all papers related to a given paper."""
    from bson import ObjectId
    db = get_db()

    # Find the source paper
    try:
        source = await db[COLLECTION].find_one({"_id": ObjectId(paper_id)})
    except Exception:
        return []

    if not source or not source.get("related_papers"):
        return []

    related_ids = [rp["paper_id"] for rp in source["related_papers"]]
    object_ids = []
    for rid in related_ids:
        try:
            object_ids.append(ObjectId(rid))
        except Exception:
            pass

    if not object_ids:
        return []

    cursor = db[COLLECTION].find({"_id": {"$in": object_ids}})
    results = []
    async for doc in cursor:
        results.append(PaperResponse(**_serialize_paper(doc)))
    return results