import React from 'react';
import { Download, Share2, CheckCircle2, TrendingUp, Heart } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Dummy data based on the graph points in the image
const STRENGTHS_DATA = [
  {
    title: "Exceptional Team Collaboration",
    score: 95,
    tag: "High Impact",
    description: "You consistently demonstrate outstanding ability to work effectively with others, fostering positive team dynamics.",
  },
  {
    title: "High Adaptability",
    score: 90,
    tag: "High Impact",
    description: "You excel at adjusting to new situations and embracing change with a positive mindset.",
  },
  {
    title: "Strong Communication Skills",
    score: 85,
    tag: "Medium-High Impact",
    description: "Your ability to convey ideas clearly and listen actively makes you an effective communicator.",
  }
];

const chartData = [
  { name: '', score: 32 },
  { name: 'January', score: 38 },
  { name: '', score: 18 },
  { name: '', score: 25 },
  { name: 'February', score: 18 },
  { name: '', score: 38 },
  { name: '', score: 35 },
  { name: 'March', score: 35 },
  { name: '', score: 42 },
  { name: '', score: 62 },
  { name: 'April', score: 60 },
  { name: '', score: 75 },
  { name: '', score: 52 },
  { name: 'May', score: 58 },
  { name: '', score: 42 },
  { name: '', score: 52 },
  { name: 'June', score: 58 },
  { name: '', score: 62 },
];
const assessmentModules = [
  {
    title: "Gratitude",
    score: 92,
    description: "You demonstrate exceptional appreciation for others and life experiences. Your grateful mindset strengthens relationships and fosters positivity.",
    theme: {
      bg: "bg-green-50/50",
      border: "border-green-100",
      text: "text-green-600",
      bar: "bg-green-500"
    }
  },
  {
    title: "Empathy",
    score: 75,
    description: "You show a strong ability to understand and share the feelings of others, though there is room to deepen these connections in high-stress scenarios.",
    theme: {
      bg: "bg-purple-50/50",
      border: "border-purple-100",
      text: "text-purple-600",
      bar: "bg-purple-500"
    }
  },
  {
    title: "Love",
    score: 75,
    description: "You show a strong ability to understand and share the feelings of others, though there is room to deepen these connections in high-stress scenarios.",
    theme: {
      bg: "bg-blue-50/50",
      border: "border-blue-100",
      text: "text-blue-600",
      bar: "bg-blue-500"
    }
  },
  {
    title: "Joy",
    score: 75,
    description: "You show a strong ability to understand and share the feelings of others, though there is room to deepen these connections in high-stress scenarios.",
    theme: {
      bg: "bg-amber-50/50",
      border: "border-amber-100",
      text: "text-amber-600",
      bar: "bg-amber-400"
    }
  }
];
const EmployeeReportDetail = () => {
  return (
    <div className="p-4 space-y-6 bg-gray-50/50 min-h-screen">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-slate-800">Behavioral Assessment — Results</h1>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <CheckCircle2 size={16} className="text-slate-500" />
            <span>Completed: December 15, 2024</span>
          </div>
          <p className="text-slate-500 text-xs xl:text-sm mt-2 max-w-3xl leading-relaxed">
            Congratulations on completing your Heart Work Profile® assessment! Your journey of self-discovery and leadership growth begins here. 
            These results reveal your unique strengths and opportunities for development.
          </p>
        </div>
        
        <div className="flex items-center gap-3 self-start">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
            <Share2 size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm font-semibold text-slate-700">
            <Download size={18} /> PDF
          </button>
        </div>
      </header>

      {/* Main Score & Chart Section */}
      <main className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-semibold text-slate-800">Overall Assessment Score</h2>
            <div className="flex items-center gap-1 text-green-500 font-bold">
              <span>87%</span>
              <TrendingUp size={18} />
            </div>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                  ticks={[0, 20, 40, 60, 100]}
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8b5cf6" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#scoreGradient)" 
                  dot={{ r: 4, fill: "#fff", stroke: "#334155", strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: "#8b5cf6" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="mx-6 mb-6 p-6 bg-purple-50 rounded-xl border border-purple-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Outstanding work!</h3>
          <p className="text-slate-500 text-sm xl:text-base leading-relaxed">
            Your results demonstrate strong leadership foundations with meaningful opportunities for growth. 
            You're well-positioned to make a positive impact in your leadership journey.
          </p>
        </div>
      </main>
      <div>
        <div className="border p-4 bg-white rounded-xl space-y-4">
            <div className='flex items-center gap-2'>
                <Heart size={36} className='bg-orange-500 text-white p-1 rounded-md'/>
                <h2 className='text-orange-500 font-medium text-lg xl:text-xl'>Heart</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessmentModules.map((item, index) => (
          <ModuleCard key={index} data={item} />
        ))}
      </div>
        </div>
      </div>
      <section className="bg-white border border-slate-100 rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Top Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STRENGTHS_DATA.map((item, i) => (
            <StrengthCard key={i} data={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmployeeReportDetail;

const ModuleCard = ({ data }) => {
  const { title, score, description, theme } = data;

  return (
    <div className={`p-6 rounded-2xl border ${theme.bg} ${theme.border} shadow-sm space-y-4 transition-all hover:shadow-md`}>
      {/* Title Section */}
      <h3 className={`text-2xl font-bold ${theme.text}`}>
        {title}
      </h3>

      {/* Score and Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
          <span>Score</span>
          <span>{score}%</span>
        </div>
        
        <div className="w-full bg-white/60 h-2.5 rounded-full overflow-hidden border border-slate-100">
          <div 
            className={`${theme.bar} h-full rounded-full transition-all duration-700 ease-out`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const StrengthCard = ({ data }) => (
  <div className="bg-[#f8f9fc] p-6 rounded-xl flex flex-col min-h-[250px] relative">
    <div className="flex justify-between items-start mb-4">
      <span className="bg-primary text-white text-xs lg:text-sm font-medium px-2 py-0.5 rounded-full ">
        {data.tag}
      </span>
      <span className="text-primary text-3xl font-bold leading-none">{data.score}</span>
    </div>
    <h4 className="text-slate-800 font-semibold text-lg xl:text-2xl mb-2 leading-tight pr-4">{data.title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{data.description}</p>
  </div>
);