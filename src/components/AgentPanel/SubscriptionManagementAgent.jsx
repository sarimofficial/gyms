import React, { useState } from "react";

/* ===========================================================
   MAIN PAGE COMPONENT
=========================================================== */
export default function SubscriptionManagementAgent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState(null);

  return (
    <div className="space-y-6">

      {/* ---------------------- TOP GRID ---------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ---------------- Subscription Details ---------------- */}
        <div className="bg-white rounded-xl border border-[#E3EDF7] p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-[16px] font-semibold text-[#1F2937]">
              Subscription Details
            </h3>

            <span className="text-xs px-3 py-1 bg-[#E7F7EC] text-[#36A36A] border border-[#B4E4C3] rounded-full">
              Active Subscription
            </span>
          </div>

          <div className="space-y-4 text-[14px]">
            <DetailRow
              label="Active Counties"
              value="Hillsborough, Miami-Dade, Manatee, Osceola"
            />

            <DetailRow
              label="Billing Amount"
              value="$1000/month, $1000/month, $1000/month, $1000/month"
            />

            <DetailRow
              label="Next Renewal"
              value="Nov 20th, Dec 8th, Dec 9th, Dec 10th"
            />

            <DetailRow
              label="Payment Status"
              value={
                <span className="px-4 py-1 text-xs bg-[#E7F7EC] text-[#36A36A] border border-[#B4E4C3] rounded-full">
                  Paid
                </span>
              }
            />
          </div>
        </div>

        {/* ---------------- Payment Method ---------------- */}
        <div className="bg-white rounded-xl border border-[#E3EDF7] p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-[16px] font-semibold text-[#1F2937]">
              Payment Method
            </h3>

            <button className="text-[#2A6EEA] text-sm flex items-center gap-1">
              Edit
              <img
                src="/assets/agentpanelimages/editicon.png"
                className="w-4 opacity-80"
              />
            </button>
          </div>

          <div className="space-y-4 text-[14px]">
            <DetailRow label="Name" value="Martin Delannoy" />
            <DetailRow label="Visa Card" value="**** 1234" />
            <DetailRow label="Expires" value="12/25" />

            <p className="text-xs text-gray-500 flex items-center gap-2 pt-2">
              <img
                src="/assets/agentpanelimages/info.png"
                className="w-4 opacity-70"
              />
              Payment will be processed securely via Stripe.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------- ACTIVE SUBSCRIPTIONS TABLE ---------------------- */}
      <div className="bg-white rounded-xl border border-[#E3EDF7] p-6">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[16px] font-semibold text-[#1F2937]">
            Active Subscription
          </h3>

          {/* BLUE BUTTON EXACT FIGMA */}
          <button className="px-4 py-2 bg-[#1A73E8] text-white rounded-md text-sm hover:bg-[#1665cc] transition">
            Add New County
          </button>
        </div>

        {/* TABLE */}
        <table className="w-full text-[13px]">
          <thead>
            <tr className="bg-[#EDF6FF] text-[#6B7A8C] h-11 border-b border-[#E3EDF7]">
              <TableHead>S No.</TableHead>
              <TableHead>County Name</TableHead>
              <TableHead>Price/Month</TableHead>
              <TableHead>Next Renewal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </tr>
          </thead>

          <tbody>
            <SubscriptionRow
              sno="1"
              county="Miami-Dade"
              price="$1000"
              renewal="Dec 10’ 2025"
              onUnsubscribe={() => {
                setSelectedCounty("Miami-Dade");
                setShowModal(true);
              }}
            />

            <SubscriptionRow
              sno="2"
              county="Orange"
              price="$1000"
              renewal="Dec 06’ 2025"
              onUnsubscribe={() => {
                setSelectedCounty("Orange");
                setShowModal(true);
              }}
            />

            <SubscriptionRow
              sno="3"
              county="Hillsborough"
              price="$1000"
              renewal="Nov 20’ 2025"
              onUnsubscribe={() => {
                setSelectedCounty("Hillsborough");
                setShowModal(true);
              }}
            />
          </tbody>
        </table>
      </div>

      {/* ---------------------- POPUP MODAL ---------------------- */}
      <UnsubscribeModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          console.log("UNSUBSCRIBED:", selectedCounty);
          setShowModal(false);
        }}
      />

    </div>
  );
}

/* ===========================================================
   REUSABLE COMPONENTS
=========================================================== */

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <p className="text-gray-500">{label}</p>
      <p className="text-right">{value}</p>
    </div>
  );
}

function TableHead({ children }) {
  return (
    <th className="px-4 text-left font-medium">
      <div className="flex items-center gap-2">
        {children}
        <img
          src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
          className="w-2 opacity-40"
        />
      </div>
    </th>
  );
}

function TableData({ children }) {
  return <td className="px-4 text-[#1F2937]">{children}</td>;
}

function SubscriptionRow({ sno, county, price, renewal, onUnsubscribe }) {
  return (
    <tr className="h-[64px] border-b border-[#EEF2F7] hover:bg-[#FAFCFF]">

      <TableData>{sno}</TableData>
      <TableData>{county}</TableData>
      <TableData>{price}</TableData>
      <TableData>{renewal}</TableData>

      <TableData>
        <span className="px-4 py-1 bg-[#E7F7EC] text-[#36A36A] border border-[#B4E4C3] rounded-md text-xs">
          Paid
        </span>
      </TableData>

      <TableData>
        <button
          className="text-[#2A6EEA] text-xs hover:underline"
          onClick={onUnsubscribe}
        >
          Unsubscribe
        </button>
      </TableData>

    </tr>
  );
}

/* ===========================================================
   UNSUBSCRIBE MODAL (FINAL FIGMA DESIGN)
=========================================================== */

function UnsubscribeModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[28px] w-[720px] p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Background */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-[#E6F7F1] blur-2xl opacity-80" />

        {/* Icon */}
        <img
          src="/assets/agentpanelimages/mail.png"
          className="w-16 mx-auto relative z-10 mb-6"
        />

        {/* Title */}
        <h2 className="text-[26px] font-semibold text-center text-[#1F2937] mb-4">
          Unsubscribe From County?
        </h2>

        <p className="text-center text-gray-600 text-[16px] leading-relaxed max-w-[560px] mx-auto">
          You are about to remove this county from your coverage area.
          All current and future leads associated with this county will be lost.
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          {/* Unsubscribe Button (RED BORDER) */}
          <button
            onClick={onConfirm}
            className="
              border border-[#FFB3B3]
              text-[#D73A3A]
              px-12 py-3 rounded-xl text-[16px]
              hover:bg-red-50 transition
            "
          >
            Unsubscribe
          </button>

          {/* Cancel (Gradient Button EXACT FIGMA) */}
          <button
            onClick={onClose}
            className="
              px-12 py-3 rounded-xl text-[16px] text-white
              bg-gradient-to-r 
              from-[#154270] via-[#3B8C6E] to-[#3CBC78]
              hover:opacity-90 transition
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
