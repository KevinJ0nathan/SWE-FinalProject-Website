import React from 'react'

const CameraFeed = ({isConnected}) => {
  return (
    <div className='relative'>
        {/* Video feed */}
        <img src='https://placehold.co/1920x1080' className='rounded-xl w-full object-cover'/>
        
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