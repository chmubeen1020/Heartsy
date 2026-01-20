import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { ChartSpline, CircleAlert, ExternalLink, FileText, TrendingDown, TrendingUp, Users } from "lucide-react";
import DepartmentCompletionChart from "./DepartmentCompletionChart";

// Register the components in ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register ArcElement for Pie charts
);

const DepartmentDashboard = () => {
  return (
    <div className="flex-1 md:p-6 p-2">

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        {/* Total Users */}
        <div className="p-2 md:p-4 bg-green-300/20 rounded-xl flex flex-col items-start border border-green-500">
        <Users size={20} className="text-green-500"/>
          <div className="text-lg font-medium md:mt-1 ">Total Users</div>
          <div className="text-xl md:text-3xl font-bold text-gray-800 mt-1">147</div>
          <div className="text-sm font-medium text-green-500 px-2 py-1 flex items-center gap-1">
            +12.3% <span className="text-black font-normal">this month</span> <TrendingUp size={14} />
          </div>
        </div>
        {/* Total Companies */}
        <div className="p-2 md:p-4 bg-[#3275F1]/20 rounded-xl flex flex-col items-start border border-[#3275F1]">
        <FileText size={20} className="text-[#3275F1]"/>
          <div className="text-lg font-medium md:mt-1">Assessments Completed</div>
          <div className="text-xl md:text-3xl font-bold text-gray-800 mt-1">156</div>
          <div className="text-sm font-medium text-[#3275F1] px-2 py-1 flex items-center gap-1">
            +5.2% <span className="text-black font-normal">this month</span> <TrendingUp size={14} />
          </div>
        </div>
        {/* Assessments Completed */}
        <div className="p-2 md:p-4 bg-[#945EEB]/20 rounded-xl flex flex-col items-start  border border-[#945EEB]">
        <ChartSpline size={20} className="text-[#945EEB]"/>
          <div className="text-lg font-medium md:mt-1">Engagement Rate</div>
          <div className="text-xl md:text-3xl font-bold text-gray-800 mt-1">87%</div>
          <div className="text-sm font-medium text-[#945EEB]/90 px-2 py-1 flex items-center gap-1">
            -18.7% <span className="text-black font-normal">this month</span> <TrendingUp size={14} />
          </div>
        </div>
        {/* Active Courses */}
        <div className="p-2 md:p-4 bg-[#A6A8BF]/20 rounded-xl flex flex-col items-start border border-[#A6A8BF]">
        <CircleAlert size={20} className="text-red-500"/>
          <div className="text-lg font-medium md:mt-1">Pending Actions</div>
          <div className="text-xl md:text-3xl font-bold text-gray-800 mt-1">34</div>
          <div className="text-sm font-medium text-red-500 px-2 py-1 flex items-center gap-1">
            -7.1% <span className="text-black font-normal">this month</span> <TrendingDown size={14} />
          </div>
        </div>
      </div>

      {/* Growth Trends Chart */}
      <div className="border border-gray-200 rounded-xl md:p-4">
        <DepartmentCompletionChart/>
      </div>

      <div className="mt-4 border border-gray-200 rounded-lg px-4 py-8">
         <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
          Departments Completion Rates <ExternalLink size={14} />
        </h3>
        <div className="space-y-4 ">
        <div className=" rounded-xl border border-gray-200 px-4 py-2 bg-[#DBC9F8]/10">
          <DepartmentRow name="Design" users={145} percent={92} />
        </div>
        <div className=" rounded-xl border border-gray-200 px-4 py-2 bg-[#DBC9F8]/10">
          <DepartmentRow name="Sales" users={52} percent={87} />
        </div>
        <div className=" rounded-xl border border-gray-200 px-4 py-2 bg-[#DBC9F8]/10">
          <DepartmentRow name="Engineering" users={36} percent={94} />
        </div>
      </div>
      </div>
    </div>
  )
}



const DepartmentRow = ({ name, users, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-primary font-medium text-lg">
        {name} <span className="text-sm font-normal text-primary bg-primary/10 px-2 rounded-full">{users} Users</span>
      </span>
      <span className="text-primary font-medium">{percent}%</span>
    </div>
    <div className="h-2 rounded-full bg-primary/20">
      <div
        className="h-2 rounded-full bg-primary"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

export default DepartmentDashboard