import React from "react";
import { useState } from "react";

const PricingSlider = ({ onValueChange }) => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onValueChange(newValue);
  };

  const getDays = () => {
    if (value === 0) {
      return "30 days";
    } else if (value === 25) {
      return "60 days";
    } else if (value === 50) {
      return "90 days";
    } else if (value === 75) {
      return "180 days";
    } else if (value === 100) {
      return "1 Year";
    }
  };

  return (
    <form>
      <div className="relative w-full">
        <input
          type="range"
          className="pricing-slider bg-[#EFF0F6] w-full h-2.5 rounded-full"
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
          step={25}
        />
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <p className="lg:text-lg bg-[#6498DD] text-white rounded-full px-3 py-1 font-bold">
            {getDays()}
          </p>
        </div>
      </div>
      <style>{`
          .pricing-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            border-radius: 5px;
            background: linear-gradient(to right, #6498DD 0%, #6498DD ${value}%, #EFF0F6 ${value}%, #EFF0F6 100%);
            outline: none;
            opacity: 0.7;
            transition: opacity 0.2s;
          }
  
          .pricing-slider::-moz-range-thumb {
            width: 25px;
            height: 25px;
            background: white;
            border: 1px solid #dfdfdf;
            cursor: pointer;
            border-radius: 50%;
          }
  
          .pricing-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 25px;
            height: 25px;
            background: white;
            border: 1px solid #dfdfdf;
            cursor: pointer;
            border-radius: 50%;
          }
        `}</style>
    </form>
  );
};

export default PricingSlider;
