import { useState } from "react";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const chartData = [
  { month: "January", users: 40, companies: 70 },
  { month: "February", users: 70, companies: 25 },
  { month: "March", users: 30, companies: 60 },
  { month: "April", users: 90, companies: 35 },
  { month: "May", users: 20, companies: 25 },
  { month: "June", users: 55, companies: 45 },
];

export function ChartLineLinear() {
  const [showUsers, setShowUsers] = useState(true);
  const [showCompanies, setShowCompanies] = useState(true);

  return (
    <div className=" w-full h-[400px] py-6 mb-8">
      <div className="mb-4 flex justify-between items-center px-10">
        <div>
          <h2 className="text-xl font-semibold">Platform Growth Trends</h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Toggle Buttons */}
          <button
            onClick={() => setShowUsers(!showUsers)}
            className=" py-2 px-4 rounded-lg mr-2 flex items-center gap-2"
          >
            <div className="w-4 h-4 rounded-full bg-[#4B7AF5]"></div>  Users
          </button>
          <button
            onClick={() => setShowCompanies(!showCompanies)}
            className="  py-2 px-4 rounded-lg flex items-center gap-2"
          >
            <div className="w-4 h-4 rounded-full bg-[#A06BFF]"></div> Companies
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis />
          <Tooltip />
          <Legend />

          {showUsers && (
            <Line dataKey="users" stroke="#4B7AF5" strokeWidth={2} dot={false} />
          )}
          {showCompanies && (
            <Line
              dataKey="companies"
              stroke="#A06BFF"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5" // Makes the companies line dashed
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
