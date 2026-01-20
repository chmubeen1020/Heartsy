import React, { useState } from "react";
import { Eye, EyeOff} from "lucide-react";

const SecuritySettings = () => {
  // States for toggling password visibility
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Form states
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving new security settings...", passwords);
    // Add validation and API logic here
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">Security Settings</h2>
        <p className="text-sm text-gray-500">Reset your Password</p>
      </div>

      <form onSubmit={handleSave} className="space-y-2 pt-4">
        {/* Current Password Field */}
        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors group">
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">
            Current Password
          </label>
          <div className="flex items-center">
            <input
              name="current"
              type={showCurrent ? "text" : "password"}
              value={passwords.current}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none  text-gray-700 placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* New Password Field */}
        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors group">
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">
            Enter New Password
          </label>
          <div className="flex items-center">
            <input
              name="new"
              type={showNew ? "text" : "password"}
              value={passwords.new}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm New Password Field */}
        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors group">
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">
            Re-enter New Password
          </label>
          <div className="flex items-center">
            <input
              name="confirm"
              type={showConfirm ? "text" : "password"}
              value={passwords.confirm}
              onChange={handleInputChange}
              className="w-full bg-transparent outline-none py-1 text-gray-700 placeholder:text-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-6 pt-4">
          
          <button className="w-full md:w-auto px-10 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all">
          Save
        </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySettings;