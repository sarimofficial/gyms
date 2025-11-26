import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Auth
import LoginPanel from "./components/Auth/LoginPanel.jsx";

// Admin Panel
import AdminDashboard from "./components/AdminDashboard.jsx";

// Agent Panel
import AgentLogin from "./components/AgentPanel/Login.jsx";
import AgentDashboard from "./components/AgentPanel/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      {/* MAIN LOGIN */}
      <Route path="/" element={<LoginPanel />} />

      {/* ADMIN PANEL */}
      <Route path="/dashboard" element={<AdminDashboard />} />

      {/* AGENT PANEL */}
      <Route path="/agent/login" element={<AgentLogin />} />
      <Route path="/agent/dashboard" element={<AgentDashboard />} />

      {/* ❌ REMOVED — No need for a separate subscription route
      <Route path="/agent/subscription" element={<SubscriptionManagementAgent />} />
      */}

    </Routes>
  </BrowserRouter>
);
