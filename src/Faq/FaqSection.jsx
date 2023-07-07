import React from "react";
import FaqComponent from "./FaqComponent";

function FaqSection() {
  return (
    <div className="faq max-w-5xl mx-auto py-10">
      <div className="faq-headline flex flex-col gap-y-2">
        <h3 className="text-3xl sm:text-4xl lg:text-[44px] max-w-xs mx-auto md:max-w-full md:mx-0 text-center font-bold leading-[1.15] text-black">
          Frequently asked questions
        </h3>
      </div>
      {/* Actual faq component with accordion */}
      <div className="lg:mt-5">
        <FaqComponent />
      </div>
    </div>
  );
}

export default FaqSection;
