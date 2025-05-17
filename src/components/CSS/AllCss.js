const styles = `
/* Enhanced CSS with better organization and modern features */
:root {
    --primary: #1976d2;
    --primary-dark: #1565c0;
    --secondary: #424242;
    --success: #4caf50;
    --warning: #ff9800;
    --danger: #f44336;
    --info: #2196f3;
    --light: #f5f5f5;
    --dark: #212121;
    --white: #ffffff;
    --sidebar-width: 260px;
    --gem-blue: #0072bc;
    --cppp-green: #2e8b57;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
    --shadow-md: 0 4px 12px rgba(0,0,0,0.15);
    --shadow-lg: 0 8px 24px rgba(0,0,0,0.2);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f8f9fa;
    color: #333;
    line-height: 1.6;
}

/* Utility Classes */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
}

.flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.justify-between {
    justify-content: space-between;
}

.align-center {
    align-items: center;
}

.gap-10 {
    gap: 10px;
}

.gap-20 {
    gap: 20px;
}

.hidden {
    display: none !important;
}

/* Loading Spinner */
.spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* App Container */
.app-container {
    display: flex;
    min-height: 100vh;
    position: relative;
}

/* Enhanced Sidebar */
.sidebar {
    width: var(--sidebar-width);
    background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
    color: white;
    transition: transform 0.3s ease;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
}

.sidebar-header {
    padding: 20px;
    background: var(--primary);
    text-align: center;
    position: relative;
}

.sidebar-header h1 {
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: 600;
}

.sidebar-header p {
    font-size: 12px;
    opacity: 0.8;
}

.sidebar-menu {
    padding: 20px 0;
}

.menu-section {
    margin-bottom: 30px;
}

.menu-title {
    padding: 0 20px 10px;
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.6;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: #ddd;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.menu-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: var(--primary);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
}

.menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 24px;
}

.menu-item.active {
    background: rgba(25, 118, 210, 0.2);
    color: white;
}

.menu-item.active::before {
    transform: translateX(0);
}

.menu-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Main Content */
.main-content {
    flex: 1;
    margin-left: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Enhanced Header */
.header {
    background: white;
    padding: 15px 30px;
    box-shadow: var(--shadow-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
}

.search-bar {
    position: relative;
    flex: 1;
    max-width: 400px;
}

.search-input {
    padding: 10px 16px 10px 40px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    width: 100%;
    outline: none;
    transition: border-color 0.3s ease;
    font-size: 14px;
}

.search-input:focus {
    border-color: var(--primary);
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}

.notification-wrapper {
    position: relative;
}

.notification-icon {
    cursor: pointer;
    font-size: 24px;
    color: #666;
    transition: color 0.3s ease;
    background: none;
    border: none;
}

.notification-icon:hover {
    color: var(--primary);
}

.notification-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--danger);
    color: white;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 12px;
    font-weight: 600;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 25px;
    transition: background 0.3s ease;
}

.user-profile:hover {
    background: #f5f5f5;
}

.user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}

/* Content Area */
.content {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
    background: #f8f9fa;
}

/* Enhanced Dashboard Cards */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    padding: 24px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.stat-card:hover::before {
    transform: scaleX(1);
}

.stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.stat-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.stat-icon.blue { background: rgba(25, 118, 210, 0.1); color: var(--primary); }
.stat-icon.green { background: rgba(76, 175, 80, 0.1); color: var(--success); }
.stat-icon.orange { background: rgba(255, 152, 0, 0.1); color: var(--warning); }
.stat-icon.red { background: rgba(244, 67, 54, 0.1); color: var(--danger); }

.stat-value {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.stat-label {
    color: #666;
    font-size: 14px;
    font-weight: 500;
}

.stat-trend {
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 16px;
}

.trend-up { 
    color: var(--success); 
    background: rgba(76, 175, 80, 0.1);
}

.trend-down { 
    color: var(--danger); 
    background: rgba(244, 67, 54, 0.1);
}

/* Enhanced Tables */
.data-table {
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    margin-bottom: 30px;
}

.table-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f0f0f0;
    background: #fafafa;
}

.table-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
}

.table-actions {
    display: flex;
    gap: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background: #f8f9fa;
    border-bottom: 2px solid #e0e0e0;
}

th, td {
    padding: 12px 20px;
    text-align: left;
}

th {
    font-weight: 600;
    color: #333;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

tbody tr {
    border-bottom: 1px solid #eee;
    transition: background 0.2s ease;
}

tbody tr:hover {
    background: #f8f9fa;
}

.status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-active { background: #e8f5e9; color: #2e7d32; }
.status-pending { background: #fff3e0; color: #ef6c00; }
.status-draft { background: #e3f2fd; color: #1565c0; }
.status-closed { background: #fafafa; color: #616161; }
.status-won { background: #f3e5f5; color: #6a1b9a; }

/* Enhanced Buttons */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    outline: none;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:active::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

.btn-secondary {
    background: #f5f5f5;
    color: #333;
}

.btn-secondary:hover {
    background: #e0e0e0;
}

.btn-success {
    background: var(--success);
    color: white;
}

.btn-danger {
    background: var(--danger);
    color: white;
}

.btn-icon {
    width: 36px;
    height: 36px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

/* Enhanced Forms */
.form-section {
    background: white;
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    margin-bottom: 20px;
}

.form-header {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #555;
    font-size: 14px;
}

.form-input, .form-select, .form-textarea {
    width: 100%;
    padding: 10px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s;
    background: white;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--primary);
    background: #f8f9fa;
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
}

/* Enhanced Modals */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    backdrop-filter: blur(5px);
}

.modal {
    background: white;
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
}

.modal-title {
    font-size: 20px;
    font-weight: 600;
}

.modal-close {
    cursor: pointer;
    font-size: 24px;
    color: #666;
    transition: color 0.3s ease;
    background: none;
    border: none;
    padding: 5px;
}

.modal-close:hover {
    color: var(--danger);
}

.modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
}

.modal-footer {
    padding: 20px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    background: #fafafa;
}

/* Portal Integration Status */
.portal-status {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.portal-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    transition: transform 0.2s ease;
}

.portal-badge:hover {
    transform: scale(1.05);
}

.portal-badge.gem { 
    background: rgba(0, 114, 188, 0.1); 
    color: var(--gem-blue); 
}

.portal-badge.cppp { 
    background: rgba(46, 139, 87, 0.1); 
    color: var(--cppp-green); 
}

.portal-badge.connected { 
    border: 2px solid currentColor; 
}

.connection-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    70% {
        transform: scale(1.3);
        opacity: 0.3;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Enhanced AI Chat Interface */
.ai-chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 400px;
    height: 600px;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    z-index: 1500;
    overflow: hidden;
}

.ai-chat-header {
    padding: 15px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ai-chat-title {
    font-weight: 600;
    font-size: 16px;
}

.ai-typing-indicator {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #f0f0f0;
    border-top: 1px solid #eee;
}

.typing-dots {
    display: flex;
    gap: 4px;
}

.typing-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #999;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
    0%, 80%, 100% {
        transform: scale(1);
        opacity: 0.8;
    }
    40% {
        transform: scale(1.3);
        opacity: 1;
    }
}

.ai-chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: #f8f9fa;
}

.ai-message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 18px;
    word-wrap: break-word;
    animation: messageSlideIn 0.3s ease;
}

@keyframes messageSlideIn {
    from {
        transform: translateY(10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.ai-message.user {
    align-self: flex-end;
    background: var(--primary);
    color: white;
    border-bottom-right-radius: 4px;
}

.ai-message.assistant {
    align-self: flex-start;
    background: white;
    color: #333;
    border-bottom-left-radius: 4px;
    box-shadow: var(--shadow-sm);
}

.ai-message-time {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 5px;
}

.ai-suggestions-list {
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    background: white;
    border-top: 1px solid #eee;
}

.ai-suggestion-chip {
    background: #e3f2fd;
    color: var(--primary);
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    border: 1px solid transparent;
}

.ai-suggestion-chip:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.05);
}

.ai-chat-input-container {
    padding: 15px;
    border-top: 1px solid #eee;
    display: flex;
    gap: 10px;
    background: white;
}

.ai-chat-input {
    flex: 1;
    padding: 10px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 25px;
    outline: none;
    font-size: 14px;
    transition: border-color 0.3s ease;
}

.ai-chat-input:focus {
    border-color: var(--primary);
}

.ai-chat-send {
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.ai-chat-send:hover {
    background: var(--primary-dark);
    transform: scale(1.05);
}

/* Enhanced OCR Upload Widget */
.ocr-upload-area {
    border: 3px dashed #ddd;
    border-radius: var(--border-radius);
    padding: 40px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    background: #fafafa;
}

.ocr-upload-area:hover {
    border-color: var(--primary);
    background: #f0f7ff;
}

.ocr-upload-area.dragover {
    border-color: var(--primary);
    background: #e3f2fd;
    transform: scale(1.02);
}

.ocr-upload-icon {
    font-size: 64px;
    color: #999;
    margin-bottom: 15px;
}

.ocr-upload-text {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #333;
}

.ocr-upload-subtext {
    color: #666;
    font-size: 14px;
}

.ocr-processing {
    padding: 40px;
    text-align: center;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    margin: 20px 0;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
    transition: width 0.3s ease;
    position: relative;
    overflow: hidden;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent
    );
    animation: progressShine 2s infinite;
}

@keyframes progressShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* Analytics */
.analytics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.analytics-card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
}

.analytics-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.analytics-title {
    font-size: 16px;
    font-weight: 600;
}

.analytics-body {
    padding: 20px;
}

.metric-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
}

.metric-row:last-child {
    border-bottom: none;
}

.metric-label {
    color: #666;
    font-size: 14px;
}

.metric-value {
    font-weight: 600;
    font-size: 16px;
}

/* Team Collaboration */
.team-member-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
}

.team-member-card {
    background: white;
    border-radius: var(--border-radius);
    padding: 20px;
    box-shadow: var(--shadow-sm);
    text-align: center;
    transition: transform 0.3s ease;
}

.team-member-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}

.team-member-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 15px;
    background: var(--primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
}

.team-member-name {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
}

.team-member-role {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
}

.team-member-stats {
    display: flex;
    justify-content: space-around;
    padding-top: 15px;
    border-top: 1px solid #eee;
}

.team-stat {
    text-align: center;
}

.team-stat-value {
    font-weight: 600;
    font-size: 18px;
    color: var(--primary);
}

.team-stat-label {
    font-size: 12px;
    color: #666;
}

/* SettingsApp Page */
.settings-section {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    margin-bottom: 20px;
    overflow: hidden;
}

.settings-header {
    padding: 20px;
    background: #fafafa;
    border-bottom: 1px solid #eee;
    font-weight: 600;
    font-size: 16px;
}

.settings-body {
    padding: 20px;
}

.settings-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}

.settings-item:last-child {
    border-bottom: none;
}

.settings-label {
    flex: 1;
}

.settings-title {
    font-weight: 500;
    margin-bottom: 5px;
}

.settings-description {
    font-size: 13px;
    color: #666;
}

.settings-control {
    margin-left: 20px;
}

/* Toggle Switch */
.toggle-switch {
    position: relative;
    width: 50px;
    height: 26px;
    background: #ccc;
    border-radius: 13px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.toggle-switch.active {
    background: var(--primary);
}

.toggle-switch::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.toggle-switch.active::after {
    transform: translateX(24px);
}

/* Notifications Panel */
.notifications-panel {
    position: absolute;
    top: 60px;
    right: 20px;
    width: 350px;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    max-height: 400px;
    overflow: hidden;
}

.notifications-header {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.notifications-title {
    font-weight: 600;
    font-size: 16px;
}

.notifications-clear {
    color: var(--primary);
    cursor: pointer;
    font-size: 14px;
}

.notifications-list {
    max-height: 300px;
    overflow-y: auto;
}

.notification-item {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background 0.2s ease;
}

.notification-item:hover {
    background: #f8f9fa;
}

.notification-item.unread {
    background: #f0f7ff;
}

.notification-content {
    display: flex;
    gap: 12px;
}

.notification-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.notification-icon-wrapper.info {
    background: rgba(33, 150, 243, 0.1);
    color: var(--info);
}

.notification-icon-wrapper.success {
    background: rgba(76, 175, 80, 0.1);
    color: var(--success);
}

.notification-icon-wrapper.warning {
    background: rgba(255, 152, 0, 0.1);
    color: var(--warning);
}

.notification-text {
    flex: 1;
}

.notification-title {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
}

.notification-description {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
}

.notification-time {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
}

/* AI Features */
.ai-suggestions {
    padding: 20px;
    background: #f8f9fa;
    border-radius: var(--border-radius);
}

.ai-suggestion-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: white;
    border-radius: 6px;
    margin-bottom: 10px;
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;
}

.ai-suggestion-item:hover {
    border-color: var(--primary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.ai-confidence {
    font-size: 12px;
    color: var(--primary);
    font-weight: 500;
}

/* Charts */
.chart-container {
    background: white;
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    margin-bottom: 20px;
}

.chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.chart-title {
    font-size: 18px;
    font-weight: 600;
}

/* Page Content */
.page-content {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Login Screen */
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
}

.login-box {
    background: white;
    padding: 40px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 400px;
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-logo {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: white;
}

.login-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
}

.login-subtitle {
    color: #666;
    font-size: 14px;
}

/* Responsive Design */
.mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    padding: 8px;
}

@media (max-width: 768px) {
    .sidebar {
        transform: translateX(-100%);
    }

    .sidebar.mobile-open {
        transform: translateX(0);
    }

    .main-content {
        margin-left: 0;
    }

    .header {
        padding: 10px 15px;
    }

    .mobile-menu-toggle {
        display: block;
    }

    .search-bar {
        max-width: none;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .ai-chat-container {
        width: calc(100% - 20px);
        height: calc(100vh - 40px);
        bottom: 10px;
        right: 10px;
        left: 10px;
    }

    .table-actions {
        flex-direction: column;
        width: 100%;
    }

    .table-actions .btn {
        width: 100%;
        justify-content: center;
    }

    .portal-status {
        flex-direction: column;
    }

    .header-right {
        gap: 10px;
    }

    .user-profile span {
        display: none;
    }

    .content {
        padding: 15px;
    }

    table {
        font-size: 14px;
    }

    th, td {
        padding: 8px 12px;
    }
}

@media (max-width: 480px) {
    .stat-card {
        padding: 16px;
    }

    .stat-value {
        font-size: 24px;
    }

    .modal {
        width: 95%;
        margin: 10px;
    }

    .notifications-panel {
        right: 10px;
        left: 10px;
        width: auto;
    }
}

/* AI Assistant FAB */
.ai-fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    z-index: 1000;
}

.ai-fab:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 32px rgba(25, 118, 210, 0.4);
    background: var(--primary-dark);
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --light: #1a1a1a;
        --dark: #f5f5f5;
    }

    body {
        background: #121212;
        color: #e0e0e0;
    }

    .sidebar {
        background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
    }

    .header,
    .stat-card,
    .data-table,
    .form-section,
    .modal,
    .ai-chat-container,
    .analytics-card,
    .team-member-card {
        background: #1e1e1e;
        color: #e0e0e0;
    }

    .form-input,
    .form-select,
    .form-textarea {
        background: #2a2a2a;
        border-color: #3a3a3a;
        color: #e0e0e0;
    }

    .table-header,
    .modal-header,
    .modal-footer {
        background: #2a2a2a;
    }

    tbody tr:hover {
        background: #2a2a2a;
    }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);