import React from 'react'
import { FiActivity } from "react-icons/fi";

const AIConfidence = ({ aiConfidenceLevel }) => {
  return (
     <div className='flex flex-col justify-between bg-slate-900 border border-slate-800 p-6 flex-1 rounded-xl shadow-xl text-white mt-5'>
        
        {/* Header*/}
        <div className='mb-1'>
            <h1 className='text-slate-400 text-xs font-semibold uppercase tracking-wide'>
                AI Confidence
            </h1>
        </div>

        {/* AI Confidence level */}
        <div className='flex items-center gap-3'>
            <FiActivity size={24} className="text-slate-600"/>
            <span className='text-3xl font-bold text-white tracking-tight'>
                {aiConfidenceLevel}%
            </span>
        </div>
    </div>
  )
}

export default AIConfidence