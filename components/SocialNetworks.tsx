import Image from "next/image";
import { SOCIAL_NETWORKS } from "@/lib/constants";

// The six columns are 224px wide each, a bit wider than the page container
const SocialNetworks = () => {
  return (
    <section className="mx-auto max-w-346 px-5 pt-16 pb-16 lg:pt-28.5 lg:pb-26">
      <div className="text-center">
        <h2 className="text-2xl md:text-[32px] md:leading-[42px]">We Have Social Networks</h2>
        <p className="mt-5 text-lg text-subtle">Follow us and keep up to date with the freshest news!</p>
      </div>

      <div className="mt-15 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {SOCIAL_NETWORKS.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center lg:not-first:border-l"
          >
            <span
              className={`flex size-13 items-center justify-center rounded-lg ${
                network.name === "YouTube" ? "bg-[#ff0000] shadow-lg shadow-red-500/30" : "bg-[#eff2fc]"
              }`}
            >
              <Image src={network.icon} alt="" className="size-6" />
            </span>
            <span className="mt-5.75 font-bold leading-6 text-main group-hover:text-brand">{network.name}</span>
            <span className="mt-1.25 text-sm leading-5 text-subtle">{network.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialNetworks;
