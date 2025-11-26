import React, { useState } from "react";

export default function LeadManagementAgent() {
  const [activeTab, setActiveTab] = useState("active");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  /* ---------------- POPUP STATE ---------------- */
  const [showLeadPopup, setShowLeadPopup] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const openLeadPopup = (lead) => {
    setSelectedLead(lead);
    setShowLeadPopup(true);
  };

  const closeLeadPopup = () => {
    setSelectedLead(null);
    setShowLeadPopup(false);
  };

  /* ---------------- LEADS DATA ---------------- */
  const leads = [
    {
      id: 1,
      name: "Alex Smith",
      contact: "(305) 555-1234",
      county: "Miami-Dade",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Morning (8 AM to 12 PM)",
      status: "Pending",
    },
    {
      id: 2,
      name: "John Carter",
      contact: "(407) 555-9876",
      county: "Orange",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Afternoon (1 PM to 4 PM)",
      status: "Pending",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      contact: "(954) 555-4321",
      county: "Hillsborough",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Evening (5 PM to 7 PM)",
      status: "In Progress",
    },
    {
      id: 4,
      name: "Brian Douglas",
      contact: "(321) 555-8765",
      county: "Monroe",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Afternoon (1 PM to 4 PM)",
      status: "Pending",
    },
    {
      id: 5,
      name: "Alicia Sharma",
      contact: "(786) 555-1122",
      county: "Manatee",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Afternoon (1 PM to 4 PM)",
      status: "In Progress",
    },
    {
      id: 6,
      name: "Emily Zhang",
      contact: "(239) 555-3344",
      county: "Palm Beach",
      dateAssigned: "Nov 05' 2025",
      contactTime: "Morning (8 AM to 12 PM)",
      status: "Pending",
    },
  ];

  const filtered =
    activeTab === "active"
      ? leads
      : leads.map((l) => ({ ...l, status: "Completed" }));

  /* ---------------- SORT LOGIC ---------------- */
  const sortData = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  const sortedData = [...filtered].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = a[sortConfig.key]?.toString().toLowerCase();
    const valueB = b[sortConfig.key]?.toString().toLowerCase();

    if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white border border-[#E3EDF7] rounded-xl shadow-sm p-6">

      {/* ---------------- Tabs + Search ---------------- */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2 text-sm font-medium ${
              activeTab === "active"
                ? "bg-gradient-to-r from-[#154270] to-[#59AC78] text-white"
                : "bg-[#EAF3FF] text-[#154270]"
            }`}>
            Active Leads
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 text-sm font-medium ${
              activeTab === "completed"
                ? "bg-gradient-to-r from-[#154270] to-[#59AC78] text-white"
                : "bg-[#EAF3FF] text-[#154270]"
            }`}>
            Completed Leads
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-44 pl-9 pr-3 py-2 text-sm border rounded-lg border-gray-300 placeholder-gray-400"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/20/9ca3af/search--v1.png"
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
          </div>

          <button className="p-2 border rounded-lg border-gray-300 hover:bg-gray-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
              className="w-4 opacity-70"
            />
          </button>
        </div>
      </div>

      {/* ---------------- Table ---------------- */}
      <h2 className="text-[15px] font-semibold mb-3">Leads Tracking</h2>

      <div className="border border-[#E3EDF7] rounded-lg overflow-hidden">
        <table className="w-full text-[13px]">
          <thead className="bg-[#EDF6FF] text-[#6B7A8C] text-[12px]">
            <tr className="h-12">
              <SortableTh label="S No." sortKey="id" sortData={sortData} sortConfig={sortConfig} />
              <SortableTh label="Lead Name" sortKey="name" sortData={sortData} sortConfig={sortConfig} />
              <SortableTh label="Contact" sortKey="contact" sortData={sortData} sortConfig={sortConfig} />
              <SortableTh label="County" sortKey="county" sortData={sortData} sortConfig={sortConfig} />
              <SortableTh label="Date Assigned" sortKey="dateAssigned" sortData={sortData} sortConfig={sortConfig} />
              <SortableTh label="Contact Time" sortKey="contactTime" sortData={sortData} sortConfig={sortConfig} />

              <th className="px-5 text-left font-medium">Status</th>
              <th className="px-5 text-center font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedData.map((lead, index) => (
              <tr key={lead.id} className="h-[64px] border-b border-[#EEF2F7] hover:bg-[#FAFCFF]">

                <Td>{index + 1}</Td>
                <Td>{lead.name}</Td>
                <Td>{lead.contact}</Td>
                <Td>{lead.county}</Td>
                <Td>{lead.dateAssigned}</Td>
                <Td>{lead.contactTime}</Td>

                <Td>
                  <StatusPill status={lead.status} />
                </Td>

                <Td className="text-center">
                  <button
                    onClick={() => openLeadPopup(lead)}
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-[#E7F7EC]">
                    <img src="/assets/agentpanelimages/eyeicon.png" className="w-4 opacity-90" />
                  </button>
                </Td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- Popup ---------------- */}
      {showLeadPopup && selectedLead && (
        <LeadDetailsPopup lead={selectedLead} onClose={closeLeadPopup} />
      )}
    </div>
  );
}

