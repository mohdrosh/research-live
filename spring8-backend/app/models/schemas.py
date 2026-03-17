from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from bson import ObjectId

# ---------- Helpers ----------

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, schema):
        schema.update(type="string")
        return schema


# ---------- MDRCG Form Data ----------

class MDRCGFormData(BaseModel):
    main_conclusion: Optional[str] = None
    prior_work: Optional[str] = None
    novelty: Optional[str] = None
    unknown_questions: Optional[str] = None
    failed_approach: Optional[str] = None
    cross_domain: Optional[str] = None
    industrial_pain: Optional[str] = None
    abstract_principle: Optional[str] = None
    experimental_reason: Optional[str] = None
    scaling_possibility: Optional[str] = None
    combination_potential: Optional[str] = None


# ---------- Related Paper ----------

class RelatedPaper(BaseModel):
    paper_id: str
    relationship_type: str  # Cited, Builds upon, Contradicts, Extends, etc.


# ---------- Paper Create ----------

class PaperCreate(BaseModel):
    title: str
    title_en: Optional[str] = ""
    authors: Optional[str] = ""
    year: Optional[int] = None
    field: Optional[str] = ""
    method: Optional[str] = ""
    beamline: Optional[str] = ""
    application: Optional[str] = ""
    main_conclusion: Optional[str] = ""
    industrial_application: Optional[str] = ""
    cross_domain: Optional[str] = ""
    failed_approach: Optional[str] = ""
    form_data: Optional[MDRCGFormData] = None
    related_papers: Optional[List[RelatedPaper]] = []
    pdf_data: Optional[str] = None


# ---------- Paper Update ----------

class PaperUpdate(BaseModel):
    title: Optional[str] = None
    title_en: Optional[str] = None
    authors: Optional[str] = None
    year: Optional[int] = None
    field: Optional[str] = None
    method: Optional[str] = None
    beamline: Optional[str] = None
    application: Optional[str] = None
    main_conclusion: Optional[str] = None
    industrial_application: Optional[str] = None
    cross_domain: Optional[str] = None
    failed_approach: Optional[str] = None
    form_data: Optional[MDRCGFormData] = None
    related_papers: Optional[List[RelatedPaper]] = None


# ---------- Paper Response ----------

class PaperResponse(BaseModel):
    id: str
    title: str
    title_en: Optional[str] = ""
    authors: Optional[str] = ""
    year: Optional[int] = None
    field: Optional[str] = ""
    method: Optional[str] = ""
    beamline: Optional[str] = ""
    application: Optional[str] = ""
    main_conclusion: Optional[str] = ""
    industrial_application: Optional[str] = ""
    cross_domain: Optional[str] = ""
    failed_approach: Optional[str] = ""
    form_data: Optional[MDRCGFormData] = None
    related_papers: Optional[List[RelatedPaper]] = []
    pdf_data: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = {"populate_by_name": True}


# ---------- PDF Analysis Request ----------

class PDFAnalysisRequest(BaseModel):
    base64_data: str  # base64-encoded PDF content


# ---------- PDF Analysis Response ----------

class PDFAnalysisResponse(BaseModel):
    title: Optional[str] = None
    title_en: Optional[str] = None
    authors: Optional[str] = None
    year: Optional[int] = None
    field: Optional[str] = None
    method: Optional[str] = None
    beamline: Optional[str] = None
    application: Optional[str] = None
    mainConclusion: Optional[str] = None
    priorWork: Optional[str] = None
    novelty: Optional[str] = None
    unknownQuestions: Optional[str] = None
    failedApproach: Optional[str] = None
    crossDomain: Optional[str] = None
    industrialPain: Optional[str] = None
    abstractPrinciple: Optional[str] = None
    experimentalReason: Optional[str] = None
    scalingPossibility: Optional[str] = None
    combinationPotential: Optional[str] = None


# ---------- Search ----------

class SearchFilters(BaseModel):
    field: Optional[List[str]] = []
    method: Optional[List[str]] = []
    application: Optional[List[str]] = []
    beamline: Optional[List[str]] = []
    year: Optional[List[int]] = []


class SearchRequest(BaseModel):
    query: Optional[str] = ""
    filters: Optional[SearchFilters] = None
    page: int = 1
    page_size: int = 20


class SearchResponse(BaseModel):
    papers: List[PaperResponse]
    total: int
    page: int
    page_size: int
    total_pages: int


# ---------- Filter Options Response ----------

class FilterOptions(BaseModel):
    fields: List[str]
    methods: List[str]
    applications: List[str]
    beamlines: List[str]
    years: List[int]