import React, { useEffect, useState } from 'react'
import LightModeButton from './LightModeButton'
import LightSensorSlider from './LightSensorSlider'
import CameraFeed from './CameraFeed'
import LightStatus from './LightStatus'
import AIConfidence from './AIConfidence'
import AmbientLight from './AmbientLight'

import client from '../mqttClient'

const DashboardLayout = () => {
  const[lightState, setLightState] = useState("OFF");
  const[aiConfidence, setAiConfidence] = useState(0);
  const[ambientLight, setAmbientLight] = useState(0);
  const [humanDetected, setHumanDetected] = useState(false);
  const [isLowLight, setIsLowLight] = useState(false);

  useEffect(() => {
    client.on("message", (topic, message) => {
      const handleMessage = (topic, message) => {
      if (topic === "light_state") {
        setLightState(message.toString());
      }
      if (topic === "telemetry") {
        try {
          const payload = JSON.parse(message.toString());
          
          setAiConfidence(payload.ai_confidence);     
          setAmbientLight(payload.ambient_light);
          setHumanDetected(payload.human_present);    
          setIsLowLight(payload.environment_dark);    
        } catch (error) {
          console.error("Failed to parse telemetry:", error);
        }
      }
    }

    client.on("message", handleMessage);

    // CLEANUP: Remove listener when component unmounts
    return () => {
      client.removeListener("message", handleMessage);
    };
    });
  }, []);

  return (
    <div className='pt-20 pb-8 px-6 max-w-[1600px] mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 pt-10 h-[calc(100vh-8rem)]'>
            {/*Video feed and stats*/}
            <div className='lg:col-span-8 h-full'>
                <CameraFeed isConnected={false}></CameraFeed>
                <div className='flex gap-5 flex-wrap'>
                <LightStatus lightStatus={lightState} humanPresence={humanDetected} isDarkEnvironment={isLowLight}></LightStatus>
                <AIConfidence aiConfidenceLevel={aiConfidence}></AIConfidence>
                <AmbientLight Brightness={ambientLight}></AmbientLight>
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