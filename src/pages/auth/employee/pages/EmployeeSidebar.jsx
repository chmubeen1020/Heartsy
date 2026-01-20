import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to get the current URL
import { FileText, Users,  LayoutDashboard, BookMarked, Lightbulb, Bot } from "lucide-react"; // Import icons from lucide-react
import { images } from "../../../../assets";

const sidebarLinks = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} className="mr-3" />, path: "/employee" },
  { name: "Learning", icon: <BookMarked size={18} className="mr-3" />, path: "/employee/learning" },
  { name: "Recommendation", icon: <Lightbulb size={18} className="mr-3" />, path: "/employee/recommendation" },
  { name: "Reports", icon: <FileText size={18} className="mr-3" />, path: "/employee/reports" },
  { name: "Community", icon: <Users size={18} className="mr-3" />, path: "/employee/community" },
  { name: "AI Coach", icon: <Bot size={18} className="mr-3" />, path: "/employee/ai-coach" },
];

const EmployeeSidebar = () => {
  const location = useLocation(); // Get the current URL

  return (
    <div className="w-full h-screen bg-[#F0F1F5] flex flex-col items-center justify-between border-r border-gray-100 pb-4">
      <div className="flex flex-col items-center">
      <div className="p-5 flex items-center space-x-2">
        <img src={images.BlackHeartsyLogo} alt="Heartsy" className="w-full max-w-sm" />
      </div>
      <nav className="mt-8">
        <ul>
         {sidebarLinks.map((link) => {
  const isDashboard = link.path === "/employee";

  const isActive = isDashboard
    ? location.pathname === "/employee"
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
      <div className="flex flex-col justify-end items-end">
         <img src={images.EmployeeSidebar} alt="Heartsy" className="w-full" />
      </div>
    </div>
  );
};

export default EmployeeSidebar