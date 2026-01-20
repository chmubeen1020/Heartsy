import React, { useEffect, useRef, useState } from "react";
import {
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
} from "lucide-react";
import { Link } from "react-router-dom";
import AssignAssessmentModal from "../../../../../GlobalComponent/AssignAssesmentModal";
import RecomendCourseModal from "../../../../../GlobalComponent/RecomendCourse";
import AddSubDepartmentModal from "../../../../../GlobalComponent/AddSubDepartment";


// Dummy Data Object for users
const initialDepartmentData = [
  {
    id: 1,
    name: "Graphic Design",
    employees: 140,
    lastActivity: "Aug 17, 2025",
    profileCompletion: "40",
  },
  {
    id: 2,
    name: "Figma ",
    employees: 58,
    lastActivity: "Aug 17, 2025",
    profileCompletion: "80",
  }
  // Add more if needed
];

const DepartmentHeadManageDepartment = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedDepartmentData, setSelectedDepartmentData] = useState([]);
      const itemsPerPage = 3; // Number of cards per
      const DepartmentData = initialDepartmentData;
      const [openId, setOpenId] = useState(null);
      const ref = useRef(null);
        const [openAssignAssestment, setOpenAssignAssestment] = useState(false);
        const [openRecomendCourseModal, setOpenRecomendCourseModal] = useState(false);
        const [openAddSubDepartmentModal, setOpenAddSubDepartmentModal] = useState(false);
    
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
    

    
      // Calculate the number of pages
      const totalPages = Math.ceil(DepartmentData.length / itemsPerPage);
    
      // Get the DepartmentData for the current page
      const paginatedDepartmentData = DepartmentData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    
      const handleSelectAll = () => {
        if (selectedDepartmentData.length === paginatedDepartmentData.length) {
          setSelectedDepartmentData([]);
        } else {
          setSelectedDepartmentData(paginatedDepartmentData.map((department) => department.id));
        }
      };
    
      const handleSelectSingle = (id) => {
        setSelectedDepartmentData((prevSelected) =>
          prevSelected.includes(id)
            ? prevSelected.filter((departmentId) => departmentId !== id)
            : [...prevSelected, id]
        );
      };
  return (
     <div className="relative min-h-screen p-4 md:p-6">
      {/* Header Section */}
      <div className="md:hidden flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <h1 className="">Departments</h1>
          <span className="text-xs bg-primary/10 text-primary rounded-full py-1 px-2 font-medium">
            4
          </span>
        </div>
        <div className="flex items-center gap-2">
            <button className="bg-primary text-white px-2 py-2 text-sm rounded-lg" onClick={() => setOpenAddSubDepartmentModal(true)}>
              Add New Sub Department
            </button>
          </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
        <div className="hidden md:flex gap-2 items-center">
          <h1 className="text-xl">Child Departments in Design Department</h1>
          <span className="text-xs bg-primary/10 text-primary rounded-full py-1 px-2 font-medium">
            4
          </span>
        </div>
        <div>
          <div className="hidden md:flex items-center gap-2">
           
            <button className="bg-primary text-white px-4 py-2 rounded-lg" onClick={() => setOpenAddSubDepartmentModal(true)}>
              Add New Sub Department
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
                checked={selectedDepartmentData.length === paginatedDepartmentData.length}
                onChange={handleSelectAll}
              />
              <span className="text-sm text-gray-600">Select all</span>
            </div>
            <div className="flex justify-end items-center gap-1">
              <button className="bg-primary text-white px-2 py-2 text-xs md:text-base md:px-4 md:py-2 rounded-lg" onClick={() => setOpenAssignAssestment(true)}>
                Assign Assessment
              </button>
              <button className="bg-primary text-white px-2 py-2 text-xs md:text-base md:px-4 md:py-2 rounded-lg"onClick={() => setOpenRecomendCourseModal(true)}>
                Recommend Course
              </button>
            </div>
          </div>
        <AddSubDepartmentModal
        open={openAddSubDepartmentModal}
        onClose={() => setOpenAddSubDepartmentModal(false)}
      />  
        <AssignAssessmentModal
        open={openAssignAssestment}
        onClose={() => setOpenAssignAssestment(false)}
      />  
        <RecomendCourseModal
        open={openRecomendCourseModal}
        onClose={() => setOpenRecomendCourseModal(false)}
      />  
          {/* Render DepartmentData */}
          {paginatedDepartmentData.map((department) => (
            <div
              key={department.id}
              className="p-2 md:p-4 rounded-xl border border-gray-200 bg-sidebar transition duration-200 flex items-center gap-4"
            >
              <div className="flex items-center justify-between">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={selectedDepartmentData.includes(department.id)}
                  onChange={() => handleSelectSingle(department.id)}
                />
              </div>
              <div className="w-full flex items-center justify-between px-2">
                <div className="w-full">
                  <div className="flex items-center gap-2">
                    
                    <div>
                      <div className=" flex gap-2 items-center">
                        <Link
                          to={`${department.name}`}
                          className="text-lg font-semibold text-gray-800"
                        >
                          {department.name}
                        </Link>
                        <p className="text-[10px] md:text-xs text-primary bg-primary/10 rounded-full py-1 text-center px-2">
                          {department.employees} Users
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center mt-2">
                    <div className="flex gap-2 items-center text-[#6C6E7E] ">
                      <CalendarCheck2 size={14} />
                      <p className="text-xs md:text-sm font-medium">
                       Last Assesment: {department.lastActivity}
                      </p>
                    </div>
                    <div>
                      <p className=" text-xs md:text-base text-[#6C6E7E]">
                        {department.profileCompletion}% Complete
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  key={department.id}
                  className="relative inline-block"
                  ref={openId === department.id ? ref : null}
                >
                  {/* Trigger */}
                  <button
                    onClick={() =>
                      setOpenId(openId === department.id ? null : department.id)
                    }
                  >
                    <Ellipsis size={18} />
                  </button>

                  {/* Dropdown */}
                  {/* Dropdown */}
                  {openId === department.id && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-gray-200 p-4 space-y-2 z-50">
                      {/* Duplicate */}
                      <button
                        className="w-full text-left text-gray-800 hover:text-primary text-sm md:text-base">
                        Send Reminder
                      </button>
                      <button
                        className="w-full text-left text-gray-800 hover:text-primary text-sm md:text-base">
                        Open Child Departments
                      </button>
                      <button
                        className="w-full text-left text-gray-800 hover:text-primary text-sm md:text-base">
                        Add Child Department
                      </button>
                      <button
                        className="w-full text-left text-gray-800 hover:text-primary text-sm md:text-base">
                        See All Users
                      </button>
                      <button
                        className="w-full text-left text-gray-800 hover:text-primary text-sm md:text-base">
                        Export Reports
                      </button>
                      <button
                        className="w-full text-left text-red-400 hover:text-red-500 text-sm md:text-base">
                        Delete Department
                      </button>

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
                className={`px-2 md:px-4 border border-gray-200 py-2 font-medium rounded-md ${
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
              className={`px-2 md:px-4 border py-2 font-medium rounded-md bg-white border-gray-200 `}
            >
              99
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 md:px-4 py-2 rounded-md border border-gray-200 disabled:opacity-50"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentHeadManageDepartment