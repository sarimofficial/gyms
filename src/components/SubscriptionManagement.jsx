// src/components/SubscriptionManagement.jsx
import React, { useState, useEffect } from "react";

export default function SubscriptionManagement() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    setSubscriptions([
      {
        id: 1,
        agent: "Amanda Greene",
        img: "https://i.pravatar.cc/40?img=12",
        county: "Miami-Dade",
        price: 1000,
        status: "Paid",
      },
      {
        id: 2,
        agent: "Amanda Greene",
        img: "https://i.pravatar.cc/40?img=14",
        county: "Broward",
        price: 1000,
        status: "Paid",
      },
      {
        id: 3,
        agent: "Brian Douglas",
        img: "https://i.pravatar.cc/40?img=16",
        county: "Palm Beach",
        price: 1000,
        status: "Pending",
      },
      {
        id: 4,
        agent: "John Carter",
        img: "https://i.pravatar.cc/40?img=18",
        county: "Miami-Dade",
        price: 1000,
        status: "Paid",
      },
      {
        id: 5,
        agent: "John Carter",
        img: "https://i.pravatar.cc/40?img=20",
        county: "Hillsborough",
        price: 1000,
        status: "Paid",
      },
      {
        id: 6,
        agent: "Sofia Martinez",
        img: "https://i.pravatar.cc/40?img=22",
        county: "Broward",
        price: 1000,
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Subscription <span className="text-green-600">Management</span>
      </h2>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Card Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Agent Subscriptions</h3>

          {/* Search + Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
              <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 10h18M3 16h18" />
                <circle cx="8" cy="4" r="2" />
                <circle cx="12" cy="10" r="2" />
                <circle cx="16" cy="16" r="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50 text-gray-600 text-xs font-medium uppercase tracking-wider">
                <Th>S No.</Th>
                <Th>Agent</Th>
                <Th>County</Th>
                <Th>Price / Month</Th>
                <Th>Subscription Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {subscriptions.map((sub, index) => (
                <tr key={sub.id} className="hover:bg-gray-50 transition duration-150 h-16">
                  {/* S No. */}
                  <Td className="text-center font-medium text-gray-700">
                    {index + 1}
                  </Td>

                  {/* Agent */}
                  <Td>
                    <div className="flex items-center gap-3">
                      <img
                        src={sub.img}
                        alt={sub.agent}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                      />
                      <span className="font-medium text-gray-900">{sub.agent}</span>
                    </div>
                  </Td>

                  {/* County */}
                  <Td className="text-gray-700">{sub.county}</Td>

                  {/* Price */}
                  <Td className="font-semibold text-gray-900">${sub.price.toLocaleString()}</Td>

                  {/* Status Badge */}
                  <Td>
                    {sub.status === "Paid" ? (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-300">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300">
                        Pending
                      </span>
                    )}
                  </Td>

                  {/* Actions */}
                  <Td>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
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

// Reusable Table Components
const Th = ({ children }) => (
  <th className="px-6 py-4 text-left font-medium">
    <div className="flex items-center gap-2">
      {children}
      <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    </div>
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-6 py-4 text-sm ${className}`}>{children}</td>
);