import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to get the current URL
import { FileText, Users,  ChartColumnBig, ChartLine, Building2, ListChecks } from "lucide-react"; // Import icons from lucide-react
import { images } from "../../../../assets";

const sidebarLinks = [
  { name: "Overview", icon: <ChartColumnBig size={18} className="mr-3" />, path: "/admin" },
  { name: "Data Analytics", icon: <ChartLine size={18} className="mr-3" />, path: "/admin/data-analytics" },
  { name: "User Management", icon: <Users size={18} className="mr-3" />, path: "/admin/user-management" },
  { name: "Manage Departments", icon: <Building2 size={18} className="mr-3" />, path: "/admin/manage-departments" },
  { name: "Assessments", icon: <ListChecks size={18} className="mr-3" />, path: "/admin/assessments" },
  { name: "Courses", icon: <FileText size={18} className="mr-3" />, path: "/admin/courses" },
];

const AdminSidebar = () => {
  const location = useLocation(); // Get the current URL

  return (
    <div className="w-full h-screen bg-[#F0F1F5] flex flex-col items-center border-r border-gray-100">
      <div className="p-5 flex items-center space-x-2">
        <img src={images.BlackHeartsyLogo} alt="Heartsy" className="w-20 h-14" />
      </div>
      <nav className="mt-8">
        <ul>
         {sidebarLinks.map((link) => {
  const isDashboard = link.path === "/admin";

  const isActive = isDashboard
    ? location.pathname === "/admin"
    : location.pathname.startsWith(link.path);

  return (
    <li key={link.name}>
      <Link
        to={link.path}
        className={`flex items-center p-2 font-medium rounded-xl mt-3  ${
          isActive
            ? "text-white bg-[#7028E4]"
            : "text-[#7028E4] hover:bg-gray-100"
        }`}
      >
        {link.icon}
        {link.name}
          <span className={`ml-4 w-2 h-2 rounded-full ${isActive ? "bg-white" : "bg-transparent"}`} />
      </Link>
    </li>
  );
})}

        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
