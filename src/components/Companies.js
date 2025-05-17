import React, { useState } from 'react';
import './CSS/AllCss'; 


const Companies = () => {
    const [companies, setCompanies] = useState([
      { id: 1, name: 'Dawell Technologies', type: 'Parent Company', status: 'Active', employees: 450 },
      { id: 2, name: 'Dawell Infrastructure', type: 'Subsidiary', status: 'Active', employees: 280 },
      { id: 3, name: 'Dawell Consulting', type: 'Partner', status: 'Active', employees: 120 }
    ]);
  
    return (
      <div className="page-content">
        <h1>Company Management</h1>
        
        <div className="form-section">
          <div className="form-header">Add New Company</div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-input" placeholder="Enter company name" />
            </div>
            <div className="form-group">
              <label className="form-label">Company Type</label>
              <select className="form-select">
                <option>Parent Company</option>
                <option>Subsidiary</option>
                <option>Partner</option>
                <option>Vendor</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Registration Number</label>
              <input type="text" className="form-input" placeholder="Enter registration number" />
            </div>
            <div className="form-group">
              <label className="form-label">GST Number</label>
              <input type="text" className="form-input" placeholder="Enter GST number" />
            </div>
          </div>
          <button className="btn btn-primary">Add Company</button>
        </div>
        
        <div className="data-table">
          <div className="table-header">
            <h3 className="table-title">Registered Companies</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Employees</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id}>
                  <td>{company.name}</td>
                  <td>{company.type}</td>
                  <td><span className="status-badge status-active">{company.status}</span></td>
                  <td>{company.employees}</td>
                  <td>
                    <button className="btn btn-secondary">Edit</button>
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

  export default Companies;
  