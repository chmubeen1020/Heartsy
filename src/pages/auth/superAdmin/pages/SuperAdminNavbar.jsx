import React, { useState } from "react";
import { Bell } from "lucide-react"; // Icon for notifications
import { images } from "../../../../assets";
import { Search } from "lucide-react"; // Import the search icon from lucide-react
import ProfileDropdown from "./ProfileDropdown";

const SuperAdminNavbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-4 bg-Sidebar shadow-md">
       <div className="flex items-center space-x-4 w-full max-w-sm">
      <div className="relative w-full">
        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 outline-none"
        />
      </div>
    </div>
      <div className="flex items-center space-x-6">
        <button className="relative bg-[#F1E9FC] p-2 rounded-full border">
          <Bell className="w-6 h-6 text-gray-700" />
        </button>
         <div className="relative">
      {/* Avatar trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2"
      >
        <img
          src={images.Userpic}
          alt="John Doe"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col items-start pl-2">
          <p className="text-sm font-medium text-gray-700">
            John Doe
          </p>
          <p className="text-sm font-medium text-primary">
            Super Admin
          </p>
        </div>
      </button>

      {/* Dropdown */}
      <ProfileDropdown open={open} onClose={() => setOpen(false)} />
    </div>
      </div>
    </div>
  );
};

export default SuperAdminNavbar;
