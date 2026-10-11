"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";
import video from "@/assets/post-video.jpg";

const PostVideo = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative mt-8 overflow-hidden rounded-lg">
      <Image src={video} alt="Woman drawing on a tablet" className="h-80 w-full object-cover lg:h-125" />
      <div className="absolute inset-0 bg-[#0b0f19]/35" />
      <button
        onClick={() => setVideoOpen(true)}
        aria-label="Play video"
        className="cursor-pointer absolute left-1/2 top-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-900 hover:scale-105 transition-transform"
      >
        <Play className="size-5 fill-slate-900" />
      </button>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </div>
  );
};

export default PostVideo;
