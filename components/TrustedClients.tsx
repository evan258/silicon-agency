"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TRUSTED_LOGOS } from "@/lib/constants";

const TrustedClients = () => {
  const [start, setStart] = useState(0);
  const total = TRUSTED_LOGOS.length;

  // Show the logos in a loop, starting from the current position
  const visible = Array.from({ length: total }, (_, i) => (start + i) % total);

  return (
    <section className="container-x pt-16 lg:pt-24">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-[32px]">Trusted by Awesome Clients</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setStart((start + total - 1) % total)}
            aria-label="Previous logos"
            className="cursor-pointer flex size-9 items-center justify-center rounded-full bg-surface shadow-lg shadow-brand/10"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => setStart((start + 1) % total)}
            aria-label="Next logos"
            className="cursor-pointer flex size-9 items-center justify-center rounded-full bg-surface shadow-lg shadow-brand/10"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-10.5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {visible.map((index) => (
          <Image key={`${start}-${index}`} src={TRUSTED_LOGOS[index]} alt="" className="slide-in h-auto w-full" />
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
