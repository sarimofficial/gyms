// src/components/AdminDashboard.jsx

import React, { useState } from "react";
import {
  Menu,
  ChevronDown,
  Bell,
  Home,
  UserSquare2,
  UserCircle2,
  Route,
  FileText,
  Headset,
  MapPinned,
  BadgeDollarSign,
  Wallet,
  Eye,
} from "lucide-react";

import ConsumerManagement from "./ConsumerManagement";
import AgentManagement from "./AgentManagement";
import AgentDetailed from "./AgentDetailed";
import LeadTracking from "./LeadTracking";
import ContentManagementLegal from "./ContentManagementLegal";
import CountyManagement from "./CountyManagement";
import SubscriptionManagement from "./SubscriptionManagement";
import FinancialOperations from "./FinancialOperations";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedAgent, setSelectedAgent] = useState(null);

  const revenueData = [
    { month: "Jan", value: 800 },
    { month: "Feb", value: 650 },
    { month: "Mar", value: 1400 },
    { month: "Apr", value: 1300 },
    { month: "May", value: 1950 },
    { month: "Jun", value: 2550 },
    { month: "Jul", value: 2100 },
    { month: "Aug", value: 1600 },
    { month: "Sep", value: 1750 },
    { month: "Oct", value: 1900 },
  ];

  const leadsData = [
    { week: "Week 01", inProgress: 2500, completed: 1800 },
    { week: "Week 02", inProgress: 3500, completed: 2600 },
    { week: "Week 03", inProgress: 3000, completed: 2300 },
    { week: "Week 04", inProgress: 3800, completed: 2700 },
  ];

  const conversionData = [
    { week: "Week 01", rate: 25 },
    { week: "Week 02", rate: 40 },
    { week: "Week 03", rate: 70 },
    { week: "Week 04", rate: 55 },
  ];

  const signupData = [
    { name: "Agents", value: 1300 },
    { name: "Consumers", value: 7000 },
  ];
  const SIGNUP_COLORS = ["#1279DE", "#EAEAEA"];

  const NavItem = ({ icon: Icon, label, section }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] transition
        ${
          activeSection === section
            ? "bg-[#2A6EEA] text-white"
            : "text-white/80 hover:bg-white/10"
        }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  const DashboardHome = () => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-xl border border-gray-200">
        <Stat
          icon="/assets/images/revenueicon.png"
          label="Total Revenue (Platform)"
          value="$150K"
          sub="+25% This Month"
          showDivider={true}
        />
        <Stat
          icon="/assets/images/montlyearningicon.png"
          label="Monthly Earnings"
          value="$1500"
          sub="+25% This Month"
          showDivider={true}
        />
        <Stat
          icon="/assets/images/consumericon.png"
          label="Total Consumers"
          value="15,000"
          showDivider={true}
        />
        <Stat
          icon="/assets/images/agenticon.png"
          label="Total Agents"
          value="5,200"
          showDivider={false}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <ChartCard title="Revenue" subtitle="Year 2025">
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4FC3F7" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#4FC3F7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <Tooltip
                formatter={(v) => [`$${v.toLocaleString()}`, "Revenue"]}
                labelStyle={{ fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2A6EEA"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Leads Tracking" subtitle="Monthly">
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={leadsData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <Tooltip
                formatter={(value, name) => [
                  value.toLocaleString(),
                  name === "completed" ? "Completed" : "In Progress",
                ]}
                labelStyle={{ fontSize: 12 }}
              />
              <Legend />
              <Bar
                dataKey="completed"
                name="Completed"
                fill="#1279DE"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
              <Bar
                dataKey="inProgress"
                name="In Progress"
                fill="#EAEAEA"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Conversion Rate" subtitle="Monthly">
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={conversionData}>
              <defs>
                <linearGradient
                  id="conversionGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#A855F7" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <YAxis
                tickFormatter={(v) => `${v}%`}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <Tooltip
                formatter={(v) => [`${v}%`, "Conversion Rate"]}
                labelStyle={{ fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#A855F7"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <ChartCard title="User Signups" subtitle="Oct">
          <div className="relative h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={signupData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={3}
                >
                  {signupData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={SIGNUP_COLORS[index % SIGNUP_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-900">
                8.5k
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-8 text-xs text-gray-600 mt-2">
            <LegendDot className="bg-[#1279DE]" label="Agents: 1.3k" />
            <LegendDot className="bg-[#D9D9D9]" label="Consumers: 7.0k" />
          </div>
        </ChartCard>

        <div className="xl:col-span-2">
          <ChartCard title="Top Performing Agents" subtitle="Monthly">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <Th>Agent</Th>
                  <Th>County</Th>
                  <Th>Leads Received</Th>
                  <Th>Completed</Th>
                  <Th></Th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Jenna Thompson",
                    "Hillsborough, Pinellas, Pasco",
                    "122",
                    "100",
                  ],
                  ["Daniel Brooks", "Orange, Osceola", "100", "90"],
                  [
                    "Lisa Nguyen",
                    "Palm Beach, Broward, Miami-Dade",
                    "100",
                    "90",
                  ],
                  ["Marcus Rivera", "Polk, Manatee", "100", "90"],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <Td>
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/32?img=${idx + 1}`}
                          className="h-8 w-8 rounded-full"
                          alt=""
                        />
                        <span className="font-medium text-gray-800">
                          {row[0]}
                        </span>
                      </div>
                    </Td>
                    <Td className="text-xs text-gray-600">{row[1]}</Td>
                    <Td>{row[2]} leads</Td>
                    <Td>{row[3]} leads</Td>
                    <Td className="text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-md">
                        <Eye size={16} className="text-gray-500" />
                      </button>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ChartCard>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="h-screen flex bg-[#F5F7FB] overflow-hidden"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      {sidebarOpen && (
        <aside
          className="hidden lg:flex flex-col bg-[#121212] text-white w-64 h-screen fixed top-0 left-0 z-40"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          <div className="px-0 py-8 border-b border-white/80 flex flex-col items-center">
            <img
              src="/assets/images/floridalogo.png"
              className="h-10 mb-4"
            />

            <p className="text-[16px] text-center leading-snug font-medium">
              Florida Insurance <br /> Estimator
            </p>
          </div>

          <nav className="px-3 py-4 flex flex-col gap-4">
            <NavItem icon={Home} label="Dashboard" section="dashboard" />
            <NavItem
              icon={UserSquare2}
              label="Consumer Management"
              section="consumer"
            />
            <NavItem
              icon={UserCircle2}
              label="Agent Management"
              section="agent"
            />
            <NavItem icon={Route} label="Lead Tracking" section="leads" />
            <NavItem
              icon={FileText}
              label="Content Management"
              section="content"
            />
            <NavItem icon={Headset} label="Support" section="support" />
            <NavItem
              icon={MapPinned}
              label="County Management"
              section="county"
            />
            <NavItem
              icon={BadgeDollarSign}
              label="Subscription Management"
              section="subscription"
            />
            <NavItem
              icon={Wallet}
              label="Financial Operations"
              section="financial"
            />
          </nav>

          <div className="mt-auto p-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/80">
              <img
                src="https://flagcdn.com/w20/gb.png"
                className="h-4 rounded-sm"
                alt="lang"
              />
              <span className="text-xs">English</span>
              <ChevronDown size={14} className="text-white/50" />
            </div>
          </div>
        </aside>
      )}

      <div
        className={`flex flex-col flex-1 transition-all ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <header className="sticky top-0 bg-white flex items-center justify-between px-4 lg:px-6 h-14 shadow-sm">
          <div className="flex items-center flex-1">
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>

            <div className="hidden sm:flex flex-1 max-w-xl ml-4">
              <div className="relative w-full">
                <img
                  src="/assets/images/search.png"
                  className="w-4 absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  placeholder="Search"
                  className="w-125 h-9 pl-9 pr-3 rounded-2xl border border-gray-200 text-sm bg-[#F5F6FA]"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={18} />
              <span className="absolute -top-0.5 -right-0.5 bg-[#2A6EEA] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/36?img=15"
                className="h-9 w-9 rounded-full"
              />
              <div className="text-sm leading-tight">
                <p className="font-medium text-gray-900">Alex Smith</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </header>

        <main className="p-6 overflow-y-auto flex-1">
          {activeSection === "dashboard" && <DashboardHome />}
          {activeSection === "consumer" && <ConsumerManagement />}
          {activeSection === "agent" &&
            (selectedAgent ? (
              <AgentDetailed
                agent={selectedAgent}
                onBack={() => setSelectedAgent(null)}
              />
            ) : (
              <AgentManagement
                onViewAgent={(agent) => setSelectedAgent(agent)}
              />
            ))}
          {activeSection === "leads" && <LeadTracking />}
          {activeSection === "content" && <ContentManagementLegal />}
          {activeSection === "county" && <CountyManagement />}
          {activeSection === "subscription" && <SubscriptionManagement />}
          {activeSection === "financial" && <FinancialOperations />}
        </main>
      </div>
    </div>
  );
}

/* ---------- SUBCOMPONENTS ---------- */

const Stat = ({ icon, label, value, sub, showDivider }) => (
  <div className="relative flex items-center gap-4 px-6 py-6">

    {/* ICON WRAPPER – exactly like FIGMA */}
    <div className="h-12 w-12 rounded-full bg-[#ECF5FF] flex items-center justify-center">
      <img
        src={icon}
        className="h-6 w-6 object-contain"
        alt={label}
      />
    </div>

    {/* TEXT */}
    <div className="flex flex-col leading-tight">
      <p className="text-[12px] text-gray-500">{label}</p>
      <p className="text-[22px] font-semibold">{value}</p>

      {sub && (
        <p className="text-[11px] text-[#2A6EEA] font-medium mt-0.5">{sub}</p>
      )}
    </div>

    {/* RIGHT DIVIDER */}
    {showDivider && (
      <div className="absolute right-0 top-4 bottom-4 w-px bg-gray-200"></div>
    )}
  </div>
);

const ChartCard = ({ title, subtitle, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
    <div className="flex justify-between mb-3">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
    {children}
  </div>
);

const LegendDot = ({ className, label }) => (
  <div className="flex items-center gap-2">
    <span className={`h-2.5 w-2.5 rounded-full ${className}`} />
    <span>{label}</span>
  </div>
);

const Th = ({ children }) => (
  <th className="text-left font-medium py-2.5 px-3 text-xs uppercase">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="py-2.5 px-3 text-sm text-gray-700">{children}</td>
);
