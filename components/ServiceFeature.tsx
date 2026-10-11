import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
  points?: string[];
  button?: string;
  imageRight?: boolean;
};

const ServiceFeature = ({ image, title, text, points, button, imageRight }: Props) => {
  return (
    <section className={`container-x grid items-center gap-10 pt-16 lg:gap-x-24 lg:pt-28 ${imageRight ? "lg:grid-cols-[1fr_636px]" : "lg:grid-cols-[636px_1fr]"}`}>
      <Image src={image} alt="" className={`h-auto w-full ${imageRight ? "lg:order-2" : ""}`} />

      <div>
        <h2 className="max-w-140 lg:leading-13">{title}</h2>
        <p className="mt-5 max-w-140 text-sm leading-6.5">{text}</p>

        {points && (
          <ul className="mt-6 space-y-2.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-muted">
                <Check className="size-4 text-brand" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {button && (
          <Link href="/contact" className="btn-brand mt-9">
            {button}
          </Link>
        )}
      </div>
    </section>
  );
};

export default ServiceFeature;
