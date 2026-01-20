import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Search,
} from "lucide-react";
import { Icon, images } from "../../../../../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DATA = {
  heading1: "Assessment ID: ACS-0001",
  heading2: "Advanced Communication Strategies",
  description:
    "Enhance your already strong communication skills with advanced techniques for difficult conversations.",
  duration: "1 hour",
  keyPoints: ["communication", "Leadership"],
};

// Mock data for mapping
const INITIAL_EMPLOYEES = [
  {
    id: 1,
    name: "Rayan Mitchel",
    status: "Active",
    assignDate: "Aug 17, 2025",
    dueDate: "Aug 20, 2025",
    state: "Completed",
  },
  {
    id: 2,
    name: "Rayan Mitchel",
    status: "Active",
    assignDate: "Aug 15, 2025",
    dueDate: "Aug 18, 2025",
    state: "Pending",
  },
  {
    id: 3,
    name: "Rayan Mitchel",
    status: "Active",
    assignDate: "Aug 19, 2025",
    dueDate: "Aug 22, 2025",
    state: "Completed",
  },
];

const AssesstmentDetails = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // Date sorting function
  const handleSort = (field) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const sortedData = [...employees].sort((a, b) => {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
    setEmployees(sortedData);
  };

  return (
    <div className="relative w-full p-4 md:p-6 space-y-4">
      {/* Back Button */}
      <div
        className="flex items-center gap-2 cursor-pointer w-fit"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={18} />
        <p>Back</p>
      </div>

      {/* Header Info */}
      <div className="space-y-2">
        <h3 className="text-primary">{DATA.heading1}</h3>
        <h3 className="text-xl font-medium text-primary">{DATA.heading2}</h3>
        <p className="text-[#2A3F54] text-sm">{DATA.description}</p>
        <p className="text-[#2A3F54] text-sm mt-1">Duration</p>
        <p className="font-medium">{DATA.duration}</p>
        <div className="flex gap-2 mt-2">
          {DATA.keyPoints.map((key) => (
            <p
              key={key}
              className="text-xs text-white bg-primary rounded-full px-2 py-1"
            >
              {key}
            </p>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-2">
        <div className="w-full md:w-fit flex justify-between gap-4">
          <div className="flex gap-1 md:gap-2 items-center ">
            <h1 className="text-base md:text-xl">Employees Assigned</h1>
            <span className="text-xs bg-primary/10 text-primary rounded-full py-1 px-2 font-medium">
              27
            </span>
          </div>
          <div className="md:hidden">
            <div className=" border border-gray-400 py-1 px-2 md:px-4 rounded-lg font-medium flex items-center gap-2">
              <img src={Icon.Filter} alt="" className="w-4 h-4" />
              Filters
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-full  md:max-w-sm mt-4 md:mt-0">
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
            <div className=" border border-gray-400 py-1 px-4 rounded-lg font-medium flex items-center gap-2">
              <img src={Icon.Filter} alt="" className="w-4 h-4" />
              Filters
            </div>
          </div>
        </div>
      </div>

      {/* Table Header */}
      {/* 1. Scrollable Wrapper */}
      {/* 1. Scrollable Wrapper */}
      <div className="w-full overflow-x-auto">
        {/* 2. Min-width container to preserve "original state" */}
        <div className="w-full">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-2 border-b border-gray-200 pt-4 px-4 text-sm font-medium text-gray-500">
            <div className="col-span-7">Name</div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
              onClick={() => handleSort("assignDate")}
            >
              Assign Date <ChevronsUpDown size={14} />
            </div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
              onClick={() => handleSort("dueDate")}
            >
              Due Date <ChevronsUpDown size={14} />
            </div>
            <div className="col-span-1">Status</div>
          </div>

          {/* Table Body */}
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="hidden md:grid grid-cols-12 gap-2 border-b border-gray-200 px-4 py-3 text-sm font-medium items-center hover:bg-gray-50 transition-colors"
            >
              <div className="col-span-7">
                <div className="flex items-center gap-3">
                  <img
                    src={images.Userpic}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="space-y-0.5">
                    <p className="flex items-center gap-1 lg:text-lg">
                      {emp.name}
                      <span className="bg-green-400 w-1.5 h-1.5 rounded-full mt-1"></span>
                      <span className="text-[#557AA0] text-xs font-normal">
                        {emp.status}
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      {DATA.keyPoints.map((key) => (
                        <p
                          key={key}
                          className="text-[10px] bg-primary/10 text-primary rounded-full px-2"
                        >
                          {key}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-[#6C6E7E]">{emp.assignDate}</div>
              <div className="col-span-2 text-[#6C6E7E]">{emp.dueDate}</div>
              <div className="col-span-1">
                <p
                  className={`w-fit rounded-lg px-2 py-1 text-xs ${
                    emp.state === "Completed"
                      ? "text-[#008236] bg-[#B9F8CF]"
                      : "text-primary bg-primary/10"
                  }`}
                >
                  {emp.state}
                </p>
              </div>
            </div>
          ))}
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="md:hidden w-full flex flex-col  gap-2 border-b border-gray-200 px-4 py-3 text-sm font-medium items-start hover:bg-gray-50 transition-colors"
            >
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <img
                    src={images.Userpic}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="space-y-0.5">
                    <p className="flex items-center gap-1 lg:text-lg">
                      {emp.name}
                      <span className="bg-green-400 w-1.5 h-1.5 rounded-full mt-1"></span>
                      <span className="text-[#557AA0] text-xs font-normal">
                        {emp.status}
                      </span>
                    </p>
                    <div className="flex items-center gap-2">
                      {DATA.keyPoints.map((key) => (
                        <p
                          key={key}
                          className="text-[10px] bg-primary/10 text-primary rounded-full px-2"
                        >
                          {key}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[#6C6E7E]">
                Assign Date : {emp.assignDate}
              </div>
              <div className=" text-[#6C6E7E]">Due Date: {emp.dueDate}</div>
              <div className="w-full">
                <p
                  className={`w-full flex justify-center rounded-lg px-2 py-1 text-xs ${
                    emp.state === "Completed"
                      ? "text-[#008236] bg-[#B9F8CF]"
                      : "text-primary bg-primary/10"
                  }`}
                >
                  {emp.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center pt-6">
        <div className="flex space-x-2">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, "...", 99].map((page, idx) => (
            <button
              key={idx}
              className="px-4 py-2 border border-gray-300 rounded-md font-medium hover:bg-gray-50"
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssesstmentDetails;
