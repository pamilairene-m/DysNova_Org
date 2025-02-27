import numpy as np
import tensorflow as tf
from tensorflow import keras

# Create a simple neural network model
model = keras.Sequential([
    keras.layers.Dense(16, activation='relu', input_shape=(10,)),  # 10 features
    keras.layers.Dense(8, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')  # Binary classification (Dyslexia: Yes/No)
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Generate dummy training data (Replace with real data later)
X_train = np.random.rand(100, 10)  # 100 samples, 10 features
y_train = np.random.randint(2, size=100)  # Binary labels (0 or 1)

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=5)

# Save the trained model
model.save("dyslexia_model.h5")

print("Model training complete. Saved as dyslexia_model.h5.")
