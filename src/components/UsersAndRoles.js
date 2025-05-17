import React, { useState } from 'react';
import './CSS/AllCss'; 


const UsersAndRoles = () => {
    const [users, setUsers] = useState([
      { id: 1, name: 'John Doe', email: 'john@dawell.com', role: 'Admin', department: 'IT', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@dawell.com', role: 'Manager', department: 'Finance', status: 'Active' },
      { id: 3, name: 'Mike Johnson', email: 'mike@dawell.com', role: 'User', department: 'Operations', status: 'Active' }
    ]);
  
    return (
      <div className="page-content">
        <h1>Users & Roles Management</h1>
        
        <div className="form-section">
          <div className="form-header">Add New User</div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Enter full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option>Admin</option>
                <option>Manager</option>
                <option>User</option>
                <option>Viewer</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select className="form-select">
                <option>Information Technology</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>HR</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary">Create User</button>
        </div>
        
        <div className="data-table">
          <div className="table-header">
            <h3 className="table-title">User List</h3>
            <div className="table-actions">
              <input type="search" className="form-input" placeholder="Search users..." style={{ width: '200px' }} />
              <select className="form-select" style={{ width: '150px' }}>
                <option>All Roles</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>User</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.department}</td>
                  <td><span className="status-badge status-active">{user.status}</span></td>
                  <td>
                    <button className="btn btn-secondary">Edit</button>
                    <button className="btn btn-danger">Deactivate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };


  export default UsersAndRoles;
  