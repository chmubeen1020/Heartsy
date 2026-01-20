import React, { useState } from "react";
import AssessmentApp from "./AssestmentOverview";
import EmployeeNavbar from "../EmployeeNavbar";


const AssesstmentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* --- SIDEBAR SECTION --- */}

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="flex-1 flex flex-col">
        {/* Pass toggleSidebar to Navbar so the Hamburger button can trigger it */}
        <EmployeeNavbar toggleSidebar={toggleSidebar} assesstment={true} />

        <div
          id="super-admin-scroll"
          className="flex-1 bg-sidebar overflow-y-auto"
        >
          <AssessmentApp />
        </div>
      </div>
    </div>
  );
};

export default AssesstmentLayout