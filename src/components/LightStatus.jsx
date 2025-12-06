import React from 'react'
import { HiOutlineLightningBolt, HiCheckCircle, HiXCircle } from 'react-icons/hi'

const LightStatus = ({ lightStatus = "OFF", humanPresence, isDarkEnvironment }) => {
  
  const renderRequirement = (label, isMet) => (
    <li className={`flex items-center gap-2 ${isMet ? 'text-green-400 font-medium' : 'text-slate-600'}`}>
      {/* Swap icon based on status */}
      {isMet ? <HiCheckCircle /> : <HiXCircle />} 
      <span>{label}</span>
    </li>
  );

  return (
    <div className='flex justify-between bg-slate-900 border border-slate-800 p-6 w-96 rounded-xl shadow-xl text-white mt-5'>
      {/* Left Side: Status */}
      <div className='flex flex-col justify-between'>
        <div className='flex items-center gap-2 text-slate-400'>
          <HiOutlineLightningBolt className='text-yellow-400' />
          <span className='text-sm uppercase tracking-wide'>Light Status</span>
        </div>
        <span className={`text-4xl font-bold ${lightStatus === "ON" ? "text-white" : "text-slate-500"}`}>
          {lightStatus}
        </span>
      </div>

      {/* Right Side: Logic */}
      <div className='flex flex-col gap-2'>
        <span className='text-slate-400 text-sm font-semibold uppercase tracking-wider'>
          Logic Requirements:
        </span>
        <ul className='flex flex-col gap-1'>
            {/* Pass the props to our helper function */}
            {renderRequirement("Human Present", humanPresence)}
            {renderRequirement("Environment Dark", isDarkEnvironment)}
        </ul>
      </div>
    </div>
  )
}

export default LightStatus