import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to get the current URL
import { Home, BarChart, FileText, Users, Book, Settings } from "lucide-react"; // Import icons from lucide-react
import { images } from "../../../../assets";

const sidebarLinks = [
  { name: "Dashboard", icon: <Home className="w-5 h-5 mr-3" />, path: "/super-admin" },
  { name: "Data Analytics", icon: <BarChart className="w-5 h-5 mr-3" />, path: "/super-admin/data-analytics" },
  { name: "Assessments", icon: <FileText className="w-5 h-5 mr-3" />, path: "/super-admin/assessments" },
  { name: "Courses", icon: <Book className="w-5 h-5 mr-3" />, path: "/super-admin/courses" },
  { name: "User Management", icon: <Users className="w-5 h-5 mr-3" />, path: "/super-admin/user-management" },
  { name: "Settings", icon: <Settings className="w-5 h-5 mr-3" />, path: "/settings" },
];

const SuperAdminSidebar = () => {
  const location = useLocation(); // Get the current URL

  return (
    <div className="w-60 h-screen bg-Sidebar shadow-md flex flex-col items-center">
      <div className="p-5 flex items-center space-x-2">
        <img src={images.BlackHeartsyLogo} alt="Heartsy" className="w-20 h-14" />
      </div>
      <nav className="mt-8">
        <ul>
         {sidebarLinks.map((link) => {
  const isDashboard = link.path === "/super-admin";

  const isActive = isDashboard
    ? location.pathname === "/super-admin"
    : location.pathname.startsWith(link.path);

  return (
    <li key={link.name}>
      <Link
        to={link.path}
        className={`flex items-center p-2 font-medium rounded-xl mt-3 hover:bg-gray-100 ${
          isActive
            ? "text-[#945EEB]"
            : "text-gray-700"
        }`}
      >
        {link.icon}
        {link.name}

        {isActive && (
          <span className="ml-4 w-2 h-2 rounded-full bg-[#945EEB]" />
        )}
      </Link>
    </li>
  );
})}

        </ul>
      </nav>
    </div>
  );
};

export default SuperAdminSidebar;
