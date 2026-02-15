import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
import joblib

# Load dataset
data = pd.read_csv("dataset.csv")

# Encode categorical columns
label_encoders = {}

categorical_cols = ["Soil_Type", "Season", "Crop_Type"]

for col in categorical_cols:
    le = LabelEncoder()
    data[col] = le.fit_transform(data[col])
    label_encoders[col] = le

# Features (X)
X = data[
    [
        "N",
        "P",
        "K",
        "Soil_pH",
        "Soil_Moisture",
        "Organic_Carbon",
        "Temperature",
        "Humidity",
        "Rainfall",
        "Season",
        "Soil_Type",
        "Crop_Type",
    ]
]

# Target (y)
y = data["Crop_Yield_ton_per_hectare"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, "model.pkl")
joblib.dump(label_encoders, "encoders.pkl")

print("Model trained and saved successfully!")