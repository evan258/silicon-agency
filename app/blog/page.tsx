"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, LayoutGrid, List, Search } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogGridCard from "@/components/BlogGridCard";
import BlogListCard from "@/components/BlogListCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { BLOG_CATEGORIES, BLOG_DESCRIPTION, BLOG_POSTS } from "@/lib/constants";

const PAGE_SIZE = 9;

const BlogPage = () => {
  const [category, setCategory] = useState("All categories");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [view, setView] = useState<"grid" | "list">("grid");
  const topRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  const posts = BLOG_POSTS.filter(
    (post) =>
      (category === "All categories" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(posts.length / PAGE_SIZE);
  const visible = posts.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

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
        <Breadcrumb current={view === "grid" ? "Grid View no Sidebar" : "List View"} />

        <div className="mt-9.25 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <h1 className="text-[40px] font-extrabold leading-12">{view === "grid" ? "Grid View no Sidebar" : "List View"}</h1>

          <div className="flex flex-wrap items-center gap-6 lg:-mt-px">
            <div className="flex gap-4.5 lg:mr-0.75">
              <button onClick={() => setView("list")} aria-label="List view" className="cursor-pointer">
                <List className={`size-4.5 ${view === "list" ? "text-brand" : "text-ink"}`} />
              </button>
              <button onClick={() => setView("grid")} aria-label="Grid view" className="cursor-pointer">
                <LayoutGrid className={`size-4.5 ${view === "grid" ? "text-brand" : "text-ink"}`} />
              </button>
            </div>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(0);
                }}
                className="h-11 w-60 cursor-pointer appearance-none rounded-md border border-[#d4d7e5] bg-surface px-4 text-sm text-muted outline-none focus:border-brand"
              >
                <option>All categories</option>
                {BLOG_CATEGORIES.map((name) => (
                  <option key={name}>{name}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2" />
            </div>
            <div className="relative">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(0);
                }}
                placeholder="Search the blog..."
                className="h-11 w-full rounded-md border border-[#d4d7e5] bg-surface px-4 text-sm text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand lg:w-100"
              />
              <Search className="pointer-events-none absolute right-4 top-1/2 size-4.5 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {visible.length === 0 && <p className="mt-12 text-center">No posts found.</p>}

        <div
          key={`${page}-${view}`}
          className={`slide-in mt-9.75 grid gap-x-6 gap-y-10 ${view === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
        >
          {visible.map((post) =>
            view === "grid" ? (
              <BlogGridCard key={post.title} href={`/blog/${BLOG_POSTS.indexOf(post)}`} {...post} />
            ) : (
              <BlogListCard key={post.title} href={`/blog/${BLOG_POSTS.indexOf(post)}`} description={BLOG_DESCRIPTION} {...post} />
            ),
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage(Math.max(page - 1, 0))}
              aria-label="Previous page"
              className="cursor-pointer flex size-6 items-center justify-center"
            >
              <ChevronLeft className="size-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`cursor-pointer size-9 rounded text-xs font-bold ${
                  i === page ? "bg-brand text-white shadow-lg shadow-brand/30" : i === page - 1 ? "bg-soft" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
              aria-label="Next page"
              className="cursor-pointer flex size-6 items-center justify-center"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      </section>

      <NewsletterSignup />
    </>
  );
};

export default BlogPage;
