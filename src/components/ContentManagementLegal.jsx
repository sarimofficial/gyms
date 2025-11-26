import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import axios from "axios";

export default function ContentManagementLegal() {
  const [tab, setTab] = useState("legal");

  // collapse states
  const [openTerms, setOpenTerms] = useState(true);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openDisclaimer, setOpenDisclaimer] = useState(false);

  // backend state
  const [termsData, setTermsData] = useState([]);
  const [privacyData, setPrivacyData] = useState([]);
  const [disclaimerData, setDisclaimerData] = useState([]);

  /* ---------------- LOAD FROM API ---------------- */
  useEffect(() => {
    loadTerms();
    loadPrivacy();
    loadDisclaimer();
  }, []);

  const loadTerms = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/content/terms");
      setTermsData(res.data);
    } catch {
      setTermsData([
        "Provides approximate insurance cost estimates for informational purposes only, not official quotes.",
        "Users must be 18+ and provide accurate information; platform must be used responsibly.",
        "Estimates depend on county data and user inputs; actual premiums may vary.",
        "By requesting a quote, users agree to be contacted by licensed agents; we are not responsible for third-party offers.",
        "All content on the platform is protected; use is also subject to the Privacy Policy.",
        "Terms may change; continued use indicates acceptance.",
      ]);
    }
  };

  const loadPrivacy = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/content/privacy");
      setPrivacyData(res.data);
    } catch {
      setPrivacyData([
        "We collect user information only for insurance estimate processing.",
        "User data is encrypted and never sold to third-party advertisers.",
        "Cookies are used strictly for improving user experience and analytics.",
        "Users may request data deletion at any time.",
      ]);
    }
  };

  const loadDisclaimer = async () => {
    try {
      const res = await axios.get("https://yourapi.com/api/content/disclaimer");
      setDisclaimerData(res.data);
    } catch {
      setDisclaimerData([
        "Insurance estimates are informational and not binding.",
        "The platform does not issue policies; final decisions rest with licensed agents.",
        "We are not responsible for inaccuracies caused by third-party data sources.",
      ]);
    }
  };

  /* -------------------------------------------------
     SECTION BLOCK COMPONENT (BEAUTIFUL + EXACT UI)
  ------------------------------------------------- */
  const SectionBlock = ({ title, isOpen, toggle, data }) => (
    <section className="bg-white border border-[#E5E7EB] rounded-xl px-6 py-5 mb-5 shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>

      {isOpen && (
        <div className="mt-4 pl-1">
          {data.map((item, i) => (
            <div key={i} className="flex items-start gap-3 mb-3">
              <input type="checkbox" defaultChecked className="mt-1" />
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}

          <div className="flex justify-end gap-3 mt-4">
            <button className="px-5 py-1.5 border rounded-md text-sm text-[#2A6EEA] hover:bg-blue-50">
              Edit
            </button>
            <button className="px-5 py-1.5 bg-[#2A6EEA] text-white rounded-md text-sm hover:bg-blue-600">
              Add New
            </button>
          </div>
        </div>
      )}
    </section>
  );

  /* ---------------------- FAQ TAB ---------------------- */
 const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqList = [
    {
      q: "Is the insurance estimate accurate?",
      a: "Our Florida home insurance estimates are calculated using county-specific rate factors and the details you provide about your property. While they give a good indication of potential costs, actual premiums may vary based on the insurer, coverage options, and additional risk factors.",
    },
    { q: "Do I need to enter personal or financial info?", a: "" },
    { q: "Can I download or share my estimate?", a: "" },
    { q: "Does this work for all Florida homes?", a: "" },
    { q: "Can I speak with a real agent?", a: "" },
  ];

  return (
    <section className="bg-white border border-[#E5E7EB] rounded-xl px-6 py-6 shadow-sm">

      {/* Title */}
      <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-5">
        Frequently Asked Questions
      </h3>

      {/* Divider */}
      <div className="border-b mb-5" />

      <div className="space-y-3">
        {faqList.map((item, i) => (
          <div key={i} className="border rounded-lg">

            {/* Question row */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="text-sm text-[#1A1A1A] font-medium">
                {item.q}
              </span>

              {openIndex === i ? (
                <Minus size={18} className="text-gray-600" />
              ) : (
                <Plus size={18} className="text-gray-600" />
              )}
            </button>

            {/* Answer */}
            {openIndex === i && item.a && (
              <div className="px-5 pb-4 text-[13px] text-gray-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Buttons bottom right */}
      <div className="flex justify-end gap-3 mt-6">
        <button className="px-5 py-2 border rounded-md text-sm text-[#2A6EEA] hover:bg-blue-50">
          Edit
        </button>
        <button className="px-5 py-2 bg-[#2A6EEA] text-white rounded-md text-sm hover:bg-blue-600">
          Add New
        </button>
      </div>
    </section>
  );
};

  return (
    <div className="p-5 bg-[#F5F7FB] min-h-screen">

      {/* Page Header */}
      <h2 className="text-lg font-semibold text-[#154270] mb-3">
        Content <span className="text-[#59AC78]">Management</span>
      </h2>

      {/* Top Tabs EXACTLY LIKE DESIGN */}
      <div className="flex items-center gap-6 border-b pb-3 mb-6 text-sm">

        <button
          onClick={() => setTab("rate")}
          className={`px-4 py-1.5 rounded-md ${
            tab === "rate"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Rate Factors
        </button>

        <button
          onClick={() => setTab("legal")}
          className={`px-4 py-1.5 rounded-md ${
            tab === "legal"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Legal & Disclaimer
        </button>

        <button
          onClick={() => setTab("faq")}
          className={`px-4 py-1.5 rounded-md ${
            tab === "faq"
              ? "text-white bg-gradient-to-r from-[#154270] to-[#59AC78]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          FAQ Management
        </button>
      </div>

      {/* CONTENT AREA */}
      {tab === "legal" && (
        <>
          <SectionBlock
            title="Terms & Conditions"
            isOpen={openTerms}
            toggle={() => setOpenTerms(!openTerms)}
            data={termsData}
          />

          <SectionBlock
            title="Privacy Policy"
            isOpen={openPrivacy}
            toggle={() => setOpenPrivacy(!openPrivacy)}
            data={privacyData}
          />

          <SectionBlock
            title="Disclaimer"
            isOpen={openDisclaimer}
            toggle={() => setOpenDisclaimer(!openDisclaimer)}
            data={disclaimerData}
          />
        </>
      )}

      {tab === "faq" && <FAQSection />}

      {tab === "rate" && (
        <div className="text-center text-gray-500 mt-20">
          <p>Rate Factors module coming soon…</p>
        </div>
      )}
    </div>
  );
}
