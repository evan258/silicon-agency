"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SERVICE_REVIEWS } from "@/lib/constants";
import photo from "@/assets/testimonial-photo.png";
import logo from "@/assets/logoipsum.png";

const ServiceReviews = () => {
  const [index, setIndex] = useState(0);
  const total = SERVICE_REVIEWS.length;
  const review = SERVICE_REVIEWS[index];

  return (
    <section className="container-x pt-16 lg:pt-29">
      <h2>What Our Clients Say</h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[416px_1fr] lg:gap-x-18">
        <div>
          <Image src={photo} alt="" className="w-full rounded-lg" />
          <div className="mt-10 flex gap-4">
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

        <div className="relative mt-5 rounded-lg bg-surface lg:self-start px-6 pt-16 pb-12 shadow-lg shadow-brand/5 sm:px-12">
          <span className="absolute -top-5 left-6 flex size-13 items-center justify-center rounded-lg bg-brand text-white shadow-lg shadow-brand/30 sm:left-12">
            <Quote className="size-6 fill-white" />
          </span>
          <p key={index} className="slide-in min-h-29 text-lg leading-7.25">{review.text}</p>

          <div className="mt-12 flex items-center gap-4 sm:gap-6">
            <div>
              <p className="text-xl font-bold leading-7 text-main">{review.name}</p>
              <p className="text-sm leading-5 text-subtle">{review.role}</p>
            </div>
            <div className="border-l border-line pl-4 sm:pl-6">
              <Image src={logo} alt="" className="h-auto w-28 sm:w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
