"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import PortfolioCard from "@/components/PortfolioCard";
import ReadyCta from "@/components/ReadyCta";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/lib/constants";

const PAGE_SIZE = 6;

// The cards alternate between narrow and wide, using the 12 column grid
const SPANS = ["lg:col-span-5", "lg:col-span-7", "lg:col-span-7", "lg:col-span-5"];

const PortfolioPage = () => {
  const [category, setCategory] = useState("All Works");
  const [page, setPage] = useState(0);
  const topRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  const projects = PORTFOLIO_PROJECTS.filter((p) => category === "All Works" || p.tags.includes(category));
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleCategory = (name: string) => {
    setCategory(name);
    setPage(0);
  };

  // Bring the top of the list into view when the page changes, but not on the first load
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [page]);

  return (
    <>
      <section ref={topRef} className="container-x scroll-mt-16 pt-13">
        <Breadcrumb current="Grid View" />

        <div className="mt-6.75 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-[40px] font-extrabold leading-12">Grid View</h1>
          <div className="-mb-px flex flex-wrap border-b">
            {PORTFOLIO_CATEGORIES.map((name) => (
              <button
                key={name}
                onClick={() => handleCategory(name)}
                className={`cursor-pointer -mb-px border-b-2 px-4 py-4 font-medium ${
                  category === name ? "border-brand text-brand" : "border-transparent text-ink hover:text-brand"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div key={page} className="slide-in mt-10 grid gap-x-6 gap-y-10.25 md:grid-cols-2 lg:grid-cols-12">
          {visible.map((project, i) => (
            <PortfolioCard key={project.title} {...project} className={SPANS[i % 4]} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12.25 flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`cursor-pointer size-9 rounded text-xs font-bold ${
                  i === page ? "bg-brand text-white shadow-lg shadow-brand/30" : "text-ink"
                }`}
              >
                {i + 1}
              </button>
            ))}
            {page < totalPages - 1 && (
              <button
                onClick={() => setPage(page + 1)}
                aria-label="Next page"
                className="cursor-pointer flex size-6 items-center justify-center"
              >
                <ChevronRight className="size-4" />
              </button>
            )}
          </div>
        )}
      </section>

      <div className="mt-24">
        <ReadyCta />
      </div>
    </>
  );
};

export default PortfolioPage;
