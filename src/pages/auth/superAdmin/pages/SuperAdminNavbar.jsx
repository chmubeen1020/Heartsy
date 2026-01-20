import React, { useState } from "react";
import { Bell, Menu } from "lucide-react"; // Icon for notifications
import { images } from "../../../../assets";
import { Search } from "lucide-react"; // Import the search icon from lucide-react
import ProfileDropdown from "../../../../GlobalComponent/ProfileDropdown";

const SuperAdminNavbar = ({toggleSidebar}) => {
  const type = 'Super Admin'
    const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center p-3 md:p-4 bg-sidebar ">
      <div className="lg:hidden">
        <Menu onClick={toggleSidebar} size={20}/>
      </div>
       <div className="hidden lg:flex items-center space-x-4 w-full max-w-sm">
      <div className="relative w-full">
        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 outline-none"
        />
      </div>
    </div>
      <div className="flex items-center space-x-2">
        <button className="relative bg-[#F1E9FC] p-2 rounded-full border border-gray-200">
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
        <div className="hidden lg:flex flex-col items-start pl-2">
          <p className="text-sm font-medium text-gray-700">
            John Doe
          </p>
          <p className="text-sm font-medium text-primary">
            {type}
          </p>
        </div>
      </button>

      {/* Dropdown */}
      <ProfileDropdown open={open} onClose={() => setOpen(false)} type = {type}/>
    </div>
      </div>
    </div>
  );
};

export default SuperAdminNavbar;
