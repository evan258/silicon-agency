import Image from "next/image";
import { AWARDS } from "@/lib/constants";

const Awards = () => {
  return (
    <section className="container-x flex flex-col gap-10 pt-16 pb-16 lg:flex-row lg:gap-0 lg:pt-23.5 lg:pb-29">
      <div className="lg:w-137.5 lg:shrink-0">
        <h2 className="max-w-96 text-2xl md:text-[32px] lg:leading-[42px]">Award-winning designs featured by</h2>
      </div>
      <div className="flex flex-wrap gap-x-14 gap-y-8">
        {AWARDS.map((award) => (
          <Image key={award.alt} src={award.image} alt={award.alt} className="h-auto w-35" />
        ))}
      </div>
    </section>
  );
};

export default Awards;
