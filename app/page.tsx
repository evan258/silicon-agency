import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProjects from "@/components/FeaturedProjects";
import Competencies from "@/components/Competencies";
import TrustedClients from "@/components/TrustedClients";
import Testimonials from "@/components/Testimonials";
import CreativeAtmosphere from "@/components/CreativeAtmosphere";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import CtaBanner from "@/components/CtaBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProjects />
      <Competencies />
      <TrustedClients />
      <Testimonials />
      <CreativeAtmosphere />
      <Awards />
      <Blog />
      {/* The lavender of the blog section ends halfway through the banner */}
      <CtaBanner className="bg-[linear-gradient(to_bottom,var(--soft)_250px,var(--page)_250px)]" />
    </>
  );
};

export default Home;
