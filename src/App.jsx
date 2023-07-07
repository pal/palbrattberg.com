import React from "react";
import HeroSection from "./Hero/HeroSection";
import Workingflow from "./workflow/Workflow";
import BenefitSection from "./Benefit/BenefitSection";

import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <Workingflow />
      <BenefitSection />
      <Footer />
    </div>
  );
}

export default App;
