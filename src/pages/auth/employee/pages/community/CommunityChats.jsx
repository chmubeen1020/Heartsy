import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Plus, Image as ImageIcon, 
  Smile, Send, Users, FileText, Gift, X 
} from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialThreads = [
  {
    id: 1,
    name: "Engineering Discussion",
    type: "Company Only Community",
    lastUser: "Abdullah",
    lastMessage: "Dear team The August & September Monthl...",
    messagesCount: 247,
    members: 156,
    chatHistory: [
      { id: 1, sender: "Sarah Jen", time: "2 hours ago", text: "Hahaha it's all good! I'm here another 10 days. Just house/dog sitting today through Saturday still.", isMe: false, avatar: "https://i.pravatar.cc/150?u=sarah", reactions: { "👍": 1 } },
      { id: 2, sender: "Me", time: "Just now", text: "Nice! Let's try and grab lunch next week. What's in Colorado for you?", isMe: true, reactions: {} },
      { id: 3, sender: "Me", time: "Just now", text: "Gosh, it's not like me to do anything crazy or stupid.", isMe: true, reactions: {} },
      { id: 4, sender: "Mike Johnson", time: "1.5 hours ago", text: "Hahaha it's all good!", isMe: false, avatar: "https://i.pravatar.cc/150?u=mike", reactions: {} },
    ]
  },
  {
    id: 2,
    name: "Software Developers",
    type: "Global Community",
    lastUser: "You",
    lastMessage: "Ok",
    messagesCount: 1847,
    members: 237,
    chatHistory: [
      { id: 10, sender: "System", time: "Yesterday", text: "Welcome to the Software Developers thread!", isMe: false, reactions: {} }
    ]
  }
];

