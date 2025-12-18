import { images } from "../../../assets";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COMPANY_TYPES = ["Startup", "SME", "Enterprise", "Agency", "Non-Profit"];

const SOURCES = [
  "Social Media",
  "Referral",
  "Search Engine",
  "Advertisement",
  "Other",
];

export default function AdminSetupAccount() {
  const [companyType, setCompanyType] = useState("");
  const [source, setSource] = useState("");

  const [openType, setOpenType] = useState(false);
  const [openSource, setOpenSource] = useState(false);

  const typeRef = useRef(null);
  const sourceRef = useRef(null);
  const navigate = useNavigate();

  const ChoosePlan = () => {
    navigate("/auth/admin/choose-plan")
  }
 
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        typeRef.current &&
        !typeRef.current.contains(e.target) &&
        sourceRef.current &&
        !sourceRef.current.contains(e.target)
      ) {
        setOpenType(false);
        setOpenSource(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen h-full relative bg-white overflow-hidden">
      <div className="absolute top-[60px] left-[60px]">
        <img src={images.BlackHeartsyLogo} alt="logo" className="w-24" />
      </div>
       <div className="absolute bottom-[60px] left-[60px]">
        <p className="text-sm text-[#2D2E33] mt-6 opacity-80">
          © 2026 Heartsy. All rights reserved
        </p>
      </div>
      <div className="w-full h-screen mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-lg text-left space-y-4">
          <h2 className="text-3xl font-bold mb-4">
            Setup your Company Profile
          </h2>

          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border-b border-primary/20 text-xl px-2 py-4 focus:outline-none"
          />

          {/* Number of Users */}
          <input
            type="number"
            placeholder="Number of Users/Employees"
            className="w-full border-b border-primary/20 text-xl px-2 py-4 focus:outline-none"
          />

          {/* Company Type (Custom Dropdown) */}
          <div className="relative" ref={typeRef}>
            <button
              onClick={() => {
                setOpenType(!openType);
                setOpenSource(false);
              }}
              className="w-full flex items-center justify-between border-b border-primary/20 text-xl px-2 py-4"
            >
              <span className={companyType ? "text-black" : "text-gray-400"}>
                {companyType || "Company Type"}
              </span>
              <ChevronDown size={20} />
            </button>

            {openType && (
              <div className="absolute z-20 w-full mt-2 bg-white border rounded-xl shadow-lg overflow-hidden">
                {COMPANY_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setCompanyType(type);
                      setOpenType(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-primary/10"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Source (Custom Dropdown) */}
          <div className="relative" ref={sourceRef}>
            <button
              onClick={() => {
                setOpenSource(!openSource);
                setOpenType(false);
              }}
              className="w-full flex items-center justify-between border-b border-primary/20 text-xl px-2 py-4"
            >
              <span className={source ? "text-black" : "text-gray-400"}>
                {source || "What brought you here"}
              </span>
              <ChevronDown size={20} />
            </button>

            {openSource && (
              <div className="absolute z-20 w-full mt-2 bg-white border rounded-xl shadow-lg overflow-hidden">
                {SOURCES.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSource(item);
                      setOpenSource(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-primary/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button className="border px-4 py-2 text-lg rounded-lg">
              Skip
            </button>
            <button className="bg-primary text-white px-6 py-2 text-lg rounded-lg" onClick={ChoosePlan}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
