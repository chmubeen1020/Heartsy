import React from "react";
import { ArrowLeft, Download, CalendarDays, ClipboardList } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const assessments = [
  {
    date: "Jan 6, 2025",
    result: "75%",
    recommendation: "Enhance your communication skills",
    status: "Completed",
  },
  {
    date: "Jan 6, 2025",
    result: "75%",
    recommendation: "Leverage your adaptability",
    status: "Incomplete",
  },
];

const traits = [
  { label: "Collaborators", value: 95, bullet: "Team success" },
  { label: "Adapter", value: 75, bullet: "Creative challenges" },
  { label: "Communicator", value: 85, bullet: " Positive relationships" },
  { label: "Innovator", value: 90, bullet: "Growth opportunities" },
];

const strengths = [
  {
    heading: "Exceptional Team Collaboration",
    desc: "You consistently demonstrate outstanding ability to work effectively with others, fostering positive team dynamics.",
    impact: "High Impact",
    strength: "95",
  },
  {
    heading: "High Adaptability",
    desc: "You excel at adjusting to new situations and embracing change with a positive mindset.",
    impact: "High Impact",
    strength: "90",
  },
  {
    heading: "Strong Communication Skills",
    desc: "Your ability to convey ideas clearly and listen actively makes you an effective communicator.",
    impact: "High Impact",
    strength: "85",
  },
];

export default function UserProfile() {
  const navigate = useNavigate();

  const courseDetail = () => {
    navigate("course/1");
  };
  return (
    <div className="p-4 md:p-6 w-full mx-auto space-y-6">
      {/* BACK */}
      <button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900">
        <ArrowLeft size={16} />
        Back
      </button>

      {/* HEADER */}
      <div className="flex flex-col justify-between md:items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-neutral-900">Ryan Mitchell</h2>
            <span className="inline-block mt-1 rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-600">
              UI/UX Designer
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-neutral-600">Active</span>
              <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-purple-500">
                <span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white" />
              </span>
            </div>
          </div>
        </div>

        <button className="w-full flex justify-center items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white mt-4 md:mt-0">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* ASSESSMENTS TABLE */}

      {/* <div className="rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-purple-50 text-neutral-600">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Results</th>
              <th className="px-4 py-3 text-left">Recommendations</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {assessments.map((item, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="px-4 py-3 text-neutral-600">
                  {item.date}
                </td>
                <td className="px-4 py-3 font-medium">
                  {item.result}
                </td>
                <td className="px-4 py-3 text-neutral-600">
                  {item.recommendation}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${
                      item.status === "Completed"
                        ? "border-green-400 text-green-600"
                        : "border-red-400 text-red-500"
                    }`}
                  >
                    ● {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-xs">
                    <Download size={14} /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* FOOT INFO */}
      <div className="flex flex-col md:flex-row justify-between md:items-center text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          Last Assessment: Aug 17, 2025
        </div>
        <div className="flex items-center justify-between md:justify-center md:gap-4">
          <span>85% Complete</span>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
            Send Reminder
          </button>
        </div>
      </div>

      {/* PERSONALITY PROFILE */}
      <div className="rounded-xl border border-gray-200  p-6 space-y-6">
        <div>
          <h3 className="font-semibold text-neutral-900">
            Personality Profile
          </h3>
          <p className="mt-1 text-primary font-medium">
            The Collaborative Innovator
          </p>
          <p className="mt-2 text-sm text-neutral-600 max-w-3xl">
            You are a natural team builder who thrives on bringing people
            together to create innovative solutions. Your strength lies in your
            ability to adapt quickly while maintaining strong relationships.
          </p>

          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-[#8AC53E] px-3 py-1 text-xs text-white">
              Collaborator
            </span>
            <span className="rounded-full bg-[#FF993A] px-3 py-1 text-xs text-white">
              Strategic Thinker
            </span>
          </div>
        </div>

        {/* TRAITS */}
        <div className="w-full flex flex-col">
          <div className="space-y-3">
            <div className="flex justify-between">
              <h4 className="font-medium text-primary">Key Traits</h4>
              <h4 className="font-medium text-primary">Core Motivators</h4>
            </div>
            {traits.map((t) => (
              <div key={t.label} className="flex justify-between">
                <div className="w-1/3">
                  <span className="text-xs md:text-sm lg:text-base">
                    {t.label}
                  </span>
                </div>
                <div className="w-1/3  flex gap-2 items-center text-left text-sm ">
                  <div className="w-1/3 h-2 rounded-full bg-purple-100 ">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${t.value}%` }}
                    />
                  </div>
                  <div>
                    <span>{t.value}%</span>
                  </div>
                </div>
                <div className="w-1/3 flex justify-end">
                  <span className="text-xs md:text-sm lg:text-base text-right">
                    {" "}
                    {t.bullet}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 p-4 md:p-6 space-y-6">
        <h3 className="font-semibold text-neutral-900">Top Strengths</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {strengths.map((strenght, index) => (
            <div key={index} className="bg-[#F0F1F5] rounded-md p-4 space-y-4">
              <div className="flex justify-between items-center">
                <p className="bg-primary text-sm py-1 px-4 rounded-full text-white">
                  {strenght.impact}
                </p>
                <p className="text-primary text-3xl font-bold">
                  {strenght.strength}
                </p>
              </div>
              <h2 className="text-xl font-semibold">{strenght.heading}</h2>
              <p className="text-[#6C6E7E]">{strenght.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-gray-200 p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-neutral-900"> Course Started</h3>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
            Recomeded Course
          </button>
        </div>
        <div className="flex justify-between items-center text-[#45556C] font-medium py-2 border-b border-gray-200 md:px-4 text-sm">
          <div className="w-full md:w-3/5">COURSES</div>
          <div className="w-2/5 md:flex justify-between hidden ">
            <p>STARTED</p>
            <p>DURATION</p>
            <p>STATUS</p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between items-center text-[#45556C]  py-2 border-b border-gray-100 md:px-4 text-sm cursor-pointer"
          onClick={courseDetail}
        >
          <div className="w-full md:w-3/5 flex justify-start items-start gap-2">
            <div className="md:bg-primary/10 rounded-xl w-12 h-12 hidden md:flex items-center justify-center">
              <ClipboardList size={24} className="text-primary" />
            </div>
            <div>
              <Link
                to={"/admin/user-management/user/1/course/1"}
                className="text-base text-black font-medium hover:underline"
              >
                Advanced Communication Strategies
              </Link>
              <p className="text-black">Beginner</p>
              <p className="md:max-w-md">
                Enhance your already strong communication skills with advanced
                techniques for difficult conversations.
              </p>
              <div className="flex flex-wrap items-center gap-1 py-1">
                <p className="text-primary bg-primary/10 rounded-lg font-medium border border-primary/10 text-sm md:text-base px-2">
                  Leadership
                </p>
                <p className="text-primary bg-primary/10 rounded-lg font-medium border border-primary/10 text-sm md:text-base px-2">
                  Communication
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-between mt-2 md:mt-0">
            <p className="font-medium">8/7/2025</p>
            <p className="font-medium">1 Week</p>
            <p className="bg-[#DCFCE7] text-[#008236] px-2 rounded-xl py-1 border border-[#B9F8CF]">
              Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
