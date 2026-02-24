from fastapi import APIRouter, HTTPException
from typing import List
from app.models.schemas import SearchRequest, SearchResponse, PaperResponse
from app.services import search_papers, get_related_papers

router = APIRouter()


@router.post("/", response_model=SearchResponse)
async def search(request: SearchRequest):
    """
    Search papers by keyword and/or filters.

    - **query**: Free-text search across title, authors, conclusions, cross-domain, etc.
    - **filters**: Narrow by field, method, application, beamline, year
    - **page** / **page_size**: Pagination controls
    """
    return await search_papers(request)


@router.get("/related/{paper_id}", response_model=List[PaperResponse])
async def get_paper_related(paper_id: str):
    """Get all papers linked as related to the given paper."""
    return await get_related_papers(paper_id)