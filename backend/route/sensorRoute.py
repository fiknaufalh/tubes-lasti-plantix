from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas

sensor_router = APIRouter(tags=['SensorRoute'])

# Get all sensor
@sensor_router.get("/sensor", response_model=List[schemas.Sensor])
async def retrieve_sensor(db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).all()
    return sensor

# Get sensor by ID
@sensor_router.get("/sensor/{id}", response_model=schemas.Sensor)
async def retrieve_sensor_by_id(sensor_id =  int, db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    if sensor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sensor with ID {sensor_id} does not exist"
        )
    return sensor

# Post sensor
@sensor_router.post("/sensor")
async def add_sensor(item: schemas.SensorPost, db: Session = Depends(get_db)):
    sensor = models.Sensor(**item.dict())
    db.add(sensor)
    db.commit()
    db.refresh(sensor)
    added_sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    return {f"sensor_id: {added_sensor.sensor_id} ", "message: Successfully create new sensor"}

# Put sensor
@sensor_router.put("/sensor/{sensor_id}")
async def update_sensor(sensor_id: int, item: schemas.SensorPost, db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()

    if sensor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sensor with ID {sensor_id} does not exist"
        )

    for key, value in item.dict().items():
        setattr(sensor, key, value)

    db.commit()
    db.refresh(sensor)
    updated_sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    return {f"sensor_id: {updated_sensor.sensor_id}", "message: Successfully updated sensor"}


@sensor_router.delete('/sensor/{sensor_id}')
async def delete_sensor(sensor_id: int, db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    if sensor is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sensor {sensor_id} not found."
        )

    # Delete the university
    db.delete(sensor)
    db.commit()
    return {f"sensor_id: {sensor_id}", "message: Sensor deleted successfully"}