import React from "react";
import { Search, ChevronLeft, ChevronRight, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COURSE_DATA = [
  {
    id: 1,
    title: "Advanced Communication Strategies",
    level: "Beginner",
    description:
      "Enhance your already strong communication skills with advanced techniques for difficult conversations.",
    duration: "1 Week",
    tags: ["Leadership", "Communication"],
  },
  {
    id: 2,
    title: "Advanced Communication Strategies",
    level: "Intermediate",
    description:
      "Enhance your already strong communication skills with advanced techniques for difficult conversations.",
    duration: "1 Week",
    tags: ["Leadership", "Communication"],
  },
];

const Recommendations = () => {
    const navigate = useNavigate();
    const courseDetail = (id) =>{
        navigate(`course/${id}`);
    }
  return (
    <div className="w-full mx-auto p-4 md:p-8 ">
      {/* Header Section */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-xl font-semibold text-gray-800">Courses</h1>
          <div className="relative w-full md:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl outline-none focus:border-primary transition-all text-sm"
            />
          </div>
        </div>

        {/* Table Headers (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 px-4 mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
          <div className="col-span-8">Courses</div>
          <div className="col-span-2 text-center">Duration</div>
          <div className="col-span-2"></div>
        </div>

        {/* Course List */}
        <div className=" border-t border-gray-100  md:pt-0">
          {COURSE_DATA.map((course) => (
            <div
              key={course.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 md:px-4 md:py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
              
            >
              {/* Course Info */}
              <div className="col-span-1 md:col-span-8 flex items-start gap-4" >
                <div className="p-3 bg-purple-50 rounded-2xl text-primary shrink-0">
                  <ClipboardList size={24} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-gray-900 leading-tight hover:underline" onClick={() => courseDetail(course.id)}>
                    {course.title}
                  </h2>
                  <p className="text-sm font-medium text-gray-500">
                    {course.level}
                  </p>
                  <p className="text-sm text-gray-600 max-w-lg hidden md:block">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-50 text-primary text-xs rounded-lg border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Duration - Moves to top-right corner on mobile if desired, or inline */}
              <div className="col-span-1 md:col-span-2 text-left md:text-center">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase mr-2">
                  Duration:
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  {course.duration}
                </span>
              </div>

              {/* Action Button */}
              <div className="col-span-1 md:col-span-2 text-right">
                <button className="w-full md:w-auto px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all " >
                 Start
                </button>
              </div>
            </div>
          ))}
        </div>
         {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400">
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 bg-purple-50 border border-primary text-primary font-bold rounded-lg">
          1
        </button>
        <button className="w-10 h-10 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50">
          2
        </button>
        <button className="w-10 h-10 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50">
          3
        </button>
        <span className="px-2 text-gray-400 font-bold">...</span>
        <button className="w-10 h-10 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50">
          99
        </button>
        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400">
          <ChevronRight size={20} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Recommendations