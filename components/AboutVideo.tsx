"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import team from "@/assets/creative-atmosphere.png";

// The Figma overlay is #0B0F19 at 35%
const AboutVideo = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="container-x pt-16 lg:pt-28">
      <div className="relative overflow-hidden rounded-lg">
        <Image src={team} alt="Our team working together" className="h-80 w-full object-cover lg:h-150" />
        <div className="absolute inset-0 bg-[#0b0f19]/35" />
        <button
          onClick={() => setVideoOpen(true)}
          aria-label="Play video"
          className="cursor-pointer absolute left-1/2 top-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 hover:scale-105 transition-transform"
        >
          <Play className="size-5 fill-slate-900" />
        </button>
      </div>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
};

export default AboutVideo;
