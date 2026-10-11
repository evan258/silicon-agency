import Image from "next/image";
import Link from "next/link";
import monitor from "@/assets/cta-monitor.png";

const ReadyCta = () => {
  return (
    <section className="container-x pb-7.5">
      <div className="relative overflow-hidden rounded-lg bg-soft px-6 py-16 md:px-27.5 lg:py-24">
        <div className="absolute -top-54 left-165 hidden size-218.5 rounded-full bg-[#dde0fd] lg:block" />
        <Image src={monitor} alt="" className="absolute left-206 top-15 hidden lg:block" />

        <div className="relative">
          <p className="text-2xl leading-9">Ready to get started?</p>
          <h2 className="mt-5 max-w-96 leading-[52px] md:text-[40px]">
            Take Your <span className="text-brand">Business</span> to the Next Level
          </h2>
          <Link href="/contact" className="btn-brand mt-9.5">
            Work with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyCta;
