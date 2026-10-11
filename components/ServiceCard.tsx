import Link from "next/link";
import { CircleArrowRight, LucideIcon } from "lucide-react";

const ServiceCard = ({ id, title, text, icon: Icon }: { id: number; title: string; text: string; icon: LucideIcon }) => {
  return (
    <article className="relative mt-10 rounded-lg bg-surface px-10 pt-16 pb-10 shadow-lg shadow-brand/5">
      <span className="absolute -top-10 left-10 flex size-20 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
        <Icon className="size-9" strokeWidth={1.5} />
      </span>
      <h3 className="text-2xl leading-8">
        <Link href={`/services/${id}`} className="flex items-center gap-3">
          {title}
          <CircleArrowRight className="size-6 shrink-0 text-brand" strokeWidth={1.5} />
        </Link>
      </h3>
      <p className="mt-4.25 text-sm">{text}</p>
    </article>
  );
};

export default ServiceCard;
