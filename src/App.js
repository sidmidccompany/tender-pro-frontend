// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import TenderManagement from "./components/TenderManagement";
// import GemBids from "./components/GemBids";
// import PortalSync from "./components/PortalSync";
// import AIAnalytics from "./components/AIAnalytics";
// import TeamWorkspace from "./components/TeamWorkspace";
// import Companies from "./components/Companies";
// import Departments from "./components/Departments";
// import UsersAndRoles from "./components/UsersAndRoles";
// import DocumentManagement from "./components/DocumentManagement";
// import SettingsApp from "./components/SettingsApp";
// import AIChat from "./components/AIChat";
// import LoginPage from "./components/LoginPage";
// import OCRProcessing from "./components/OCRProcessing";
// import PredictiveAnalysis from "./components/PredictiveAnalysiss";
// import NotificationsPanel from "./components/NotificationsPanel";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [tenders, setTenders] = useState([]);

//   useEffect(() => {
//     const authLocal = localStorage.getItem("authenticated");
//     const authSession = sessionStorage.getItem("authenticated");
//     if (authLocal || authSession) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogin = (email, password, rememberMe) => {
//     if (email === "admin@dawell.com" && password === "password123") {
//       if (rememberMe) {
//         localStorage.setItem("authenticated", "true");
//       } else {
//         sessionStorage.setItem("authenticated", "true");
//       }
//       setIsAuthenticated(true);
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authenticated");
//     sessionStorage.removeItem("authenticated");
//     setIsAuthenticated(false);
//   };

//   const handleTenderCreated = (newTender) => {
//     setTenders((prev) => [newTender, ...prev]);
//   };

//   return (
//     <Router>
//       {!isAuthenticated ? (
//         <LoginPage onLogin={handleLogin} />
//       ) : (
//         <div className="App">
//           <Sidebar onLogout={handleLogout} />
//           <div
//             className="main-content"
//             style={{
//               backgroundColor: "white",
//               paddingLeft: "10px",
//               paddingRight: "10px",
//             }}
//           >
//             <Header onLogout={handleLogout} />
//             <Routes>
//               <Route path="*" element={<Navigate to="/" />} />
//               <Route path="/" element={<Dashboard tenders={tenders} />} />
//               <Route
//                 path="/tender-management"
//                 element={
//                   <TenderManagement
//                     tenders={tenders}
//                     onTenderCreated={handleTenderCreated}
//                   />
//                 }
//               />
//               <Route path="/gem-bids" element={<GemBids />} />
//               <Route path="/portal-sync" element={<PortalSync />} />
//               <Route path="/ai-analytics" element={<AIAnalytics />} />
//               <Route path="/team-workspace" element={<TeamWorkspace />} />
//               <Route path="/companies" element={<Companies />} />
//               <Route path="/departments" element={<Departments />} />
//               <Route path="/users-roles" element={<UsersAndRoles />} />
//               <Route
//                 path="/document-management"
//                 element={<DocumentManagement />}
//               />
//               <Route path="/settings" element={<SettingsApp />} />
//               <Route path="/ai-chat" element={<AIChat />} />
//               <Route path="/ocr-processing" element={<OCRProcessing />} />
//               <Route
//                 path="/predictive-analysis"
//                 element={<PredictiveAnalysis />}
//               />
//             </Routes>
//           </div>
//         </div>
//       )}
//     </Router>
//   );
// }

// export default App;




// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TenderManagement from "./components/TenderManagement";
import GemBids from "./components/GemBids";
import PortalSync from "./components/PortalSync";
import AIAnalytics from "./components/AIAnalytics";
import TeamWorkspace from "./components/TeamWorkspace";
import Companies from "./components/Companies";
import Departments from "./components/Departments";
import UsersAndRoles from "./components/UsersAndRoles";
import DocumentManagement from "./components/DocumentManagement";
import SettingsApp from "./components/SettingsApp";
import AIChat from "./components/AIChat";
import LoginPage from "./components/LoginPage";
import OCRProcessing from "./components/OCRProcessing";
import PredictiveAnalysis from "./components/PredictiveAnalysiss";
import NotificationsPanel from "./components/NotificationsPanel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user info if needed
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    // Check token presence on app load to persist login
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (token) {
      setIsAuthenticated(true);
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);

  // handleLogin now accepts user object from backend
  const handleLogin = (userData, token, rememberMe) => {
    setIsAuthenticated(true);
    setUser(userData);

    // Store token & user info in localStorage or sessionStorage based on rememberMe
    if (rememberMe) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  const handleTenderCreated = (newTender) => {
    setTenders((prev) => [newTender, ...prev]);
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div className="App">
          <Sidebar onLogout={handleLogout} />
          <div
            className="main-content"
            style={{
              backgroundColor: "white",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Header onLogout={handleLogout} />
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Dashboard tenders={tenders} />} />
              <Route
                path="/tender-management"
                element={
                  <TenderManagement
                    tenders={tenders}
                    onTenderCreated={handleTenderCreated}
                  />
                }
              />
              <Route path="/gem-bids" element={<GemBids />} />
              <Route path="/portal-sync" element={<PortalSync />} />
              <Route path="/ai-analytics" element={<AIAnalytics />} />
              <Route path="/team-workspace" element={<TeamWorkspace />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/users-roles" element={<UsersAndRoles />} />
              <Route path="/document-management" element={<DocumentManagement />} />
              <Route path="/settings" element={<SettingsApp />} />
              <Route path="/ai-chat" element={<AIChat />} />
              <Route path="/ocr-processing" element={<OCRProcessing />} />
              <Route path="/predictive-analysis" element={<PredictiveAnalysis />} />
              <Route path="/notifications" element={<NotificationsPanel />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;

