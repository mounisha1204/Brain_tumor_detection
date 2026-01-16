import React, { useState } from "react";
import axios from "axios";
import './Wannatest.css';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile)); 
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPrediction(res.data.prediction);
      setConfidence(res.data.confidence);
    } catch (error) {
      console.error("Error:", error);
      alert("Error predicting tumor type");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box">
      <div className="leftbox">
        <form onSubmit={handleSubmit}>
          <input
            className="in"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <br /><br />
          <button type="submit">Predict</button>
        </form>
      </div>

      {loading && <p>Processing...</p>}

      {prediction && (
        <div className="rightbox">
        
          <div className="image-box">
            {preview && <img src={preview} alt="Uploaded" className="uploaded-image" />}
          </div>
          <h3 className="prediction">Prediction: {prediction}</h3>
          <h4 className="confidence">Confidence: {confidence}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
