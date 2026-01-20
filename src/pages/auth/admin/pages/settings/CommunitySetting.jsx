import React, { useState } from "react";

const CommunitySettings = () => {
  const [communityPrivacy, setcommunityPrivacy] = useState(true);



  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">Community Privacy Settings</h2>
        <p className="text-sm text-gray-500">When enabled, employees can only interact within your company group</p>
      </div>

      <div className="pt-2">
        {/* Notification Toggle Row */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-gray-700 font-medium ">Restrict to company only</p>
          </div>

          {/* Custom Toggle Switch */}
          <button
            onClick={() => setcommunityPrivacy(!communityPrivacy)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              communityPrivacy ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                communityPrivacy ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySettings;