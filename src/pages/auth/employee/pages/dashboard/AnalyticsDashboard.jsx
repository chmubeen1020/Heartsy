import React, { useState } from 'react';
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// Dummy Data for Growth Chart
const growthData = [
  { name: 'Jan', thisYear: 32, lastYear: 18 },
  { name: 'Feb', thisYear: 26, lastYear: 38 },
  { name: 'Mar', thisYear: 62, lastYear: 28 },
  { name: 'Apr', thisYear: 24, lastYear: 19 },
  { name: 'May', thisYear: 40, lastYear: 68 },
  { name: 'June', thisYear: 30, lastYear: 47 },
];

// Dummy Data for Activity Chart
const activityDataSets = {
  Day: [
    { label: '8am', value: 30 }, { label: '12pm', value: 70 }, { label: '4pm', value: 90 }, 
    { label: '8pm', value: 40 }, { label: '12am', value: 20 }
  ],
  Week: [
    { label: 'Mon', value: 58 }, { label: 'Tues', value: 52 }, { label: 'Wed', value: 38 }, 
    { label: 'Thurs', value: 85, active: true }, { label: 'Fri', value: 48 }, 
    { label: 'Sat', value: 65 }, { label: 'Sun', value: 55 }
  ],
  Month: [
    { label: 'W1', value: 40 }, { label: 'W2', value: 60 }, { label: 'W3', value: 80 }, { label: 'W4', value: 50 }
  ]
};

const AnalyticsDashboard = () => {
  // States for Interactivity
  const [visibleLines, setVisibleLines] = useState({ thisYear: true, lastYear: true });
  const [activityFilter, setActivityFilter] = useState('Week');

  const toggleLine = (line) => {
    setVisibleLines(prev => ({ ...prev, [line]: !prev[line] }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 bg-gray-50/30">
      
      {/* 1. Growth Chart with Toggle-able Legends */}
      <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center lg:items-start xl:items-center mb-8 gap-4">
          <h3 className="text-xl  font-medium text-slate-800 tracking-tight">Your Growth Over Time</h3>
          <div className="flex lg:flex-col xl:flex-row gap-4 lg:gap-1 xl:gap-4 text-xs font-bold">
            <button 
              onClick={() => toggleLine('thisYear')}
              className={`flex items-center gap-2 transition-opacity ${visibleLines.thisYear ? 'opacity-100' : 'opacity-30'}`}
            >
              <span className="w-3 h-3 rounded-full bg-[#6B69B2]"></span> 
              <span className="text-slate-600">This Year</span>
            </button>
            <button 
              onClick={() => toggleLine('lastYear')}
              className={`flex items-center gap-2 transition-opacity ${visibleLines.lastYear ? 'opacity-100' : 'opacity-30'}`}
            >
              <span className="w-3 h-3 rounded-full bg-purple-200 border border-[#6B69B2]/20"></span> 
              <span className="text-slate-600">Last Year</span>
            </button>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6B69B2" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6B69B2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} dy={10} padding={{ left: 30, right: 20 }} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 600}} width={30}/>
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              
              {visibleLines.lastYear && (
                <Area 
                  type="monotone" dataKey="lastYear" stroke="#C0BFE0" strokeWidth={2} 
                  strokeDasharray="5 5" fill="transparent" dot={false} 
                />
              )}
              
              {visibleLines.thisYear && (
                <Area 
                  type="monotone" dataKey="thisYear" stroke="#6B69B2" strokeWidth={3} 
                  fill="url(#colorThis)" dot={{ r: 4, fill: '#fff', stroke: '#334155', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#6B69B2' }}
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Activity Chart with Tab Switching */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl  font-medium text-slate-800 tracking-tight">Activity</h3>
          <div className="flex gap-3 bg-slate-50 p-1 rounded-lg">
            {['Day', 'Week', 'Month'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActivityFilter(tab)}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                  activityFilter === tab ? 'bg-white text-[#6B69B2] shadow-sm' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-[250px] px-2 mt-auto">
          {activityDataSets[activityFilter].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4 h-full justify-end flex-1">
              <div 
                className={`w-3 sm:w-4 rounded-full transition-all duration-500 ease-out ${
                 ( item.active || activityFilter !== 'Week') && ( index === 2 ? 'bg-[#6B69B2]' : 'bg-purple-50')
                }`} 
                style={{ height: `${item.value}%` }}
              ></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnalyticsDashboard;