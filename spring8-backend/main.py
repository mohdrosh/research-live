from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.database import connect_db, close_db
from app.routers import papers, search, analyze

@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_db()
    yield
    await close_db()

app = FastAPI(
    title="SPring-8 MDRCG API",
    description="Multi-Dimensional Research Context Graph System for SPring-8",
    version="1.0.0",
    lifespan=lifespan
)

# Allow large request bodies for PDF storage (50MB)
app.state.max_request_body_size = 50 * 1024 * 1024

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(papers.router, prefix="/api/papers", tags=["Papers"])
app.include_router(search.router, prefix="/api/search", tags=["Search"])
app.include_router(analyze.router, prefix="/api/analyze-pdf", tags=["AI Analysis"])

@app.get("/")
async def root():
    return {"message": "SPring-8 MDRCG API is running", "version": "1.0.0"}

@app.get("/health")
async def health():
    return {"status": "healthy"}