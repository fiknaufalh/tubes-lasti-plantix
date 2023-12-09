from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas

sensor_router = APIRouter(tags=['SensorRoute'])
