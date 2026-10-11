import Image from "next/image";
import heroRays from "@/assets/hero-rays.png";

// Gradient, glow and rays used behind the hero of the home, about and contact pages
const HeroBackground = () => {
  return (
    <>
      <div className="hero-bg absolute inset-0" />
      <div className="hero-glow absolute inset-0" />
      <Image src={heroRays} alt="" className="absolute bottom-0 left-0 hidden md:block" />
    </>
  );
};

export default HeroBackground;
