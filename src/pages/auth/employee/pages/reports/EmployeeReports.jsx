import React, { useState } from "react";
import { Download, Circle } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "", completed: 32, pending: 18 },
  { month: "Jan", completed: 38, pending: 32 },
  { month: "", completed: 18, pending: 31 },
  { month: "", completed: 26, pending: 39 },
  { month: "Feb", completed: 20, pending: 28 },
  { month: "", completed: 39, pending: 47 },
  { month: "", completed: 41, pending: 18 },
  { month: "Mar", completed: 35, pending: 52 },
  { month: "", completed: 41, pending: 18 },
  { month: "", completed: 63, pending: 18 },
  { month: "Apr", completed: 60, pending: 30 },
  { month: "", completed: 78, pending: 40 },
  { month: "", completed: 92, pending: 35 },
  { month: "May", completed: 52, pending: 32 },
  { month: "", completed: 56, pending: 55 },
  { month: "", completed: 60, pending: 68 },
  { month: "June", completed: 42, pending: 62 },
  { month: "", completed: 51, pending: 71 },
];

const CustomDot = (props) => {
  const { cx, cy, index } = props;
  // Only show dots on specific milestones to match your image
  const milestoneIndices = [1, 4, 7, 10, 13, 16];
  if (milestoneIndices.includes(index)) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        stroke="#333"
        strokeWidth={2}
        fill="white"
      />
    );
  }
  return null;
};

const EmployeeReports = () => {
  const [showPending, setShowPending] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-slate-700">
      {/* Analytics Report Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              Analytics Report
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Detailed insights and progress tracking over time
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm font-medium">
            <Download size={18} /> PDF
          </button>
        </div>
        <div className="w-full bg-white p-4 rounded-xl border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
              Monthly Completion Trends
            </h2>
            <div className="flex gap-4 text-sm font-medium text-gray-500">
              <button
                className="flex items-center gap-2"
                onClick={() => setShowCompleted(!showCompleted)}
              >
                <span className="w-3 h-3 rounded-full bg-[#7C3AED]" />
                <span
                  className={`${
                    !showCompleted ? "line-through text-gray-500" : ""
                  }`}
                >
                  Completed
                </span>
              </button>

              <button
                className="flex items-center gap-2"
                onClick={() => setShowPending(!showPending)}
              >
                <span className="w-3 h-3 rounded-full bg-[#C4B5FD]" />
                <span
                  className={`${!showPending ? "line-through text-gray-500" : ""}`}
                >
                  Pending
                </span>
              </button>
            </div>
          </div>
          {/* The outer div handles the scroll with overflow-x-auto */}

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorCompleted"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 13 }}
                  interval={0}
                  padding={{ left: 20, right: 20 }} // Adjusted padding for better scroll feel
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 14 }}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  width={30}
                />

                <Tooltip cursor={{ stroke: "#f1f5f9" }} />

                {showPending && (
                  <Area
                    type="monotone"
                    dataKey="pending"
                    stroke="#A78BFA"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="transparent"
                    dot={<CustomDot />}
                  />
                )}

                {showCompleted && (
                  <Area
                    type="monotone"
                    dataKey="completed"
                    stroke="#7C3AED"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorCompleted)"
                    dot={<CustomDot />}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Assessment Report Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
            Assessment Report
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Comprehensive analysis of your behavioral assessment results
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          {/* 2. Inner wrapper handles the styling (border/rounded) */}
          {/* Added 'min-w-max' to ensure the table doesn't squish */}
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-50 text-slate-600 text-xs ">
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">Results</th>
                    <th className="px-6 py-4 font-semibold">Recommendations</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <AssessmentRow
                    date="Jan 6, 2025"
                    result="75%"
                    rec="Enhance your communication skills"
                    status="Completed"
                  />
                  <AssessmentRow
                    date="Jan 6, 2025"
                    result="75%"
                    rec="Leverage your adaptability"
                    status="Incomplete"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AssessmentRow = ({ date, result, rec, status }) => {
  const isCompleted = status === "Completed";

  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-5 text-xs md:text-sm text-slate-600 min-w-[100px]">
        {date}
      </td>
      <td className="px-6 py-5 text-xs md:text-sm text-slate-600 font-medium">
        {result}
      </td>
      <td className="px-6 py-5 text-xs md:text-sm text-slate-600">{rec}</td>
      <td className="px-6 py-5">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
            isCompleted
              ? "bg-green-50 text-green-700 border-green-100"
              : "bg-red-50 text-red-700 border-red-100"
          }`}
        >
          <Circle size={6} fill="currentColor" /> {status}
        </span>
      </td>
      <td className="px-6 py-5 text-right">
        <button className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors text-sm font-semibold">
          <Download size={16} /> PDF
        </button>
      </td>
    </tr>
  );
};

export default EmployeeReports;
