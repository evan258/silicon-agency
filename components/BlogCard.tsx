import Image, { StaticImageData } from "next/image";
import { Bookmark } from "lucide-react";

const BlogCard = ({
  title,
  tag,
  time,
  image,
  author,
  role,
  avatar,
  horizontal = false,
}: {
  title: string;
  tag: string;
  time: string;
  image: StaticImageData;
  author: string;
  role: string;
  avatar: StaticImageData;
  horizontal?: boolean;
}) => {
  return (
    <article
      className={`flex overflow-hidden rounded-lg bg-surface shadow-lg shadow-brand/5 ${
        horizontal ? "flex-col sm:flex-row lg:flex-col xl:flex-row" : "flex-col lg:row-span-2"
      }`}
    >
      <div className="relative shrink-0">
        <Image src={image} alt="" className={horizontal ? "h-60 w-full object-cover sm:w-76.5 lg:w-full xl:w-76.5" : "h-auto w-full"} />
        <button
          aria-label="Save post"
          className="cursor-pointer absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white text-slate-900"
        >
          <Bookmark className="size-4" />
        </button>
      </div>

      <div className="flex min-h-60 flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="rounded bg-brand/12 px-2 py-0.5 text-sm text-brand">{tag}</span>
          <span className="text-sm text-subtle">{time}</span>
        </div>
        <h3 className="mt-4 line-clamp-2 font-semibold leading-7 text-ink">{title}</h3>

        <div className="mt-auto flex items-center gap-4 border-t pt-6.5">
          <Image src={avatar} alt="" className="size-12 rounded-full" />
          <div>
            <p className="font-bold text-main">{author}</p>
            <p className="text-sm text-subtle">{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
