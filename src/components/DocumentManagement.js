import React, { useState } from 'react';
import './CSS/AllCss'; 


const DocumentManagement = () => {
    const [documents, setDocuments] = useState([
      { id: 1, name: 'Railway Tender 2024.pdf', type: 'PDF', size: '2.4 MB', uploaded: '2024-01-15', owner: 'John Doe' },
      { id: 2, name: 'Financial Report Q4.xlsx', type: 'Excel', size: '890 KB', uploaded: '2024-01-10', owner: 'Jane Smith' },
      { id: 3, name: 'Technical Specifications.docx', type: 'Word', size: '1.1 MB', uploaded: '2024-01-08', owner: 'Mike Johnson' }
    ]);
  
    return (
      <div className="page-content">
        <h1>Document Management</h1>
        
        <div className="form-section">
          <div className="form-header">Upload Documents</div>
          <div 
            className="ocr-upload-area"
            onClick={() => document.getElementById('docFileInput').click()}
            onDrop={(e) => e.preventDefault()}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="ocr-upload-icon">📁</div>
            <h3 className="ocr-upload-text">Drop files here or click to upload</h3>
            <p className="ocr-upload-subtext">Supported formats: PDF, DOC, XLS, PPT (Max 50MB)</p>
            <input 
              type="file" 
              id="docFileInput" 
              style={{ display: 'none' }} 
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" 
              multiple
            />
          </div>
        </div>
        
        <div className="data-table">
          <div className="table-header">
            <h3 className="table-title">Document Library</h3>
            <div className="table-actions">
              <input type="search" className="form-input" placeholder="Search documents..." style={{ width: '200px' }} />
              <select className="form-select" style={{ width: '150px' }}>
                <option>All Types</option>
                <option>PDF</option>
                <option>Word</option>
                <option>Excel</option>
                <option>PowerPoint</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Type</th>
                <th>Size</th>
                <th>Uploaded Date</th>
                <th>Owner</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>{doc.size}</td>
                  <td>{doc.uploaded}</td>
                  <td>{doc.owner}</td>
                  <td>
                    <button className="btn btn-secondary">Download</button>
                    <button className="btn btn-secondary">Share</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };


  export default DocumentManagement;
  