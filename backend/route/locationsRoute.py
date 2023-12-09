from fastapi import HTTPException, status, APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database.database import get_db
from database import models
import schemas

location_router = APIRouter(tags=['Locations'])

@location_router.get("/locations")
def get_locations(db: Session = Depends(get_db)):
    locations = db.query(models.Location).all()
    return locations

@location_router.get("/locations/{id_location}")
def get_location_by_id(id_location: int, db: Session = Depends(get_db)):
    location = db.query(models.Location).filter(models.Location.loc_id == id_location).first()
    if not location:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Location with id {id_location} not found")
    return location