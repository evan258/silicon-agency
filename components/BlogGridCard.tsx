import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const BlogGridCard = ({
  href,
  title,
  category,
  date,
  author,
  avatar,
  image,
}: {
  href: string;
  title: string;
  category: string;
  date: string;
  author: string;
  avatar: StaticImageData;
  image: StaticImageData;
}) => {
  return (
    <article className="overflow-hidden rounded-lg bg-surface shadow-lg shadow-brand/5">
      {/* The photo already has the bookmark button in its corner, so it keeps its own ratio */}
      <Image src={image} alt="" className="h-auto w-full" />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="rounded bg-brand/12 px-2 py-0.5 text-sm text-ink">{category}</span>
          <span className="text-sm text-subtle">{date}</span>
        </div>
        <h3 className="mt-4 line-clamp-2 min-h-14 font-semibold leading-7 text-ink hover:text-brand">
          <Link href={href}>{title}</Link>
        </h3>

        <div className="mt-5.25 flex items-center gap-4 border-t pt-6">
          <Image src={avatar} alt="" className="size-12 rounded-full" />
          <span className="font-medium text-main">{author}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogGridCard;
