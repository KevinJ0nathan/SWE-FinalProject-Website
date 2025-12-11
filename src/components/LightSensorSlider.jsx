import {React, useState} from 'react'
import { LuMoon, LuSun } from "react-icons/lu";
import client from "../mqttClient.js"

const LightSensorSlider = () => {
    const [value, setValue] = useState(750);

    const handleSliderChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);

      if (client.connected) {
        client.publish(
          "custom_threshold",
          newValue.toString(),
          {qos: 1, retain: true}
        );
      }
    }
  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl bg-slate-900 border border-slate-800 p-6 shadow-xl flex flex-col gap-6">
        {/* Header Section */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className='w-full'>
          <h1 className="text-white text-lg font-semibold tracking-wide">Sensor Configuration</h1>
          <div className='flex justify-between'>
          <p className="text-slate-400 text-xs mt-1">Set the darkness threshold</p>
          <span className='font-bold text-white'>{Math.floor(value / 1024 * 100)}%</span>
          </div>
        </div>
      </div>
      {/* Slider Section */}
      <div className="flex flex-col items-center gap-2">
        <input type='range' min={0} max={1024} value={value} onChange={handleSliderChange} className='w-full cursor-pointer'/>
        <div className='flex justify-between w-full text-slate-400'>
        <LuMoon size={20} />
        <LuSun size={20} />
        </div>
      </div>
    </div>
  )
}

export default LightSensorSlider