import React from "react";
import moneyHuman from "../assets/making-money.jpg";
import ticked from "../assets/ticked.svg";

function BenefitSection() {
  return (
    <div className=" max-w-5xl mx-auto pb-10 lg:py-10 px-10 flex flex-col gap-y-10 md:flex-row items-center justify-center gap-x-10 py-10">
      <div className="left-text lg:w-1/2 flex flex-col gap-y-3.5">
        <h3 className="text-[#27392A] font-bold text-3xl md:text-2xl lg:text-4xl flex items-center">
          Be your own boss!
        </h3>
        <div className="flex items-center gap-x-3 mt-3">
          <div className=" rounded-full">
            <img className="h-5 w-5" src={ticked} alt="ticked" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold">Set your availability</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className=" rounded-full">
            <img className="h-5 w-5" src={ticked} alt="ticked" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold">Name your Price</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className=" rounded-full">
            <img className="h-5 w-5" src={ticked} alt="ticked" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold">
              Earn your money and keep it, that’s right!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="  rounded-full">
            <img className="h-5 w-5" src={ticked} alt="ticked" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold">No service fee charged now or ever.</p>
          </div>
        </div>
      </div>
      <div className="right-image lg:w-1/2">
        <div className="money-human">
          <img src={moneyHuman} alt="running human" />
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
