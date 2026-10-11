import Image from "next/image";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import Breadcrumb from "./Breadcrumb";
import { POST_META } from "@/lib/constants";

// Title comes from the clicked post, the rest of the header is the same for every post
const PostHeader = ({ title }: { title: string }) => {
  return (
    <section className="container-x pt-13 pb-10">
      <Breadcrumb parent={{ label: "Blog", href: "/blog" }} current="Single Post" />

      <div className="mt-8.75 flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div>
          <h1 className="max-w-210 text-[40px] font-extrabold leading-13">{title}</h1>

          <div className="mt-7.5 flex flex-wrap items-center gap-4">
            <span className="rounded bg-brand/12 px-2 py-px font-medium text-brand">{POST_META.tag}</span>
            <span className="h-5.5 w-px bg-line" />
            <span>{POST_META.time}</span>
            <span className="h-5.5 w-px bg-line" />
            <div className="flex items-center gap-3.5 text-sm text-subtle">
              <span className="flex items-center gap-1.5">
                <ThumbsUp className="size-4" /> {POST_META.likes}
              </span>
              <span className="flex items-center gap-1.5">
                <MessageSquare className="size-4" /> {POST_META.comments}
              </span>
              <span className="flex items-center gap-1.5">
                <Share2 className="size-4" /> {POST_META.shares}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:mr-15.5 lg:self-end">
          <Image src={POST_META.avatar} alt="" className="size-15 rounded-full" />
          <div>
            <p className="font-bold leading-6 text-main">Author</p>
            <span className="mt-1 block leading-6 text-brand underline">
              {POST_META.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostHeader;
