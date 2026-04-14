import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: "url('/assets/images/adminbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: '"DM Sans", sans-serif',
      }}
    >
      {/* WHITE FORM CARD – EXACT FIGMA WIDTH 757px */}
<div
  className="
    w-60px
    max-w-[590px]
    bg-white
    rounded-[23px]
    shadow-xl
    border border-gray-200
    p-8 sm:p-10 lg:p-12
    bg-opacity-95
    backdrop-blur-md
    -mr-240
  "
>
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/assets/images/floridalogo.png"
            className="h-16 w-16 object-contain mb-3"
          />
          <h1 className="text-[17px] font-semibold text-[#154270]">
            Florida Insurance Estimator
          </h1>
        </div>

        {/* Welcome */}
        <h2 className="text-center text-[22px] font-semibold text-[#2A2A2A] mb-1">
          Welcome, Admin!
        </h2>
        <p className="text-center text-gray-500 text-[14px] mb-8">
          Manage counties, leads, and subscription all in one place!
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#2A2A2A] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="amandagreene@example.com"
              required
              className="
                w-full 
                border border-[#D0D5DD] 
                rounded-md 
                px-4 py-3 
                bg-white/80 
                focus:ring-2 focus:ring-[#154270] 
                outline-none 
                text-[15px]
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#2A2A2A] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
                className="
                  w-full 
                  border border-[#D0D5DD] 
                  rounded-md 
                  px-4 py-3 pr-12
                  bg-white/80 
                  focus:ring-2 focus:ring-[#154270] 
                  outline-none 
                  text-[15px]
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#2A2A2A] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                required
                className="
                  w-full 
                  border border-[#D0D5DD] 
                  rounded-md 
                  px-4 py-3 pr-12
                  bg-white/80 
                  focus:ring-2 focus:ring-[#154270] 
                  outline-none 
                  text-[15px]
                "
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full 
              py-3 
              rounded-md 
              text-white 
              text-[15px] 
              font-medium 
              bg-gradient-to-r from-[#154270] to-[#59AC78] 
              hover:opacity-90 
              transition
            "
          >
            Sign Up
          </button>

          {/* Terms */}
          <p className="text-center text-gray-500 text-[11px] leading-relaxed mt-2">
            By completing the sign-up process, a user is legally agreeing to the
            terms and conditions and privacy policy of a service.
          </p>
        </form>
      </div>
    </div>
  );
}
