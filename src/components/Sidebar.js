import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/AllCss';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { section: 'Main Menu', items: [
      { id: 'dashboard', icon: '📊', label: 'Dashboard', path: '/' },
      { id: 'tenders', icon: '📄', label: 'Tender Management', path: '/tender-management' },
      { id: 'gem', icon: '🏛️', label: 'GEM Bids', path: '/gem-bids' },
      { id: 'portal-sync', icon: '🔄', label: 'Portal Sync', path: '/portal-sync' },
    ]},
    { section: 'AI Features', items: [
      { id: 'ocr', icon: '📸', label: 'OCR Processing', path: '/ocr-processing' },
      { id: 'ai-assistant', icon: '🤖', label: 'AI Assistant', path: '/ai-chat' },
      { id: 'analytics', icon: '📈', label: 'AI Analytics', path: '/ai-analytics' },
      { id: 'predictions', icon: '🔮', label: 'Predictive Analysis', path: '/predictive-analysis' },
    ]},
    { section: 'Collaboration', items: [
      { id: 'team', icon: '👥', label: 'Team Workspace', path: '/team-workspace' },
      { id: 'documents', icon: '📁', label: 'Document Management', path: '/document-management' },
    ]},
    { section: 'Configuration', items: [
      { id: 'companies', icon: '🏢', label: 'Companies', path: '/companies' },
      { id: 'departments', icon: '🏛️', label: 'Departments', path: '/departments' },
      { id: 'users', icon: '👥', label: 'Users & Roles', path: '/users-roles' },
      { id: 'settings', icon: '⚙️', label: 'Settings', path: '/settings' },
    ]},
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Dawell Tender Pro</h1>
        <p>Next-Gen Tender Management</p>
      </div>

      <div className="sidebar-menu">
        {menuItems.map(section => (
          <div key={section.section} className="menu-section">
            <div className="menu-title">{section.section}</div>
            {section.items.map(item => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                <span className="menu-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
        <div className="menu-section">
          <div className="menu-item logout" onClick={onLogout} role="button" tabIndex={0}>
            <span className="menu-icon">🚪</span>
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
