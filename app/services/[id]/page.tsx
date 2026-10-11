import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceOffer from "@/components/ServiceOffer";
import HowWeWork from "@/components/HowWeWork";
import ServiceFeature from "@/components/ServiceFeature";
import LaunchCta from "@/components/LaunchCta";
import personalize from "@/assets/we-personalize.png";
import product from "@/assets/product-development.png";
import { PRODUCT_POINTS, SERVICES, TRUSTED_LOGOS } from "@/lib/constants";

// Every service uses the same content, only the title comes from the service
export default async function ServicePage(props: PageProps<"/services/[id]">) {
  const { id } = await props.params;
  const service = SERVICES[Number(id)];
  if (!service) notFound();

  return (
    <>
      <section className="container-x pt-13">
        <Breadcrumb current="Single Service" parent={{ label: "Services Page", href: "/services" }} />

        <div className="mt-20 grid gap-10 lg:grid-cols-[770px_1fr] lg:gap-x-0">
          <h1 className="max-w-155 text-4xl leading-tight lg:text-7xl lg:leading-23">{service.title}</h1>
          <div className="lg:pt-5">
            <p className="max-w-130 text-xl leading-8">
              Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst.
              Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.
            </p>
            <Link href="/contact" className="btn-brand mt-10">
              Start your project
            </Link>
          </div>
        </div>

        <hr className="mt-24" />
      </section>

      <ServiceOffer />
      <HowWeWork />

      <section className="container-x pt-16 lg:pt-28">
        <h2 className="text-center text-2xl md:text-[32px]">Trusted by Leading Companies</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_LOGOS.map((logo, i) => (
            <Image key={i} src={logo} alt="" className="h-auto w-full" />
          ))}
        </div>
      </section>

      <ServiceFeature
        image={personalize}
        title="We personalize how we work to fit your project needs"
        text="Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper purus quisque."
        button="Start your project"
      />
      <ServiceFeature
        image={product}
        title="Product development with the best experience"
        text="We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time. Quisque integer eget velit facilisis enim malesuada metus, risus amet ultricies."
        points={PRODUCT_POINTS}
        imageRight
      />

      <LaunchCta />
    </>
  );
}
