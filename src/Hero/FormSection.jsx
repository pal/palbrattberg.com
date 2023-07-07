import React from "react";
import { useState } from "react";
import OptionMenu from "./FormListComponent";

function FormSection() {
  const [firstName, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const serviceOptions = [
    { name: "Service1" },
    { name: "Service2" },
    { name: "Service3" },
    { name: "Service4" },
  ];

  return (
    <div className="form-section flex flex-col gap-y-5 lg:flex-row justify-between items-center gap-x-5 mt-3.5 p-5 rounded-xl border border-slate-500/50 bg-white">
      <div className="w-full">
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="flex w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40 placeholder:font-bold"
          placeholder="Name"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </div>

      <div className="w-full">
        <input
          type="email"
          id="email"
          name="email"
          className="flex w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6469ff] placeholder:text-slate-500/40 placeholder:font-bold"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
     
      <div className="w-full lg:w-1/2">
        {" "}
        <button className="w-full flex items-center text-white justify-center rounded-lg bg-[#7639DA] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
          <span>Join now</span>
        </button>
      </div>
    </div>
  );
}

export default FormSection;
