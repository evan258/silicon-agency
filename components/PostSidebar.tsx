"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, ThumbsUp } from "lucide-react";
import { newsletterSchema, NewsletterFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";
import linkedinIcon from "@/assets/in.svg";
import facebookIcon from "@/assets/fb.svg";
import twitterIcon from "@/assets/twitter.svg";
import gplusIcon from "@/assets/gplus.png";

const SHARE_LINKS = [
  { name: "LinkedIn", icon: linkedinIcon, size: "size-4.5" },
  { name: "Facebook", icon: facebookIcon, size: "size-4.5" },
  { name: "Twitter", icon: twitterIcon, size: "size-4.5" },
  { name: "Google+", icon: gplusIcon, size: "" },
];

const ShareButtons = () => {
  return (
    <div className="flex gap-3">
      {SHARE_LINKS.map((link) => {
        const isTwitter = link.name === "Twitter";
        return (
          <a
            key={link.name}
            href="#"
            aria-label={`Share on ${link.name}`}
            className={`flex size-11 items-center justify-center rounded-md ${
              isTwitter ? "bg-[#1da1f2] shadow-md shadow-[#1da1f2]/40" : "bg-[#eff2fc]"
            }`}
          >
            <Image src={link.icon} alt="" className={`${link.size} ${isTwitter ? "brightness-0 invert" : ""}`} />
          </a>
        );
      })}
    </div>
  );
};

// The google+ icon is a small image, so it is shown at its own size
const PostSidebar = () => {
  const [liked, setLiked] = useState(false);
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await sendMessage({ title: "Newsletter signup", body: data.email }).unwrap();
      toast.success("Thanks for subscribing!");
      reset();
    } catch {
      toast.error("Could not subscribe. Please try again.");
    }
  };

  return (
    // The sidebar is as tall as the design, the first block stays at the top and the second one at the bottom
    <aside className="flex flex-col justify-between gap-16 lg:h-911.25">
      <div>
        <p className="leading-6">5 min read</p>
        <p className="mt-4.25 font-bold leading-6 text-main">Share this post:</p>
        <div className="mt-4">
          <ShareButtons />
        </div>

        <button
          onClick={() => setLiked(!liked)}
          className="cursor-pointer mt-11.75 flex h-13 w-45.25 items-center justify-center gap-3 rounded-lg border border-line bg-surface text-base font-medium text-ink"
        >
          <ThumbsUp className={`size-5 ${liked ? "fill-brand text-brand" : ""}`} />
          Like it
          <span className="ml-1.5 rounded bg-brand px-2 py-0.5 text-xs text-white shadow-lg shadow-brand/30">
            {8 + (liked ? 1 : 0)}
          </span>
        </button>
      </div>

      <div className="lg:pb-4.5">
        <p className="text-lg font-bold leading-7.25 text-main">Enjoy this post? Join our newsletter</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div className="relative">
            <Mail className="absolute left-4.5 top-1/2 size-4.5 -translate-y-1/2 text-[#b4b7c9]" />
            <input
              {...register("email")}
              placeholder="Your Email"
              className="h-11 w-full rounded-md border border-[#d4d7e5] bg-surface pl-11 text-sm text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          <button type="submit" disabled={isLoading} className="btn-brand mt-4 flex h-11 w-full text-sm shadow-none">
            Subscribe
          </button>
        </form>

        <p className="mt-12 text-lg font-bold leading-7 text-main">Don&apos;t forget to share it</p>
        <div className="mt-4.25">
          <ShareButtons />
        </div>
      </div>
    </aside>
  );
};

export default PostSidebar;
