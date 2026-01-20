import React from "react";
import { Search, ClipboardList, CheckCircle2, Ellipsis } from "lucide-react";
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

const EmployeeCourseComponent = () => {
    const navigate = useNavigate();
    const courseDetail = ({id}) =>{
        navigate(`details/${id}`);
    }
  return (
    <div className="w-full ">
      {/* Header Section */}
      <div className="bg-white px-4 2xl:px-6 py-4 rounded-xl border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="font-medium text-xl text-gray-800">Recommended Courses</h1>
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
          <div className="col-span-2 ">Status</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {/* Course List */}
        <div className=" border-t border-gray-100  md:pt-0">
          {COURSE_DATA.map((course) => (
            <div
              key={course.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-2 md:px-4 md:py-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer"
              
            >
              {/* Course Info */}
              <div className="col-span-1 md:col-span-8 flex items-start gap-4" >
                <div className="p-2 md:p-3 bg-purple-50 rounded-2xl text-primary shrink-0">
                  <ClipboardList size={24} />
                </div>
                <div className="space-y-1">
                  <h2 className="md:text-lg font-semibold text-gray-900 leading-tight hover:underline" onClick={() => courseDetail(course.id)}>
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
                        className="px-2 py-1 bg-purple-50 text-primary text-xs md:text-sm rounded-full border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="block md:hidden w-auto ml-auto" >
                 <Ellipsis size={20} />
                </button>
              </div>

              {/* Duration - Moves to top-right corner on mobile if desired, or inline */}
              <div className="col-span-1 md:col-span-2 text-left md:text-right">
                <span className="lg:w-fit flex items-center px-2 py-0.5 rounded-xl gap-2 justify-center  text-sm font-semibold text-[#008236] bg-[#DCFCE7] border border-[#B9F8CF]">
                 <CheckCircle2 size={18}/> Completed
                </span>
              </div>

              {/* Action Button */}
              <div className="hidden md:block col-span-1 md:col-span-2 text-right">
                <button className="w-full md:w-auto" >
                 <Ellipsis size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
};

export default EmployeeCourseComponent;
