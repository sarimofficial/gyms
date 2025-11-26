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
} from "recharts";
import { Filter, Search, Eye } from "lucide-react";

export default function FinancialOperations() {
  /* --------------------- Dummy Chart Data ---------------------- */
  const revenueData = [
    { county: "Miami-Dade", last: 3000, this: 5000 },
    { county: "Broward", last: 2000, this: 3500 },
    { county: "Palm Beach", last: 2500, this: 4500 },
    { county: "Hillsborough", last: 1800, this: 3200 },
    { county: "Orange", last: 2200, this: 3300 },
    { county: "Duval", last: 2000, this: 3100 },
    { county: "Pinellas", last: 2400, this: 2800 },
  ];

  const consumerData = [
    { county: "Broward", value: 800 },
    { county: "Duval", value: 600 },
    { county: "Orange", value: 900 },
    { county: "Pinellas", value: 1200 },
    { county: "Hillsborough", value: 1800 },
    { county: "Palm Beach", value: 2600 },
    { county: "Miami-Dade", value: 3000 },
    { county: "Broward", value: 2000 },
    { county: "Polk", value: 1400 },
    { county: "Lee", value: 1700 },
  ];

  const agentSubscriptions = [
    {
      transaction: "TXN-10341",
      img: "https://i.pravatar.cc/40?img=11",
      agent: "Amanda Greene",
      county: "Miami-Dade",
      price: 1000,
      status: "Paid",
    },
    {
      transaction: "TXN-10342",
      img: "https://i.pravatar.cc/40?img=12",
      agent: "Amanda Greene",
      county: "Broward",
      price: 1000,
      status: "Paid",
    },
    {
      transaction: "TXN-10343",
      img: "https://i.pravatar.cc/40?img=13",
      agent: "Brian Douglas",
      county: "Palm Beach",
      price: 1000,
      status: "Pending",
    },
    {
      transaction: "TXN-10344",
      img: "https://i.pravatar.cc/40?img=14",
      agent: "John Carter",
      county: "Miami-Dade",
      price: 1000,
      status: "Paid",
    },
    {
      transaction: "TXN-10345",
      img: "https://i.pravatar.cc/40?img=15",
      agent: "John Carter",
      county: "Hillsborough",
      price: 1000,
      status: "Paid",
    },
    {
      transaction: "TXN-10346",
      img: "https://i.pravatar.cc/40?img=16",
      agent: "Sofia Martinez",
      county: "Broward",
      price: 1000,
      status: "Pending",
    },
  ];

  return (
    <div className="p-6">
      {/* PAGE TITLE (top left, small like Figma) */}
      <p className="text-[13px] font-medium text-[#154270] mb-4">
        Financial <span className="text-[#59AC78]">Operations</span>
      </p>

      {/* ---- STATS CARDS ---- */}
      <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm flex">

  {/* STAT 1 */}
  <div className="flex flex-1 items-center gap-4 px-6 py-6 relative">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FF]">
      <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" className="h-6 w-6" />
    </div>

    <div className="leading-tight">
      <p className="text-[12px] text-[#6B7280] mb-0.5">Total Revenue (Platform)</p>
      <p className="text-[22px] font-semibold text-[#111827]">$150K</p>
      <p className="text-[11px] text-[#2A6EEA] mt-0.5">+2.5% This Month</p>
    </div>

    {/* Divider */}
    <div className="absolute right-0 top-3 bottom-3 w-px bg-[#E3EDF7]" />
  </div>

  {/* STAT 2 */}
  <div className="flex flex-1 items-center gap-4 px-6 py-6 relative">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FF]">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" className="h-6 w-6" />
    </div>

    <div className="leading-tight">
      <p className="text-[12px] text-[#6B7280] mb-0.5">Revenue Growth</p>
      <p className="text-[22px] font-semibold text-[#111827]">65%</p>
      <p className="text-[11px] text-[#2A6EEA] mt-0.5">+7.25% This Month</p>
    </div>

    <div className="absolute right-0 top-3 bottom-3 w-px bg-[#E3EDF7]" />
  </div>

  {/* STAT 3 */}
  <div className="flex flex-1 items-center gap-4 px-6 py-6 relative">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FF]">
      <img src="https://cdn-icons-png.flaticon.com/512/189/189689.png" className="h-6 w-6" />
    </div>

    <div className="leading-tight">
      <p className="text-[12px] text-[#6B7280] mb-0.5">Pending Payments</p>
      <p className="text-[22px] font-semibold text-[#111827]">$ 15,000</p>
    </div>

    <div className="absolute right-0 top-3 bottom-3 w-px bg-[#E3EDF7]" />
  </div>

  {/* STAT 4 */}
  <div className="flex flex-1 items-center gap-4 px-6 py-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FF]">
      <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="h-6 w-6" />
    </div>

    <div className="leading-tight">
      <p className="text-[12px] text-[#6B7280] mb-0.5">Active Subscription</p>
      <p className="text-[22px] font-semibold text-[#111827]">166</p>
    </div>
  </div>

