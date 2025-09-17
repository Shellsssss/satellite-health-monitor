import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

# --- 1. Load and Prepare Data ---
print("🚀 Step 1: Loading and preparing data...")
df = pd.read_csv('satellite_telemetry.csv')

# Let's focus on predicting the battery voltage for just one satellite
df_sat1 = df[df['satellite_id'] == 'SAT-01'].copy()

# Check if there are enough data points for the specified sequence length
sequence_length = 5 # Reduced the sequence length to accommodate limited data
if len(df_sat1) < sequence_length:
    print(f"🚨 Error: Not enough data points ({len(df_sat1)}) for SAT-01 to create sequences of length {sequence_length}.")
else:
    battery_voltage = df_sat1['battery_voltage_v'].values.reshape(-1, 1)

    # Normalize the data between 0 and 1 - models work better this way
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_voltage = scaler.fit_transform(battery_voltage)

    # --- 2. Create Training Sequences ---
    # We'll use the last 5 data points to predict the next one.
    print("🧠 Step 2: Creating time-series sequences...")
    X, y = [], []

    for i in range(len(scaled_voltage) - sequence_length):
        X.append(scaled_voltage[i:i+sequence_length])
        y.append(scaled_voltage[i+sequence_length])

    X = np.array(X)
    y = np.array(y)

    # Reshape input data for LSTM [samples, timesteps, features]
    X = np.reshape(X, (X.shape[0], X.shape[1], 1))

    # --- 3. Build the LSTM Model ---
    print("🏗️ Step 3: Building the LSTM model...")
    model = Sequential([
        LSTM(units=50, input_shape=(sequence_length, 1)),
        Dense(units=1)
    ])

    # Compile the model with a standard optimizer and loss function
    model.compile(optimizer='adam', loss='mean_squared_error')
    model.summary()

    # --- 4. Train the Model ---
    print("\n💪 Step 4: Training the model... (This will take a minute)")
    # Reduced batch size to 1 due to small dataset size, which helps with training on limited data
    history = model.fit(X, y, epochs=25, batch_size=1, verbose=1)

    # --- 5. Make Predictions ---
    print("\n🔮 Step 5: Making predictions on future steps...")

    # Number of future steps to predict (24 steps for 2 hours at 5-minute intervals)
    future_steps = 24
    predicted_voltage_values = []
    predicted_timestamps = []

    # Get the last sequence_length data points from our dataset
    # We will update this sequence in each iteration
    current_sequence = scaled_voltage[-sequence_length:].reshape(1, sequence_length, 1)

    last_timestamp = pd.to_datetime(df_sat1['timestamp'].iloc[-1])
    time_interval = pd.Timedelta(minutes=5)

    for i in range(future_steps):
        # Predict the next value
        scaled_prediction = model.predict(current_sequence)

        # Store the predicted value (scaled)
        predicted_voltage_values.append(scaled_prediction[0][0])

        # Update the current sequence by removing the oldest value and adding the new prediction
        # The new prediction becomes the last element of the sequence
        current_sequence = np.append(current_sequence[:, 1:, :], scaled_prediction.reshape(1, 1, 1), axis=1)

        # Calculate the timestamp for the prediction
        predicted_timestamp = last_timestamp + (i + 1) * time_interval
        predicted_timestamps.append(predicted_timestamp)

    # Inverse transform the predicted values to get real voltage values
    predicted_voltage_values = scaler.inverse_transform(np.array(predicted_voltage_values).reshape(-1, 1))

    print(f"\n✅ Predictions Complete!")
    print(f"Predicted voltage for the next {future_steps} steps:")
    for i in range(future_steps):
        print(f"  {predicted_timestamps[i]}: {predicted_voltage_values[i][0]:.2f} V")

    # --- 6. Visualize the Results ---
    print("\n📊 Step 6: Visualizing original data with predictions...")
    plt.figure(figsize=(15, 6))
    plt.title('Satellite-1 Battery Voltage Over Time with Future Predictions', fontsize=16)
    plt.plot(pd.to_datetime(df_sat1['timestamp']), battery_voltage, label='Actual Voltage', color='dodgerblue')

    # Add the predicted points to the plot
    plt.plot(predicted_timestamps, predicted_voltage_values, label=f'Predicted Voltage ({future_steps} steps)', color='red', linestyle='--')

    plt.xlabel('Timestamp')
    plt.ylabel('Voltage (V)')
    plt.legend()
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()