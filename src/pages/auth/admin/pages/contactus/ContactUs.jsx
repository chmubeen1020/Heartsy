import React, { useState } from "react";
import { Bell, Settings } from "lucide-react";
import { images } from "../../../../../assets";
import { ArrowLeft } from "lucide-react";
import ProfileDropdown from "../../../../../GlobalComponent/ProfileDropdown";

const ContactUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen relative bg-primary overflow-hidden flex flex-col px-4 md:px-10 lg:px-24 gap-32">
      <img
        src="/form-bg-image.png"
        alt="Flower"
        className="absolute left-0 h-[100vh] w-full opacity-70 scale-[1] z-0"
      />
      {/* LEFT FULL-WIDTH BACKGROUND */}
      <div className="flex justify-between items-center pt-4 md:pt-4">
        {/* Optional flower image */}
        <div className="z-10 h-full flex flex-col justify-between  max-w-2xl">
          {/* Logo */}
          <img src="/heartsy-logo.png" alt="logo" className="w-20" />
        </div>
        <div className="bg-white px-4 py-1 rounded-lg flex items-center space-x-2">
          <div className="relative">
            {/* Avatar trigger */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center space-x-2"
            >
              <div className="flex flex-col items-end ">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-[11px] font-medium text-primary">Admin</p>
              </div>
              <img
                src={images.Userpic}
                alt="John Doe"
                className="w-9 h-9 rounded-full"
              />
            </button>

            {/* Dropdown */}
            <ProfileDropdown open={open} onClose={() => setOpen(false)} />
          </div>
          <button className="relative bg-[#F1E9FC] w-9 h-9 flex justify-center items-center rounded-full border border-[#DBC9F8]">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>
          <button className="relative bg-[#F1E9FC] w-9 h-9 flex justify-center items-center rounded-full border border-[#DBC9F8]">
            <Settings className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className=" w-full p-2 md:p-6  max-w-4xl mx-auto relative z-20 md:mt-10">
        <div className=" text-white">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-lg">Back</span>
          </button>

          {/* Heading */}
          <h1 className="text-xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            We'd Love to hear from You
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          {/* Form Container */}
          <form className="space-y-4 max-w-6xl">
            {/* Row 1: Name and Subject */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
              <div className="flex-1 relative border-b border-white/50 focus-within:border-white transition-colors">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-white/30"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex-1 relative border-b border-white/50 focus-within:border-white transition-colors">
                <input
                  type="text"
                  className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-white/30"
                  placeholder="Subject"
                />
              </div>
            </div>

            {/* Row 2: Message */}
            <div className="relative border-b border-white/50 focus-within:border-white transition-colors">
              <input
                type="text"
                className="w-full bg-transparent outline-none py-2 text-lg placeholder:text-white/30"
                placeholder="Your Message"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-end gap-4 pt-4">
              <button
                type="button"
                className="px-4 py-1 md:py-2 rounded-xl border border-white/60 hover:bg-white/10 transition-colors font-medium  "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1 md:py-2 rounded-xl border border-white hover:bg-white hover:text-primary transition-all font-medium "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
