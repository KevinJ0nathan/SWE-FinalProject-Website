import React, { useState } from 'react';
import { 
  HiOutlineLightningBolt, 
  HiOutlineSun, 
  HiOutlineBan 
} from 'react-icons/hi';

const LightModeButton = () => {
  const [activeMode, setActiveMode] = useState('AUTO');

  const modes = [
    { 
      id: 'AUTO', 
      label: 'Auto', 
      icon: <HiOutlineLightningBolt className="w-5 h-5" />
    },
    { 
      id: 'MANUAL_ON', 
      label: 'Manual On', 
      icon: <HiOutlineSun className="w-5 h-5" />
    },
    { 
      id: 'MANUAL_OFF', 
      label: 'Manual Off', 
      icon: <HiOutlineBan className="w-5 h-5" />
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl bg-slate-900 border border-slate-800 p-6 shadow-xl flex flex-col gap-6">
      
      {/* Header Section */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-white text-lg font-semibold tracking-wide">Operation Mode</h1>
          <p className="text-slate-400 text-xs mt-1">Select lighting control preference</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id;
          
          return (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`
                group relative flex items-center justify-center gap-3 py-4 px-4 rounded-xl 
                text-sm font-bold transition-all duration-200 ease-in-out border cursor-pointer
                ${isActive 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 translate-y-0' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white hover:-translate-y-0.5'
                }
              `}
            >
              {/* Icon */}
              <span className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
                {mode.icon}
              </span>
              
              {/* Label */}
              <span>{mode.label}</span>

            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LightModeButton;