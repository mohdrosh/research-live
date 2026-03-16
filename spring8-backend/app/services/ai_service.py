from google import genai
from google.genai import types
import json
import base64
from app.config import settings

client = genai.Client(api_key=settings.gemini_api_key)

async def analyze_pdf(base64_data: str) -> dict:
    try:
        pdf_bytes = base64.b64decode(base64_data)
        
        prompt = """
この研究論文PDFを分析し、以下の項目について回答してください。
必ずJSON形式のみで返してください。他のテキストは含めないでください。

{
  "title": "論文タイトル（日本語、なければ英語）",
  "title_en": "論文タイトル（英語）",
  "authors": "著者名をカンマ区切りで（例: Yamamoto, M., Tanaka, Y.）",
  "year": 発行年（数値）,
  "field": "研究分野（日本語と英語、例: 材料科学 (Materials Science)）",
  "method": "主な測定・分析手法（日本語と英語）",
  "beamline": "使用したビームライン（例: BL19B2、不明な場合はnull）",
  "application": "産業応用分野（日本語と英語、例: 自動車産業 (Automotive)）",
  "mainConclusion": "主な結論を1-2文で（日本語）",
  "priorWork": "先行研究との関係（3-5つ）（日本語）",
  "novelty": "この研究の新規性（日本語）",
  "unknownQuestions": "未解明の課題（2-3つ）（日本語）",
  "failedApproach": "失敗したアプローチ（日本語）",
  "crossDomain": "異分野への応用可能性（日本語）",
  "industrialPain": "解決できる産業課題（日本語）",
  "abstractPrinciple": "小学5年生でも理解できる説明（日本語）",
  "experimentalReason": "実験設計の理由（日本語）",
  "scalingPossibility": "スケーリング可能性（日本語）",
  "combinationPotential": "他技術との組み合わせ可能性（日本語）"
}
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[
                types.Part.from_bytes(data=pdf_bytes, mime_type="application/pdf"),
                types.Part.from_text(text=prompt),
            ]
        )

        text = response.text.strip()
        if text.startswith("```"):
            text = text.split("```")[1]
            if text.startswith("json"):
                text = text[4:]
        text = text.strip()
        result = json.loads(text)
        # Convert any list fields to strings
        for key in ['priorWork', 'unknownQuestions', 'failedApproach', 'crossDomain']:
            if key in result and isinstance(result[key], list):
                result[key] = '\n'.join(result[key])
        return result

    except Exception as e:
        print(f"FULL ERROR: {str(e)}")
        raise Exception(f"Gemini API error: {str(e)}")
