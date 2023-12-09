from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas
import requests

prediction_router = APIRouter(tags=['Weather Prediction'])

@prediction_router.get("/weather-prediction/{id_location}}")
def get_weather_prediction(db: Session = Depends(get_db), id_location: int = 1):
    predictions = db.query(models.WeatherPrediction).filter(models.WeatherPrediction.loc_id == id_location).all()
    if not predictions:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Prediction with id {id_location} not found")
    return predictions