const CommunityChat = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [activeThreadId, setActiveThreadId] = useState(1);
  const [messageText, setMessageText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  
  const activeThread = threads.find(t => t.id === activeThreadId);
  const fileInputRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever history changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeThread.chatHistory]);

  const handleSendMessage = (content, type = 'text') => {
    if (!content && type === 'text') return;
    const newMessage = {
      id: Date.now(),
      sender: "Me",
      time: "Just now",
      text: type === 'text' ? content : '',
      image: type === 'image' ? content : null,
      isMe: true,
      reactions: {}
    };

    setThreads(prev => prev.map(t => 
      t.id === activeThreadId ? { ...t, chatHistory: [...t.chatHistory, newMessage] } : t
    ));
    setMessageText("");
    setShowPlusMenu(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => handleSendMessage(reader.result, 'image');
      reader.readAsDataURL(file);
    }
  };

  const handleReaction = (msgId, emoji) => {
    setThreads(prev => prev.map(t => {
      if (t.id !== activeThreadId) return t;
      return {
        ...t,
        chatHistory: t.chatHistory.map(m => {
          if (m.id !== msgId) return m;
          const newReactions = { ...m.reactions };
          newReactions[emoji] = (newReactions[emoji] || 0) + 1;
          return { ...m, reactions: newReactions };
        })
      };
    }));
  };

  return (
    /* Removed 'fixed inset-0' to respect the EmployeeLayout Parent */
    /* Using h-full to fill the 'flex-1 overflow-y-auto' container of the layout */
    <div className="flex h-full w-full bg-white overflow-hidden relative">
      
      {/* LEFT: MAIN CHAT AREA */}
      <div className={`flex-1 flex flex-col h-full min-w-0 transition-all duration-300 ${isRightSidebarOpen ? 'hidden md:flex' : 'flex'}`}>
        {/* Chat Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-gray-100 bg-white z-10">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors" onClick={() => window.history.back()}>
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div>
              <h1 className="text-base font-bold text-gray-800 leading-tight">{activeThread.name}</h1>
              <p className="text-[11px] text-green-500 font-medium">Online</p>
            </div>
          </div>
          <button onClick={() => setIsRightSidebarOpen(true)} className="md:hidden p-2 text-primary">
            <Users size={22} />
          </button>
        </header>

        {/* MESSAGES LIST - Independent Scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white custom-scrollbar">
          {activeThread.chatHistory.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}  relative`}>
              {!msg.isMe && (
                <img src={msg.avatar} className="w-9 h-9 rounded-full mr-3 mt-1 object-cover" alt="avatar" />
              )}
              <div className={`flex flex-col max-w-[70%] ${msg.isMe ? 'items-end' : 'items-start'}`}>
                {!msg.isMe && (
                  <span className="text-xs font-bold text-gray-700 mb-1 ml-1">{msg.sender}</span>
                )}
                
                <div className="relative group">
                  <div className={`px-4 py-3 rounded-2xl text-[14px] shadow-sm leading-relaxed ${
                    msg.isMe 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    {msg.image ? (
                        <img src={msg.image} className="rounded-lg max-h-60 w-full object-cover" alt="sent" />
                    ) : (
                        msg.text
                    )}
                    
                    {/* Reaction Bar on Hover */}
                    <div className={`absolute -top-10 ${msg.isMe ? 'right-0' : 'left-0'} opacity-0 group-hover:opacity-100 transition-opacity flex bg-white border rounded-full px-2 py-1 shadow-lg z-20 gap-2`}>
                      {['👍', '❤️', '😂', '🔥'].map(emoji => (
                        <button key={emoji} onClick={() => handleReaction(msg.id, emoji)} className="hover:scale-125 transition-transform text-lg">{emoji}</button>
                      ))}
                    </div>
                  </div>

                  {/* Display Reaction Counts */}
                  {Object.keys(msg.reactions).length > 0 && (
                    <div className={`flex gap-1 absolute -bottom-3 ${msg.isMe ? 'right-2' : 'left-2'} bg-white border border-gray-100 rounded-full px-2 py-0.5 shadow-sm`}>
                      {Object.entries(msg.reactions).map(([emoji, count]) => (
                        <span key={emoji} className="text-[10px] font-bold text-gray-600">
                          {emoji} {count}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1 uppercase">{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* INPUT BAR - Fixed at bottom of chat */}
        <footer className="p-4 bg-white border-t border-gray-100 relative">
          <AnimatePresence>
            {showPlusMenu && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
                className="absolute bottom-20 left-6 bg-white border border-gray-100 rounded-3xl p-5 shadow-2xl z-50 grid grid-cols-2 gap-6"
              >
                <PlusOption icon={<ImageIcon size={22}/>} label="Image" color="bg-blue-50 text-blue-600" onClick={() => fileInputRef.current.click()} />
                <PlusOption icon={<FileText size={22}/>} label="Document" color="bg-orange-50 text-orange-600" />
                <PlusOption icon={<Gift size={22}/>} label="Sticker" color="bg-green-50 text-green-600" />
                <PlusOption icon={<Smile size={22}/>} label="Emoji" color="bg-purple-50 text-purple-600" onClick={() => { setShowEmojiPicker(true); setShowPlusMenu(false); }} />
              </motion.div>
            )}
          </AnimatePresence>

          {showEmojiPicker && (
            <div className="absolute bottom-20 left-0 w-full z-50 flex justify-center px-4">
              <div className="relative w-full max-w-sm shadow-2xl rounded-2xl overflow-hidden border">
                <button onClick={() => setShowEmojiPicker(false)} className="absolute top-2 right-2 z-[60] p-1 bg-white rounded-full shadow-md"><X size={16}/></button>
                <EmojiPicker onEmojiClick={(e) => setMessageText(prev => prev + e.emoji)} width="100%" height={350} />
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2">
            <button 
              onClick={() => setShowPlusMenu(!showPlusMenu)}
              className={`text-gray-500 transition-all ${showPlusMenu ? 'rotate-45 text-primary' : ''}`}
            >
              <Plus size={22} />
            </button>
            <input 
              type="text" 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(messageText)}
              placeholder="Write your message..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-2 placeholder-gray-400"
            />
            <button 
              onClick={() => handleSendMessage(messageText)} 
              className={`${messageText ? 'text-primary' : 'text-gray-300'} transition-colors`}
            >
              <Send size={22} fill="currentColor" />
            </button>
          </div>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
        </footer>
      </div>

      {/* RIGHT SIDEBAR: THREADS */}
      <aside className={`
        fixed inset-y-0 right-0 z-50 bg-white w-80 border-l border-gray-100 transition-transform duration-300 transform
        md:relative md:translate-x-0 ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="h-16 px-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold">Threads</h2>
            <button className="md:hidden p-2" onClick={() => setIsRightSidebarOpen(false)}><X size={20}/></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {threads.map((thread) => (
              <button 
                key={thread.id}
                onClick={() => { setActiveThreadId(thread.id); setIsRightSidebarOpen(false); }}
                className={`w-full p-4 rounded-2xl border border-gray-100 transition-all text-left ${
                  activeThreadId === thread.id 
                  ? 'border-primary/50 bg-gray-100 hover:bg-gray-200/70' 
                  : 'bg-gray-100 hover:bg-gray-200/70'
                }`}
              >
                <h3 className="font-bold text-gray-900 truncate mb-1 text-sm xl:text-base">{thread.name}</h3>
                <p className="text-xs font-medium text-primary  mb-1">{thread.type}</p>
                <p className="text-xs 2xl:text-sm text-gray-500 line-clamp-1 ">{thread.lastUser}: {thread.lastMessage}</p>
                <div className="flex gap-2 mt-3">
                    <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">{thread.messagesCount} Messages</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">{thread.members} Members</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

// Sub-component for Plus Menu Options
const PlusOption = ({ icon, label, color, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group">
    <div className={`p-4 rounded-2xl ${color} transition-transform group-hover:scale-110 shadow-sm`}>
      {icon}
    </div>
    <span className="text-[11px] font-semibold text-gray-500">{label}</span>
  </button>
);

export default CommunityChat;