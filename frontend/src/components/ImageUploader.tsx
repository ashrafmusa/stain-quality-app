import React, { useState } from 'react';

const ImageUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setPrediction(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/evaluate', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setPrediction(data.prediction); // backend must return: { "prediction": "Optimal" }
    } catch (err) {
      console.error(err);
      setPrediction('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Upload Histopathology Stain Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button onClick={handleSubmit} disabled={!file || loading}>
        {loading ? 'Evaluating...' : 'Submit'}
      </button>
      {prediction && (
        <p>
          <strong>Prediction:</strong> {prediction}
        </p>
      )}
    </div>
  );
};

export default ImageUploader;
