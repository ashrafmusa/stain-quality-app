import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:8000/evaluate', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload</button>
      {result && (
        <div>
          <p>Prediction: {result.prediction}</p>
          <img src={`data:image/png;base64,${result.heatmap}`} alt="Grad-CAM Heatmap" />
        </div>
      )}
    </div>
  );
};

export default UploadForm;
