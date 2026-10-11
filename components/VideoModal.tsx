"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { PROMO_VIDEO_URL } from "@/lib/constants";

const VideoModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          aria-label="Close video"
          className="cursor-pointer absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-white text-slate-900"
        >
          <X className="size-5" />
        </button>
        <iframe
          src={`${PROMO_VIDEO_URL}&autoplay=1`}
          title="Digital Agency Promo"
          allow="autoplay; encrypted-media; fullscreen"
          className="aspect-video w-full rounded-xl bg-black"
        />
      </div>
    </div>
  );
};

export default VideoModal;
