import React from "react";
import './CSS/AllCss'; 

const ToggleSwitch = ({ isActive, onToggle }) => {
    return (
      <div 
        className={`toggle-switch ${isActive ? 'active' : ''}`}
        onClick={onToggle}
      ></div>
    );
  };

  export default ToggleSwitch