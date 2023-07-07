import React from "react";
import signupIcon from "../assets/sign-up-icon.svg";
import smileIcon from "../assets/smile-icon.svg";
import linekdIcon from "../assets/linked-icon.svg";

const servicesData = [
  {
    title: "Sign Up",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    image: signupIcon,
  },
  {
    title: "Create Profile",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    image: smileIcon,
  },
  {
    title: "Connect w/ Clients",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
    image: linekdIcon,
  },
];

const Card = ({ title, description, image }) => (
  <div className="services-card-box bg-white border border-slate-500/20 rounded-xl p-6 flex flex-col items-center justify-center gap-y-6">
    <div className="h-16 w-16 flex items-center justify-center bg-[#F4EDFF] rounded-full">
      <img className="h-8 w-8 bg-transparent" src={image} alt={title} />
    </div>
    <div className="card-content flex flex-col items-center justify-center gap-y-2">
      <h3 className="text-xl lg:text-2xl font-bold text-[#27392A]">{title}</h3>
      <p className="text-sm text-[#7c7c7c] font-medium">{description}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="service-section">
    <div className="services max-w-5xl mx-auto px-0 pt-28 lg:py-10">
      <h3 className="text-3xl lg:text-[44px] font-bold max-w-xs sm:max-w-4xl lg:max-w-2xl sm:mx-auto text-center leading-[1.15]">
        Let’s set you up!
      </h3>

      <div className="services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-14">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
