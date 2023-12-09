from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas
import requests

prediction_router = APIRouter(tags=['Weather Prediction'])

@prediction_router.get("/weather-prediction")
def get_weather_prediction(db: Session = Depends(get_db)):
    return {"message": "Hello World"}
