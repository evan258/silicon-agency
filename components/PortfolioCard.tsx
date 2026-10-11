import Image, { StaticImageData } from "next/image";

const PortfolioCard = ({
  title,
  image,
  tags,
  className = "",
}: {
  title: string;
  image: StaticImageData;
  tags: string[];
  className?: string;
}) => {
  return (
    <article className={`group ${className}`}>
      <Image src={image} alt={title} className="h-72 w-full rounded-lg object-cover sm:h-96 lg:h-105" />
      <h3 className="mt-6.25 text-2xl leading-8 text-ink transition-colors duration-300 group-hover:text-brand">{title}</h3>
      <p className="mt-2.5 text-base leading-6 text-subtle transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">{tags.join(" / ")}</p>
    </article>
  );
};

export default PortfolioCard;
