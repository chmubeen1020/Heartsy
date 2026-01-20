import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function DepartmentHeadSetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen relative bg-primary overflow-hidden">
        <img
          src="/form-bg-image.png"
          alt="Flower"
          className="absolute left-48 h-[90vh] w-4/5 opacity-40 scale-[1.3]"
        />
      {/* LEFT FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 text-white">
        {/* Optional flower image */}
        
        
       

        <div className="relative z-10 h-full flex flex-col justify-between pl-32 py-24 max-w-2xl">
          {/* Logo */}
          <img
          src="/heartsy-logo.png"
          alt="logo"
          className="w-24"
        />

          {/* Text content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Photo & Videos
            </h2>

            <p className="text-sm leading-relaxed opacity-90 max-w-md">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
              or a typeface without relying on meaningful content.
            </p>

            <p className="text-sm mt-6 opacity-70">
              © 2026 Heartsy. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="relative min-h-screen flex justify-end items-center">
        {/* Glow / shadow behind card */}
        <div className="bg-blue-300 w-6 h-[90vh] rounded-l-[40px] shadow-2xl"></div>
        <div className="relative bg-white min-h-screen w-2/5 h-full rounded-l-[40px] shadow-2xl flex flex-col justify-center items-center">
        <div className="w-full max-w-xl px-10">

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
           Set New Password
          </h1>

          <div className="space-y-5 mt-6">
            {/* Email */}

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-b border-gray-300 p-2 outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2 text-gray-500"
              >
                {showPassword ? <Eye size={18} /> :<EyeOff size={18} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border-b border-gray-300 p-2 outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-2 text-gray-500"
              >
                {showConfirmPassword ? <Eye size={18} /> :<EyeOff size={18} />}
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition">
              Reset Password
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
