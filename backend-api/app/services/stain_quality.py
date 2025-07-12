import random
from PIL import Image
import io
import base64

def predict_stain_quality(image_bytes: bytes):
    classes = ["Optimal", "Acceptable", "Poor"]
    prediction = random.choice(classes)

    # Generate dummy red square as heatmap
    heatmap_image = Image.new("RGB", (224, 224), (255, 0, 0))
    buffer = io.BytesIO()
    heatmap_image.save(buffer, format="PNG")
    heatmap_base64 = base64.b64encode(buffer.getvalue()).decode()

    return prediction, heatmap_base64
