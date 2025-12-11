import React from 'react'
import { HiOutlineVideoCameraSlash } from "react-icons/hi2";

const CameraFeed = ({isConnected}) => {
  return (
    <div className='relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 group'>
        {/* Video feed */}
        {isConnected ? (
            /* STATE A: Connected */
            <img 
                src='http://localhost:8000/video_feed' 
                alt="Live Feed"
                className='w-full h-full object-cover'
            />
        ) : (
            /* STATE B: Disconnected */
            <div className='flex w-full h-full flex-col items-center justify-center w-full h-full bg-slate-900'>
                {/* Red pulsing effect */}
                <div className='relative mb-4'>
                    <div className='absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse'></div>
                    <HiOutlineVideoCameraSlash className="relative w-16 h-16 text-slate-600 z-10" />
                </div>
                <p className="text-slate-500 font-medium tracking-widest text-sm">NO SIGNAL</p>
                <p className="text-slate-600 text-xs mt-1">Check connection</p>
            </div>
        )}
        
        {/* Overlay Container */}
        <div className='absolute top-0 left-0 flex items-center gap-2 p-3 text-xs md:p-5 md:text-xl'>
            <div>
                {isConnected ? (
                    /* CONNECTED BADGE */
                    <div className='flex items-center justify-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg md:gap-5 md:px-5 md:rounded-xl'>
                        {/* The red ping */}
                        <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-full w-full bg-red-600"></span>
                        </div>
                        <span className="font-medium tracking-wide">LIVE FEED</span>
                    </div>
                ) : (
                    /* DISCONNECTED BADGE */
                    <div className='flex items-center justify-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg md:gap-5 md:px-5 md:rounded-xl'>
                        <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                            <span className="relative inline-flex rounded-full h-full w-full bg-gray-500"></span>
                        </div>
                        <span className="font-medium tracking-wide">DISCONNECTED</span>
                    </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default CameraFeed