/* ---------------- Sortable Header ---------------- */
function SortableTh({ label, sortKey, sortData, sortConfig }) {
  return (
    <th
      onClick={() => sortData(sortKey)}
      className="px-5 text-left font-medium cursor-pointer select-none">
      <div className="flex items-center gap-1">
        {label}
        <img
          src={
            sortConfig.key === sortKey && sortConfig.direction === "asc"
              ? "https://cdn-icons-png.flaticon.com/512/25/25381.png"
              : "https://cdn-icons-png.flaticon.com/512/25/25385.png"
          }
          className="w-2.5 opacity-40"
        />
      </div>
    </th>
  );
}

function Td({ children, className = "" }) {
  return <td className={`px-5 text-[#1F2937] text-[13px] ${className}`}>{children}</td>;
}

/* ---------------- Status Pill ---------------- */
function StatusPill({ status }) {
  const base = "px-4 py-1 text-[11px] rounded-md border inline-block";

  if (status === "In Progress")
    return <span className={`${base} text-[#4F46E5] border-[#B8C1FF] bg-[#EEF2FF]`}>In Progress</span>;

  if (status === "Completed")
    return <span className={`${base} text-[#3CBC78] border-[#B9F3D0] bg-[#E9FDF1]`}>Completed</span>;

  return <span className={`${base} text-[#C27B00] border-[#FFD9A0] bg-[#FFF4E5]`}>Pending</span>;
}

/* ============================================================
   POPUP COMPONENT (ACTIVE + COMPLETED LOGIC)
============================================================ */
function LeadDetailsPopup({ lead, onClose }) {
  const isCompleted = lead.status === "Completed";

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-[780px] px-10 py-10 relative">

        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-center text-[22px] font-semibold mb-8">Lead Details</h2>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-8">

          {/* Same for both popups */}
          <DetailField label="Lead Name" value={`${lead.name}@example.com`} />
          <DetailField label="County" value={lead.county} />

          <DetailField label="Contact" value={lead.contact} />
          <DetailField label="Email Address" value={`${lead.name.toLowerCase().replace(" ", "")}@example.com`} />

          {/* DIFFERENCE HERE: ACTIVE vs COMPLETED */}
          {isCompleted ? (
            <>
              <DetailField label="Meeting" value="Nov 06, 2025" />
              <DetailField label="Time" value="11:00 AM – 11:30 AM" />
              <DetailField label="Status" value="Converted" />
              <DetailField label="Assigned On" value="Nov 01, 2025" />
            </>
          ) : (
            <>
              <DetailField label="Date Assigned" value={lead.dateAssigned} />
              <DetailField label="Contact Time" value={lead.contactTime} />
            </>
          )}

        </div>

        {/* NOTES */}
        <div className="mt-8">
          <p className="font-medium text-[14px]">Notes</p>

          <p className="mt-2 text-gray-600 text-[14px] leading-relaxed border-b pb-4">
            Looking for guidance on home insurance options for a new property & would like the detailed quote emailed before the call.
          </p>
        </div>

        {/* ATTACHED QUOTE */}
        <div className="mt-6 border rounded-lg px-4 py-3 flex justify-between items-center">
          <p className="text-[#2563EB] font-medium text-[14px]">Attached Quote</p>
          <img src="/assets/agentpanelimages/quoteattach.png" className="w-5" />
        </div>

        {/* ADD NOTES */}
        <div className="mt-8">
          <p className="font-medium text-[14px] mb-2">Add Notes</p>

          <textarea
            className="w-full border rounded-lg px-4 py-3 text-[14px] text-gray-700"
            rows={3}
            defaultValue="The client requested a policy review in 6 months."
          ></textarea>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-8">

          {isCompleted ? (
            <>
              <button className="w-[180px] py-3 border rounded-lg text-gray-700 text-[14px]">
                Call Lead
              </button>
              <button className="w-[180px] py-3 rounded-lg text-white text-[14px]
                bg-gradient-to-r from-[#154270] to-[#3CBC78]">
                Update
              </button>
            </>
          ) : (
            <>
              <button className="w-[180px] py-3 border rounded-lg text-gray-700 text-[14px]">
                Call Lead
              </button>
              <button className="w-[180px] py-3 rounded-lg text-white text-[14px]
                bg-gradient-to-r from-[#154270] to-[#3CBC78]">
                Update
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}

/* ---------------- FIELD COMPONENT ---------------- */
function DetailField({ label, value }) {
  return (
    <div>
      <p className="font-medium text-[14px]">{label}</p>
      <p className="border-b border-gray-200 pb-1 mt-1 text-gray-700">{value}</p>
    </div>
  );
}
