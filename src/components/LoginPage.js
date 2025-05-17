// // src/components/LoginPage.js
// import React, { useState } from "react";
// import "./CSS/AllCss";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   onLogin(email, password, rememberMe);
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         // backend URL
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(errorData.message || "Login failed");
//         setLoading(false);
//         return;
//       }

//       const data = await response.json();

//       if (rememberMe) {
//         localStorage.setItem("token", data.token);
//       } else {
//         sessionStorage.setItem("token", data.token);
//       }

//       onLogin(data.user); 
//       navigate("/");

//     } catch (error) {
//       alert("Something went wrong. Please try again later.");
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-header">
//           <div className="login-logo">🏛️</div>
//           <h1 className="login-title">Dawell Tender Pro</h1>
//           <p className="login-subtitle">AI-Powered Tender Management System</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className="form-input"
//               placeholder="admin@dawell.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-input"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               Remember me
//             </label>
//           </div>
//           {/* <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
//             Login to Dashboard
//           </button> */}
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{ width: "100%" }}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login to Dashboard"}
//           </button>
//         </form>
//         <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
//           Demo credentials: admin@dawell.com / password123
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// src/components/LoginPage.js
// import React, { useState } from "react";
// import "./CSS/AllCss";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Login response:", data);

//       if (!data.token) {
//         alert(data.message || "Invalid credentials. Please try again.");
//         setLoading(false);
//         return;
//       }

//       // Call parent handler with user and token
//       onLogin(data.user, data.token, rememberMe);

//       navigate("/");

//     } catch (error) {
//       alert("Something went wrong. Please try again later.");
//       console.error(error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-header">
//           <div className="login-logo">🏛️</div>
//           <h1 className="login-title">Dawell Tender Pro</h1>
//           <p className="login-subtitle">AI-Powered Tender Management System</p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email Address</label>
//             <input
//               type="email"
//               className="form-input"
//               placeholder="admin@dawell.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-input"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={rememberMe}
//                 onChange={(e) => setRememberMe(e.target.checked)}
//               />
//               Remember me
//             </label>
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{ width: "100%" }}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login to Dashboard"}
//           </button>
//         </form>
//         <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
//           Demo credentials: admin@dawell.com / password123
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import React, { useState } from "react";
import "./CSS/AllCss";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check demo credentials directly
    if (email === "admin@dawell.com" && password === "password123") {
      const demoUser = { email: "admin@dawell.com", name: "Demo User" }; // Replace with actual demo user data if needed
      const token = "demo-token"; // A placeholder token

      // Store token in localStorage or sessionStorage based on 'rememberMe'
      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      // Call parent handler with user and token
      onLogin(demoUser, token, rememberMe);
      navigate("/"); // Redirect to dashboard or home page
    } else {
      alert("Invalid credentials. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-logo">🏛️</div>
          <h1 className="login-title">Dawell Tender Pro</h1>
          <p className="login-subtitle">AI-Powered Tender Management System</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="admin@dawell.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login to Dashboard"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          Demo credentials: admin@dawell.com / password123
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
