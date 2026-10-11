import Image from "next/image";
import team from "@/assets/creative-atmosphere.png";

const CreativeAtmosphere = () => {
  return (
    <section className="container-x pt-16 lg:pt-28">
      <h2>Our Creative Atmosphere</h2>
      <Image src={team} alt="Our team working together" className="mt-12 h-auto w-full rounded-lg" />
    </section>
  );
};

export default CreativeAtmosphere;
