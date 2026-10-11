"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import VideoModal from "./VideoModal";
import heroBall from "@/assets/hero-ball.svg";
import HeroBackground from "./HeroBackground";
import heroBars from "@/assets/hero-bars.png";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    // The Figma header is 990px tall with the navbar on top of it, so it slides under the sticky navbar
    <section className="relative -mt-16 overflow-hidden lg:min-h-247.5">
      <HeroBackground />

      <div className="container-x relative grid gap-10 pt-32 pb-16 lg:grid-cols-2 lg:gap-0 lg:pt-51 lg:pb-24">
        <div className="relative z-10">
          <button
            onClick={() => setVideoOpen(true)}
            className="cursor-pointer flex items-center gap-4 mb-5 group"
          >
            <span className="flex size-13 items-center justify-center rounded-full bg-surface shadow-lg group-hover:scale-105 transition-transform">
              <Play className="size-3.5 fill-main" />
            </span>
            <span className="font-bold text-2xl">Digital Agency Promo</span>
          </button>

          <h1 className="max-w-135 lg:text-7xl lg:leading-[1.3]">
            We <span className="gradient-text">Transform</span> Your Ideas into Reality
          </h1>

          <div className="mt-15 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <Link href="/contact" className="btn-brand shrink-0">
              Work with us
            </Link>
            <p className="max-w-110 text-base">
              Silicon is a leading full-service digital agency based in New York. We make mobile
              apps, websites &amp; brands, that people appreciate all around the world.
            </p>
          </div>

          <a href="#services" className="mt-16 hidden items-center gap-4 sm:inline-flex lg:mt-38.5">
            <span className="flex size-11 items-center justify-center rounded-full bg-surface shadow-lg">
              <ChevronDown className="size-5" />
            </span>
            <span className="text-sm text-muted">Discover more</span>
          </a>
        </div>

        <div className="relative flex items-start justify-center lg:-mt-8.5 lg:justify-end">
          <Image
            src={heroBall}
            alt=""
            unoptimized
            priority
            className="w-full max-w-md lg:max-w-159"
          />
        </div>
      </div>

      <Image src={heroBars} alt="" className="pointer-events-none absolute left-1/2 top-75.75 ml-75 hidden lg:block" />

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
};

export default Hero;
