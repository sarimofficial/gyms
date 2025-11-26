import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Edit, CheckCircle, XCircle, SlidersHorizontal } from "lucide-react";

export default function LeadTracking({ onViewLead, onEditLead }) {
  const [activeTab, setActiveTab] = useState("requests");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [search, setSearch] = useState("");

  /* ---------------- API STATE ---------------- */
  const [requestLeads, setRequestLeads] = useState([]);
  const [assignedLeads, setAssignedLeads] = useState([]);

  /* ---------------- LOAD REQUEST LEADS ---------------- */
  const loadRequestLeads = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/leads/requests");
      setRequestLeads(res.data);
    } catch (error) {
      console.error("API failed → loading dummy request leads");

      setRequestLeads([
        { id: 1, name: "Alex Smith", phone: "(305) 565–1234", county: "Miami–Dade", date: "Nov 05 2025" },
        { id: 2, name: "John Carter", phone: "(407) 555–9876", county: "Orange", date: "Nov 05 2025" },
        { id: 3, name: "Sofia Martinez", phone: "(954) 555–4321", county: "Hillsborough", date: "Nov 05 2025" },
        { id: 4, name: "Brian Douglas", phone: "(321) 555–8765", county: "Monroe", date: "Nov 05 2025" },
        { id: 5, name: "Alicia Sharma", phone: "(786) 555–1122", county: "Manatee", date: "Nov 05 2025" },
        { id: 6, name: "Emily Zhang", phone: "(239) 555–3344", county: "Palm Beach", date: "Nov 05 2025" },
      ]);
    }
  };

  /* ---------------- LOAD ASSIGNED LEADS ---------------- */
  const loadAssignedLeads = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/leads/assigned");
      setAssignedLeads(res.data);
    } catch (error) {
      console.error("API failed → loading dummy assigned leads");

      setAssignedLeads([
        {
          id: 1,
          name: "Alex Smith",
          phone: "(305) 565–1234",
          assigned: "Nov 05 2025",
          agent: "Brian Douglas",
          status: "In Progress",
          outcome: "In Progress",
        },
        {
          id: 2,
          name: "John Carter",
          phone: "(407) 555–9876",
          assigned: "Nov 05 2025",
          agent: "Emily Zhang",
          status: "Completed",
          outcome: "Converted",
        },
        {
          id: 3,
          name: "Sofia Martinez",
          phone: "(954) 555–4321",
          assigned: "Nov 05 2025",
          agent: "Alicia Sharma",
          status: "Completed",
          outcome: "In Progress",
        },
        {
          id: 4,
          name: "Brian Douglas",
          phone: "(321) 555–8765",
          assigned: "Nov 05 2025",
          agent: "Alex Smith",
          status: "Canceled",
          outcome: "—",
        },
        {
          id: 5,
          name: "Alicia Sharma",
          phone: "(786) 555–1122",
          assigned: "Nov 05 2025",
          agent: "John Carter",
          status: "Completed",
          outcome: "Unconverted",
        },
        {
          id: 6,
          name: "Emily Zhang",
          phone: "(239) 555–3344",
          assigned: "Nov 05 2025",
          agent: "Sofia Martinez",
          status: "In Progress",
          outcome: "In Progress",
        },
      ]);
    }
  };

  /* ---------------- FIRST LOAD ---------------- */
  useEffect(() => {
    loadRequestLeads();
    loadAssignedLeads();
  }, []);

  /* ---------------- APPROVE / REJECT ACTIONS ---------------- */
  const approveLead = async (id) => {
    try {
      await axios.post(`https://yourapi.com/api/leads/approve/${id}`);
      alert("Lead Approved!");
      loadRequestLeads();
      loadAssignedLeads();
    } catch (error) {
      console.error("Approve failed");
    }
  };

  const rejectLead = async (id) => {
    try {
      await axios.post(`https://yourapi.com/api/leads/reject/${id}`);
      alert("Lead Rejected!");
      loadRequestLeads();
      loadAssignedLeads();
    } catch (error) {
      console.error("Reject failed");
    }
  };

  /* ---------------- SORTING ---------------- */
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) return <span className="ml-1 text-gray-300">▲▼</span>;
    return sortConfig.direction === "asc" ? (
      <span className="ml-1 text-[#2A6EEA]">▲</span>
    ) : (
      <span className="ml-1 text-[#2A6EEA]">▼</span>
    );
  };

  /* ---------------- FILTER + SORT ---------------- */
  const rawData = activeTab === "requests" ? requestLeads : assignedLeads;

  const sortedData = [...rawData]
    .filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (!sortConfig.key) return 0;
      return sortConfig.direction === "asc"
        ? String(a[sortConfig.key]).localeCompare(String(b[sortConfig.key]))
        : String(b[sortConfig.key]).localeCompare(String(a[sortConfig.key]));
    });

  return (
    <div className="bg-[#F5F7FB] min-h-full p-4">

      {/* HEADER */}
      <h2 className="text-lg font-semibold text-[#154270] mb-4">
        Lead <span className="text-[#59AC78]">Tracking</span>
      </h2>

      {/* TABS */}
      <div className="flex items-center gap-4 border-b pb-2 mb-4">
        <button
          onClick={() => setActiveTab("requests")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium ${
            activeTab === "requests"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Requests
        </button>

        <button
          onClick={() => setActiveTab("assigned")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium ${
            activeTab === "assigned"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Assigned Leads
        </button>
      </div>

      {/* TABLE WRAPPER */}
      <div className="bg-white rounded-xl  p-5 shadow-sm border-0.5">

        {/* HEADER ROW */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-gray-800">Incoming Leads</h3>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 text-sm rounded-md px-3 py-1.5 w-40"
            />
            <button className="p-2 rounded-md border bg-[#F7F9FF] hover:bg-gray-100">
              <SlidersHorizontal size={16} className="text-[#2A6EEA]" />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-[#EDF6FF] border-b text-gray-600">
              <tr>
                <Th>S No.</Th>
                <Th sortable onClick={() => handleSort("name")}>
                  Consumer Name <SortIcon columnKey="name" />
                </Th>
                <Th sortable onClick={() => handleSort("phone")}>
                  Phone <SortIcon columnKey="phone" />
                </Th>

                {activeTab === "assigned" && (
                  <Th sortable onClick={() => handleSort("assigned")}>
                    Assigned On <SortIcon columnKey="assigned" />
                  </Th>
                )}

                {activeTab === "assigned" && (
                  <Th sortable onClick={() => handleSort("agent")}>
                    Agent Name <SortIcon columnKey="agent" />
                  </Th>
                )}

                {activeTab === "assigned" && <Th>Status</Th>}
                {activeTab === "assigned" && <Th>Lead Outcome</Th>}

                {activeTab === "requests" && (
                  <Th sortable onClick={() => handleSort("county")}>
                    County <SortIcon columnKey="county" />
                  </Th>
                )}

                {activeTab === "requests" && (
                  <Th sortable onClick={() => handleSort("date")}>
                    Received On <SortIcon columnKey="date" />
                  </Th>
                )}

                <Th className="text-right pr-6">Actions</Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {sortedData.map((lead, index) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition">
                  <Td>{index + 1}</Td>
                  <Td>{lead.name}</Td>
                  <Td>{lead.phone}</Td>

                  {activeTab === "assigned" && <Td>{lead.assigned}</Td>}
                  {activeTab === "assigned" && <Td>{lead.agent}</Td>}

                  {activeTab === "assigned" && (
                    <Td>
                      {lead.status === "Completed" && (
                        <span className="px-3 py-1 text-xs bg-[#E7F7EC] text-[#59AC78] border rounded-md">Completed</span>
                      )}
                      {lead.status === "In Progress" && (
                        <span className="px-3 py-1 text-xs bg-[#EAF1FF] text-[#2A6EEA] border rounded-md">In Progress</span>
                      )}
                      {lead.status === "Canceled" && (
                        <span className="px-3 py-1 text-xs bg-[#FFEAEA] text-[#F44336] border rounded-md">Canceled</span>
                      )}
                    </Td>
                  )}

                  {activeTab === "assigned" && (
                    <Td>
                      {lead.outcome === "Converted" && (
                        <span className="px-3 py-1 text-xs bg-[#E7F7EC] text-[#59AC78] border rounded-md">
                          Converted
                        </span>
                      )}
                      {lead.outcome === "Unconverted" && (
                        <span className="px-3 py-1 text-xs bg-[#FFEAEA] text-[#F44336] border rounded-md">
                          Unconverted
                        </span>
                      )}
                      {lead.outcome === "In Progress" && (
                        <span className="px-3 py-1 text-xs bg-[#EAF1FF] text-[#2A6EEA] border rounded-md">
                          In Progress
                        </span>
                      )}
                      {lead.outcome === "—" && <span>—</span>}
                    </Td>
                  )}

                  {activeTab === "requests" && <Td>{lead.county}</Td>}
                  {activeTab === "requests" && <Td>{lead.date}</Td>}

                  <Td className="text-right pr-4 flex items-center gap-2 justify-end">
       

                    <button
                      onClick={() => onEditLead(lead)}
                      className="p-2 rounded-md bg-[#E8F0FF] text-[#2A6EEA]"
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      onClick={() => approveLead(lead.id)}
                      className="p-2 rounded-md bg-[#E7F7EC] text-[#59AC78]"
                    >
                      <CheckCircle size={16} />
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

/* ---------------- SUB COMPONENTS ---------------- */

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
