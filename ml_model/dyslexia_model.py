import numpy as np
import tensorflow as tf
from tensorflow import keras
from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)

# Load the pre-trained model
try:
    model = keras.models.load_model("dyslexia_model.h5")
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    exit(1)  # Exit if model is not found

# API Endpoint to Predict Dyslexia
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json.get('features', [])
        
        if len(data) != 10:  # Ensure correct number of features
            return jsonify({"error": "Invalid input: Expected 10 features"}), 400
        
        input_data = np.array(data).reshape(1, -1)  # Reshape for model
        prediction = model.predict(input_data)
        result = "Dyslexic" if prediction[0][0] > 0.5 else "Non-Dyslexic"
        
        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5002, debug=True)  # Run Flask server on port 5001
