import React, { useState} from "react";
import ReactDOM from "react-dom";
import {
  Search,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Monitor,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import ContinueWatchingSlider from "./Slider";
import { useNavigate } from "react-router-dom";

// --- HELPERS & DUMMY DATA ---
const INITIAL_COURSES = [
  {
    id: 1,
    title: "Advanced Communication Strategies",
    level: "Beginner",
    started: "8/27/2025",
    duration: "1 Week",
    status: "75% Completed",
    tags: ["Leadership", "Communication"],
  },
  {
    id: 2,
    title: "Advanced Communication Strategies",
    level: "Intermediate",
    started: "8/27/2025",
    duration: "1 Week",
    status: "Completed",
    tags: ["Leadership", "Communication"],
  },
];

// --- PORTAL MODAL COMPONENT ---
const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

// --- CUSTOM DATE PICKER (Image 4) ---
const CustomDatePicker = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/20 z-[60] flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-2xl shadow-xl w-80"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              <span className="font-bold border-b-2 border-orange-400">
                May
              </span>
              <span className="font-bold border-b-2 border-orange-400">
                2021
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => {
                  onSelect(`May ${d}, 2026`);
                  onClose();
                }}
                className={`h-10 w-10 flex items-center justify-center rounded-lg hover:bg-indigo-100 ${
                  d === 7 ? "bg-[#7F56D9] text-white" : "text-gray-700"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Portal>
  );
};

// --- CUSTOM TIME PICKER (Image 5) ---
const CustomTimePicker = ({ isOpen, onClose, onSelect }) => {
  const [h, setH] = useState(6);
  const [m, setM] = useState(10);
  const [period, setPeriod] = useState("PM");

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/20 z-[60] flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-2xl shadow-xl w-48 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex flex-col items-center">
              <button onClick={() => setH(h + 1)}>
                <ChevronLeft className="rotate-90" size={20} />
              </button>
              <span className="text-3xl font-medium my-2">{h}</span>
              <button onClick={() => setH(h - 1)}>
                <ChevronLeft className="-rotate-90" size={20} />
              </button>
            </div>
            <span className="text-3xl font-medium">:</span>
            <div className="flex flex-col items-center">
              <button onClick={() => setM(m + 1)}>
                <ChevronLeft className="rotate-90" size={20} />
              </button>
              <span className="text-3xl font-medium my-2">{m}</span>
              <button onClick={() => setM(m - 1)}>
                <ChevronLeft className="-rotate-90" size={20} />
              </button>
            </div>
          </div>
          <div className="flex border border-[#7F56D9] rounded-lg overflow-hidden">
            <button
              onClick={() => setPeriod("AM")}
              className={`flex-1 py-1 ${
                period === "AM" ? "bg-[#7F56D9] text-white" : "text-[#7F56D9]"
              }`}
            >
              AM
            </button>
            <button
              onClick={() => setPeriod("PM")}
              className={`flex-1 py-1 ${
                period === "PM" ? "bg-[#7F56D9] text-white" : "text-[#7F56D9]"
              }`}
            >
              PM
            </button>
          </div>
          <button
            onClick={() => {
              onSelect(`${h}:${m} ${period}`);
              onClose();
            }}
            className="mt-4 text-xs text-[#7F56D9] font-bold"
          >
            SET TIME
          </button>
        </div>
      </div>
    </Portal>
  );
};

// --- MAIN LEARNING COMPONENT ---
export default function EmployeeLearning() {
  const [sessions, setSessions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    agenda: "",
    date: "",
    time: "",
    note: "",
  });

  const handleSchedule = () => {
    if (!formData.agenda || !formData.date || !formData.time)
      return alert("Please fill required fields");
    setSessions([...sessions, { ...formData, id: Date.now() }]);
    setIsModalOpen(false);
    setFormData({ agenda: "", date: "", time: "", note: "" });
  };

  return (
    <div className="p-4 ">
      <div className=" space-y-6 ">
        {/* SECTION 1: VIRTUAL LEARNING HEADER */}
        <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="text-[#6D28D9] text-2xl font-semibold">
                Virtual Learning
              </h1>
              <p className="text-[#7C3AED] text-sm">
                Schedule a session and join via Zoom link
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white px-5 py-2 rounded-xl flex items-center justify-center gap-2 transition-all "
            >
              <Monitor size={18} /> Schedule Virtual Course
            </button>
          </div>

          <div>
            {sessions.length > 0 ? (
              <div className="space-y-4 mt-6">
                {sessions.map((s) => (
                  <div
                    key={s.id}
                    className="bg-white border border-[#EDE9FE] p-4 rounded-xl flex flex-col md:flex-row justify-between items-start gap-4"
                  >
                    <div className="space-y-1">
                      <h3 className="font-bold text-gray-800">
                        {s.agenda || "Session Title"}
                      </h3>
                      <p className="text-xs xl:text-sm text-gray-500">Meeting Link</p>
                      <p className="text-xs xl:text-base text-blue-500 truncate max-w-xs md:max-w-md">
                        https://fiverrzoom.zoom.us/j/89431382182...
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs xl:text-sm mt-2">
                        <Clock size={14} /> {s.date} - {s.time}
                      </div>
                    </div>
                    <span className="bg-[#EFF6FF] text-[#3B82F6] px-3 py-1 rounded-full text-xs xl:text-sm font-medium">
                      Pending
                    </span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* SECTION 2: CONTINUE WATCHING (SLIDER) */}
        <div>
          <ContinueWatchingSlider />
        </div>

        {/* SECTION 3: COURSES STARTED */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Courses Started
            </h2>
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-100 rounded-xl outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 text-xs lg:text-sm border-b border-gray-100">
                  <th className="pb-4 font-medium">Courses</th>
                  <th className="pb-4 font-medium text-center">Started</th>
                  <th className="pb-4 font-medium text-center">Duration</th>
                  <th className="pb-4 font-medium text-right pr-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {INITIAL_COURSES.map((course) => (
                  <tr
                    key={course.id}
                    className="group hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-6 flex gap-4">
                      <div className="h-12 w-12 bg-indigo-50 text-indigo-500 flex items-center justify-center rounded-xl">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 cursor-pointer hover:underline" onClick={() => navigate(`course/${course.id}`)}>
                          {course.title}
                        </p>
                        <p className="text-sm text-gray-500">{course.level}</p>
                        <div className="flex gap-2 mt-2">
                          {course.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="text-center font-medium text-gray-700">
                      {course.started}
                    </td>
                    <td className="text-center font-medium text-gray-700">
                      {course.duration}
                    </td>
                    <td className="text-right">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium ${
                          course.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {course.status === "Completed" && (
                          <CheckCircle2 size={16} className="inline mr-1" />
                        )}
                        {course.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {INITIAL_COURSES.map((course) => (
              <div key={course.id} className="border border-gray-100 rounded-xl p-4 space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-indigo-50 text-indigo-500 flex items-center justify-center rounded-lg shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">
                      {course.title}
                    </p>
                    <p className="text-xs text-gray-500">{course.level}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-gray-400">Started</p>
                    <p className="font-bold">{course.started}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Duration</p>
                    <p className="font-bold">{course.duration}</p>
                  </div>
                </div>
                <div
                  className={`text-center py-2 rounded-lg text-xs font-bold ${
                    course.status === "Completed"
                      ? "bg-green-50 text-green-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {course.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL (IMAGE 3) --- */}
      {isModalOpen && (
        <Portal>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="p-6 xl:p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl xl:text-2xl font-semibold text-gray-800">
                    Schedule a Session
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="relative border-b border-indigo-100 pb-2">
                    <input
                      className="w-full pt-3 outline-none text-gray-700"
                      placeholder="Session Agenda*"
                      value={formData.agenda}
                      onChange={(e) =>
                        setFormData({ ...formData, agenda: e.target.value })
                      }
                    />
                  </div>

                  <div
                    onClick={() => setIsDatePickerOpen(true)}
                    className="relative border-b border-indigo-100 pb-2 cursor-pointer flex justify-between items-center"
                  >
                    <span
                      className={
                        formData.date
                          ? "text-gray-700 pt-3"
                          : "text-gray-400 pt-3"
                      }
                    >
                      {formData.date || "Select Date*"}
                    </span>
                    <Calendar className="text-gray-400" size={20} />
                  </div>

                  <div
                    onClick={() => setIsTimePickerOpen(true)}
                    className="relative border-b border-indigo-100 pb-2 cursor-pointer flex justify-between items-center"
                  >
                    <span
                      className={
                        formData.time
                          ? "text-gray-700 pt-3"
                          : "text-gray-400 pt-3"
                      }
                    >
                      {formData.time || "Select Time*"}
                    </span>
                    <Clock className="text-gray-400" size={20} />
                  </div>

                  <div className="relative border-b border-indigo-100 pb-2">
                    <input
                      className="w-full pt-3 outline-none text-gray-700"
                      placeholder="Enter Note"
                      value={formData.note}
                      onChange={(e) =>
                        setFormData({ ...formData, note: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={handleSchedule}
                  className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white py-3 rounded-lg font-bold transition-all "
                >
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </Portal>
      )}

      {/* --- DATE & TIME PICKERS --- */}
      <CustomDatePicker
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onSelect={(d) => setFormData({ ...formData, date: d })}
      />
      <CustomTimePicker
        isOpen={isTimePickerOpen}
        onClose={() => setIsTimePickerOpen(false)}
        onSelect={(t) => setFormData({ ...formData, time: t })}
      />
    </div>
  );
}
