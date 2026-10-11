import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";

const FeaturedProjects = () => {
  return (
    <section className="container-x pt-16 lg:pt-33.5">
      <div className="text-center">
        <h2>Featured Projects</h2>
        <p className="mx-auto mt-6 max-w-150 text-lg text-subtle">
          We create websites and mobile apps, marketing materials, branding, web design, UX/UI design and
          illustrations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.alt} className={`relative overflow-hidden ${project.className}`}>
            <Image src={project.image} alt={project.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/portfolio" className="btn-brand">
          Explore all
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
