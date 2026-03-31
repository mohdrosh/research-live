from fastapi import APIRouter, HTTPException, status
from app.models.schemas import PDFAnalysisRequest, PDFAnalysisResponse
from app.services import analyze_pdf
from pydantic import BaseModel
from google import genai
from app.config import settings
import logging

logger = logging.getLogger(__name__)
router = APIRouter()
client = genai.Client(api_key=settings.gemini_api_key)

class RegenerateFieldRequest(BaseModel):
    field_name: str
    current_text: str
    instruction: str

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/regenerate-field/")
async def regenerate_field(request: RegenerateFieldRequest):
    try:
        prompt = f"""あなたはSPring-8放射光施設の研究論文データベースのアシスタントです。
以下の研究情報テキストを、ユーザーの指示に従って日本語で書き直してください。
JSON、マークダウン、説明文は不要です。書き直したテキストのみを返してください。

フィールド名: {request.field_name}
現在のテキスト:
{request.current_text}

ユーザーの指示: {request.instruction}

書き直したテキスト:"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[prompt]
        )
        return {"result": response.text.strip()}
    except Exception as e:
        logger.error(f"Field regeneration error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Regeneration failed: {str(e)}"
        )
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