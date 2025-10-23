import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingChatButton() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`mb-2 transition-all duration-300 origin-bottom-right ${
          hovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } bg-white shadow-lg rounded-xl px-4 py-3 text-gray-800 text-sm w-64 border border-blue-100`}
        style={{ boxShadow: "0 4px 24px 0 rgba(30, 64, 175, 0.10)" }}
      >
        <div className="font-semibold text-blue-700 mb-1 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          Contact me
        </div>
        <div>
          Interested in working together? Click to get in touch.
        </div>
      </div>
      <button
        className={`bg-gradient-to-br from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-xl rounded-full p-4 flex items-center justify-center transition-all duration-300 border-2 border-white/80 focus:outline-none focus:ring-2 focus:ring-blue-300 ${hovered ? 'scale-110' : 'scale-100'}`}
        style={{ boxShadow: "0 4px 24px 0 rgba(30, 64, 175, 0.18)" }}
        aria-label="Contact"
        onClick={() => navigate('/contact')}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
