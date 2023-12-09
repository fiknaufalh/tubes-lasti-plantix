from pydantic import BaseModel, DateTime, Float
from typing import Optional

class SensorPost(BaseModel):
    loc_id : int
    timestamp : DateTime
    temperature : Float
    air_humidity : Float
    soil_humidity : Float
    light_intensity : Float

class Sensor(BaseModel):
    sensor_id : int
    loc_id : int
    timestamp : DateTime
    temperature : Float
    air_humidity : Float
    soil_humidity : Float
    light_intensity : Float

class StatusRequest(BaseModel):
    watering : str enum {'True','False'}
    fertilizing : str
    pest_detection : str
