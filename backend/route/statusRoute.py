from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas

status_router = APIRouter(tags=['StatusRoute'])

# Get sensor by ID
@status_router.get("/status/{sensor_id}", response_model=schemas.StatusRequest)
async def retrieve_sensor_status(sensor_id =  int, db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    if sensor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sensor with ID {sensor_id} does not exist"
        )
    return db.query(models.Status).filter(models.Status.id_sensor == sensor_id).first()