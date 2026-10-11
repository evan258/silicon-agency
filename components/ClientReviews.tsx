"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { CLIENT_REVIEWS, SOCIAL_NETWORKS } from "@/lib/constants";
import avatar from "@/assets/author-annette.png";

const ClientReviews = () => {
  const [index, setIndex] = useState(0);
  const total = CLIENT_REVIEWS.length;

  return (
    <section className="container-x pt-16 lg:pt-77.5">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[526px_minmax(0,1fr)]">
        <div className="flex items-center bg-linear-to-r from-[#efeffd] to-[#fbecfd] px-6 py-12 lg:px-14">
          <h2 className="max-w-90 leading-[52px] md:text-[40px]">What Our Clients Say About Silicon Studio</h2>
        </div>

        <div className="min-w-0 rounded-lg bg-surface p-6 shadow-lg shadow-brand/5 sm:p-12">
          <div className="flex items-start justify-between">
            <span className="flex size-13 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30">
              <Quote className="size-6 fill-white" />
            </span>
            <div className="flex gap-4">
              <button
                onClick={() => setIndex((index + total - 1) % total)}
                aria-label="Previous review"
                className="cursor-pointer flex size-9 items-center justify-center rounded-full bg-surface shadow-lg shadow-brand/10"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => setIndex((index + 1) % total)}
                aria-label="Next review"
                className="cursor-pointer flex size-9 items-center justify-center rounded-full bg-surface shadow-lg shadow-brand/10"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {CLIENT_REVIEWS.map((review) => (
                <div key={review.name} className="w-full shrink-0">
                  <p className="mt-8 min-h-29 text-lg leading-7.25">{review.text}</p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Image src={avatar} alt="" className="size-15 rounded-full" />
                    <div>
                      <p className="font-bold leading-6 text-main">{review.name}</p>
                      <p className="mt-1.5 text-sm leading-5 text-subtle">{review.role}</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      {[SOCIAL_NETWORKS[0], SOCIAL_NETWORKS[2], SOCIAL_NETWORKS[1]].map((network) => (
                        <span key={network.name} className="flex size-9 items-center justify-center rounded bg-[#eff2fc]">
                          <Image src={network.icon} alt={network.name} className="size-5" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {CLIENT_REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`cursor-pointer h-1 rounded-full ${i === index ? "w-6 bg-brand" : "w-1 bg-[#b4b7c9]"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
