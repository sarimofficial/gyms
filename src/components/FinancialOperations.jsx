// src/components/FinancialOperations.jsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from "recharts";
import { Filter, Search, Eye } from "lucide-react";

/* --------------------- DATA ---------------------- */

const revenueData = [
  { county: "Miami-Dade", last: 3800, this: 2000 },
  { county: "Broward", last: 2400, this: 3800 },
  { county: "Palm Beach", last: 2800, this: 3100 },
  { county: "Hillsborough", last: 4300, this: 2600 },
  { county: "Orange", last: 3100, this: 2600 },
  { county: "Duval", last: 2700, this: 3400 },
  { county: "Pinellas", last: 3600, this: 3200 },
];

const consumerData = [
  { county: "Brevard", value: 900 },
  { county: "Duval", value: 600 },
  { county: "Orange", value: 700 },
  { county: "Pinellas", value: 1500 },
  { county: "Hillsborough", value: 1400 },
  { county: "Palm Beach", value: 2000 },
  { county: "Miami-Dade", value: 2700 },
  { county: "Broward", value: 1800 },
  { county: "Polk", value: 1300 },
  { county: "Lee", value: 1600 },
];

const agentSubscriptions = [
  { id: "TXN-10341", img: "https://i.pravatar.cc/40?img=11", name: "Amanda Greene", county: "Miami-Dade", price: 1000, status: "Paid" },
  { id: "TXN-10342", img: "https://i.pravatar.cc/40?img=12", name: "Amanda Greene", county: "Broward", price: 1000, status: "Paid" },
  { id: "TXN-10343", img: "https://i.pravatar.cc/40?img=13", name: "Brian Douglas", county: "Palm Beach", price: 1000, status: "Pending" },
  { id: "TXN-10344", img: "https://i.pravatar.cc/40?img=14", name: "John Carter", county: "Miami-Dade", price: 1000, status: "Paid" },
  { id: "TXN-10345", img: "https://i.pravatar.cc/40?img=15", name: "John Carter", county: "Hillsborough", price: 1000, status: "Paid" },
  { id: "TXN-10346", img: "https://i.pravatar.cc/40?img=16", name: "Sofia Martinez", county: "Broward", price: 1000, status: "Pending" },
];

export default function FinancialOperations() {
  return (
    <div className="p-6">
      {/* TITLE */}
      <p className="text-[13px] font-medium text-[#154270] mb-4">
        Financial <span className="text-[#59AC78]">Operations</span>
      </p>

      {/* STATS */}
      <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm flex mb-6">
        <Stat icon="1170576" title="Total Revenue (Platform)" value="$150K" sub="+2.5% This Month" divider />
        <Stat icon="1828919" title="Revenue Growth" value="65%" sub="+2.5% This Month" divider />
        <Stat icon="189689" title="Pending Payments" value="$15,000" divider />
        <Stat icon="847969" title="Active Subscription" value="166" />
      </div>

      {/* CHARTS */}
      <div className="grid xl:grid-cols-2 gap-6">
        {/* Revenue */}
        <ChartCard title="Revenue by County" right="November">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueData} barSize={16}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6EEF7" />
              <XAxis dataKey="county" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend iconType="circle" />
              <Bar dataKey="last" name="Last Month" fill="#1F3C88" radius={[4, 4, 0, 0]} />
              <Bar dataKey="this" name="This Month" fill="#1CC9A4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Consumers */}
        <ChartCard title="Consumers by County" right="Month">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={consumerData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E6EEF7" />
              <XAxis dataKey="county" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3BA3FF"
                fill="rgba(59,163,255,0.2)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm mt-6">
        <div className="px-5 py-4 flex justify-between">
          <h3 className="font-semibold text-[15px]">Agent Subscriptions</h3>
          <div className="flex gap-2">
            <div className="relative">
              <Search size={14} className="absolute left-2 top-2 text-gray-400" />
              <input className="h-8 pl-7 pr-2 text-xs border rounded" placeholder="Search" />
            </div>
            <button className="h-8 w-8 border rounded flex items-center justify-center">
              <Filter size={14} />
            </button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-[#EDF6FF] text-xs">
            <tr>
              <Th>Transaction ID</Th>
              <Th>Agent</Th>
              <Th>County</Th>
              <Th>Price / Month</Th>
              <Th>Payment Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {agentSubscriptions.map(r => (
              <tr key={r.id} className="h-[64px]">
                <Td>{r.id}</Td>
                <Td className="flex items-center gap-3">
                  <img src={r.img} className="h-8 w-8 rounded-full" />
                  {r.name}
                </Td>
                <Td>{r.county}</Td>
                <Td>$ {r.price}</Td>
                <Td>
                  <span className={`px-4 py-1 rounded text-xs border ${
                    r.status === "Paid"
                      ? "bg-[#E7F7EC] text-[#2F9E5B] border-[#B4E4C3]"
                      : "bg-[#FFF4E5] text-[#D38B09] border-[#FFD9A0]"
                  }`}>
                    {r.status}
                  </span>
                </Td>
                <Td>
                  <button className="h-8 w-8 rounded-full bg-[#E7F7EC] text-[#36A36A] flex items-center justify-center">
                    <Eye size={14} />
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const Stat = ({ icon, title, value, sub, divider }) => (
  <div className="flex-1 flex gap-4 px-6 py-6 relative">
    <div className="h-12 w-12 bg-[#EAF3FF] rounded-full flex items-center justify-center">
      <img src={`https://cdn-icons-png.flaticon.com/512/${icon}.png`} className="h-6" />
    </div>
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-[22px] font-semibold">{value}</p>
      {sub && <p className="text-[11px] text-blue-600">{sub}</p>}
    </div>
    {divider && <div className="absolute right-0 top-4 bottom-4 w-px bg-[#E3EDF7]" />}
  </div>
);

const ChartCard = ({ title, right, children }) => (
  <div className="bg-white rounded-[14px] p-5">
    <div className="flex justify-between mb-3 text-xs">
      <span className="font-semibold">{title}</span>
      <span>{right} ▾</span>
    </div>
    {children}
  </div>
);

const Th = ({ children }) => (
  <th className="px-4 py-3 text-left font-medium">{children}</th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-4 text-[13px] ${className}`}>{children}</td>
);
