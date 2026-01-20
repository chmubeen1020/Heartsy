import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { X } from "lucide-react"; // Or your preferred icon library

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* --- SIDEBAR SECTION --- */}
      
      {/* Mobile Overlay (Backdrop) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 lg:z-0 w-64 lg:w-60 xl:w-64 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden absolute right-4 top-4 p-2 text-white bg-primary rounded-md"
        >
          <X size={20} />
        </button>
        
        <AdminSidebar />
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="flex-1 flex flex-col">
        {/* Pass toggleSidebar to Navbar so the Hamburger button can trigger it */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        <div
          id="super-admin-scroll"
          className="flex-1 bg-sidebar overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;