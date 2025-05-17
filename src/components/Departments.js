import React, { useState } from 'react';
import StatCard from './StatCard';
import './CSS/AllCss'; 

const Departments = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Information Technology', head: 'John Doe', employees: 45, budget: '₹2.5Cr' },
    { id: 2, name: 'Finance', head: 'Jane Smith', employees: 20, budget: '₹1.2Cr' },
    { id: 3, name: 'Operations', head: 'Mike Johnson', employees: 60, budget: '₹3.8Cr' }
  ]);

  return (
    <div className="page-content">
      <h1>Department Management</h1>
      
      <div className="dashboard-grid">
        <StatCard
          icon="🏢"
          iconColor="blue"
          value="8"
          label="Total Departments"
          trend="+2 this year"
          trendDirection="up"
        />
        <StatCard
          icon="👥"
          iconColor="green"
          value="320"
          label="Total Employees"
          trend="+15% growth"
          trendDirection="up"
        />
        <StatCard
          icon="💰"
          iconColor="orange"
          value="₹12.5Cr"
          label="Total Budget"
          trend="+20% from last year"
          trendDirection="up"
        />
        <StatCard
          icon="📊"
          iconColor="red"
          value="92%"
          label="Budget Utilization"
          trend="On track"
          trendDirection="neutral"
        />
      </div>
      
      <div className="data-table">
        <div className="table-header">
          <h3 className="table-title">Department List</h3>
          <button className="btn btn-primary">+ Add Department</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Department Head</th>
              <th>Employees</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.name}</td>
                <td>{dept.head}</td>
                <td>{dept.employees}</td>
                <td>{dept.budget}</td>
                <td>
                  <button className="btn btn-secondary">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Departments;