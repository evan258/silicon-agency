import Image from "next/image";
import { FEATURES } from "@/lib/constants";

const Features = () => {
  return (
    <section id="services" className="mx-auto max-w-370 scroll-mt-20 px-5 pt-16 lg:pt-27">
      <div className="grid gap-10 md:grid-cols-3 md:gap-0">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="px-10 text-center md:not-first:border-l">
            <Image src={feature.icon} alt="" className="mx-auto size-12" />
            <h3 className="mt-6 text-2xl">{feature.title}</h3>
            <p className="mx-auto mt-3 max-w-85">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
