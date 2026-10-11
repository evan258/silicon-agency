import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import ServiceReviews from "@/components/ServiceReviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetInTouch from "@/components/GetInTouch";
import { SERVICES } from "@/lib/constants";

const ServicesPage = () => {
  return (
    <>
      {/* The lavender background starts under the navbar and ends in the middle of the reviews */}
      <div className="-mt-16 bg-soft lg:bg-[linear-gradient(to_bottom,var(--soft)_1460px,var(--page)_1460px)]">
        <section className="container-x pt-32 lg:pt-29">
          <Breadcrumb current="Services Page" />
          <h1 className="mt-9.25 text-[40px] font-extrabold leading-12">Services Page</h1>

          <div className="mt-9.75 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} id={i} {...service} />
            ))}
          </div>
        </section>

        <ServiceReviews />
      </div>

      <WhyChooseUs />
      <GetInTouch />
    </>
  );
};

export default ServicesPage;
