import React, { useState, useEffect } from "react";
import {
  Heart,
  Brain,
  Zap,
  ShieldCheck,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import CompletionImg from '../../../../../assets/images/AssesstmentCompletion.png';

// --- Dummy Data & Configuration ---
const MODULES = [
  {
    id: "heart",
    title: "Heart",
    description: "Emotional intelligence, empathy, and authentic connections",
    color: "orange",
    bg: "bg-orange-500",
    text: "text-orange-500",
    icon: <Heart className="w-6 h-6 text-white" />,
    subTypes: [
      {
        id: "love",
        title: "Love",
        description:
          "Your ability to demonstrate tremendous love and forgiveness.",
      },
      {
        id: "joy",
        title: "Joy",
        description:
          "How you celebrate success and maintain a positive outlook.",
      },
    ],
  },
  {
    id: "mind",
    title: "Mind",
    description: "Critical thinking, learning agility, and strategic awareness",
    color: "green",
    bg: "bg-green-500",
    text: "text-green-500",
    icon: <Brain className="w-6 h-6 text-white" />,
    subTypes: [
      {
        id: "logic",
        title: "Logic",
        description: "Your approach to objective problem solving.",
      },
      {
        id: "growth",
        title: "Growth",
        description: "Your openness to new information and learning.",
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Self-care, resilience, and sustainable leadership practices",
    color: "blue",
    bg: "bg-blue-500",
    text: "text-blue-500",
    icon: <Zap className="w-6 h-6 text-white" />,
    subTypes: [
      {
        id: "balance",
        title: "Balance",
        description: "Maintaining equilibrium under pressure.",
      },
      {
        id: "recovery",
        title: "Recovery",
        description: "How you recharge after intense periods.",
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Vision, influence, and inspiring others to excellence",
    color: "purple",
    bg: "bg-purple-600",
    text: "text-purple-600",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    subTypes: [
      {
        id: "vision",
        title: "Vision",
        description: "Your ability to see the big picture.",
      },
      {
        id: "impact",
        title: "Impact",
        description: "How you drive positive change in others.",
      },
    ],
  },
];

const CHART_DATA = [
  { name: "Jan", lastYear: 20, thisYear: 35 },
  { name: "Feb", lastYear: 40, thisYear: 25 },
  { name: "Mar", lastYear: 55, thisYear: 45 },
  { name: "Apr", lastYear: 20, thisYear: 65 },
  { name: "May", lastYear: 45, thisYear: 90 },
  { name: "Jun", lastYear: 75, thisYear: 60 },
];

const AssessmentApp = () => {
  const [step, setStep] = useState("intro"); // intro, overview, module_intro, questions, analyzing, results
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeSubTypeIdx, setActiveSubTypeIdx] = useState(0);
  // const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const Back = () => {
    navigate("/employee");
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem("leadership_assessment");
  //   if (saved) setAnswers(JSON.parse(saved));
  // }, []);

  // const saveAnswer = (moduleId, subTypeId, value) => {
  //   const newAnswers = { ...answers, [`${moduleId}_${subTypeId}`]: value };
  //   setAnswers(newAnswers);
  //   localStorage.setItem("leadership_assessment", JSON.stringify(newAnswers));
  // };

  // --- Screen Components ---

  const IntroScreen = ({ Back }) => (
    <div className="w-full p-6 space-y-8">
      <button
        className="flex items-center text-gray-500 text-sm mb-4"
        onClick={Back}
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </button>
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-800">
          Assessment Overview
        </h1>
        <p className="text-gray-500 mt-2">
          Discover your authentic leadership style through a comprehensive
          evaluation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MODULES.map((m) => (
          <div
            key={m.id}
            className="p-6 border border-[#DBC9F8] rounded-2xl bg-white flex flex-col items-center text-center space-y-3"
          >
            <div className={`p-3 rounded-xl ${m.bg}`}>{m.icon}</div>
            <h3 className={`font-bold text-lg ${m.text}`}>{m.title}</h3>
            <p className="text-sm text-gray-500">{m.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#FAFAFA] border border-[#F0F1F5] p-8 rounded-2xl text-center space-y-2">
        <h3 className="text-primary text-lg xl:text-xl font-bold">
          What to Expect
        </h3>
        <p className="text-sm xl:text-base text-gray-600 mx-auto pb-2">
          This assessment includes 16 thoughtful questions across the four
          dimensions. You'll encounter reflective statements, scaling questions,
          and open-ended prompts designed to reveal your authentic leadership
          strengths.
        </p>
        <p className="text-sm text-[#2A3F54]">Estimated time: 10-15 minutes</p>
        <button
          onClick={() => setStep("overview")}
          className="bg-primary text-white px-12 py-2 rounded-lg font-medium hover:bg-primary transition "
        >
          Start Assessment
        </button>
      </div>
    </div>
  );

  const ModuleIntro = () => {
    const m = MODULES[activeModuleIdx];
    return (
      <div className=" mx-auto p-6 h-[80vh] ">
        <button
          className="flex items-center text-gray-500 text-sm mb-4"
          onClick={Back}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </button>
        <div className="flex flex-col items-center justify-center text-center mt-10 bg-[#FAFAFA] border border-[#F0F1F5] px-8 py-4 rounded-2xl">
          <div className={`p-4 rounded-2xl ${m.bg} mb-4`}>{m.icon}</div>
          <h2 className={`text-2xl font-bold ${m.text}`}>{m.title}</h2>
          <p className="font-semibold text-gray-700 mt-2">
            Exploring Your {m.title}
          </p>
          <p className="text-gray-500  mt-1 text-sm">
            In this section, we'll explore how you connect with others, show
            empathy, and build authentic relationships as a leader.
          </p>

          <div className="w-full max-w-3xl bg-gray-100 h-3 rounded-full mt-8 overflow-hidden">
            <div
              className={`${m.bg} h-full`}
              style={{ width: `${((activeModuleIdx + 1) / 4) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {activeModuleIdx + 1} of 4
          </p>

          <button
            onClick={() => setStep("questions")}
            className="mt-4 bg-primary text-white px-10 py-2 rounded-xl font-medium"
          >
            Continue to {m.title} Questions
          </button>
        </div>
      </div>
    );
  };

  const QuestionsScreen = () => {
    const m = MODULES[activeModuleIdx];
    const sub = m.subTypes[activeSubTypeIdx];

    return (
      <div className=" mx-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <div className={`p-2 rounded-lg ${m.bg} mb-2`}>{m.icon}</div>
          <h2 className={`font-bold ${m.text}`}>{m.title}</h2>
          <p className=" text-gray-600">
            Exploring Your Emotional Intelligence
          </p>
          <p className="text-gray-500  mt-1 text-sm">
            In this section, we'll explore how you connect with others, show
            empathy, and build authentic relationships as a leader.
          </p>
        </div>

        <div className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-8 ">
          <h3 className={`text-lg font-bold mb-2 ${m.text}`}>{sub.title}:</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            {sub.description}
          </p>

          <div className="space-y-6">
            {[1, 2].map((qNum) => (
              <div key={qNum} className="space-y-3">
                <p className="text-sm font-medium text-gray-700">
                  Sample leadership scenario question {qNum}?
                </p>
                <div className="space-y-2">
                  {[
                    "Lorem ipsum dummy text option A",
                    "Industry standard dummy text B",
                    "Disagree with all above",
                  ].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`q_${sub.id}_${qNum}`}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="text-sm text-gray-600">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button className="px-6 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium">
            Back
          </button>
          <button
            onClick={() => {
              if (activeSubTypeIdx < m.subTypes.length - 1) {
                setActiveSubTypeIdx(activeSubTypeIdx + 1);
              } else {
                if (activeModuleIdx === MODULES.length - 1) {
                  setStep("completion");
                } else {
                  setActiveModuleIdx(activeModuleIdx + 1);
                  setActiveSubTypeIdx(0);
                  setStep("overview");
                }
              }
            }}
            className="px-10 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

const CompletionScreen = () => {
  const [showToast, setShowToast] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);


useEffect(() => {
  const img = new Image();
  img.src = CompletionImg; // Use the direct import
  img.onload = () => {
    setIsImageLoaded(true);
    setShowToast(true);
  };
}, []);

  // 2. Auto-hide toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // const handleBackToDashboard = () => navigate('/employee');
  const handleLetsGo = () => setStep('analyzing');

  // Show nothing or a simple background until the heavy image is ready
  if (!isImageLoaded) {
    return <div className="h-screen bg-white" />; 
  }

  return (
    <div className="flex flex-col justify-start space-y-6 text-center bg-white overflow-hidden">
      
      {/* --- Animated Toast Container --- */}
      <div className="w-full relative">
        <AnimatePresence>
          {showToast && (
            <motion.div 
              initial={{ opacity: 0, top: 0, x: "-50%" }}
              animate={{ opacity: 1, top: 20, x: "-50%" }}
              exit={{ opacity: 0, top: 0, x: "-50%", transition: { duration: 0.8 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-1/2 z-50"
            >
              <div className="bg-[#b195ff] text-white px-6 py-3 rounded-2xl shadow-lg flex items-center space-x-4 min-w-[320px]">
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm leading-tight">Assessment Complete!</p>
                  <p className="text-[10px] opacity-90">Next assessment: July 15, 2026</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <img 
          src={CompletionImg} 
          alt="Completion Illustration" 
          className="w-full xl:h-[60vh] transition-opacity duration-500 opacity-100" 
        />
      </div>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            We’ll help you through it.
          </h2>
          <p className="text-gray-800 max-w-3xl text-lg mt-2 font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <div className="flex flex-col items-center space-y-2">
          <button className="w-fit bg-primary px-4 py-1 text-white text-lg rounded-lg mt-6" onClick={handleLetsGo}>
            Lets go
          </button>
          <button className="cursor-pointer px-4 py-2 rounded-lg border border-transparent hover:border-gray-200 " onClick={Back}>
            Back to Dashboard
          </button>
          </div>
        </div>
      </div>
    );
  };

  const AnalyzingScreen = () => {
    const ringVariants = {
    animate: (i) => ({
      opacity: [0.3, 1, 0.3],
      scale: [0.95, 1.05, 0.95],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut",
      },
    }),
  };
    useEffect(() => {
      const timer = setTimeout(() => setStep("results"), 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="flex flex-col items-center justify-start h-auto space-y-6 text-center">
        <div className="relative flex items-center justify-center w-64 h-64 mt-10">
        
        {/* Outer Ring */}
        <motion.div
          custom={2}
          variants={ringVariants}
          animate="animate"
          className="absolute w-full h-full border-[3px] border-dotted border-[#b195ff] rounded-full opacity-30"
        />

        {/* Middle Ring */}
        <motion.div
          custom={1}
          variants={ringVariants}
          animate="animate"
          className="absolute w-2/3 h-2/3 border-[3px] border-dotted border-[#9366ff] rounded-full opacity-50"
        />

        {/* Inner Ring */}
        <motion.div
          custom={0}
          variants={ringVariants}
          animate="animate"
          className="absolute w-1/3 h-1/3 border-[3px] border-dotted border-[#7c3aed] rounded-full"
        />

        {/* Center Dots */}
        <div className="flex space-x-1 z-10">
          {[0, 1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
              className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full"
            />
          ))}
        </div>
      </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Analyzing Your Answers
        </h2>
        <p className="text-gray-600 max-w-2xl text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
    );
  };

  const ResultsScreen = () => (
    <div className=" mx-auto p-2 md:p-6 space-y-6">
      <div className="bg-[#FAFAFA] p-4 md:p-8 rounded-xl border border-gray-200 ">
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <h2 className="md:text-xl font-medium text-gray-800">
            Personalized Growth Recommendations
          </h2>
          <ExternalLink size={20} className="text-gray-400" />
        </div>
        <div className="flex items-center space-x-4 ">
          <div>
            <ShieldCheck className="text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">
              Advanced Communication Strategies
            </h3>
            <p className="text-xs text-gray-500">
              Beginner • Enhance your strong skills for difficult conversations.
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="text-[13px] bg-purple-100 text-primary px-2 py-0.5 rounded-full font-medium">
                Leadership
              </span>
              <span className="text-[13px] bg-purple-100 text-primary px-2 py-0.5 rounded-full font-medium">
                Communication
              </span>
            </div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-gray-700">8/27/2025</p>
            <p className="text-xs text-gray-400">1 Week</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:p-8 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-base md:text-xl font-bold text-gray-800">
            Your Growth Over Time
          </h2>
          <div className="flex space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>{" "}
              <span>This Year</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-purple-200"></span>{" "}
              <span>Last Year</span>
            </div>
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CHART_DATA}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333ea" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                width={30}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="thisYear"
                stroke="#9333ea"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorThis)"
              />
              <Area
                type="monotone"
                dataKey="lastYear"
                stroke="#e9d5ff"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="transparent"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 py-4">
        <button
          className="px-8 py-3 border border-gray-200 rounded-xl font-medium text-gray-700"
          onClick={Back}
        >
          Back to Dashboard
        </button>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-xl font-medium">
          Continue to see Results
        </button>
      </div>
    </div>
  );

  // --- Main Router ---
  return (
    <div className=" bg-white font-sans text-gray-900 min-h-screen">
      
      {step === "intro" && <IntroScreen Back={Back} />}
      {step === "overview" && <ModuleIntro />}
      {step === "questions" && <QuestionsScreen />}
      {step === "completion" && <CompletionScreen />}
      {step === "analyzing" && <AnalyzingScreen />}
      {step === "results" && <ResultsScreen />}
    </div>
  );
};

export default AssessmentApp;
