import React from "react";
import FaqData from "./FaqData";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function Faq() {
  return (
    <div className="w-full px-7 md:px-10 xl:px-2 py-10">
      <div className="mx-auto w-full max-w-5xl border border-slate-500 rounded-lg bg-white">
        {FaqData.map((faq, index) => (
          <Disclosure key={faq.id}>
            {({ open }) => (
              <div
                className={`${
                  index !== FaqData.length - 1
                    ? "border-b border-[#0A071B]/10"
                    : ""
                }`}
              >
                <Disclosure.Button className="flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5">
                  <span>{faq.question}</span>
                  <BiChevronDown
                    className={` mt-1.5 md:mt-0 flex-shrink-0 ${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#5B5675]`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
