import React, { useState } from "react";
import { Eye } from "lucide-react";

export default function AgentManagement({ onViewAgent }) {
  const [activeTab, setActiveTab] = useState("agents"); // MAIN TABS
  const [requestTab, setRequestTab] = useState("new"); // INNER TABS: new / rejected
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  /* ------------------ AGENTS DATA ------------------ */
  const agents = [
    {
      id: 1,
      name: "Amanda Greene",
      email: "amandagreene@ymail.com",
      counties: "Miami–Dade, Pinellas, Broward",
      status: "Paid",
    },
    {
      id: 2,
      name: "John Carter",
      email: "johncarter@ymail.com",
      counties: "Orange, Osceola",
      status: "Pending",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "sofiamartinez@ymail.com",
      counties: "Hillsborough, Pinellas, Pasco",
      status: "Pending",
    },
    {
      id: 4,
      name: "Brian Douglas",
      email: "briandouglas@ymail.com",
      counties: "Monroe, Collier",
      status: "Paid",
    },
    {
      id: 5,
      name: "Alicia Sharma",
      email: "aliciasharma@ymail.com",
      counties: "Polk, Manatee",
      status: "Paid",
    },
    {
      id: 6,
      name: "Emily Zhang",
      email: "emilyzhang@ymail.com",
      counties: "Palm Beach, Broward, Miami–Dade",
      status: "Pending",
    },
  ];

  /* ---------------- REQUESTS DATA ---------------- */
  const newRequests = [
    {
      id: 1,
      name: "Amanda Greene",
      email: "amandagreene@ymail.com",
      license: "FL-458721",
      counties: "Hillsborough, Pinellas, Pasco",
    },
    {
      id: 2,
      name: "John Carter",
      email: "johncarter@ymail.com",
      license: "FL-462109",
      counties: "Miami–Dade, Pinellas, Broward",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      email: "sofiamartinez@ymail.com",
      license: "FL-453382",
      counties: "Orange, Osceola",
    },
    {
      id: 4,
      name: "Brian Douglas",
      email: "briandouglas@gmail.com",
      license: "FL-460387",
      counties: "Monroe, Collier",
    },
    {
      id: 5,
      name: "Alicia Sharma",
      email: "aliciasharma@ymail.com",
      license: "FL-455631",
      counties: "Polk, Manatee",
    },
    {
      id: 6,
      name: "Emily Zhang",
      email: "emilyzhang@gmail.com",
      license: "FL-459278",
      counties: "Palm Beach, Broward, Miami–Dade",
    },
  ];

  const rejectedRequests = [
    {
      id: 7,
      name: "Michael Ruiz",
      email: "michaelruiz@mail.com",
      license: "FL-459999",
      counties: "Monroe, Collier",
    },
  ];

  /* ---------------------------------------------------- */

  const handleSort = (key, dataType) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction, dataType });
  };

  const sortData = (data) => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const valA = String(a[sortConfig.key]);
      const valB = String(b[sortConfig.key]);
      return sortConfig.direction === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey)
      return <span className="ml-1 text-gray-300">▲▼</span>;
    return sortConfig.direction === "asc" ? (
      <span className="ml-1 text-[#2A6EEA]">▲</span>
    ) : (
      <span className="ml-1 text-[#2A6EEA]">▼</span>
    );
  };

  /* ------------------------ RENDER REQUEST TABLE ------------------------ */

  const renderRequestTable = (data, title) => (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-gray-800 mb-4">{title}</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-[#EDF6FF] border-b text-gray-600">
            <tr>
              <Th>S No.</Th>

              <Th sortable onClick={() => handleSort("name")}>
                Agent <SortIcon columnKey="name" />
              </Th>

              <Th sortable onClick={() => handleSort("email")}>
                Email <SortIcon columnKey="email" />
              </Th>

              <Th sortable onClick={() => handleSort("license")}>
                License Number <SortIcon columnKey="license" />
              </Th>

              <Th sortable onClick={() => handleSort("counties")}>
                Counties Requested <SortIcon columnKey="counties" />
              </Th>

              <Th className="text-right pr-6">Actions</Th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {sortData(data).map((a, index) => (
              <tr key={a.id} className="hover:bg-gray-50 transition">
                <Td>{index + 1}</Td>

                <Td>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/40?img=${index + 4}`}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="font-medium text-gray-900">{a.name}</span>
                  </div>
                </Td>

                <Td>{a.email}</Td>
                <Td>{a.license}</Td>
                <Td>{a.counties}</Td>

                <Td className="text-right pr-4">
                  <button
                    onClick={() => onViewAgent(a)}
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
    </div>
  );

  /* ------------------------ MAIN RETURN ------------------------ */

  return (
    <div className="bg-[#F5F7FB] min-h-full p-4">
      <h2 className="text-lg font-semibold text-[#154270] mb-4">
        Agent <span className="text-[#59AC78]">Management</span>
      </h2>

      {/* MAIN TABS */}
      <div className="flex items-center gap-4 border-b pb-2 mb-4">
        <button
          onClick={() => setActiveTab("agents")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
            activeTab === "agents"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Insurance Agents
        </button>

        <button
          onClick={() => setActiveTab("requests")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
            activeTab === "requests"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Requests
        </button>
      </div>

      {/* ----------------- AGENTS TABLE ----------------- */}
      {activeTab === "agents" && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            Insurance Agents
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-[#EDF6FF] border-b text-gray-600">
                <tr>
                  <Th>S No.</Th>

                  <Th sortable onClick={() => handleSort("name")}>
                    Agent <SortIcon columnKey="name" />
                  </Th>

                  <Th sortable onClick={() => handleSort("email")}>
                    Email <SortIcon columnKey="email" />
                  </Th>

                  <Th sortable onClick={() => handleSort("counties")}>
                    Counties Covered <SortIcon columnKey="counties" />
                  </Th>

                  <Th sortable onClick={() => handleSort("status")}>
                    Payment Status <SortIcon columnKey="status" />
                  </Th>

                  <Th className="text-right pr-6">Actions</Th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {sortData(agents).map((a, index) => (
                  <tr key={a.id} className="hover:bg-gray-50 transition">
                    <Td>{index + 1}</Td>

                    <Td>
                      <div className="flex items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${index + 3}`}
                          className="h-8 w-8 rounded-full"
                        />
                        <span className="font-medium text-gray-900">{a.name}</span>
                      </div>
                    </Td>

                    <Td>{a.email}</Td>
                    <Td>{a.counties}</Td>

                    <Td>
                      {a.status === "Paid" ? (
                        <span className="px-3 py-1 text-xs rounded-md bg-[#E7F7EC] text-[#59AC78] border border-[#C4EAD0]">
                          Paid
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs rounded-md bg-[#FFF5D9] text-[#E6A400] border border-[#F7E1A3]">
                          Pending
                        </span>
                      )}
                    </Td>

                    <Td className="text-right pr-4">
                      <button
                        onClick={() => onViewAgent(a)}
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
        </div>
      )}

      {/* ----------------- REQUESTS TAB ----------------- */}
      {activeTab === "requests" && (
        <>
          {/* INNER TABS */}
          <div className="flex items-center gap-6 mb-4 pl-1">
            <button
              onClick={() => setRequestTab("new")}
              className={`text-sm font-medium pb-1 border-b-2 transition ${
                requestTab === "new"
                  ? "border-[#2A6EEA] text-[#2A6EEA]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              New Requests
            </button>

            <button
              onClick={() => setRequestTab("rejected")}
              className={`text-sm font-medium pb-1 border-b-2 transition ${
                requestTab === "rejected"
                  ? "border-[#2A6EEA] text-[#2A6EEA]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Rejected Requests
            </button>
          </div>

          {/* TABLES */}
          {requestTab === "new" &&
            renderRequestTable(newRequests, "New Requests")}

          {requestTab === "rejected" &&
            renderRequestTable(rejectedRequests, "Rejected Requests")}
        </>
      )}
    </div>
  );
}

/* ------------ Subcomponents ---------- */

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
