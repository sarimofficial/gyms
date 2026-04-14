import React, { useState } from "react";
import { Eye } from "lucide-react";
import ConsumerDetailed from "./ConsumerDetailed";

export default function ConsumerManagement() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedConsumer, setSelectedConsumer] = useState(null);

  const consumers = [
    { id: 1, name: "Amanda Greene", email: "amandagreene@mail.com", bookings: 13, rate: 50, source: "Website" },
    { id: 2, name: "John Carter", email: "johncarter@mail.com", bookings: 20, rate: 0, source: "Application" },
    { id: 3, name: "Sofia Martinez", email: "sofiamartinez@mail.com", bookings: 4, rate: 60, source: "Application" },
    { id: 4, name: "Brian Douglas", email: "briandouglas@mail.com", bookings: 10, rate: 75, source: "Website" },
    { id: 5, name: "Alicia Sharma", email: "aliciasharma@mail.com", bookings: 9, rate: 66, source: "Application" },
    { id: 6, name: "Emily Zhang", email: "emilyz@mail.com", bookings: 11, rate: 72, source: "Application" },
  ];

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...consumers].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key];
    const valB = b[sortConfig.key];
    if (typeof valA === "string") {
      return sortConfig.direction === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    } else {
      return sortConfig.direction === "asc" ? valA - valB : valB - valA;
    }
  });

  const handleView = (consumer) => {
    setSelectedConsumer(consumer);
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <span className="ml-1 text-gray-300">▲▼</span>;
    }
    return sortConfig.direction === "asc" ? (
      <span className="ml-1 text-[#2A6EEA]">▲</span>
    ) : (
      <span className="ml-1 text-[#2A6EEA]">▼</span>
    );
  };

  if (selectedConsumer) {
    return (
      <ConsumerDetailed
        consumer={selectedConsumer}
        onBack={() => setSelectedConsumer(null)}
      />
    );
  }

  return (
    <div className="bg-[#F5F7FB] min-h-full p-4">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#154270]">
          Consumer <span className="text-[#59AC78]">Management</span>
        </h2>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-15 shadow-sm">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Consumers</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-[#EDF6FF] border-b text-gray-600">
              <tr>
                <Th>S No.</Th>
                <Th sortable onClick={() => handleSort("name")}>
                  Name <SortIcon columnKey="name" />
                </Th>
                <Th sortable onClick={() => handleSort("email")}>
                  Email <SortIcon columnKey="email" />
                </Th>
                <Th sortable onClick={() => handleSort("bookings")}>
                  Total Bookings <SortIcon columnKey="bookings" />
                </Th>
                <Th sortable onClick={() => handleSort("rate")}>
                  Conversion Rate <SortIcon columnKey="rate" />
                </Th>
                <Th sortable onClick={() => handleSort("source")}>
                  Signup Source <SortIcon columnKey="source" />
                </Th>
                <Th className="text-right pr-6">Action</Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 pt-60">
              {sortedData.map((c, index) => (
                <tr key={c.id} className="hover:bg-gray-50 transition">
                  <Td>{index + 1}</Td>
                  <Td className="font-medium text-gray-900">{c.name}</Td>
                  <Td className="text-gray-600">{c.email}</Td>
                  <Td>{String(c.bookings).padStart(2, "0")}</Td>
                  <Td>{c.rate}%</Td>
                  <Td>{c.source}</Td>
                  <Td className="text-right pr-4">
                    <button
                      onClick={() => handleView(c)}
                      className="p-2 rounded-md bg-[#E7F7EC] text-[#59AC78] hover:bg-[#D4F3DD]"
                    >
                      <Eye size={16} />
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1 to 6 of 11 entries</p>
          <div className="flex items-center space-x-3">

  {/* Previous Button */}
<div className="flex items-center space-x-4">

  {/* Previous */}
  <button
    className="
      px-6 py-2
      rounded-xl
      border border-[#0A3563]/20
      text-[#6A8BA3]
      bg-white
      font-medium
      tracking-wide
      hover:bg-[#F7FAFF]
      transition-all
      shadow-sm
    "
  >
    Previous
  </button>

  {/* Active Page */}
  <button
    className="
      px-6 py-2
      rounded-xl
      text-white
      font-semibold
      bg-gradient-to-r from-[#154270] via-[#59AC78] to-[#51B77B]
      shadow-md
      border border-transparent
      transition-all
    "
  >
    1
  </button>

  {/* Inactive Page */}
  <button
    className="
      px-6 py-2
      rounded-xl
      border border-[#0A3563]/25
      text-[#0A3563]
      bg-white
      font-medium
      hover:bg-[#F7FAFF]
      transition-all
      shadow-sm
    "
  >
    2
  </button>

  {/* Next */}
  <button
    className="
      px-6 py-2
      rounded-xl
      border border-[#0A3563]/25
      text-[#0A3563]
      bg-white
      font-medium
      hover:bg-[#F7FAFF]
      transition-all
      shadow-sm
    "
  >
    Next
  </button>

</div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Subcomponents ---------- */
const Th = ({ children, sortable = false, onClick, className = "" }) => (
  <th
    onClick={sortable ? onClick : undefined}
    className={`text-left font-medium py-2.5 px-3 cursor-${
      sortable ? "pointer" : "default"
    } select-none ${className}`}
  >
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`py-2.5 px-3 text-gray-700 ${className}`}>{children}</td>
);
