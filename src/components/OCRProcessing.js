import React, { useState } from 'react';
import './CSS/AllCss';

const OCRProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileUpload = async (files) => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setShowResults(false);
    setUploadSuccess(false);

    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('file', file));

    try {
      const resp = await fetch(
        'https://sidmidccompany-ocr.hf.space/ocr/upload',
        { method: 'POST', body: formData }
      );
      const data = await resp.json();

      if (data?.job_id) {
        // read existing array or start new
        const prev = JSON.parse(localStorage.getItem('uploadedJobIds') || '[]');
        localStorage.setItem(
          'uploadedJobIds',
          JSON.stringify([data.job_id, ...prev])
        );
        setUploadSuccess(true);
      }

      // simulate progress
      const stages = [
        'Initializing OCR engine…',
        'Preprocessing image…',
        'Detecting text regions…',
        'Extracting text…',
        'Analyzing document structure…',
        'Identifying key fields…',
        'Validating extracted data…',
        'Finalizing results…',
      ];
      let i = 0;
      const timer = setInterval(() => {
        if (i < stages.length) {
          setProgress(((i + 1) / stages.length) * 100);
          setStatus(stages[i]);
          i += 1;
        } else {
          clearInterval(timer);
          setIsProcessing(false);
          setShowResults(true);
        }
      }, 400);
    } catch (err) {
      console.error('Upload failed:', err);
      setIsProcessing(false);
    }
  };

  return (
    <div className="page-content">
      <h1>AI-Powered OCR Document Processing</h1>

      <div className="form-section">
        <div className="form-header">Upload Document for OCR</div>

        {!isProcessing && !showResults && (
          <div
            className="ocr-upload-area"
            onClick={() => document.getElementById('ocrFileInput').click()}
            onDrop={e => {
              e.preventDefault();
              handleFileUpload(e.dataTransfer.files);
            }}
            onDragOver={e => e.preventDefault()}
          >
            <div className="ocr-upload-icon">📄</div>
            <h3 className="ocr-upload-text">
              Drop files here or click to upload
            </h3>
            <p className="ocr-upload-subtext">
              Supported formats: PDF, JPG, PNG, TIFF (Max 10MB)
            </p>
            <input
              type="file"
              id="ocrFileInput"
              style={{ display: 'none' }}
              accept=".pdf,.jpg,.jpeg,.png,.tiff"
              multiple
              onChange={e => handleFileUpload(e.target.files)}
            />
          </div>
        )}

        {isProcessing && (
          <div className="ocr-processing">
            <div className="spinner" />
            <p>Processing document with AI…</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p>{status}</p>
          </div>
        )}

        {showResults && uploadSuccess && (
          <div className="ocr-result-message">
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              File uploaded successfully!
            </p>
            <p>You can now view it in the Tender Management section.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRProcessing;