</div>

      {/* ---- CHARTS GRID ---- */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Revenue by County */}
        <ChartCard title="Revenue by County" rightLabel="November">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={revenueData} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5EDF7" />
              <XAxis
                dataKey="county"
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
                contentStyle={{
                  borderRadius: 8,
                  borderColor: "#E5EDF7",
                  fontSize: 11,
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
                iconType="circle"
              />
              <Bar dataKey="last" name="Last Month" radius={[4, 4, 0, 0]} fill="#A5B4FC" />
              <Bar dataKey="this" name="This Month" radius={[4, 4, 0, 0]} fill="#2A6EEA" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Consumers by County */}
        <ChartCard title="Consumers by County" rightLabel="Month">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={consumerData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5EDF7" />
              <XAxis
                dataKey="county"
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
                contentStyle={{
                  borderRadius: 8,
                  borderColor: "#E5EDF7",
                  fontSize: 11,
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2A6EEA"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ---- AGENT SUBSCRIPTIONS ---- */}
      <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm mt-6">
        {/* Header row inside card */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-[#E3EDF7]">
          <h3 className="text-[15px] font-semibold text-[#1F2933]">
            Agent Subscriptions
          </h3>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <input
                className="h-8 w-40 rounded-[6px] border border-[#C8D2DF] pl-7 pr-2 text-xs text-[#111827] placeholder-[#9AA6B2] focus:outline-none"
                placeholder="Search"
              />
              <Search
                size={13}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-[#9AA6B2]"
              />
            </div>

            {/* Filter button */}
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-white border border-[#C8D2DF] hover:bg-gray-50">
              <Filter size={14} className="text-[#2A6EEA]" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-5 pb-4">
          <table className="w-full text-sm border-separate">
            <thead>
              <tr className="h-11 bg-[#EDF6FF] text-[12px] text-[#6B7A8C]">
                <Th>Transaction ID</Th>
                <Th>Agent</Th>
                <Th>County</Th>
                <Th>Price / Month</Th>
                <Th>Payment Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {agentSubscriptions.map((row) => (
                <tr
                  key={row.transaction}
                  className="h-[64px] border-b border-[#EEF2F7] hover:bg-[#FAFCFF]"
                >
                  {/* Transaction ID */}
                  <Td>{row.transaction}</Td>

                  {/* Agent with avatar */}
                  <Td>
                    <div className="flex items-center gap-3">
                      <img
                        src={row.img}
                        alt={row.agent}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="text-[13px] text-[#1F2937]">
                        {row.agent}
                      </span>
                    </div>
                  </Td>

                  {/* County */}
                  <Td>{row.county}</Td>

                  {/* Price */}
                  <Td>$ {row.price}</Td>

                  {/* Payment status badge */}
                  <Td>
                    {row.status === "Paid" ? (
                      <span className="inline-flex items-center justify-center rounded-[6px] border border-[#B4E4C3] bg-[#E7F7EC] px-5 py-1 text-[11px] text-[#2F9E5B]">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-[6px] border border-[#FFD9A0] bg-[#FFF4E5] px-5 py-1 text-[11px] text-[#D38B09]">
                        Pending
                      </span>
                    )}
                  </Td>

                  {/* Actions eye icon */}
                  <Td>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#B4E4C3] bg-[#E7F7EC] text-[#36A36A] hover:bg-[#DFF2E5]">
                      <Eye size={15} />
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Reusable Components -------------------- */

const ChartCard = ({ title, rightLabel, children }) => (
  <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm px-5 py-4">
    <div className="mb-3 flex items-center justify-between">
      <div>
        <p className="text-[13px] font-semibold text-[#1F2933]">{title}</p>
      </div>
      <div className="flex items-center gap-1 text-[11px] text-[#6B7280]">
        <span>{rightLabel}</span>
        <span className="text-xs leading-none">▾</span>
      </div>
    </div>
    {children}
  </div>
);

/* table header with tiny sort icon (like Figma) */
const Th = ({ children }) => (
  <th className="px-3 text-left font-medium">
    <div className="flex items-center gap-2">
      {children}
      <img
        src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
        className="w-2 opacity-40"
        alt="sort"
      />
    </div>
  </th>
);

const Td = ({ children }) => (
  <td className="px-3 text-[13px] text-[#4B5563] align-middle">{children}</td>
);

/* Stats card with icon circle on the left, text block on right */
const StatCard = ({ icon, title, value, sub }) => (
  <div className="bg-white border border-[#E3EDF7] rounded-[14px] px-5 py-4 shadow-sm flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF3FF]">
      <img src={icon} alt="" className="h-6 w-6 object-contain" />
    </div>

    <div className="leading-tight">
      <p className="text-[11px] text-[#6B7280] mb-1">{title}</p>
      <p className="text-[20px] font-semibold text-[#111827]">{value}</p>
      {sub && <p className="mt-1 text-[10px] text-[#6B7280]">{sub}</p>}
    </div>
  </div>
);
