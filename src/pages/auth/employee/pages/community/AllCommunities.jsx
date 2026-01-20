import React from "react";
import { Users, MessageSquare, UserPlus, Hash } from "lucide-react";

// Dummy Data for Communities
const userCommunities = [
  {
    id: 1,
    name: "My Company Group",
    description: "Connect with colleagues from your organization",
    memberCount: "156 Members",
    messageCount: "423 Messages",
    path: "community/chats",
  },
  {
    id: 2,
    name: "All Users Community",
    description: "Collaborate across all organizations on the platform",
    memberCount: "2,847 Members",
    messageCount: "8,901 Messages",
    path: "community/chats",
  },
];

// Stats Configuration
const stats = [
  {
    label: "Active users",
    value: "168",
    icon: <Users size={16} />,
    color: "border-green-500 bg-green-50 text-green-700",
  },
  {
    label: "New messages",
    value: "24",
    icon: <MessageSquare size={16} />,
    color: "border-blue-500 bg-blue-50 text-blue-700",
  },
  {
    label: "New members",
    value: "87.4%",
    icon: <UserPlus size={16} />,
    color: "border-purple-500 bg-purple-50 text-purple-700",
  },
  {
    label: "Active Threads",
    value: "34",
    icon: <Hash size={16} />,
    color: "border-slate-400 bg-slate-50 text-slate-700",
  },
];

const CommunityDashboard = () => {
  return (
    <div className=" mx-auto p-4 space-y-8 bg-white min-h-screen ">
      {/* 1. Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-xl border ${stat.color} `}>
            <div className="mb-1">{stat.icon}</div>
            <p className="text-xs text-black lg:text-base ">{stat.label}</p>

            <div className="text-2xl text-black font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* 2. Main Dashboard Container */}
      <section className="bg-white border border-gray-100 rounded-xl p-4 ">
        <header className="mb-8">
          <h1 className=" text-xl 2xl:text-2xl font-medium text-slate-800">
            Community Dashboard
          </h1>
          <p className="text-slate-400 text-sm">
            Connect and collaborate with your team and beyond
          </p>
        </header>

        {/* Community List Mapping */}
        <div className="space-y-6">
          {userCommunities.map((community) => (
            <div
              key={community.id}
              className="bg-[#f3f0ff] border border-purple-100 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-6 d"
            >
              <div className="space-y-3">
                <div>
                  <h2 className="text-xl 2xl:text-2xl font-bold text-primary">
                    {community.name}
                  </h2>
                  <p className="text-primary text-sm">
                    {community.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs xl:text-sm font-medium mb-1">
                    <Users size={14} />
                    {community.memberCount}
                  </div>
                  <span className="bg-primary/10 text-[#6d28d9] px-3 py-1 rounded-full text-xs xl:text-sm font-medium">
                    {community.messageCount}
                  </span>
                </div>
              </div>

              <a
                href={community.path}
                className="text-center px-6 py-3 bg-primary text-white rounded-xl text-sm  transition-all hover:bg-primary/90"
              >
                Enter Company Community
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityDashboard;
