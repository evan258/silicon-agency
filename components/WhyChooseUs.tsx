import { WHY_CHOOSE_US } from "@/lib/constants";

const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-340 px-5 pt-16 lg:pt-18.5">
      <div className="text-center">
        <h2>Why Choose Us?</h2>
        <p className="mt-6 text-lg text-subtle">
          We personalize how we work to fit your project needs. Our approach helps augment innovation.
        </p>
      </div>

      <div className="mt-10 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {WHY_CHOOSE_US.map((item) => (
          <div key={item.title} className="flex flex-col items-center px-6 text-center lg:not-first:border-l">
            <span className="flex size-16 items-center justify-center rounded-full bg-surface text-brand/70 shadow-lg shadow-brand/10">
              <item.icon className="size-7" strokeWidth={1.5} />
            </span>
            <p className="mt-6 text-xl font-bold leading-7 text-main">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
