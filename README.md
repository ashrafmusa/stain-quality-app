# 🧪 Histopathology Stain Quality Predictor

This app uses AI to evaluate the quality of histological stain images (e.g., H&E, IHC) and generate predictions + heatmaps for diagnostic quality assurance.

## 🔧 Features

- Upload stain images
- Predict quality score (Optimal / Acceptable / Poor)
- Visual heatmaps with GradCAM
- Frontend (React), Backend (FastAPI), ML (PyTorch)

## 📁 Project Structure

- `frontend/` — React app
- `backend-api/` — FastAPI server serving ML model
- `ml-model/` — Model training pipeline
- `reports/` — Evaluation reports & outputs

## 🚀 Getting Started

### Backend (FastAPI)
```bash
cd backend-api
pip install -r requirements.txt
uvicorn app.main:app --reload
