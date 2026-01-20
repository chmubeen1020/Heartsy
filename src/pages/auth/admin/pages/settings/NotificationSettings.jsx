import React, { useState } from "react";

const NotificationSettings = () => {
  const [allowNotifications, setAllowNotifications] = useState(true);

  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">Notification Preferences</h2>
        <p className="text-sm text-gray-500">Set your notifications preference</p>
      </div>

      <div className="pt-2">
        {/* Notification Toggle Row */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-gray-700 font-medium ">Allow Notifications</p>
          </div>

          {/* Custom Toggle Switch */}
          <button
            onClick={() => setAllowNotifications(!allowNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              allowNotifications ? "bg-primary" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                allowNotifications ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;