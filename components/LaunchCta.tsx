import Link from "next/link";

const LaunchCta = () => {
  return (
    <section className="mt-16 bg-[#1b1c35] px-5 py-24 text-center lg:mt-28 lg:py-28">
      <p className="text-2xl text-white/60">Ready to get started?</p>
      <h2 className="mt-4 text-3xl font-bold text-white md:text-[40px]">Launch Your Project with Us</h2>
      <Link href="/contact" className="btn-brand mt-10">
        Work with us
      </Link>
    </section>
  );
};

export default LaunchCta;
