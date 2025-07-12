from fastapi import APIRouter, UploadFile, File
from app.services.stain_quality import predict_stain_quality

router = APIRouter()

@router.post("/evaluate")
async def evaluate_image(file: UploadFile = File(...)):
    image_data = await file.read()
    prediction, heatmap = predict_stain_quality(image_data)
    return {"prediction": prediction, "heatmap": heatmap}
