import React from 'react'
import { MdBrightnessHigh } from "react-icons/md";

const LightBrightness = ({Brightness}) => {
  return (
     <div className='flex flex-col justify-between bg-slate-900 border border-slate-800 p-6 flex-1 rounded-xl shadow-xl text-white mt-5'>
            
            {/* Header*/}
            <div className='mb-1'>
                <h1 className='text-slate-400 text-xs font-semibold uppercase tracking-wide'>
                    Light Brightness
                </h1>
            </div>
    
            {/* Light Brightness */}
            <div className='flex items-center gap-3'>
                <MdBrightnessHigh size={24} className="text-slate-600"/>
                <span className='text-3xl font-bold text-white tracking-tight'>
                    {Brightness}%
                </span>
            </div>
        </div>
  )
}

export default LightBrightness