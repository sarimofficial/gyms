import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgentLogin() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/agent/dashboard");
  };

  return (
    <div className="h-screen w-full relative font-['Inter',sans-serif]">

      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/agentpanelimages/panelbg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="background"
      />

      {/* RIGHT-SIDE CONTAINER */}
      <div className="absolute right-0 top-0 h-full flex items-center px-4 sm:px-12 md:px-20">

        {/* LOGIN CARD */}
        <div
          className="
            relative
            bg-white rounded-[32px] shadow-xl border border-gray-200 
            px-14 pt-16 pb-12
          "
          style={{ 
            width: "550px",      // wider for breathing room 
            height: "750px"      // taller to match Figma 
          }}
        >

          {/* ===== DECORATIVE LOGO SHAPE (BOTTOM RIGHT) ===== */}
          <img
            src="/assets/agentpanelimages/loginshape.png"
            className="
              absolute 
              bottom-[-10px]     /* move upward inside card */
              right-[10px]      /* not too tight to the edge */
              w-[270px]         /* increased size */
              h-[230px]
              opacity-250        /* soft faint like figma */
              pointer-events-none 
              z-0
            "
            alt="shape"
          />

          {/* CONTENT ABOVE SHAPE */}
          <div className="relative z-10">

            {/* LOGO */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/assets/agentpanelimages/floridalogo.png"
                className="w-16 mb-4"
                alt="logo"
              />
              <h2 className="text-[17px] font-semibold text-gray-900 text-center">
                Florida Insurance Estimator
              </h2>
            </div>

            {/* TITLE */}
            <h3 className="text-center text-[24px] font-semibold text-gray-900">
              Welcome, Agent!
            </h3>

            <p className="text-center text-gray-500 text-sm mb-10">
              Manage counties, leads, and subscription all in one place!
            </p>

            {/* FORM */}
            <form className="space-y-8" onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div>
                <label className="text-gray-700 text-[14px]">Email</label>
                <input
                  type="email"
                  required
                  placeholder="amandagreene@example.com"
                  className="
                    w-full mt-1 px-4 py-3.5 
                    border border-gray-300 rounded-lg
                    placeholder-gray-400 text-sm focus:outline-none
                    bg-[#F4F8FF]
                  "
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-gray-700 text-[14px]">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    className="
                      w-full mt-1 px-4 py-3.5
                      border border-gray-300 rounded-lg
                      text-sm focus:outline-none
                      bg-[#F4F8FF]
                    "
                  />

                  {/* EYE ICON */}
                  <img
                    src={
                      showPass
                        ? "https://img.icons8.com/ios-glyphs/24/000000/hide.png"
                        : "https://img.icons8.com/ios-glyphs/24/000000/visible.png"
                    }
                    onClick={() => setShowPass(!showPass)}
                    className="
                      w-5 absolute right-4 top-1/2 -translate-y-1/2 
                      cursor-pointer opacity-70
                    "
                    alt="toggle"
                  />
                </div>

                {/* FORGOT PASSWORD */}
                <div className="mt-2 text-right">
                  <button
                    type="button"
                    className="text-[11px] text-[#2A6EEA]"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="
                  w-full py-4 rounded-lg 
                  text-white text-sm font-medium
                  bg-gradient-to-r 
                  from-[#154270] via-[#59AC78] to-[#3CBC78]
                "
              >
                Login
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
