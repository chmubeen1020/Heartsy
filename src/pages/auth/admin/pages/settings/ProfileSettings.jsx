import React, { useState, useRef } from "react";
import { Upload } from "lucide-react";

const ProfileSettings = () => {
  // Default image or placeholder
  const [profileImage, setProfileImage] = useState("https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">Profile Settings</h2>
        <p className="text-sm text-gray-500">Edit Your Company Profile Details</p>
      </div>

      {/* Avatar and Upload Area */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative shrink-0">
          <img
            src={profileImage  }
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover  shadow-lg"
          />
        </div>

        {/* Upload Dropzone */}
        <div 
          onClick={triggerFileInput}
          className="w-full border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/*"
          />
          <div className="bg-primary/10 p-2 rounded-full mb-3 group-hover:scale-110 transition-transform">
          <div className="bg-primary p-1 rounded-full group-hover:scale-110 transition-transform">
            <Upload size={24} className="text-white" />
          </div>
          </div>
          <p className="text-sm ">
            <span className="text-primary font-medium text-lg">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-400 mt-1 uppercase">SVG, PNG, JPG or GIF (max. 800×400px)</p>
        </div>
      </div>

      {/* Form Fields - Matching the Underline UI */}
      <div className="space-y-4 pt-4">
        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">Name</label>
          <input 
            type="text" 
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-300"
          />
        </div>

        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
          <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">Email</label>
          <input 
            type="email" 
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-300"
          />
        </div>

        <div className="relative border-b border-gray-200 focus-within:border-primary transition-colors">
         <label className="block text-xs font-medium text-gray-600 uppercase tracking-wider ">Phone</label>
          <input 
            type="tel" 
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-300"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <button className="w-full md:w-auto px-10 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;