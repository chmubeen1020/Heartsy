import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // 1. Import useLocation
import { User, Shield, Bell, Users, CreditCard } from "lucide-react";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import CommunitySettings from "./CommunitySetting";
import BillingSettings from "./BillingSettings";

const SettingsLayout = () => {
  const location = useLocation(); // 2. Get current path
  const [activeTab, setActiveTab] = useState("Profile");

  // 3. Define Tab configurations
  const AdminTabs = [
    { name: "Profile", icon: <User size={18} /> },
    { name: "Security", icon: <Shield size={18} /> },
    { name: "Notifications", icon: <Bell size={18} /> },
    { name: "Community", icon: <Users size={18} /> },
    { name: "Billing", icon: <CreditCard size={18} /> },
  ];

  const EmployeeTabs = [
    { name: "Profile", icon: <User size={18} /> },
    { name: "Security", icon: <Shield size={18} /> },
    { name: "Notifications", icon: <Bell size={18} /> },
  ];

  // 4. Determine which tabs to use based on URL
  const isAdmin = location.pathname.startsWith("/admin");
  const currentTabs = isAdmin ? AdminTabs : EmployeeTabs;

  return (
    <div className="bg-gray-50 p-2 md:p-4 min-h-screen">
      <div className="w-full mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
        
        {/* Responsive Internal Nav */}
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 px-2 py-4 md:px-8 border-b border-gray-300 md:border-none overflow-x-auto no-scrollbar whitespace-nowrap md:mt-2">
          {currentTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-1 md:py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.name
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="p-2 md:p-8">
          {/* Always available for both */}
          {activeTab === "Profile" && <ProfileSettings />}
          {activeTab === "Security" && <SecuritySettings />}
          {activeTab === "Notifications" && <NotificationSettings />}

          {/* Only render if isAdmin is true */}
          {isAdmin && (
            <>
              {activeTab === "Community" && <CommunitySettings />}
              {activeTab === "Billing" && <BillingSettings />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;