from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class SensorPost(BaseModel):
    loc_id : int
    timestamp : datetime
    temperature : float
    air_humidity : float
    soil_humidity : float
    light_intensity : float

class Sensor(BaseModel):
    sensor_id : int
    loc_id : int
    timestamp : datetime
    temperature : float
    air_humidity : float
    soil_humidity : float
    light_intensity : float

class WeatherPrediction(BaseModel):
    loc_id : int
    timestamp : datetime
    temperature : float
    air_humidity : float
    soil_humidity : float
    light_intensity : float

class StatusRequest(BaseModel):
    watering : str
    fertilizing : str
    pest_detection : str
