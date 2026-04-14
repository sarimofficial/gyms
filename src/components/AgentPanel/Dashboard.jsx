// src/components/AgentPanel/Dashboard.jsx
import React, { useState } from "react";
import "@fontsource/dm-sans"; // ← ADDED DM SANS FONT
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import SubscriptionManagementAgent from "./SubscriptionManagementAgent.jsx";
import LeadManagementAgent from "./LeadManagementAgent.jsx";

export default function AgentDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  const toggleSidebar = () => setIsOpen(!isOpen);

  /* ------------------ DATA ------------------ */
  const leadData = [
    { name: "Week 01", value: 380 },
    { name: "Week 02", value: 300 },
    { name: "Week 03", value: 450 },
    { name: "Week 04", value: 390 },
  ];

  const activityData = [
    { name: "Converted", value: 50, color: "#4E79F6" },
    { name: "Unconverted", value: 20, color: "#F67E7E" },
    { name: "Pending", value: 30, color: "#F6D67E" },
  ];

  const countyData = [
    { name: "Brevard", value: 700 },
    { name: "Duval", value: 1200 },
    { name: "Orange", value: 900 },
    { name: "Pinellas", value: 1500 },
    { name: "Hillsborough", value: 2500 },
    { name: "Palm Beach", value: 2100 },
    { name: "Miami-Dade", value: 2800 },
  ];

  return (
    <div className="h-screen w-full flex bg-[#F1F3F8] overflow-hidden font-['DM Sans',sans-serif]">
      {/* ---------------- Sidebar ---------------- */}
      <aside
        className={`
          bg-[#1A1A1A] text-white 
          flex flex-col shadow-lg
          transition-all duration-300 
          overflow-hidden
          ${isOpen ? "w-[260px] px-5 pt-6 pb-4" : "w-0 px-0 pt-6 pb-4"}
        `}
      >
        {/* LOGO */}
        {isOpen && (
          <div className="w-full py-2 flex flex-col items-center">
            <img
              src="/assets/agentpanelimages/floridalogo.png"
              className="w-16 h-11 mb-3"
            />

            <h2 className="text-white text-[16px] tracking-wide text-center font-semibold leading-tight">
              Florida Insurance Estimator
            </h2>

            <div className="w-[330px] h-[2px] bg-white/75 mt-6 mr-17"></div>
          </div>
        )}

        {/* MENU */}
        <nav
          className={`flex flex-col gap-4 mt-10 ${
            isOpen ? "px-1" : "px-0 items-center"
          }`}
        >
          <MenuItem
            text="Dashboard"
            icon="https://img.icons8.com/ios-filled/24/ffffff/combo-chart.png"
            active={activeSection === "dashboard"}
            isOpen={isOpen}
            onClick={() => setActiveSection("dashboard")}
          />

          <MenuItem
            text="SubscriptionManagement"
            icon="https://img.icons8.com/ios-filled/24/ffffff/online-payment-.png"
            active={activeSection === "subscription"}
            isOpen={isOpen}
            onClick={() => setActiveSection("subscription")}
          />

          <MenuItem
            text="Leads Management"
            icon="https://img.icons8.com/ios-filled/24/ffffff/conference-call.png"
            active={activeSection === "leads"}
            isOpen={isOpen}
            onClick={() => setActiveSection("leads")}
          />

          <MenuItem
            text="Payment & Billing"
            icon="https://img.icons8.com/ios-filled/24/ffffff/wallet.png"
            active={activeSection === "billing"}
            isOpen={isOpen}
            onClick={() => setActiveSection("billing")}
          />
        </nav>

        {/* LANGUAGE */}
        {isOpen && (
          <div className="mt-auto flex items-center gap-2 text-xs text-gray-300 pt-8 pl-5">
            <img
              src="/assets/agentpanelimages/ukflag.png"
              className="w-5 h-5"
            />
            <span>English</span>
          </div>
        )}
      </aside>

      {/* ---------------- Main Content ---------------- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-[72px] flex items-center justify-between px-8 border-b border-[#E5E7EB] bg-[#F9FAFB]">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-200/60"
            >
              <img
                src="/assets/agentpanelimages/sidebaricon.png"
                className="w-5 h-5"
                alt="Toggle"
              />
            </button>

            {/* Search */}
            <div className="relative w-[350px] max-w-[420px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                <img
                  src="https://img.icons8.com/ios-glyphs/18/9ca3af/search--v1.png"
                  alt="Search"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E5E7EB]
                text-sm placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 rounded-full hover:bg-gray-200/60">
              <img
                src="/assets/agentpanelimages/notification.png"
                className="w-5 h-5"
                alt="Notifications"
              />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="flex items-center gap-3">
              <img
                src="/assets/agentpanelimages/avatar.png"
                className="w-9 h-9 rounded-full border border-gray-200 object-cover"
                alt="User"
              />
              <div className="leading-tight">
                <p className="font-semibold text-[15px] text-gray-800">
                  Alex Smith
                </p>
                <p className="text-[11px] text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* SWITCH PAGE BASED ON activeSection */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 pt-6 space-y-6">
          {activeSection === "dashboard" && (
            <>
              {/* Stats */}
              <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                  title="Total Spent (Platform)"
                  value="$50K"
                  icon="https://img.icons8.com/fluency-systems-filled/32/2563eb/cash.png"
                />
                <StatCard
                  title="Assigned Leads"
                  value="110"
                  icon="https://img.icons8.com/fluency-systems-filled/32/2563eb/people-working-together.png"
                />
                <StatCard
                  title="Active Counties"
                  value="13"
                  icon="https://img.icons8.com/fluency-systems-filled/32/2563eb/marker.png"
                />
                <StatCard
                  title="Leads Converted"
                  value="80"
                  subtext="+25% This Month"
                  icon="https://img.icons8.com/fluency-systems-filled/32/16a34a/ok.png"
                />
              </section>

              {/* Charts */}
              <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <ChartCard title="Lead Conversion">
                  <ResponsiveContainer width="100%" height={230}>
                    <BarChart data={leadData} barSize={36}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#4F46E5"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>

                <ChartCard title="Activity Summary">
                  <div className="flex h-[230px]">
                    <div className="flex-1">
                      <ResponsiveContainer>
                        <PieChart>
                          <Pie
                            data={activityData}
                            dataKey="value"
                            innerRadius={55}
                            outerRadius={80}
                            paddingAngle={4}
                          >
                            {activityData.map((item, i) => (
                              <Cell key={i} fill={item.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </ChartCard>

                <ChartCard title="County Overview">
                  <ResponsiveContainer width="100%" height={230}>
                    <LineChart data={countyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#A855F7"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartCard>
              </section>
            </>
          )}

          {activeSection === "subscription" && (
            <SubscriptionManagementAgent />
          )}

          {activeSection === "leads" && <LeadManagementAgent />}
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------
   REUSABLE COMPONENTS
--------------------------------------- */

function MenuItem({ text, active, isOpen, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-2 
        py-2.5 px-2 rounded-xl transition-all duration-200

        ${active 
          ? "bg-[#4BA3FF] text-white" 
          : "text-[#8B8B8B] hover:bg-[#2A2A2A]"
        }
      `}
    >
      <img
        src={icon}
        className={`
          w-5 h-5 transition-all 
          ${active ? "brightness-0 invert" : "opacity-50"}
        `}
      />

      {isOpen && (
        <span
          className={`
            text-[15px] font-medium 
            ${active ? "text-white" : "text-[#8B8E95]"}
          `}
        >
          {text}
        </span>
      )}
    </button>
  );
}

function StatCard({ title, value, icon, subtext }) {
  return (
    <div className="bg-white rounded-xl px-5 py-4 shadow-sm border border-[#E5E7EB] flex items-center">
      <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center mr-4">
        <img src={icon} className="w-5 h-5" alt={title} />
      </div>
      <div>
        <p className="text-[11px] uppercase text-gray-500">{title}</p>
        <p className="text-[22px] font-semibold">{value}</p>
        {subtext && (
          <p className="text-[11px] text-green-600">{subtext}</p>
        )}
      </div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-[#E5E7EB]">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold text-[14px]">{title}</h3>
        <button className="text-[11px] text-gray-500">Monthly ▼</button>
      </div>
      {children}
    </div>
  );
}

function TableCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-[#E5E7EB]">
      <h3 className="font-semibold text-[14px] mb-3">{title}</h3>
      <table className="w-full text-[12px]">{children}</table>
    </div>
  );
}

function TableHead({ columns }) {
  return (
    <thead>
      <tr className="border-b text-[11px] uppercase text-gray-500">
        {columns.map((c, i) => (
          <th key={i} className="py-2 text-left">
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow({ data }) {
  return (
    <tr className="border-b hover:bg-[#F9FAFB]">
      {data.map((cell, i) => (
        <td key={i} className="py-2.5">
          {cell}
        </td>
      ))}
    </tr>
  );
}

function StatusBadge({ text, color }) {
  const map = {
    green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    blue: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    yellow: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[11px] font-medium ${map[color]}`}
    >
      {text}
    </span>
  );
}
