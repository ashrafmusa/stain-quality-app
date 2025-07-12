import pickle
from pathlib import Path

# Load the model once at startup
MODEL_PATH = Path(__file__).resolve().parent.parent / "models" / "stain_model.pkl"

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

def predict(image_array):
    # Adjust based on your model’s input requirements
    prediction = model.predict([image_array])
    return prediction[0]
