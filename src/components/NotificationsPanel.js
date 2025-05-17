import React from 'react';
import './CSS/AllCss'; 

const NotificationsPanel = ({ onClose }) => {
    const notifications = [
      {
        type: 'info',
        title: 'New Tender Alert',
        description: 'Railway Ministry posted a new IT infrastructure tender worth ₹45L',
        time: '5 minutes ago',
        unread: true
      },
      {
        type: 'success',
        title: 'Bid Submitted Successfully',
        description: 'Your bid for Defense Security Services has been submitted',
        time: '2 hours ago',
        unread: true
      },
      {
        type: 'warning',
        title: 'Deadline Approaching',
        description: 'Finance Ministry tender closes in 24 hours',
        time: 'Yesterday',
        unread: false
      }
    ];
  
    return (
      <div className="notifications-panel">
        <div className="notifications-header">
          <h3 className="notifications-title">Notifications</h3>
          <a href="#" className="notifications-clear">Clear all</a>
        </div>
        <div className="notifications-list">
          {notifications.map((notification, index) => (
            <div key={index} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
              <div className="notification-content">
                <div className={`notification-icon-wrapper ${notification.type}`}>
                  <span>
                    {notification.type === 'info' && '📋'}
                    {notification.type === 'success' && '✓'}
                    {notification.type === 'warning' && '⚠️'}
                  </span>
                </div>
                <div className="notification-text">
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-description">{notification.description}</div>
                  <div className="notification-time">{notification.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default NotificationsPanel;
