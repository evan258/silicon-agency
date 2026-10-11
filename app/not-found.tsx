import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";
import type { Metadata } from "next";
import robot from "@/assets/robot-404.svg";

export const metadata: Metadata = {
  title: "404 | Silicon",
  description: "The page you are looking for does not exist.",
};

// The design has no navbar or footer on this page, so it covers the whole screen
const NotFound = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-page lg:overflow-hidden">
      <div className="hero-bg absolute inset-0" />
      <div className="hero-glow absolute inset-0" />

      <div className="container-x relative grid items-start gap-12 pt-24 lg:grid-cols-2 lg:gap-x-6 lg:pt-64.25">
        <div className="md:pl-27.5">
          <h1 className="text-6xl font-extrabold leading-none sm:text-[80px]">Error 404</h1>
          <p className="mt-8.75 max-w-120 text-2xl leading-9.5">
            The page you are looking for was moved, removed or might never existed.
          </p>
          <Link href="/" className="btn-brand mt-14">
            <House className="size-5" />
            Go to homepage
          </Link>
        </div>

        <Image src={robot} alt="" unoptimized priority className="mx-auto w-48 sm:w-64 lg:mx-0 lg:-mt-36.25 lg:w-auto" />
      </div>

      <p className="container-x relative mt-10 pb-8 text-sm font-bold text-subtle lg:absolute lg:inset-x-0 lg:bottom-11.75 lg:mt-0 lg:pb-0">
        {new Date().getFullYear()}. All rights reserved. Silicon Template
      </p>
    </div>
  );
};

export default NotFound;
