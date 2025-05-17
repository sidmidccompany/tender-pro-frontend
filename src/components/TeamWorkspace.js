// src/components/TeamWorkspace.js
import React from 'react';
import StatCard from './StatCard';
import TeamMemberCard from './TeamMemberCard';
import './CSS/AllCss'; 

const TeamWorkspace = () => {
  return (
    <div className="page-content">
      <h1>Team Collaboration</h1>
      
      <div className="dashboard-grid">
        <StatCard
          icon="👥"
          iconColor="blue"
          value="8"
          label="Active Team Members"
          trend="+2 this month"
          trendDirection="up"
        />
        <StatCard
          icon="📝"
          iconColor="green"
          value="5"
          label="Active Collaborations"
          trend="No change"
          trendDirection="neutral"
        />
        <StatCard
          icon="💬"
          iconColor="orange"
          value="23"
          label="Pending Reviews"
          trend="+5 from yesterday"
          trendDirection="up"
        />
        <StatCard
          icon="✅"
          iconColor="red"
          value="87%"
          label="Task Completion"
          trend="+3% this week"
          trendDirection="up"
        />
      </div>
      
      <div className="team-member-list">
        <TeamMemberCard
          initials="JD"
          name="John Doe"
          role="Senior Manager"
          stats={{ active: 12, completed: 45, success: 92 }}
        />
        <TeamMemberCard
          initials="JS"
          name="Jane Smith"
          role="Bid Analyst"
          stats={{ active: 8, completed: 38, success: 88 }}
        />
        <TeamMemberCard
          initials="MJ"
          name="Mike Johnson"
          role="Technical Lead"
          stats={{ active: 10, completed: 52, success: 95 }}
        />
      </div>
    </div>
  );
};

export default TeamWorkspace;
