import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogGridCard from "./BlogGridCard";
import { BLOG_POSTS, RELATED_POSTS } from "@/lib/constants";

const RelatedArticles = () => {
  return (
    <section className="container-x pt-16 pb-16 lg:pt-27.5 lg:pb-28">
      <div className="flex items-center justify-between">
        <h2>Related Articles</h2>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center whitespace-nowrap gap-3 rounded-md border border-[#c9cafa] px-8.5 py-3.5 font-medium text-brand hover:bg-brand/5"
        >
          All posts <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {RELATED_POSTS.map((post) => (
          <BlogGridCard key={post.title} href={`/blog/${BLOG_POSTS.findIndex((p) => p.title === post.title)}`} {...post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
