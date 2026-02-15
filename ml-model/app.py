from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("model.pkl")
encoders = joblib.load("encoders.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Encode categorical values
    soil_type = encoders["Soil_Type"].transform([data["Soil_Type"]])[0]
    season = encoders["Season"].transform([data["Season"]])[0]
    crop_type = encoders["Crop_Type"].transform([data["Crop_Type"]])[0]

    features = [[
        data["N"],
        data["P"],
        data["K"],
        data["Soil_pH"],
        data["Soil_Moisture"],
        data["Organic_Carbon"],
        data["Temperature"],
        data["Humidity"],
        data["Rainfall"],
        season,
        soil_type,
        crop_type
    ]]

    prediction = model.predict(features)

    return jsonify({
        "predicted_yield": round(float(prediction[0]), 2)
    })

if __name__ == "__main__":
    app.run(port=5001)