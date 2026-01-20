import React, { useEffect, useRef, useState } from "react";
import {
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Search,
} from "lucide-react";
import { Icon, images } from "../../../../../assets";
import { Link } from "react-router-dom";
import AddUserModal from "../../../../../GlobalComponent/AddUserModal";
import AssignAssessmentModal from "../../../../../GlobalComponent/AssignAssesmentModal";
import RecomendCourseModal from "../../../../../GlobalComponent/RecomendCourse";

// Dummy Data Object for users
const initialUserData = [
  {
    id: 1,
    name: "user 1",
    status: "Active",
    employees: 140,
    industry: "Software Agency",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "40",
  },
  {
    id: 2,
    name: "user 2",
    status: "Inactive",
    employees: 58,
    industry: "Design Agency",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "80",
  },
  {
    id: 3,
    name: "user 3",
    status: "Active",
    employees: 473,
    industry: "ABC Agency",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "0",
  },
  {
    id: 4,
    name: "user 4",
    status: "Inactive",
    employees: 92,
    industry: "Consulting",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "90",
  },
  {
    id: 5,
    name: "user 5",
    status: "Active",
    employees: 324,
    industry: "Marketing",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "10",
  },
  {
    id: 6,
    name: "user 6",
    status: "Inactive",
    employees: 184,
    industry: "IT Services",
    lastActivity: "Aug 17, 2025",
    profileCompletion: "55",
  },
  // Add more if needed
];

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedusers, setSelectedusers] = useState([]);
  const [openAddUser, setOpenAddUser] = useState(false);
  const itemsPerPage = 3; // Number of cards per
  const [users, setUserData] = useState(initialUserData);
  const [openId, setOpenId] = useState(null);
  const ref = useRef(null);
  const [openAssignAssestment, setOpenAssignAssestment] = useState(false);
  const [openRecomendCourseModal, setOpenRecomendCourseModal] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleuserStatus = (id) => {
    setUserData((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  // Calculate the number of pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Get the users for the current page
  const paginatedUsers = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectAll = () => {
    if (selectedusers.length === paginatedUsers.length) {
      setSelectedusers([]);
    } else {
      setSelectedusers(paginatedUsers.map((user) => user.id));
    }
  };

  const handleSelectSingle = (id) => {
    setSelectedusers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((userId) => userId !== id)
        : [...prevSelected, id]
    );
  };
  return (
    <div className="relative flex-1 p-4 md:p-6">
      {/* Header Section */}
      <div className="md:hidden flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <h1 className="">All Users</h1>
          <span className="text-xs bg-primary/10 text-primary rounded-full py-1 px-2 font-medium">
            27
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className=" border border-gray-200 px-2 py-1 text-sm rounded-lg font-medium flex items-center gap-2">
            <img src={Icon.Filter} alt="" className="w-4 h-4" />
            Filters
          </div>
          <button
            className="bg-primary text-white px-2 py-1 text-sm rounded-lg"
            onClick={() => setOpenAddUser(true)}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
        <div className="hidden md:flex gap-2 items-center">
          <h1 className="xl:text-xl">All Users</h1>
          <span className="text-xs bg-primary/10 text-primary rounded-full py-1 px-2 font-medium">
            27
          </span>
        </div>
        <div className="flex items-center space-x-4 w-full md:max-w-sm mt-4 md:mt-0">
          <div className="relative w-full text-primary">
            <Search
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full  pl-4 pr-4 py-1 rounded-lg border border-primary/60 text-primary outline-none bg-transparent"
            />
          </div>
        </div>
        <div>
          <div className="hidden md:flex items-center gap-2">
            <div className=" border border-gray-200 py-2 lg:py-1 px-4 rounded-lg font-medium flex items-center gap-2">
              <img src={Icon.Filter} alt="" className="w-4 h-4" />
              <span className="hidden lg:block">Filters</span>
            </div>
            <button
              className="bg-primary text-white px-4 py-1 rounded-lg"
              onClick={() => setOpenAddUser(true)}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
      <div className="md:p-6 space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 gap-2 md:gap-6">
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between">
            {/* Select all checkbox */}
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={selectedusers.length === paginatedUsers.length}
                onChange={handleSelectAll}
              />
              <span className="text-sm text-gray-600">Select all</span>
            </div>
            <div className="flex justify-end items-center gap-1">
              <button
                className="bg-primary text-white px-2 py-2 text-xs md:text-base md:px-4 md:py-2 rounded-lg"
                onClick={() => setOpenAssignAssestment(true)}
              >
                Assign Assessment
              </button>
              <button
                className="bg-primary text-white px-2 py-2 text-xs md:text-base md:px-4 md:py-2 rounded-lg"
                onClick={() => setOpenRecomendCourseModal(true)}
              >
                Recommend Course
              </button>
            </div>
          </div>
          <AssignAssessmentModal
            open={openAssignAssestment}
            onClose={() => setOpenAssignAssestment(false)}
          />
          <RecomendCourseModal
            open={openRecomendCourseModal}
            onClose={() => setOpenRecomendCourseModal(false)}
          />

          {/* Render users */}
          {paginatedUsers.map((user) => (
            <div
              key={user.id}
              className="relative p-2 md:p-4 rounded-xl border border-gray-200 bg-sidebar transition duration-200 flex items-center gap-4"
            >
              <div className="md:hidden absolute right-4 top-2 border border-primary/60 px-2 rounded-full ">
              <div className="flex justity-end ">
                      <p className=" text-xs md:text-sm xl:text-base text-primary">
                        {user.profileCompletion}% Complete
                      </p>
                    </div>
                    </div>
              <div className="flex items-center justify-between">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedusers.includes(user.id)}
                  onChange={() => handleSelectSingle(user.id)}
                />
              </div>
              <div className="w-full flex items-center justify-between px-2">
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src={images.Userpic} alt="" className="w-10" />
                    </div>
                    <div>
                      <div className=" flex gap-2 items-center">
                        <Link
                          to={`user/${user.id}`}
                          className="text-lg font-semibold text-gray-800"
                        >
                          {user.name}
                        </Link>

                        <div className="w-1 h-1 rounded-full bg-[#557AA0] mt-2" />
                        <span
                          className={`mt-1 text-sm ${
                            user.status === "Active"
                              ? "text-[#557AA0]"
                              : "text-[#FF383C]"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] md:text-xs text-primary bg-primary/10 rounded-full py-1 text-center px-2">
                          {user.employees} Employees
                        </p>
                        <p className="text-[10px] md:text-xs text-primary bg-primary/10 rounded-full py-1 text-center px-2">
                          {user.industry}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center mt-2">
                    <div className="flex gap-2 items-center text-[#6C6E7E] ">
                      <CalendarCheck2 size={14} />
                      <p className="text-xs md:text-sm">
                        Last Activity: {user.lastActivity}
                      </p>
                    </div>
                    <div className="hidden md:flex">
                      <p className=" text-xs md:text-sm xl:text-base text-[#6C6E7E]">
                        {user.profileCompletion}% Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  key={user.id}
                  className="relative inline-block"
                  ref={openId === user.id ? ref : null}
                >
                  {/* Trigger */}
                  <button
                    onClick={() =>
                      setOpenId(openId === user.id ? null : user.id)
                    }
                  >
                    <Ellipsis size={18} />
                  </button>

                  {/* Dropdown */}
                  {/* Dropdown */}
                  {openId === user.id && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border p-4 space-y-4 z-50">
                      {/* Duplicate */}
                      <button className="w-full text-left text-gray-800 hover:text-primary font-medium text-sm md:text-base">
                        Send Reminder
                      </button>
                      <button className="w-full text-left text-gray-800 hover:text-primary font-medium text-sm md:text-base">
                        Export Report
                      </button>

                      {/* Active toggle */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-medium text-sm md:text-base">
                          Active
                        </span>

                        <button
                          onClick={() => toggleuserStatus(user.id)}
                          className={`relative inline-flex h-4 w-9 md:h-6 md:w-11 items-center rounded-full transition ${
                            user.status === "Active"
                              ? "bg-purple-500"
                              : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-3 w-3 md:h-5 md:w-5 transform rounded-full bg-white transition ${
                              user.status === "Active"
                                ? "translate-x-5"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-2 md:space-x-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 md:px-4 py-2 rounded-md border border-gray-400 disabled:opacity-50"
            >
              <ChevronLeft size={14} />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-2 md:px-4 border py-2 font-medium rounded-md ${
                  currentPage === index + 1
                    ? "border-primary bg-primary/10 text-primary"
                    : "bg-white border-gray-400"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button>...</button>

            <button
              className={`px-2 md:px-4 border py-2 font-medium rounded-md bg-white border-gray-400 `}
            >
              99
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 md:px-4 py-2 rounded-md border border-gray-400 disabled:opacity-50"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <AddUserModal open={openAddUser} onClose={() => setOpenAddUser(false)} />
    </div>
  );
};

export default UserManagement;
