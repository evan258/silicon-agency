import { WORK_STEPS } from "@/lib/constants";

const HowWeWork = () => {
  return (
    <section className="container-x pt-16 lg:pt-7.5">
      <h2>How We Work?</h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
        {WORK_STEPS.map((step, i) => (
          <div key={step.title} className="pr-10">
            <div className="flex items-center">
              <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-soft">
                <span className="flex size-14 items-center justify-center rounded-full bg-surface text-xl font-bold text-main shadow-lg shadow-brand/10">
                  {i + 1}
                </span>
              </span>
              {i < WORK_STEPS.length - 1 && <span className="hidden h-px flex-1 bg-line lg:block" />}
            </div>
            <h3 className="mt-7 max-w-59 text-2xl leading-8.5">{step.title}</h3>
            <p className="mt-4 max-w-66 text-sm leading-6.5">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
