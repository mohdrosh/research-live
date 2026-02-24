import google.generativeai as genai
import json
import base64
from app.config import settings

genai.configure(api_key=settings.gemini_api_key)

async def analyze_pdf_with_ai(base64_data: str) -> dict:
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        pdf_bytes = base64.b64decode(base64_data)
        
        prompt = """
この研究論文PDFを分析し、以下の項目について日本語で回答してください。
必ずJSON形式のみで返してください。他のテキストは含めないでください。

{
  "mainConclusion": "主な結論を1-2文で",
  "priorWork": "先行研究との関係（3-5つ）",
  "novelty": "この研究の新規性",
  "unknownQuestions": "未解明の課題（2-3つ）",
  "failedApproach": "失敗したアプローチ",
  "crossDomain": "異分野への応用可能性",
  "industrialPain": "解決できる産業課題",
  "abstractPrinciple": "小学5年生でも理解できる説明",
  "experimentalReason": "実験設計の理由",
  "scalingPossibility": "スケーリング可能性",
  "combinationPotential": "他技術との組み合わせ可能性"
}
"""
        
        response = model.generate_content([
            {
                "mime_type": "application/pdf",
                "data": pdf_bytes
            },
            prompt
        ])
        
        text = response.text.strip()
        # Strip markdown code blocks if present
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
        text = text.strip()
        
        return json.loads(text)
        
    except Exception as e:
        raise Exception(f"Gemini API error: {str(e)}")
