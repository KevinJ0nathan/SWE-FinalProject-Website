import React, { useEffect, useState } from 'react'
import LightModeButton from './LightModeButton'
import LightSensorSlider from './LightSensorSlider'
import CameraFeed from './CameraFeed'
import LightStatus from './LightStatus'
import AIConfidence from './AIConfidence'
import LightBrightness from './LightBrightness'

import client from '../mqttClient'

const DashboardLayout = () => {
  const[lightState, setLightState] = useState("...");

  useEffect(() => {
    client.on("message", (topic, message) => {
      if (topic === "light_state") {
        setLightState(message.toString());
      }
    });
  }, []);
  
  return (
    <div className='pt-20 pb-8 px-6 max-w-[1600px] mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 pt-10 h-[calc(100vh-8rem)]'>
            {/*Video feed and stats*/}
            <div className='lg:col-span-8 h-full'>
                <CameraFeed isConnected={true}></CameraFeed>
                <div className='flex gap-5 flex-wrap'>
                <LightStatus lightStatus={lightState}></LightStatus>
                <AIConfidence></AIConfidence>
                <LightBrightness></LightBrightness>
                </div>
            </div>

            {/*Sidebar*/}
            <div className='lg:col-span-4 h-full flex flex-col gap-5'>
                <LightModeButton></LightModeButton>
                <LightSensorSlider></LightSensorSlider>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout