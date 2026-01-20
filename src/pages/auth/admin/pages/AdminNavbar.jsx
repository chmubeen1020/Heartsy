import React, { useState } from "react";
import { Bell, Menu, Settings } from "lucide-react"; // Icon for notifications
import { images } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "../../../../GlobalComponent/ProfileDropdown";

const AdminNavbar = ({toggleSidebar}) => {
  const type = "Admin";
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSettings = () => {
    navigate('settings');
  }
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-[#F0F1F5]">
      <div className="flex items-center gap-4 lg:gap-0">
      <div className="lg:hidden">
        <Menu onClick={toggleSidebar} size={18}/>
      </div>
      <div className="hidden md:flex items-center space-x-4 w-full max-w-sm">
        <h2 className=" text-lg">
          Hello <strong>Dr Glenn</strong>, welcome back!
        </h2>
      </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          {/* Avatar trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-1"
          >
            <div className="hidden md:flex flex-col items-end ">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-[10px] font-medium text-primary">{type }</p>
            </div>
            <img
              src={images.Userpic}
              alt="John Doe"
              className="w-8 h-8 rounded-full"
            />
          </button>

          {/* Dropdown */}
          <ProfileDropdown open={open} onClose={() => setOpen(false)} type = {type }/>
        </div>
        <button className="relative bg-[#F1E9FC] w-10 h-10 flex justify-center items-center rounded-full border border-[#DBC9F8]">
          <Bell className="w-5 h-5 text-gray-700" />
        </button>
        <button className="relative bg-[#F1E9FC] w-10 h-10 flex justify-center items-center rounded-full border border-[#DBC9F8]" 
        onClick={handleSettings}>
          <Settings className="w-5 h-5 text-gray-700" />
        </button>
        
      </div>
    </div>
  );
};

export default AdminNavbar;
