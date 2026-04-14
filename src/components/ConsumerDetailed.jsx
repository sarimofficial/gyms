import React from "react";
import { ArrowLeft } from "lucide-react";

export default function ConsumerDetailed({ consumer, onBack }) {
  const bookingActivity = [
    {
      id: 1,
      agent: "Amanda Greene",
      email: "amandagreene@ymail.com",
      date: "Oct 30, 2025",
      status: "Completed",
      outcome: "Converted",
    },
    {
      id: 2,
      agent: "John Carter",
      email: "johncarter@gmail.com",
      date: "Oct 10, 2025",
      status: "Completed",
      outcome: "Unconverted",
    },
    {
      id: 3,
      agent: "Sofia Martinez",
      email: "sofiamartinez@ymail.com",
      date: "July 25, 2025",
      status: "Completed",
      outcome: "Converted",
    },
    {
      id: 4,
      agent: "Brian Douglas",
      email: "briandouglas@gmail.com",
      date: "May 02, 2025",
      status: "Completed",
      outcome: "In Progress",
    },
    {
      id: 5,
      agent: "Alicia Sharma",
      email: "aliciasharma@ymail.com",
      date: "Apr 14, 2025",
      status: "Canceled",
      outcome: "-",
    },
  ];

  return (
    <div className="bg-[#F5F7FB] min-h-full p-4">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center text-[#2A6EEA] mb-4 hover:underline">
        <ArrowLeft size={16} className="mr-1" /> back
      </button>

      {/* Top Summary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        
        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/64?img=12"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-900">{consumer.name}</h3>
              <p className="text-sm text-gray-500">{consumer.email}</p>
              <p className="text-sm text-gray-500">(305) 748-9126</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-1">
              Booked Call with agent – Nov 05, 2025
            </p>
            <button className="text-red-500 text-xs font-medium hover:underline">
              Deactivate Profile
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-6 justify-center">
          
          {/* Total Bookings */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#EAF1FF] flex items-center justify-center">
                <img src="/assets/images/bookingicon.png" className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-600">Total Booking:</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">12</p>
          </div>

          {/* Conversion Rate */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#EAF1FF] flex items-center justify-center">
                <img src="/assets/images/conversion.png" className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-600">Conversion Rate:</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">50%</p>
          </div>
        </div>

        {/* Property Summary */}
        <div className="bg-white border border-green-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-12 w-12 rounded-full bg-[#EAF1FF] flex items-center justify-center">
              <img src="/assets/images/homeicon'.png" className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Property Summary</h3>
          </div>

          <p className="text-xs text-gray-600 mb-1">
            <span className="font-medium text-gray-700">Zip Code:</span> 33101
          </p>
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-medium text-gray-700">County:</span> Miami-Dade
          </p>
          <p className="text-xs text-gray-600 mb-1">
            <span className="font-medium text-gray-700">Type:</span> Townhouse
          </p>
          <p className="text-xs text-gray-600">
            <span className="font-medium text-gray-700">Year:</span> 2003
          </p>
        </div>

      </div>

      {/* Booking Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Booking Activity</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-[#EDF6FF] border-b text-gray-600">
              <tr>
                <Th>S No.</Th>
                <Th>Agent Name</Th>
                <Th>Agent Email</Th>
                <Th>Booking Date</Th>
                <Th>Status</Th>
                <Th>Lead Outcome</Th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {bookingActivity.map((b, i) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <Td>{i + 1}</Td>
                  <Td className="font-medium text-gray-900">{b.agent}</Td>
                  <Td>{b.email}</Td>
                  <Td>{b.date}</Td>
                  <Td>{b.status}</Td>

                  {/* Outcome Badges */}
                  <Td>
                    {b.outcome === "Converted" && (
                      <span className="px-3 py-1 text-xs rounded-md bg-[#E7F7EC] text-[#59AC78] border border-[#C4EAD0]">
                        Converted
                      </span>
                    )}
                    {b.outcome === "Unconverted" && (
                      <span className="px-3 py-1 text-xs rounded-md bg-[#FFEAEA] text-[#EF4444] border border-[#F4C7C4]">
                        Unconverted
                      </span>
                    )}
                    {b.outcome === "In Progress" && (
                      <span className="px-3 py-1 text-xs rounded-md bg-[#EAF1FF] text-[#2A6EEA] border border-[#C6D8F7]">
                        In Progress
                      </span>
                    )}
                    {b.outcome === "-" && <span>—</span>}
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

const Th = ({ children }) => (
  <th className="text-left font-medium py-2.5 px-3">{children}</th>
);

const Td = ({ children }) => (
  <td className="py-2.5 px-3 text-gray-700">{children}</td>
);
