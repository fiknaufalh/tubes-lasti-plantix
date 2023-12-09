from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from route.sensorRoute import sensor_router
from route.weatherPredRoute import prediction_router
from route.locationsRoute import location_router
import database.models as models
from database.database import engine
import uvicorn

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Middleware to enable CORS for all origins during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return "Welcome to Plantix!"

app.include_router(prediction_router)
app.include_router(sensor_router)
app.include_router(location_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
