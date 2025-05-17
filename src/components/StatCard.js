
import React from 'react';
import './CSS/AllCss'; 

const StatCard = ({ icon, iconColor, value, label, trend, trendDirection }) => {
    return (
      <div className="stat-card">
        <div className="stat-header">
          <div className={`stat-icon ${iconColor}`}>{icon}</div>
          <button className="btn btn-icon btn-secondary">
            🔄
          </button>
        </div>
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        <div className={`stat-trend trend-${trendDirection}`}>
          {trendDirection === 'up' ? '↑' : '↓'} {trend}
        </div>
      </div>
    );
  };


  export default StatCard;