import React, { useState } from "react";
import { Send, Paperclip, Mic, X, Lightbulb, Menu } from "lucide-react";

const AIInterface = () => {
  // States: 'new', 'chat', 'simulator'
  const [mode, setMode] = useState("new");
  const [hasChatted, setHasChatted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const switchToChat = () => {
    setMode("chat");
    setHasChatted(true);
  };

  return (
    <div className="flex w-full h-full bg-[#F8F9FB] text-[#334155] overflow-hidden relative">
      {/* MOBILE HEADER - Only visible on small screens */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 z-30">
        <h2 className="font-bold text-[#7C3AED]">AI Coach</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col bg-white relative mt-16 lg:mt-0 w-full">
        {/* Top Navigation */}
        <div className="p-4 flex gap-3 items-center border-b border-gray-50 bg-white">
          <button className="bg-[#7C3AED] text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm">
            Chats
          </button>
          {(hasChatted || mode === "chat") && (
            <button
              onClick={() => setMode("new")}
              className="border border-[#7C3AED] text-[#7C3AED] px-5 py-2 rounded-lg text-sm font-medium hover:bg-violet-50 transition-colors"
            >
              Start New Chat
            </button>
          )}
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center">
          {/* IMAGE 1: NEW STATE */}
          {mode === "new" && (
            <div className="w-full max-w-2xl mt-10 md:mt-20 animate-in fade-in zoom-in-95 duration-500">
              <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-700 mb-8 md:mb-10">
                How Can I Help You!
              </h1>

              <div className="relative mb-8 md:mb-12">
                <input
                  type="text"
                  placeholder="Ask anything"
                  onFocus={switchToChat}
                  className="w-full p-4 md:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-200 placeholder-gray-300 transition-all text-sm md:text-base"
                />
                <div className="absolute left-5 bottom-[-24px] text-violet-500 text-xs">
                  <span className="opacity-50">✨</span>
                </div>
              </div>

              {/* Responsive Grid: 1 col on mobile, 2 on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-center text-gray-600">
                    Write or Improve
                  </h3>
                  <div className="p-4 bg-gray-50/50 rounded-xl text-[11px] leading-relaxed text-gray-500 border border-gray-50">
                    Can you help me write a professional email to my manager
                    about project updates?
                  </div>
                  <div className="p-4 bg-gray-50/50 rounded-xl text-[11px] leading-relaxed text-gray-500 border border-gray-50">
                    Please improve the tone of this client message to sound more
                    polite and clear.
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-center text-gray-600">
                    Daily Work Routine
                  </h3>
                  <div className="p-4 bg-gray-50/50 rounded-xl text-[11px] leading-relaxed text-gray-500 border border-gray-50">
                    What are the best ways AI can help me manage my workload and
                    meetings more efficiently?
                  </div>
                  <div className="p-4 bg-gray-50/50 rounded-xl text-[11px] leading-relaxed text-gray-500 border border-gray-50">
                    How can AI help me learn data analysis or communication
                    skills for career growth?
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* IMAGE 2: CHAT STATE */}
          {mode === "chat" && (
            <div className="w-full max-w-3xl space-y-8 animate-in slide-in-from-bottom-4 duration-500 pb-20">
              <div className="flex flex-col items-end">
                <p className="text-[10px] text-gray-400 mb-1">
                  02:22 AM{" "}
                  <span className="font-bold text-gray-700 ml-1">You</span>
                </p>
                <div className="bg-gray-50 p-4 rounded-2xl rounded-tr-none text-[13px] border border-gray-100 max-w-[85%] md:max-w-[70%]">
                  do androids truly dream of electric sheeps or not?
                </div>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-[10px] mb-1 font-bold text-gray-700">
                  AI Coach{" "}
                  <span className="font-normal text-gray-400 ml-1">
                    02:22 AM
                  </span>
                </p>
                <div className="bg-white p-5 rounded-2xl rounded-tl-none text-[12px] leading-relaxed border border-gray-100 shadow-sm text-gray-600">
                  The question of whether androids dream of electric sheep is
                  the title and central theme of the science fiction novel...
                  <ol className="mt-3 list-decimal ml-4 space-y-2">
                    <li>
                      The book explores a world where androids are
                      indistinguishable from humans.
                    </li>
                    <li>
                      The title refers to the empathy test used to distinguish
                      between humans and androids.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* IMAGE 3: SIMULATOR STATE */}
          {mode === "simulator" && (
            <div className="w-full h-full animate-in fade-in duration-300">
              <div className="flex justify-between items-center mb-6 md:mb-12 px-4 py-4 rounded-full">
                <h2 className="font-bold text-gray-700">
                  AI Culture Simulator
                </h2>
                <button
                  onClick={() => setMode("new")}
                  className="text-red-500 text-xs flex items-center gap-1 font-medium border border-red-400 px-4 py-2 rounded-md hover:text-white hover:bg-red-600"
                >
                  <X size={14} /> End Simulation
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  "Team Conflicts",
                  "Cross-Cultural Communication",
                  "Training Leaders",
                  "Company Values Training",
                  "More",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 border border-gray-200 rounded-full text-[10px] md:text-xs text-gray-500 hover:border-violet-300 hover:bg-violet-50"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Field - Bottom Fixed */}
        {mode !== "new" && (
          <div className="p-4 md:p-6 border-t border-gray-50 bg-white">
            <div className="max-w-4xl mx-auto relative flex items-center bg-[#F8F9FB] rounded-full px-4 md:px-5 py-2 md:py-3 border border-gray-100 shadow-sm">
              <Paperclip
                className="text-gray-400 cursor-pointer shrink-0"
                size={18}
              />
              <input
                className="flex-1 bg-transparent border-none focus:outline-none px-3 md:px-4 text-xs md:text-sm text-gray-600 min-w-0"
                placeholder="Message AI Coach..."
              />
              <div className="flex items-center gap-2 md:gap-4 text-gray-400 shrink-0">
                <Mic size={18} className="cursor-pointer hidden sm:block" />
                <button className="bg-[#7C3AED] p-2 rounded-full text-white shadow-lg hover:opacity-90 transition-opacity">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR (Performance / Trends) */}
      {/* Logic: Fixed on Desktop, Overlay on Mobile */}
      <div
        className={`
        fixed inset-y-0 right-0 z-[60] w-[300px] md:w-[380px] bg-[#FDFDFF] border-l border-gray-100 p-6 flex flex-col gap-6 overflow-y-auto transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-0
        ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "translate-x-full lg:translate-x-0"}
      `}
      >
        {mode !== "simulator" ? (
          <>
            <div className="p-2 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center lg:block">
                <h2 className="md:text-xl font-semibold text-gray-700">
                  Performance Analysis
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden p-2 text-gray-400"
                >
                  <X size={18}/>
                </button>
              </div>

              {/* Gauge Component */}
              <div className="relative flex flex-col items-center py-6">
                <div className="w-48 h-24 overflow-hidden relative">
                  <div className="w-48 h-48 border-[20px] border-[#7C3AED] rounded-full"></div>
                  <div
                    className="absolute top-0 w-48 h-48 border-[20px] border-gray-100 rounded-full"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                      transform: "rotate(140deg)",
                    }}
                  ></div>
                </div>
                <div className="text-center mt-[-30px]">
                  <span className="text-4xl font-bold block">78%</span>
                  <span className="text-xs text-gray-400 font-medium">
                    Overall Score
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">
                    Leadership Style
                  </span>
                  <span className="bg-blue-50 text-primary text-xs px-3 py-1 rounded-md ">
                    Strategic Thinker
                  </span>
                </div>
                {/* Progress Bars */}
                {["Empathy", "Clarity"].map((skill, idx) => (
                  <div key={skill} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-gray-600">
                      <span>{skill}</span>
                      <span
                        className={
                          idx === 0 ? "text-green-500" : "text-amber-500"
                        }
                      >
                        {idx === 0 ? "80%" : "64%"}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`${idx === 0 ? "bg-green-500 w-[80%]" : "bg-amber-500 w-[64%]"} h-full`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-violet-50 p-5 rounded-2xl border border-violet-100">
              <div className="flex items-center gap-2 text-violet-600 mb-2">
                <Lightbulb size={16} />
                <span className="font-bold text-sm">Coach's Suggestion</span>
              </div>
              <p className="text-[11px] leading-relaxed text-gray-600">
                Your current Path is balanced. Consider asking an open-ended
                question...
              </p>
            </div>

            <button
              onClick={() => {
                setMode("simulator");
                setIsSidebarOpen(false);
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 transition-all mt-auto"
            >
              AI Culture Simulator
            </button>
          </>
        ) : (
          <div className=" h-full flex flex-col justify-start gap-4">
            <div className="p-2 md:p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="md:text-xl font-semibold text-gray-700">
                  Team Engagement Trend
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden p-2 text-gray-400"
                >
                  <X size={18}/>
                </button>
              </div>

              <div className="h-64 flex items-end justify-between px-2 mb-8 relative mt-10 pr-10">
                <div>
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-gray-400 pb-6">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>0</span>
                  </div>

                  <div className="ml-8 h-full relative">
                    {/* Grid Lines (Horizontal) */}
                    <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-full border-t border-dashed border-gray-100"
                        ></div>
                      ))}
                    </div>

                    {/* SVG Graph */}
                    <svg
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#7C3AED"
                            stopOpacity="0.15"
                          />
                          <stop
                            offset="100%"
                            stopColor="#7C3AED"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d="M 0 42 L 20 42 L 40 65 L 60 45 L 80 15 L 100 22 L 120 22 L 120 100 L 0 100 Z"
                        fill="url(#chartGradient)"
                        className="transition-all duration-500"
                      />

                      {/* Line Path */}
                      <path
                        d="M 0 42 L 20 42 L 40 65 L 60 45 L 80 15 L 100 22 L 120 22"
                        fill="none"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Data Points and X-Axis Labels */}
                    <div className="absolute inset-0 flex justify-between">
                      {[
                        { val: 58, label: "Week 1" },
                        { val: 35, label: "Week 2" },
                        { val: 55, label: "Week 3" },
                        { val: 85, label: "Week 4" },
                        { val: 78, label: "Week 5" },
                        { val: 78, label: "Week 6" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center h-full relative"
                          style={{ width: "20%" }}
                        >
                          {/* The Dot */}
                          <div
                            className="absolute w-3 h-3 bg-white border-2 border-violet-600 rounded-full z-10 shadow-sm"
                            style={{
                              bottom: `${item.val}%`,
                              transform: "translateY(50%)",
                            }}
                          ></div>

                          {/* The Vertical Dashed Line */}
                          <div className="absolute top-0 bottom-0 w-[1px] border-l border-dashed border-gray-100 -z-0"></div>

                          {/* X-Axis Label */}
                          <span className="absolute bottom-[-30px] text-[10px] text-gray-400 rotate-[-45deg] whitespace-nowrap">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 p-5 rounded-2xl border border-violet-100">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Lightbulb size={16} />
                <span className="font-bold text-base">Weekly Insight</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Engagement scores dip slightly after the project deadline...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Background Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AIInterface;
