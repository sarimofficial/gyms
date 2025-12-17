import React, { useEffect, useState } from "react";
import { Search, SlidersHorizontal, Edit2 } from "lucide-react";

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
    <div className="bg-white p-6">

      {/* PAGE TITLE */}
      <p className="text-[13px] font-medium text-[#154270] mb-4">
        Subscription <span className="text-[#59AC78]">Management</span>
      </p>

      {/* CARD */}
      <div className="bg-white border border-[#E3EDF7] rounded-[14px] shadow-sm">

        {/* CARD HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E3EDF7]">
          <h3 className="text-[15px] font-semibold text-[#1F2937]">
            Agent Subscriptions
          </h3>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-[#9AA6B2]"
              />
              <input
                placeholder="Search"
                className="h-8 w-40 pl-7 pr-2 text-xs border border-[#C8D2DF] rounded-[6px] focus:outline-none"
              />
            </div>

            {/* Filter */}
            <button className="h-8 w-8 rounded-[6px] bg-[#2A6EEA] flex items-center justify-center">
              <SlidersHorizontal size={14} className="text-white" />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#EDF6FF] text-[12px] text-[#6B7A8C] h-11">
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
                <tr
                  key={sub.id}
                  className="h-[64px] border-b border-[#EEF2F7] hover:bg-[#FAFCFF]"
                >
                  {/* S NO */}
                  <Td className="text-center">{index + 1}</Td>

                  {/* AGENT */}
                  <Td>
                    <div className="flex items-center gap-3">
                      <img
                        src={sub.img}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="text-[13px] text-[#1F2937]">
                        {sub.agent}
                      </span>
                    </div>
                  </Td>

                  {/* COUNTY */}
                  <Td>{sub.county}</Td>

                  {/* PRICE */}
                  <Td>$ {sub.price}</Td>

                  {/* STATUS */}
                  <Td>
                    {sub.status === "Paid" ? (
                      <span className="inline-flex items-center justify-center min-w-[80px] rounded-[6px] border border-[#B4E4C3] bg-[#E7F7EC] py-1 text-[11px] text-[#2F9E5B]">
                        Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center min-w-[80px] rounded-[6px] border border-[#FFD9A0] bg-[#FFF4E5] py-1 text-[11px] text-[#D38B09]">
                        Pending
                      </span>
                    )}
                  </Td>

                  {/* ACTION */}
                  <Td>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#EAF3FF] text-[#2A6EEA] hover:bg-[#DCE9FF]">
                      <Edit2 size={14} />
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

/* ---------- TABLE CELLS ---------- */

const Th = ({ children }) => (
  <th className="px-5 text-left font-medium">
    <div className="flex items-center gap-1">
      {children}
      <img
        src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
        className="w-2 opacity-40"
        alt="sort"
      />
    </div>
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`px-5 text-[13px] text-[#4B5563] ${className}`}>
    {children}
  </td>
);
