"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import photo from "@/assets/testimonial-photo.png";
import logo from "@/assets/testimonial-logo.png";

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const total = TESTIMONIALS.length;

  return (
    <section className="container-x pt-16 lg:pt-26">
      <h2 className="text-center">What They Say About Us</h2>

      {/* Every testimonial is one full slide: card, pager, photo and author */}
      <div className="mt-14.5 overflow-hidden pt-5">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="grid w-full shrink-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_416px] lg:gap-18"
            >
              <div>
                <div className="relative min-h-81.5 rounded-lg bg-surface px-6 pt-16 pb-12 shadow-lg shadow-brand/5 sm:px-12">
                  <span className="absolute -top-5 left-6 flex size-13 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30 sm:left-12">
                    <Quote className="size-6 fill-white" />
                  </span>
                  <p className="text-lg leading-7.25">{item.text}</p>
                  <div className="mt-6 flex gap-1.25">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-3.5 fill-[#ffba08] text-[#ffba08]" />
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-2">
                  <button
                    onClick={() => setPage((page + total - 1) % total)}
                    aria-label="Previous testimonial"
                    className="cursor-pointer flex size-6 items-center justify-center"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`cursor-pointer size-9 rounded text-xs font-bold ${
                        i === page ? "bg-brand text-white shadow-lg shadow-brand/30" : i === page - 1 ? "bg-soft" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((page + 1) % total)}
                    aria-label="Next testimonial"
                    className="cursor-pointer flex size-6 items-center justify-center"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              <div>
                <Image src={photo} alt="" className="w-full rounded-lg" />
                <div className="mt-8 flex items-center sm:pl-6">
                  <Image src={logo} alt="" className="h-auto w-24 shrink-0 sm:w-28.5" />
                  <div className="ml-5 flex h-16 flex-col justify-center border-l border-line pl-5 sm:ml-11.5 sm:pl-6">
                    <p className="text-xl font-bold text-main">{item.name}</p>
                    <p className="text-sm text-subtle">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
