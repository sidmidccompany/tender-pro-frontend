import React from 'react';
import './CSS/AllCss'; 
import StatCard from './StatCard';


const PredictiveAnalysis = () => {
    return (
      <div className="page-content">
        <h1>AI Predictive Analysis</h1>
        
        <div className="dashboard-grid">
          <StatCard
            icon="🎯"
            iconColor="blue"
            value="89%"
            label="Next Bid Win Probability"
            trend="Based on historical data"
            trendDirection="up"
          />
          <StatCard
            icon="💰"
            iconColor="green"
            value="₹38.5L"
            label="Optimal Bid Amount"
            trend="For current Railway tender"
            trendDirection="neutral"
          />
          <StatCard
            icon="📈"
            iconColor="orange"
            value="+15%"
            label="Market Growth Rate"
            trend="IT Services sector Q2"
            trendDirection="up"
          />
          <StatCard
            icon="⚡"
            iconColor="red"
            value="72hrs"
            label="Peak Submission Time"
            trend="Before deadline"
            trendDirection="neutral"
          />
        </div>
        
        <div className="form-section">
          <div className="form-header">Win Rate Prediction by Category</div>
          <div className="chart-container">
            <canvas id="categoryPredictionChart" height="100"></canvas>
          </div>
        </div>
        
        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="analytics-header">
              <h3 className="analytics-title">Upcoming Opportunities</h3>
            </div>
            <div className="analytics-body">
              <div className="metric-row">
                <span className="metric-label">Defense IT Modernization</span>
                <span className="metric-value">₹450Cr</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Railway Signal Upgrade</span>
                <span className="metric-value">₹280Cr</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Smart City Projects</span>
                <span className="metric-value">₹750Cr</span>
              </div>
            </div>
          </div>
          
          <div className="analytics-card">
            <div className="analytics-header">
              <h3 className="analytics-title">Risk Assessment</h3>
            </div>
            <div className="analytics-body">
              <div className="metric-row">
                <span className="metric-label">Competition Intensity</span>
                <span className="metric-value" style={{ color: 'var(--warning)' }}>High</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Price Sensitivity</span>
                <span className="metric-value" style={{ color: 'var(--danger)' }}>Very High</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Technical Requirements</span>
                <span className="metric-value" style={{ color: 'var(--success)' }}>Moderate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



  export default PredictiveAnalysis;
