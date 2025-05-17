import React from 'react';
import './CSS/AllCss'; 
import StatCard from './StatCard';  


const GemBids = () => {
    return (
      <div className="page-content">
        <h1>GeM Bids Management</h1>
        <div className="dashboard-grid">
          <StatCard
            icon="🏛️"
            iconColor="blue"
            value="156"
            label="Total GeM Bids"
            trend="+23% from last month"
            trendDirection="up"
          />
          <StatCard
            icon="✓"
            iconColor="green"
            value="89"
            label="Won Bids"
            trend="+15% from last month"
            trendDirection="up"
          />
          <StatCard
            icon="⏳"
            iconColor="orange"
            value="45"
            label="Pending Review"
            trend="-5% from last month"
            trendDirection="down"
          />
          <StatCard
            icon="💰"
            iconColor="green"
            value="₹2.34Cr"
            label="Total Value Won"
            trend="+42% from last month"
            trendDirection="up"
          />
        </div>
      </div>
    );
  };

  export default GemBids;