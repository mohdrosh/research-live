from fastapi import APIRouter, HTTPException, status
from typing import List
from app.models.schemas import PaperCreate, PaperUpdate, PaperResponse, FilterOptions
from app.services import (
    create_paper, get_paper, get_all_papers,
    update_paper, delete_paper, count_papers, get_filter_options
)

router = APIRouter()


@router.post("/", response_model=PaperResponse, status_code=status.HTTP_201_CREATED)
async def create_new_paper(paper: PaperCreate):
    """Register a new research paper in the database."""
    return await create_paper(paper)


@router.get("/", response_model=List[PaperResponse])
async def list_papers(skip: int = 0, limit: int = 100):
    """Retrieve all papers with optional pagination."""
    return await get_all_papers(skip=skip, limit=limit)


@router.get("/count")
async def get_paper_count():
    """Get total number of papers."""
    total = await count_papers()
    return {"total": total}


@router.get("/filter-options", response_model=FilterOptions)
async def get_available_filters():
    """Get all unique filter values (fields, methods, beamlines, etc.)."""
    return await get_filter_options()


@router.get("/{paper_id}", response_model=PaperResponse)
async def get_paper_by_id(paper_id: str):
    """Get a single paper by its ID."""
    paper = await get_paper(paper_id)
    if not paper:
        raise HTTPException(status_code=404, detail=f"Paper {paper_id} not found")
    return paper


@router.put("/{paper_id}", response_model=PaperResponse)
async def update_existing_paper(paper_id: str, update_data: PaperUpdate):
    """Update a paper's metadata or MDRCG form data."""
    updated = await update_paper(paper_id, update_data)
    if not updated:
        raise HTTPException(status_code=404, detail=f"Paper {paper_id} not found")
    return updated


@router.delete("/{paper_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_existing_paper(paper_id: str):
    """Delete a paper from the database."""
    deleted = await delete_paper(paper_id)
    if not deleted:
        raise HTTPException(status_code=404, detail=f"Paper {paper_id} not found")