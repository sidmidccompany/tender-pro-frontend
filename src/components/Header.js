import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import NotificationsPanel from './NotificationsPanel';
import './CSS/AllCss';

const Header = ({ onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <button 
          className="mobile-menu-toggle" 
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input 
            type="search" 
            className="search-input" 
            placeholder="Search tenders, documents, insights..." 
            aria-label="Search tenders, documents, and insights"
          />
        </div>
      </div>
      
      <div className="header-right">
        <div className="notification-wrapper">
          <button 
            className="notification-icon" 
            onClick={toggleNotifications}
            aria-label="Notifications - 3 unread"
          >
            <Bell size={24} />
            <span className="notification-badge" aria-hidden="true">3</span>
          </button>
          {showNotifications && <NotificationsPanel onClose={closeNotifications} />}
        </div>
        <div 
          className="user-profile" 
          role="button" 
          tabIndex="0" 
          aria-label="User profile: John Doe"
          style={{ cursor: 'pointer' }}
        >
          <div className="user-avatar" aria-hidden="true">JD</div>
          <span>John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
