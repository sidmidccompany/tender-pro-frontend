import React, { useState } from 'react';
import './CSS/AllCss'; 

const OCRProcessing = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('');
  
    const handleFileUpload = (files) => {
      if (files.length > 0) {
        setIsProcessing(true);
        setShowResults(false);
        
        // Simulate OCR processing
        const stages = [
          'Initializing OCR engine...',
          'Preprocessing image...',
          'Detecting text regions...',
          'Extracting text...',
          'Analyzing document structure...',
          'Identifying key fields...',
          'Validating extracted data...',
          'Finalizing results...'
        ];
        
        let currentStage = 0;
        const interval = setInterval(() => {
          if (currentStage < stages.length) {
            setProgress((currentStage + 1) * 12.5);
            setStatus(stages[currentStage]);
            currentStage++;
          } else {
            clearInterval(interval);
            setIsProcessing(false);
            setShowResults(true);
            setProgress(100);
          }
        }, 500);
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
              onDrop={(e) => {
                e.preventDefault();
                handleFileUpload(e.dataTransfer.files);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="ocr-upload-icon">📄</div>
              <h3 className="ocr-upload-text">Drop files here or click to upload</h3>
              <p className="ocr-upload-subtext">Supported formats: PDF, JPG, PNG, TIFF (Max 10MB)</p>
              <input 
                type="file" 
                id="ocrFileInput" 
                style={{ display: 'none' }} 
                accept=".pdf,.jpg,.jpeg,.png,.tiff" 
                onChange={(e) => handleFileUpload(e.target.files)}
                multiple
              />
            </div>
          )}
          
          {isProcessing && (
            <div className="ocr-processing">
              <div className="spinner"></div>
              <p>Processing document with AI...</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <p>{status}</p>
            </div>
          )}
          
          {showResults && (
            <div id="ocrResults">
              <h3>Extracted Data</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Tender Number</label>
                  <input type="text" className="form-input" defaultValue="TND-2024-001" />
                  <span className="ai-confidence">AI Confidence: 95%</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <input type="text" className="form-input" defaultValue="Ministry of Finance" />
                  <span className="ai-confidence">AI Confidence: 88%</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Tender Value</label>
                  <input type="text" className="form-input" defaultValue="₹45,00,000" />
                  <span className="ai-confidence">AI Confidence: 92%</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Deadline</label>
                  <input type="text" className="form-input" defaultValue="2024-12-15 17:00" />
                  <span className="ai-confidence">AI Confidence: 90%</span>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <button className="btn btn-primary">Save Extracted Data</button>
                <button className="btn btn-secondary" onClick={() => {
                  setShowResults(false);
                  setProgress(0);
                }}>Process Another Document</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default OCRProcessing;