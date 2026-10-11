import Image from "next/image";
import { Star } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import { ABOUT_STATS } from "@/lib/constants";
import HeroBackground from "./HeroBackground";
import clutchBlack from "@/assets/clutch-black.png";
import clutchWhite from "@/assets/clutch-white.png";

const AboutHero = () => {
  return (
    // Same background as the home hero, it slides under the navbar
    <section className="relative -mt-16 overflow-hidden lg:min-h-209.5">
      <HeroBackground />

      <div className="container-x relative pt-32 pb-16 lg:pt-29 lg:pb-35">
        <Breadcrumb current="About v.1" />

        <h1 className="mt-19.25 text-[40px] font-extrabold leading-12">About Silicon</h1>
        <p className="mt-5.25 max-w-130 text-xl leading-8">
          We are a dedicated team of passionate product managers, full stack developers, UX/UI designers,
          <br />
          QA engineers and marketing experts helping businesses of every size — from new startups to public
          companies — launch their projects using our software.
        </p>

        <div className="mt-11 flex items-start gap-4.75">
          <div>
            <p className="text-[11px] uppercase leading-3.5 text-ink">Reviewed on</p>
            {/* The black icon is for the light theme, the white one for the dark theme */}
            <Image src={clutchBlack} alt="Clutch" className="mt-1.25 dark:hidden" />
            <Image src={clutchWhite} alt="Clutch" className="mt-1.25 hidden dark:block" />
          </div>
          <div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4 fill-red-500 text-red-500" />
              ))}
            </div>
            <p className="mt-2 text-base leading-6">49 reviews</p>
          </div>
        </div>

        <div className="mt-16 flex gap-6 sm:gap-14">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.value} className="flex-1 sm:w-31.75 sm:flex-none">
              <p className="text-[32px] font-bold leading-10 text-main">{stat.value}</p>
              <p className="mt-1.5 whitespace-pre-line text-base leading-6.5">
                <span className="font-bold">{stat.bold}</span>
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
