import React, { useEffect, useState } from "react";

const Header = () => {
  return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-white/5 h-14 px-6 py-10 flex items-center justify-between font-sans">
      <div className="flex items-baseline gap-2">
        <span className="text-[#F3F4F6] text-lg font-bold tracking-wide">GlowBuddy</span>
        <span className="text-gray-500 text-sm font-medium">AI</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ade80]"></span>
        </div>
        <span className="text-[#9CA3AF] text-sm font-medium tracking-wide">System Online</span>
      </div>
    </header>
  );
};

export default Header;
