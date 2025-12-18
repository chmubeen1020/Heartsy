import { useEffect, useRef } from "react";
import { LogOut, MessageCircle } from "lucide-react";
import { images } from "../../../../assets";

const ProfileDropdown = ({ open, onClose }) => {
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 top-14 w-48 bg-white rounded-2xl shadow-xl border p-2 z-50"
    >
      {/* User info */}
      <div className="flex items-center gap-3">
        <img
          src={images.Userpic} // replace later
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Jhon Doe</p>
          <p className="text-sm text-primary">Super Admin</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gray-200" />

      {/* Contact */}
      <button className="w-full flex items-center gap-3 text-gray-800 py-2 px-2 hover:bg-gray-50 rounded-lg">
        <MessageCircle size={20} />
        <span className="text-sm">Contact</span>
      </button>

      {/* Sign out */}
      <button className="w-full flex items-center gap-3 text-red-500 py-2 px-2 hover:bg-red-50 rounded-lg mt-1">
        <LogOut size={20} />
        <span className="text-sm">Sign Out</span>
      </button>
    </div>
  );
};

export default ProfileDropdown;
