import React, { useState } from 'react';
import './CSS/AllCss'; 


const TenderManagement = ({ tenders, onTenderCreated }) => {
    const [formData, setFormData] = useState({
      tenderRef: '',
      title: '',
      department: '',
      category: '',
      value: '',
      deadline: '',
      description: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      // Form validation
      if (!formData.tenderRef || !formData.title || !formData.department || !formData.category || !formData.value || !formData.deadline) {
        alert('Please fill in all required fields');
        return;
      }
  
      const newTender = { 
        id: Date.now(), 
        ...formData,
        status: 'Active',
        createdAt: new Date().toISOString()
      };
      onTenderCreated(newTender);
      
      // Reset form
      setFormData({
        tenderRef: '',
        title: '',
        department: '',
        category: '',
        value: '',
        deadline: '',
        description: ''
      });
      
      alert('Tender created successfully!');
    };
  
    return (
      <div id="tenders-page" className="page-content">
        <h1>Tender Management</h1>
        
        <div className="form-section">
          <div className="form-header">Create New Tender</div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Tender Reference Number*</label>
              <input 
                type="text" 
                className="form-input" 
                name="tenderRef"
                value={formData.tenderRef}
                onChange={handleInputChange}
                placeholder="Enter tender reference" 
                required 
                aria-label="Tender Reference Number"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Tender Title*</label>
              <input 
                type="text" 
                className="form-input" 
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter tender title" 
                required 
                aria-label="Tender Title"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Department*</label>
              <select 
                className="form-select" 
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                aria-label="Department"
              >
                <option value="">Select Department</option>
                <option value="finance">Ministry of Finance</option>
                <option value="it">Ministry of IT</option>
                <option value="railways">Railways</option>
                <option value="defense">Defense</option>
                <option value="energy">Energy Ministry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Tender Category*</label>
              <select 
                className="form-select" 
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                aria-label="Tender Category"
              >
                <option value="">Select Category</option>
                <option value="works">Works</option>
                <option value="goods">Goods</option>
                <option value="services">Services</option>
                <option value="consultancy">Consultancy</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Estimated Value (₹)*</label>
              <input 
                type="number" 
                className="form-input" 
                name="value"
                value={formData.value}
                onChange={handleInputChange}
                placeholder="Enter estimated value" 
                required 
                min="0"
                aria-label="Estimated Value"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Submission Deadline*</label>
              <input 
                type="datetime-local" 
                className="form-input" 
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required 
                aria-label="Submission Deadline"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea 
              className="form-textarea" 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4" 
              placeholder="Enter tender description" 
              aria-label="Description"
            ></textarea>
          </div>
          <div className="form-group">
            <button onClick={handleSubmit} className="btn btn-primary">Create Tender</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
  
        {/* Display existing tenders */}
        <div className="data-table">
          <div className="table-header">
            <h3 className="table-title">Existing Tenders ({tenders.length})</h3>
            <div className="table-actions">
              <button className="btn btn-secondary">Export Data</button>
            </div>
          </div>
          {tenders.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Category</th>
                  <th>Value</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenders.map(tender => (
                  <tr key={tender.id}>
                    <td>{tender.tenderRef}</td>
                    <td>{tender.title}</td>
                    <td>{tender.department}</td>
                    <td>{tender.category}</td>
                    <td>₹{Number(tender.value).toLocaleString('en-IN')}</td>
                    <td>{new Date(tender.deadline).toLocaleDateString()}</td>
                    <td><span className="status-badge status-active">{tender.status}</span></td>
                    <td>
                      <button className="btn btn-secondary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              No tenders created yet. Use the form above to create your first tender.
            </p>
          )}
        </div>
      </div>
    );
  };

  export default TenderManagement;