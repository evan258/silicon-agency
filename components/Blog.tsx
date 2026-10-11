import Link from "next/link";
import BlogCard from "./BlogCard";
import { HOME_BLOG_POSTS } from "@/lib/constants";

const Blog = () => {
  return (
    <section id="blog" className="scroll-mt-20 bg-soft pt-16 pb-16 lg:pt-24.5 lg:pb-27.5">
      <div className="container-x">
        <h2 className="text-center">Latest From Our Blog</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[526px_1fr]">
          {HOME_BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.title} {...post} horizontal={i > 0} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-md border border-[#c1c4fa] px-8 py-3.5 font-medium text-brand hover:bg-brand/5"
          >
            More blog posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
