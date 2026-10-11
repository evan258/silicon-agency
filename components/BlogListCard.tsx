import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const BlogListCard = ({
  href,
  title,
  description,
  category,
  date,
  author,
  avatar,
  image,
}: {
  href: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  avatar: StaticImageData;
  image: StaticImageData;
}) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-surface shadow-lg shadow-brand/5 sm:flex-row">
      <Image src={image} alt="" className="h-56 w-full shrink-0 object-cover sm:h-auto sm:w-72 lg:w-96" />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold leading-7 text-ink hover:text-brand">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-subtle">{description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-5 sm:mt-auto">
          <span className="rounded bg-brand/12 px-2 py-0.5 text-sm text-ink">{category}</span>
          <span className="text-sm text-subtle">{date}</span>
          <div className="flex items-center gap-3 sm:ml-auto">
            <Image src={avatar} alt="" className="size-10 rounded-full" />
            <span className="font-medium text-main">{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogListCard;
