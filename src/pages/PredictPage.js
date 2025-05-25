import React, { useState } from "react";
import axios from "axios";
import "./PredictPage.css";

function PredictPage() {
  const [instruction, setInstruction] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    if (!instruction) return;

    setLoading(true);
    setResponse("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5001/predict",
        {
          input: `What is the glass transition temperature of ${instruction}? Reply with only the temperature in °C.`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(res.data.output || "No response");
    } catch (err) {
      if (err.response) {
        setError(`Server responded with status ${err.response.status}`);
      } else if (err.request) {
        setError("No response received. Is the backend running?");
      } else {
        setError("Error setting up the request.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="predict-background">
      <div className="predict-glass">
        <h2 style={{ color: "black" }}>Know Your Polymer’s Tg!!</h2>
        <p style={{ color: "black" }}>Please enter a polymer name to predict its glass transition temperature.</p>

        <input
          type="text"
          placeholder="Enter polymer name"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        />

        <button onClick={handlePredict} disabled={loading}>
          {loading ? "Predicting..." : "Predict"}
        </button>

        {error && <p className="error">{error}</p>}

        {response && (
          <div className="response">
            <strong style={{ color: "black" }}>Result:</strong> 
            <p style={{ color: "black" }}>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PredictPage;











