import AboutHero from "@/components/AboutHero";
import Features from "@/components/Features";
import AboutVideo from "@/components/AboutVideo";
import ClientReviews from "@/components/ClientReviews";
import Leadership from "@/components/Leadership";
import CtaBanner from "@/components/CtaBanner";
import SocialNetworks from "@/components/SocialNetworks";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <div className="lg:pt-18.5">
        <Features />
      </div>
      <AboutVideo />
      <ClientReviews />
      <Leadership />
      <CtaBanner />
      <SocialNetworks />
    </>
  );
};

export default AboutPage;
