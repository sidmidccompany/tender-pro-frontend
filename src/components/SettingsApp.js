
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch '; 
import './CSS/AllCss'; 


const SettingsApp = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [autoSave, setAutoSave] = useState(true);
    const [aiSuggestions, setAiSuggestions] = useState(true);
  
    return (
      <div className="page-content">
        <h1>Settings</h1>
        
        <div className="settings-section">
          <div className="settings-header">General Settings</div>
          <div className="settings-body">
            <div className="settings-item">
              <div className="settings-label">
                <div className="settings-title">Email Notifications</div>
                <div className="settings-description">Receive email alerts for important updates</div>
              </div>
              <div className="settings-control">
                <ToggleSwitch 
                  isActive={emailNotifications} 
                  onToggle={() => setEmailNotifications(!emailNotifications)} 
                />
              </div>
            </div>
            <div className="settings-item">
              <div className="settings-label">
                <div className="settings-title">Push Notifications</div>
                <div className="settings-description">Browser notifications for real-time alerts</div>
              </div>
              <div className="settings-control">
                <ToggleSwitch 
                  isActive={pushNotifications} 
                  onToggle={() => setPushNotifications(!pushNotifications)} 
                />
              </div>
            </div>
            <div className="settings-item">
              <div className="settings-label">
                <div className="settings-title">Auto-Save Drafts</div>
                <div className="settings-description">Automatically save tender drafts every 5 minutes</div>
              </div>
              <div className="settings-control">
                <ToggleSwitch 
                  isActive={autoSave} 
                  onToggle={() => setAutoSave(!autoSave)} 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <div className="settings-header">AI & Automation</div>
          <div className="settings-body">
            <div className="settings-item">
              <div className="settings-label">
                <div className="settings-title">AI Suggestions</div>
                <div className="settings-description">Enable AI-powered bid recommendations</div>
              </div>
              <div className="settings-control">
                <ToggleSwitch 
                  isActive={aiSuggestions} 
                  onToggle={() => setAiSuggestions(!aiSuggestions)} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default SettingsApp;