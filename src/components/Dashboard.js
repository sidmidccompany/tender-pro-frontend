import React, { useState } from 'react';
import StatCard from './StatCard';
import { RefreshCw } from 'lucide-react';
import './CSS/AllCss'; 

const Dashboard = ({ tenders = [] }) => {
  const [stats, setStats] = useState({
    activeTenders: tenders.length,
    bidsSubmitted: 23,
    pendingDeadlines: 12,
    winRate: 65
  });

  React.useEffect(() => {
    setStats(prev => ({
      ...prev,
      activeTenders: tenders.length
    }));
  }, [tenders]);

  return (
    <div id="dashboard-page" className="page-content" role="main">
      <div className='heading'>
      <h1>Dashboard Overview</h1>
      </div>
      {/* Portal Integration Status */}
      <div className="portal-status">
        <div className="portal-badge gem connected">
          <span className="connection-dot" aria-hidden="true"></span>
          GeM Connected
        </div>
        <div className="portal-badge cppp connected">
          <span className="connection-dot" aria-hidden="true"></span>
          CPPP Connected
        </div>
        <button className="btn btn-secondary" aria-label="Sync all government portals">
          <RefreshCw size={16} aria-hidden="true" />
          Sync All Portals
        </button>
      </div>
      
      {/* Stats Grid */}
      <div className="dashboard-grid">
        <StatCard
          icon="📋"
          iconColor="blue"
          value={stats.activeTenders}
          label="Active Tenders"
          trend="+12% from last month"
          trendDirection="up"
        />
        <StatCard
          icon="✓"
          iconColor="green"
          value={stats.bidsSubmitted}
          label="Bids Submitted"
          trend="+8% from last month"
          trendDirection="up"
        />
        <StatCard
          icon="⏰"
          iconColor="orange"
          value={stats.pendingDeadlines}
          label="Pending Deadlines"
          trend="-3% from last month"
          trendDirection="down"
        />
        <StatCard
          icon="🏆"
          iconColor="red"
          value={`${stats.winRate}%`}
          label="Win Rate"
          trend="+5% from last month"
          trendDirection="up"
        />
      </div>

      {/* Recent Tenders Table */}
      <div className="data-table">
        <div className="table-header">
          <h3 className="table-title">Recent Tender Activity</h3>
          <div className="table-actions">
            <button className="btn btn-secondary">Export Data</button>
            <button className="btn btn-primary">+ New Tender</button>
          </div>
        </div>
        {tenders.length > 0 ? (
          <table role="table">
            <thead>
              <tr role="row">
                <th role="columnheader">Tender ID</th>
                <th role="columnheader">Title</th>
                <th role="columnheader">Department</th>
                <th role="columnheader">Value</th>
                <th role="columnheader">Deadline</th>
                <th role="columnheader">Status</th>
                <th role="columnheader">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenders.slice(0, 5).map((tender) => (
                <tr key={tender.id} role="row">
                  <td role="cell">{tender.tenderRef}</td>
                  <td role="cell">{tender.title}</td>
                  <td role="cell">{tender.department}</td>
                  <td role="cell">₹{Number(tender.value).toLocaleString('en-IN')}</td>
                  <td role="cell">{new Date(tender.deadline).toLocaleDateString()}</td>
                  <td role="cell"><span className="status-badge status-active">{tender.status}</span></td>
                  <td role="cell">
                    <button className="btn btn-secondary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table role="table">
            <thead>
              <tr role="row">
                <th role="columnheader">Tender ID</th>
                <th role="columnheader">Title</th>
                <th role="columnheader">Department</th>
                <th role="columnheader">Value</th>
                <th role="columnheader">Deadline</th>
                <th role="columnheader">Status</th>
                <th role="columnheader">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row">
                <td role="cell" colSpan="7" style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                  No tenders created yet. Click "New Tender" to create your first tender.
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};


export default Dashboard;