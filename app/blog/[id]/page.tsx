import Image from "next/image";
import { notFound } from "next/navigation";
import PostHeader from "@/components/PostHeader";
import PostContent from "@/components/PostContent";
import PostComments from "@/components/PostComments";
import PostSidebar from "@/components/PostSidebar";
import RelatedArticles from "@/components/RelatedArticles";
import { BLOG_POSTS } from "@/lib/constants";
import hero from "@/assets/post-hero.jpg";

// Every post uses the same article, only the title is taken from the post
export default async function BlogPostPage(props: PageProps<"/blog/[id]">) {
  const { id } = await props.params;
  const post = BLOG_POSTS[Number(id)];
  if (!post) notFound();

  return (
    <>
      <PostHeader title={post.title} />
      <Image src={hero} alt="" priority className="h-80 w-full object-cover lg:h-175" />
      <div className="container-x grid gap-12 pt-18.25 lg:grid-cols-[1fr_234px] lg:gap-x-24">
        <div>
          <PostContent />
          <PostComments />
        </div>
        <PostSidebar />
      </div>
      <RelatedArticles />
    </>
  );
}
