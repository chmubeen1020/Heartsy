import React from "react";
import SuperAdminNavbar from "./SuperAdminNavbar";
import SuperAdminSidebar from "./SuperAdminSidebar";
import { Outlet } from "react-router-dom";

const SuperAdminLayout = () => {
  return (
    <div className="flex h-screen">
      <SuperAdminSidebar />

      <div className="flex-1 flex flex-col">
        <SuperAdminNavbar />

        {/* 👇 THIS IS THE SCROLL CONTAINER */}
        <div
          id="super-admin-scroll"
          className="flex-1 overflow-y-auto"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
