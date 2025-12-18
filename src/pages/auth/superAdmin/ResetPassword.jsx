import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export default function SuperAdminResetPassword() {
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen relative bg-primary overflow-hidden flex flex-col justify-center">
      <img
        src="/form-bg-image.png"
        alt="Flower"
        className="absolute left-48 h-[80vh] w-4/5 opacity-40 scale-[1.2] z-0"
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
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="bg-white w-full max-w-sm py-4 rounded-xl flex flex-col justify-start items-center mx-auto relative z-20">
        <div className="w-full px-6 py-4 flex flex-col justify-between">
          <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
           Set New Password
          </h1>
          </div>

          <div className="space-y-5 mt-6  text-center">

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
            <button className="w-fit px-4 bg-primary hover:bg-primaryDark text-white py-3 rounded-lg font-medium transition">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
