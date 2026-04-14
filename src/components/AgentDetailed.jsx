import React from "react";
import { ArrowLeft, Eye } from "lucide-react";

export default function AgentDetailed({ agent, onBack }) {
  const leadsHistory = [
    {
      id: 1,
      name: "Amanda Greene",
      date: "Nov 05, 2025",
      type: "Vacation Home",
      outcome: "Converted",
      notes: "",
    },
    {
      id: 2,
      name: "John Carter",
      date: "Nov 02, 2025",
      type: "Condo",
      outcome: "-",
      notes: "Lead didn’t attend the call.",
    },
    {
      id: 3,
      name: "Sofia Martinez",
      date: "Oct 28, 2025",
      type: "Apartment",
      outcome: "In Progress",
      notes: "Waiting for client response.",
    },
    {
      id: 4,
      name: "Brian Douglas",
      date: "Oct 27, 2025",
      type: "Townhouse",
      outcome: "Unconverted",
      notes: "Client not interested at this time",
    },
    {
      id: 5,
      name: "Alicia Sharma",
      date: "Oct 18, 2025",
      type: "Apartment",
      outcome: "In Progress",
      notes: "Follow-up next week.",
    },
    {
      id: 6,
      name: "Emily Zhang",
      date: "Oct 16, 2025",
      type: "Townhouse",
      outcome: "Converted",
      notes: "",
    },
  ];

  return (
    <div className="bg-[#F5F7FB] min-h-full p-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-[#2A6EEA] mb-4 hover:underline"
      >
        <ArrowLeft size={16} className="mr-1" /> back
      </button>

      {/* TOP STATS */}
      <h2 className="text-xl font-semibold text-[#154270] mb-5">
        Agent <span className="text-[#59AC78]">Management</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <TopStat icon="/assets/images/agenticon.png" label="Leads Received" value="1500" />
        <TopStat
          icon="/assets/images/agentcompleteleadsicon.png"
          label="Completed Leads"
          value="1020"
          sub="+22% This Month"
        />
        <TopStat
          icon="/assets/images/agentleadprogressicon.png"
          label="In Progress Leads"
          value="100"
        />
        <TopStat
          icon="/assets/images/agentconversion.png"
          label="Conversion Rate"
          value="63%"
          sub="+25% This Month"
        />
      </div>

      {/* MAIN PROFILE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Agent Profile */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/64?img=40"
              alt=""
              className="h-14 w-14 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-base font-bold text-gray-900">Daniel Brooks</h3>
              <p className="text-sm text-gray-600">danielbrooks@mail.com</p>
              <p className="text-sm text-gray-600">(305) 748-9126</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Booked Call with Sofia Martinez – Nov 05, 2025
            </p>
            <span className="px-3 py-1 text-xs bg-[#E7F7EC] text-[#59AC78] border border-[#C4EAD0] rounded-md">
              Booked
            </span>
          </div>

          <div className="mt-4 text-sm">
            <p className="text-gray-500">
              <span className="font-medium text-gray-700">License Number:</span> FL-456789
            </p>
            <p className="text-gray-500 mt-1">
              <span className="font-medium text-gray-700">NPN:</span> 1234567
            </p>
          </div>

          <button className="mt-4 text-white bg-red-500 px-4 py-2 rounded-md text-xs">
            Deactivate Profile
          </button>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/images/agentoverviewicon.png" className="h-12 w-14" />
            <h3 className="text-sm font-semibold text-gray-900">Overview</h3>
          </div>

          <OverviewItem label="Agency Name" value="33101" />
          <OverviewItem
            label="Counties Covered"
            value="Hillsborough, Pinellas, Pasco"
          />
          <OverviewItem label="Total Amount" value="$3000" />

          <div className="mt-1">
            <span className="px-3 py-1 bg-[#E7F7EC] border border-[#C4EAD0] text-[#59AC78] rounded text-xs">
              Paid
            </span>
          </div>
        </div>

        {/* Lead & Subscription */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/images/leadicon.png" className="h-12 w-14" />
            <h3 className="text-sm font-semibold text-gray-900">
              Lead & Subscription
            </h3>
          </div>

          <OverviewItem label="Lead Types" value="Homeowner, Renters, Condo" />
          <OverviewItem label="Leads Per Day (max)" value="5 leads" />
          <OverviewItem label="Renewals Date" value="Nov 30, 2025" />
          <OverviewItem label="Monthly Budget" value="$5000" />
        </div>
      </div>

      {/* LEADS HISTORY TABLE */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Leads History
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#F9FBFC] border-b text-gray-600">
              <tr>
                <Th>S No.</Th>
                <Th>Lead Name</Th>
                <Th>Assigned On</Th>
                <Th>Type</Th>
                <Th>Lead Outcome</Th>
                <Th>Notes</Th>
                <Th className="text-right pr-6">Actions</Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {leadsHistory.map((l, i) => (
                <tr key={l.id}>
                  <Td>{i + 1}</Td>
                  <Td className="font-medium text-gray-900">{l.name}</Td>
                  <Td>{l.date}</Td>
                  <Td>{l.type}</Td>
                  <Td>
                    <LeadOutcome outcome={l.outcome} />
                  </Td>
                  <Td className="text-gray-500 text-xs">{l.notes || "—"}</Td>
                  <Td className="text-right pr-4">
                    <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
                      <Eye size={16} className="text-gray-600" />
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

/* ---------------- Subcomponents --------------- */

const TopStat = ({ icon, label, value, sub }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <img src={icon} className="h-14 w-13 opacity-90" />
      <p className="text-[13px] text-gray-500">{label}</p>
    </div>
    <p className="text-2xl font-semibold text-gray-900">{value}</p>
    {sub && <p className="text-xs text-[#2A6EEA] mt-1">{sub}</p>}
  </div>
);

const OverviewItem = ({ label, value }) => (
  <p className="text-xs text-gray-500 mb-1">
    <span className="font-medium text-gray-700">{label}:</span> {value}
  </p>
);

const LeadOutcome = ({ outcome }) => {
  if (outcome === "Converted")
    return (
      <span className="px-3 py-1 text-xs rounded-md bg-[#E7F7EC] text-[#59AC78] border border-[#C4EAD0]">
        Converted
      </span>
    );

  if (outcome === "Unconverted")
    return (
      <span className="px-3 py-1 text-xs rounded-md bg-[#FFEAEA] text-[#F44336] border border-[#F5C2C0]">
        Unconverted
      </span>
    );

  if (outcome === "In Progress")
    return (
      <span className="px-3 py-1 text-xs rounded-md bg-[#EAF1FF] text-[#2A6EEA] border border-[#C4D9F7]">
        In Progress
      </span>
    );

  return <span>—</span>;
};

const Th = ({ children, className = "" }) => (
  <th className={`text-left font-medium py-2.5 px-3 ${className}`}>
    {children}
  </th>
);

const Td = ({ children, className = "" }) => (
  <td className={`py-2.5 px-3 text-gray-700 ${className}`}>{children}</td>
);


