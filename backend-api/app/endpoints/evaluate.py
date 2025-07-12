from fastapi import APIRouter, UploadFile, File
from PIL import Image
import numpy as np
from io import BytesIO
from app.services.predictor import predict

router = APIRouter()

@router.post("/evaluate")
async def evaluate(file: UploadFile = File(...)):
    image = Image.open(BytesIO(await file.read())).convert("RGB")
    image = image.resize((224, 224))  # Adjust as needed
    image_array = np.array(image).flatten() / 255.0
    result = predict(image_array)
    return {"prediction": result}
