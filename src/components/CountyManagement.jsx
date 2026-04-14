// src/components/CountyManagement.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Plus, X } from "lucide-react";

export default function CountyManagement() {
  const [counties, setCounties] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(null);

  const [newCountyName, setNewCountyName] = useState("");
  const [newCountyPrice, setNewCountyPrice] = useState("");

  /* ------------------------------------------
     LOAD COUNTY DATA
  -------------------------------------------*/
  useEffect(() => {
    loadCounties();
  }, []);

  const loadCounties = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/county");
      setCounties(res.data);
    } catch {
      // fallback dummy data
      setCounties([
        { id: 1, name: "Miami-Dade", price: 1000, status: true },
        { id: 2, name: "Orange", price: 1000, status: false },
        { id: 3, name: "Hillsborough", price: 1000, status: true },
        { id: 4, name: "Monroe", price: 1000, status: false },
        { id: 5, name: "Manatee", price: 1000, status: true },
        { id: 6, name: "Palm Beach", price: 1000, status: true },
      ]);
    }
  };

  /* ------------------------------------------
     SORTING FUNCTION
  -------------------------------------------*/
  const sortData = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...counties].sort((a, b) => {
      if (key === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      }

      if (typeof a[key] === "string") {
        return direction === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }

      return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
    });

    setCounties(sorted);
    setSortConfig({ key, direction });
  };

  /* ------------------------------------------
     ADD COUNTY
  -------------------------------------------*/
  const addCounty = async () => {
    if (!newCountyName.trim() || !newCountyPrice.trim()) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("https://yourapi.com/api/county/add", {
        name: newCountyName,
        price: newCountyPrice,
      });

      setShowAddModal(false);
      loadCounties();
    } catch {
      setCounties((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: newCountyName,
          price: Number(newCountyPrice),
          status: true,
        },
      ]);
      setShowAddModal(false);
    }
  };

  /* ------------------------------------------
     STATUS TOGGLE
  -------------------------------------------*/
  const toggleStatus = async (id) => {
    const updated = counties.map((c) =>
      c.id === id ? { ...c, status: !c.status } : c
    );
    setCounties(updated);

    try {
      await axios.put(`https://yourapi.com/api/county/status/${id}`);
    } catch {
      console.log("Local mode only");
    }
  };

  return (
    <div className="p-6">

      {/* HEADER ROW */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-[13px] font-medium text-[#154270]">
          County <span className="text-[#59AC78]">Management</span>
        </p>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 bg-[#2A6EEA] text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
        >
          <Plus size={16} /> Add County
        </button>
      </div>

      {/* CARD */}
      <div className="bg-white border border-[#E3EDF7] rounded-xl shadow-sm">

        {/* TITLE */}
        <div className="px-5 py-4 border-b border-[#E3EDF7]">
          <h3 className="text-[15px] font-semibold text-[#1F2933]">County List</h3>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            {/* HEADER WITH SORT ICONS */}
            <thead className="bg-[#EDF6FF] text-[#6B7A8C] text-[12px]">
              <tr className="h-11">

                {/* S No. */}
                <th
                  className="px-6 text-left cursor-pointer select-none"
                  onClick={() => sortData("id")}
                >
                  <div className="flex items-center gap-2">
                    S No.
                    <img
                      src="https://img.icons8.com/ios-glyphs/16/9CA3AF/sort.png"
                      alt="sort"
                    />
                  </div>
                </th>

                {/* County Name */}
                <th
                  className="px-6 text-left cursor-pointer select-none"
                  onClick={() => sortData("name")}
                >
                  <div className="flex items-center gap-2">
                    County Name
                    <img
                      src="https://img.icons8.com/ios-glyphs/16/9CA3AF/sort.png"
                      alt="sort"
                    />
                  </div>
                </th>

                {/* Price */}
                <th
                  className="px-6 text-left cursor-pointer select-none"
                  onClick={() => sortData("price")}
                >
                  <div className="flex items-center gap-2">
                    Price/Month
                    <img
                      src="https://img.icons8.com/ios-glyphs/16/9CA3AF/sort.png"
                      alt="sort"
                    />
                  </div>
                </th>

                {/* Status */}
                <th
                  className="px-6 text-left cursor-pointer select-none"
                  onClick={() => sortData("status")}
                >
                  <div className="flex items-center gap-2">
                    Status
                    <img
                      src="https://img.icons8.com/ios-glyphs/16/9CA3AF/sort.png"
                      alt="sort"
                    />
                  </div>
                </th>

                <th className="px-6 text-left">Actions</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {counties.map((c, index) => (
                <tr
                  key={c.id}
                  className="h-[64px] border-t border-[#EEF2F7] hover:bg-[#FAFCFF]"
                >
                  <td className="px-6 text-[13px] text-[#4B5563]">{index + 1}</td>

                  <td className="px-6 text-[13px] text-[#111827]">{c.name}</td>

                  <td className="px-6 text-[13px] text-[#111827]">
                    ${Number(c.price).toLocaleString()}
                  </td>

                  {/* Status Toggle */}
                  <td className="px-6">
                    <button
                      onClick={() => toggleStatus(c.id)}
                      className={`relative inline-flex h-5 w-10 rounded-full border transition ${
                        c.status
                          ? "bg-[#2A6EEA] border-[#2A6EEA]"
                          : "bg-white border-[#C7D2E2]"
                      }`}
                    >
                      <span
                        className={`absolute h-[14px] w-[14px] rounded-full bg-white shadow transform transition ${
                          c.status ? "translate-x-5" : "translate-x-1"
                        }`}
                      ></span>
                    </button>
                  </td>

                  <td className="px-6">
                    <button
                      onClick={() => setShowViewModal(c)}
                      className="h-8 w-8 bg-[#E7F7EC] rounded-full flex items-center justify-center text-[#36A36A] hover:bg-[#DFF2E5]"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {counties.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    No counties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 border shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[15px] font-semibold">Add County</h3>
              <X
                className="cursor-pointer text-gray-500"
                onClick={() => setShowAddModal(false)}
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-600">County Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value={newCountyName}
                  onChange={(e) => setNewCountyName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-xs text-gray-600">Price/Month</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md"
                  value={newCountyPrice}
                  onChange={(e) => setNewCountyPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Cancel
              </button>

              <button
                onClick={addCounty}
                className="px-4 py-2 bg-[#2A6EEA] text-white rounded-md text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {showViewModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-xl p-6 border shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[15px] font-semibold">County Details</h3>
              <X
                className="cursor-pointer text-gray-500"
                onClick={() => setShowViewModal(null)}
              />
            </div>

            <p className="text-sm text-gray-700 mb-2">
              <b>Name:</b> {showViewModal.name}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <b>Price:</b> ${showViewModal.price}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <b>Status:</b> {showViewModal.status ? "Active" : "Inactive"}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowViewModal(null)}
                className="px-4 py-2 bg-[#2A6EEA] text-white rounded-md text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
