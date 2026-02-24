from fastapi import APIRouter, HTTPException, status
from app.models.schemas import PDFAnalysisRequest, PDFAnalysisResponse
from app.services import analyze_pdf
import logging

logger = logging.getLogger(__name__)
router = APIRouter()


@router.post("/", response_model=PDFAnalysisResponse)
async def analyze_pdf_endpoint(request: PDFAnalysisRequest):
    """
    Send a base64-encoded PDF to Claude AI and receive structured MDRCG metadata.

    The frontend should:
    1. Read the PDF file using FileReader
    2. Send the base64 string (without the data URI prefix) in `base64_data`
    3. Use the returned JSON to pre-fill the MDRCG form
    """
    if not request.base64_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="base64_data is required"
        )

    try:
        result = await analyze_pdf(request.base64_data)
        return result
    except ValueError as e:
        logger.error(f"AI analysis error: {e}")
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Unexpected error during PDF analysis: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="PDF analysis failed. Please try again."
        )