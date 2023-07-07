import React from "react";
import HeroSection from "./Hero/HeroSection";
import Workingflow from "./workflow/Workflow";
import BenefitSection from "./Benefit/BenefitSection";
import PricingSection from "./Pricing/PricingSection";
import FaqSection from "./Faq/FaqSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <Workingflow />
      <BenefitSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;
