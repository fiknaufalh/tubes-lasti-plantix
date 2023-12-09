# from sqlalchemy import Column, Integer, String, DECIMAL, ForeignKey, Boolean, NUMERIC
# from sqlalchemy.orm import relationship
# from database.database import Base

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database.database import Base
from sqlalchemy.sql import func

class Location(Base):
    __tablename__ = "location"
    loc_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=True)

class Sensor(Base):
    __tablename__ = "sensor"
    sensor_id = Column(Integer, primary_key=True, autoincrement=True)
    loc_id = Column(Integer, ForeignKey("location.loc_id"))
    timestamp = Column(DateTime, server_default=func.now(), nullable=False)
    temperature = Column(Float, nullable=False)
    air_humidity = Column(Float, nullable=False)
    soil_humidity = Column(Float, nullable=False)
    light_intensity = Column(Integer, nullable=False)
    
    location = relationship("Location")

class WeatherPrediction(Base):
    __tablename__ = "weather_prediction"
    pred_id = Column(Integer, primary_key=True, autoincrement=True)
    loc_id = Column(Integer, ForeignKey("location.loc_id"))
    timestamp = Column(DateTime, server_default=func.now(), nullable=False)
    temperature = Column(Float, nullable=False)
    air_humidity = Column(Float, nullable=False)
    soil_humidity = Column(Float, nullable=False)
    light_intensity = Column(Integer, nullable=False)
    
    location = relationship("Location")

class Status(Base):
    __tablename__ = "status"
    id = Column(Integer, primary_key=True, autoincrement=True)
    id_sensor = Column(Integer, ForeignKey("sensor.sensor_id"))
    watering = Column(String(255), nullable=False)
    fertilizing = Column(String(255), nullable=False)
    pest_detection = Column(String(255), nullable=False)

    sensor = relationship("Sensor")


