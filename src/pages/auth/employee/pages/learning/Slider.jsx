import { ChevronLeft, ChevronRight, Clock, Heart } from "lucide-react";
import { useRef } from "react";

const WATCH_DATA = [
  { id: 1, title: "Daily Collaboration Tip", category: "Communication", time: "30 Minutes", progress: "60%", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400" },
  { id: 2, title: "Advanced Communication...", category: "Change Management", time: "30 Minutes", progress: "45%", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
  { id: 3, title: "Daily Collaboration Tip", category: "Leadership", time: "30 Minutes", progress: "80%", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" },
  { id: 4, title: "Advanced Communication...", category: "Change Management", time: "30 Minutes", progress: "30%", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400" },
];

export default function ContinueWatchingSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const { current } = scrollRef;
    if (current) {
      // Logic for 720px+ (Scroll by container width)
      // Logic for < 720px (Scroll by card width + gap)
      const scrollAmount = current.offsetWidth > 720 ? current.offsetWidth : 320; 
      current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 md:p-6 block md:w-full md:max-w-full overflow-hidden">
      
      {/* Header Section - Chevron visible only on Desktop (min-720px) */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#0F2D46]">Continue watching</h2>
        
        <div className="hidden min-[720px]:flex gap-2">
          <button onClick={() => scroll("left")} className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-all text-gray-500">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-all text-gray-500">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Absolute Mobile Nav Buttons (Visible ONLY < 720px) */}
       

        {/* The Scroll Track */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WATCH_DATA.map((item) => (
            <div
              key={item.id}
              /* - Below 720px: Fixed width (80% of container) to ensure icons stay outside.
                - Above 720px: Your final requested responsive width.
              */
              className="flex-none w-[80%] min-[720px]:w-[calc(35%-12px)] xl:w-[calc(30%-12px)] 2xl:w-[calc(20%-12px)] bg-[#F8F7FF] border border-[#EDE9FE] rounded-2xl overflow-hidden snap-center min-[720px]:snap-start transition-all"
            >
              {/* Thumbnail Area */}
              <div className="relative aspect-video">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2 p-1.5 bg-black/30 backdrop-blur-md rounded-full text-white">
                  <Heart size={16} />
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-200/50">
                  <div className="h-full bg-[#7C3AED]" style={{ width: item.progress }}></div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 space-y-3">
                <h4 className="font-semibold text-[#0F2D46] text-sm md:text-base line-clamp-1">{item.title}</h4>
                <span className="inline-block bg-[#EDE9FE] text-[#7C3AED] px-3 py-1 rounded-lg text-xs lg:text-sm font-medium">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                  <Clock size={14} className="text-[#7C3AED]" />
                  {item.time}
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer to prevent cut-off at the end */}
          <div className="flex-none w-10 min-[720px]:hidden"></div>
        </div>
      </div>
    </div>
  );
}