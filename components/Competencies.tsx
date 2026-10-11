"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { COMPETENCIES } from "@/lib/constants";
import laptop from "@/assets/competency-laptop.png";

const Competencies = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="container-x mt-24">
      <div className="rounded-lg bg-soft px-5 pt-18.5 pb-24">
        <div className="text-center">
          <h2>Our Competencies</h2>
          <p className="mx-auto mt-6 max-w-210 text-lg text-subtle">
            We fully understand your business. If you need to update something, we are more than happy to
            help you with the services we are providing.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-214 space-y-4">
          {COMPETENCIES.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.title} className="rounded-lg bg-surface shadow-lg shadow-brand/5">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="cursor-pointer flex h-17 w-full items-center justify-between px-6 text-left"
                >
                  <span className="text-xl font-medium">{item.title}</span>
                  <span
                    className={`flex size-9 items-center justify-center rounded-full ${isOpen ? "bg-brand text-white" : "bg-soft text-main"}`}
                  >
                    {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                  </span>
                </button>

                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col items-center gap-6 px-6 pb-6 sm:flex-row sm:items-start sm:gap-10">
                      <Image src={laptop} alt="" className="size-50 shrink-0" />
                      <p className="pt-5.5">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
