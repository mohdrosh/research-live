from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING, TEXT
from app.config import settings
import logging

logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    db = None

db_state = Database()

async def connect_db():
    """Connect to MongoDB and create indexes."""
    try:
        db_state.client = AsyncIOMotorClient(settings.MONGODB_URL)
        db_state.db = db_state.client[settings.DATABASE_NAME]

        # Create indexes for fast queries
        papers_col = db_state.db.papers
        await papers_col.create_index([("title", TEXT), ("title_en", TEXT),
                                       ("main_conclusion", TEXT), ("cross_domain", TEXT),
                                       ("industrial_application", TEXT), ("authors", TEXT)])
        await papers_col.create_index([("field", ASCENDING)])
        await papers_col.create_index([("method", ASCENDING)])
        await papers_col.create_index([("beamline", ASCENDING)])
        await papers_col.create_index([("application", ASCENDING)])
        await papers_col.create_index([("year", ASCENDING)])
        await papers_col.create_index([("created_at", ASCENDING)])

        logger.info(f"Connected to MongoDB: {settings.DATABASE_NAME}")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")
        raise

async def close_db():
    """Close MongoDB connection."""
    if db_state.client:
        db_state.client.close()
        logger.info("MongoDB connection closed")

def get_db():
    return db_state.db