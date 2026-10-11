import Image from "next/image";
import Link from "next/link";
import heroBars from "@/assets/hero-bars.png";
import heroRays from "@/assets/hero-rays.png";

const CtaBanner = ({ className = "" }: { className?: string }) => {
  return (
    <section className={className}>
      <div className="container-x">
        <div className="relative flex min-h-101.5 flex-col items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-brand via-brand-violet to-brand-pink px-6 pt-16 pb-18 text-center text-white">
          <Image
            src={heroBars}
            alt=""
            className="pointer-events-none absolute -left-35 -top-42 hidden w-115.75 max-w-none rotate-150 brightness-0 invert md:block"
          />
          <Image
            src={heroRays}
            alt=""
            className="pointer-events-none absolute right-0 top-0 hidden w-177 max-w-none rotate-180 brightness-0 invert md:block"
          />

          <div className="relative flex flex-col items-center">
            <p className="text-2xl text-white/70">Want to work with us? Let&apos;s talk</p>
            <a
              href="mailto:example@gmail.com"
              className="mt-4 inline-block text-3xl font-bold underline md:text-[40px]"
            >
              example@gmail.com
            </a>
            <Link href="/contact" className="btn-light mt-12.5">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
