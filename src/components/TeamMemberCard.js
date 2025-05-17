import React from 'react';
import './CSS/AllCss'; 


const TeamMemberCard = ({ initials, name, role, stats }) => {
    return (
      <div className="team-member-card">
        <div className="team-member-avatar">{initials}</div>
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <div className="team-member-stats">
          <div className="team-stat">
            <div className="team-stat-value">{stats.active}</div>
            <div className="team-stat-label">Active</div>
          </div>
          <div className="team-stat">
            <div className="team-stat-value">{stats.completed}</div>
            <div className="team-stat-label">Completed</div>
          </div>
          <div className="team-stat">
            <div className="team-stat-value">{stats.success}%</div>
            <div className="team-stat-label">Success</div>
          </div>
        </div>
      </div>
    );
  };

  export default TeamMemberCard;