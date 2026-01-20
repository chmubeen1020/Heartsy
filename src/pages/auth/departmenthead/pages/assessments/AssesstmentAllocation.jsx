import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Icon } from "../../../../../assets";
import AssignAssessmentModal from "../../../../../GlobalComponent/AssignAssesmentModal";

const Assestments = [
  {
    heading1: "Assessment ID: ACS-0001",
    heading2: "Advanced Communication Strategies",
    description: "Enhance your already strong communication skills with advanced techniques for difficult conversations.",
    duration: "1 hour",
    keyPoints: ["communication", "Leadership"]
  },
  {
    heading1: "Assessment ID: ACS-0001",
    heading2: "Leading Through Change",
    description: "Leverage your adaptability to become a change champion in your organization.",
    duration: "10 minutes",
    keyPoints: ["change management", "Leadership"]
  },
  {
    heading1: "Assessment ID: ACS-0001",
    heading2: "Daily Collaboration Tip",
    description: "Leverage your adaptability to become a change champion in your organization.",
    duration: "15 minutes",
    keyPoints: ["Team Work"]
  },
]
const AssesstmentAllocation = () => {
  const [openAssignAssestment, setOpenAssignAssestment] = useState(false);
  return (
    <div className="relative flex-1 p-4 md:p-6">
      <div className="md:hidden flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <h1 className="">Assesments</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className=" border border-gray-300 px-2 py-1 text-sm rounded-lg font-medium flex items-center gap-2">
            <img src={Icon.Filter} alt="" className="w-4 h-4" />
            Filters
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
        <div className="hidden md:flex gap-2 items-center">
          <h1 className="text-xl">Assesments</h1>
        </div>
        <div className="flex items-center space-x-4 w-full max-w-xs md:max-w-sm mt-4 md:mt-0">
          <div className="relative w-full text-primary">
            <Search
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full  pl-4 pr-4 py-1 rounded-lg border border-primary text-primary outline-none"
            />
          </div>
        </div>
        <div>
          <div className="hidden md:flex items-center gap-2">
            <div className=" border border-gray-300 py-1 px-4 rounded-lg font-medium flex items-center gap-2">
              <img src={Icon.Filter} alt="" className="w-4 h-4" />
              Filters
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {Assestments.map((data, index) => (
        <div className="border border-gray-200 rounded-xl px-4 py-2">
          <h3 className="text-primary">{data.heading1}</h3>
          <p className="text-xl font-medium text-primary">{data.heading2}</p>
          <p className="text-[#2A3F54] text-sm">{data.description}</p>
          <p className="text-[#2A3F54] text-sm mt-1">Duration</p>
          <p className="font-medium">{data.duration}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            {data.keyPoints.map((key , index) =>(
            <p className="text-xs text-white bg-primary rounded-full px-2 py-1">{key}</p>
            ))}
            </div>
            <div>
              <button className=" text-white bg-primary rounded-lg px-4 py-2"onClick={() => setOpenAssignAssestment(true)}>Assign</button>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-2 md:space-x-4">
            <button
              className="px-2 md:px-4 py-2 rounded-md border border-gray-200 disabled:opacity-50"
            >
              <ChevronLeft size={14} />
            </button>
              <button
                className={`px-2 md:px-4 border py-2 font-medium rounded-md border-gray-200`}
              >
                1
              </button>
              <button
                className={`px-2 md:px-4 border py-2 font-medium rounded-md border-gray-200`}
              >
                2
              </button>
            <button>...</button>

            <button
              className={`px-2 md:px-4 border py-2 font-medium rounded-md bg-white border-gray-200 `}
            >
              99
            </button>
            <button
              className="px-2 md:px-4 py-2 rounded-md border border-gray-200 disabled:opacity-50"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
        <AssignAssessmentModal
        open={openAssignAssestment}
        onClose={() => setOpenAssignAssestment(false)}
      /> 
    </div>
  );
};

export default AssesstmentAllocation