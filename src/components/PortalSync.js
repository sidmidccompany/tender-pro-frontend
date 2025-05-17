import React, { useState } from 'react';
import './CSS/AllCss'; 


const PortalSync = () => {
    const [gemCredentials, setGemCredentials] = useState({
      userId: 'GEM2024USER',
      password: '',
      orgId: 'ORG123456',
      syncFrequency: 'Every 4 Hours'
    });
  
    return (
      <div className="page-content">
        <h1>Portal Integration & Sync</h1>
        
        <div className="form-section">
          <div className="form-header">Government e-Marketplace (GeM) Integration</div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">GeM User ID</label>
              <input 
                type="text" 
                className="form-input" 
                value={gemCredentials.userId}
                onChange={(e) => setGemCredentials({...gemCredentials, userId: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="form-label">GeM Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Enter GeM Password"
                onChange={(e) => setGemCredentials({...gemCredentials, password: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Organization ID</label>
              <input 
                type="text" 
                className="form-input" 
                value={gemCredentials.orgId}
                onChange={(e) => setGemCredentials({...gemCredentials, orgId: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Auto-Sync Frequency</label>
              <select 
                className="form-select"
                value={gemCredentials.syncFrequency}
                onChange={(e) => setGemCredentials({...gemCredentials, syncFrequency: e.target.value})}
              >
                <option>Every Hour</option>
                <option>Every 4 Hours</option>
                <option>Daily</option>
                <option>Manual Only</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary">Connect to GeM</button>
          <button className="btn btn-secondary">Test Connection</button>
        </div>
      </div>
    );
  };
  

  export default PortalSync;