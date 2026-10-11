import Image from "next/image";
import { SERVICE_OFFERS } from "@/lib/constants";
import dashboard from "@/assets/what-we-offer.png";

const ServiceOffer = () => {
  return (
    // The dashboard picture runs out of the container to the edge of the screen
    <section className="overflow-x-clip">
      <div className="container-x grid gap-12 pt-16 lg:grid-cols-2 lg:gap-x-10 lg:pt-26.5 min-[1800px]:grid-cols-[770px_1fr] min-[1800px]:gap-x-0">
        <div className="lg:pt-5">
          <h2>What We Offer</h2>
          <div className="mt-12 grid gap-x-18 gap-y-8 sm:grid-cols-2 lg:max-w-159">
            {SERVICE_OFFERS.map((offer) => (
              <div key={offer.title}>
                <Image src={offer.icon} alt="" className="size-8" />
                <h3 className="mt-5 text-xl leading-7">{offer.title}</h3>
                <p className="mt-3 text-sm leading-6.5">{offer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <Image src={dashboard} alt="" className="h-auto w-full min-[1800px]:w-209.5 min-[1800px]:max-w-none" />
      </div>
    </section>
  );
};

export default ServiceOffer;
