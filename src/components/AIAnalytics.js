import React from 'react';
import './CSS/AllCss'; 



const AIAnalytics = () => {
    return (
      <div className="page-content">
        <h1>AI Analytics & Insights</h1>
        
        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="analytics-header">
              <h3 className="analytics-title">Win Rate Analysis</h3>
            </div>
            <div className="analytics-body">
              <div className="metric-row">
                <span className="metric-label">Current Quarter</span>
                <span className="metric-value">68%</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Previous Quarter</span>
                <span className="metric-value">62%</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">YoY Growth</span>
                <span className="metric-value">+15%</span>
              </div>
            </div>
          </div>
          
          <div className="analytics-card">
            <div className="analytics-header">
              <h3 className="analytics-title">Department Performance</h3>
            </div>
            <div className="analytics-body">
              <div className="metric-row">
                <span className="metric-label">Ministry of IT</span>
                <span className="metric-value">78%</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Railways</span>
                <span className="metric-value">65%</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Defense</span>
                <span className="metric-value">82%</span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Finance</span>
                <span className="metric-value">71%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-section">
          <div className="form-header">AI-Generated Recommendations</div>
          <div className="ai-suggestions">
            <h4>Strategic Insights for Q1 2024</h4>
            <div className="ai-suggestion-item">
              <span>💡 Focus on IT infrastructure tenders - 23% higher win rate</span>
              <span className="ai-confidence">94%</span>
            </div>
            <div className="ai-suggestion-item">
              <span>📊 Optimal bid range: 92-95% of estimated value for government projects</span>
              <span className="ai-confidence">89%</span>
            </div>
            <div className="ai-suggestion-item">
              <span>🎯 Partner with local vendors in Railway tenders for 15% better scores</span>
              <span className="ai-confidence">91%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  export default AIAnalytics;