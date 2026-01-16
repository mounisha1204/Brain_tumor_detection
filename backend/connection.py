from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import uvicorn

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = load_model("brain_tumor_model.h5")



CLASS_NAMES = ['glioma', 'meningioma', 'notumor', 'pituitary']

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    
    img_bytes = await file.read()
    img = Image.open(io.BytesIO(img_bytes))
    img = img.resize((128, 128))

    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0

 
    predictions = model.predict(img_array)
    class_index = np.argmax(predictions)
    confidence = round(np.max(predictions) * 100, 2)

    return {
        "prediction": CLASS_NAMES[class_index],
        "confidence": f"{confidence}%"
    }


