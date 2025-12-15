import React, { useState, useEffect } from "react";

export default function SubscriptionManagement() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    setSubscriptions([
      { id: 1, agent: "Amanda Greene", img: "https://i.pravatar.cc/40?img=12", county: "Miami-Dade", price: 1000, status: "Paid" },
      { id: 2, agent: "Amanda Greene", img: "https://i.pravatar.cc/40?img=14", county: "Broward", price: 1000, status: "Paid" },
      { id: 3, agent: "Brian Douglas", img: "https://i.pravatar.cc/40?img=16", county: "Palm Beach", price: 1000, status: "Pending" },
      { id: 4, agent: "John Carter", img: "https://i.pravatar.cc/40?img=18", county: "Miami-Dade", price: 1000, status: "Paid" },
      { id: 5, agent: "John Carter", img: "https://i.pravatar.cc/40?img=20", county: "Hillsborough", price: 1000, status: "Paid" },
      { id: 6, agent: "Sofia Martinez", img: "https://i.pravatar.cc/40?img=22", county: "Broward", price: 1000, status: "Pending" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white px-8 py-10">

      {/* Title */}
      <h2 className="text-[15px] font-medium text-[#1D4C37] mb-6">
        Subscription <span className="font-semibold">Management</span>
      </h2>

      {/* Card */}
      <div className="bg-white border border-gray-300 rounded-xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[17px] font-semibold text-gray-800">
            Agent Subscriptions
          </h3>

          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-40 h-[34px] pl-9 pr-3 text-sm border border-gray-300 rounded-full 
                           placeholder-gray-400 focus:outline-none"
              />

              <svg
                className="absolute left-3 top-[9px] w-4 h-4 text-gray-400"
                fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.3-4.3M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" />
              </svg>
            </div>

            {/* Filter Button */}
            <button className="w-[34px] h-[34px] border border-gray-300 bg-white rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#EDF6FF] text-gray-600 text-[13px] h-12 font-semibold">
                <Th>S No.</Th>
                <Th>Agent</Th>
                <Th>County</Th>
                <Th>Price / Month</Th>
                <Th>Subscription Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {subscriptions.map((sub, index) => (
                <tr key={sub.id} className="h-14 border-b border-gray-200">

                  {/* S No */}
                  <Td className="text-center">{index + 1}</Td>

                  {/* Agent */}
                  <Td>
                    <div className="flex items-center gap-3">
                      <img src={sub.img} className="w-10 h-10 rounded-full" />
                      <span className="text-[14px] font-medium text-gray-800">
                        {sub.agent}
                      </span>
                    </div>
                  </Td>

                  {/* County */}
                  <Td className="text-[14px] text-gray-700">{sub.county}</Td>

                  {/* Price */}
                  <Td className="font-semibold text-gray-900 text-[14px]">
                    ${sub.price.toLocaleString()}
                  </Td>

                  {/* Status */}
                  <Td>
                    {sub.status === "Paid" ? (
                      <span className="px-3 py-[3px] text-xs font-medium bg-green-100 text-green-700 border border-green-300 rounded-full">
                        Paid
                      </span>
                    ) : (
                      <span className="px-3 py-[3px] text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-full">
                        Pending
                      </span>
                    )}
                  </Td>

                  {/* Actions */}
                  <Td>
                    <button className="p-1 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.4-9.4a2 2 0 112.8 2.8L11.8 15H9v-2.8l8.6-8.6z"
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

/* Header Cell */
const Th = ({ children }) => (
  <th className="px-6 text-left">
    <div className="flex items-center gap-1">
      {children}

      {/* Sort Arrow */}
      <svg className="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l4-4 4 4M8 15l4 4 4-4" />
      </svg>
    </div>
  </th>
);

/* Data Cell */
const Td = ({ children, className = "" }) => (
  <td className={`px-6 text-[14px] text-gray-700 ${className}`}>{children}</td>
);
