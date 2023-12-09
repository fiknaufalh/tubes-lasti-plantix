from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas
import requests

prediction_router = APIRouter(tags=['Weather Prediction'])

@prediction_router.get("/weather-prediction")
def get_weather_predictions(db: Session = Depends(get_db)):
    predictions = db.query(models.WeatherPrediction).all()
    return predictions

@prediction_router.get("/weather-prediction/{id_location}}")
def get_weather_prediction(db: Session = Depends(get_db), id_location: int = 1):
    predictions = db.query(models.WeatherPrediction).filter(models.WeatherPrediction.loc_id == id_location).all()
    if not predictions:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Prediction with id {id_location} not found")
    return predictions

@prediction_router.post("/weather-prediction")
def add_weather_prediction(weather_prediction: schemas.WeatherPrediction, db: Session = Depends(get_db)):
    db_prediction = models.WeatherPrediction(
        loc_id=weather_prediction.loc_id,
        timestamp=weather_prediction.timestamp,
        temperature=weather_prediction.temperature,
        air_humidity=weather_prediction.air_humidity,
        soil_humidity=weather_prediction.soil_humidity,
        light_intensity=weather_prediction.light_intensity
    )
    db.add(db_prediction)
    db.commit()
    return db_prediction