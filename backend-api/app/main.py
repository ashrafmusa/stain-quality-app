from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Stain Quality Predictor API is live"}
