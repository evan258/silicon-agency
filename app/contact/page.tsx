"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Breadcrumb from "@/components/Breadcrumb";
import HeroBackground from "@/components/HeroBackground";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";

const fieldClass =
  "w-full rounded-md border border-[#d4d7e5] bg-transparent px-4 text-main outline-none focus:border-brand";

const ContactPage = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendMessage({ title: `${data.name} <${data.email}>`, body: data.message }).unwrap();
      toast.success("Post uploaded successfully");
      reset();
    } catch {
      toast.error("Could not send your message. Please try again.");
    }
  };

  return (
    // Same background as the home hero, it slides under the navbar
    <section className="relative -mt-16 overflow-hidden lg:min-h-166">
      <HeroBackground />

      <div className="container-x relative pt-32 pb-16 lg:pt-29 lg:pb-32">
        <Breadcrumb current="Contact" />

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-x-6">
          <div>
            <h1 className="text-[28px] font-extrabold leading-10 md:text-[28px]">
              Want to work with us?
              <span className="mt-4.5 block w-fit bg-linear-to-r from-brand via-brand-violet to-brand-pink bg-clip-text text-6xl sm:text-[80px] font-extrabold leading-none text-transparent">Let&apos;s talk!</span>
            </h1>
            <a href="mailto:email@example.com" className="mt-23 block text-2xl leading-8 text-ink underline">
              email@example.com
            </a>
            <a href="tel:+14065550120" className="mt-5.5 block text-2xl leading-8 text-ink">
              +1 406 555-0120
            </a>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="lg:pt-0.5">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-base font-medium leading-6 text-main">
                  Full name
                </label>
                <input id="name" {...register("name")} className={`${fieldClass} mt-1.25 h-13`} />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium leading-6 text-main">
                  Email
                </label>
                <input id="email" {...register("email")} className={`${fieldClass} mt-1.25 h-13`} />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-6.25">
              <label htmlFor="message" className="block text-base font-medium leading-6 text-main">
                Message
              </label>
              <textarea id="message" {...register("message")} className={`${fieldClass} mt-1.25 block h-22.5 resize-none py-3`} />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <button type="submit" disabled={isLoading} className="btn-brand mt-10 flex w-fit">
              {isLoading ? "Sending..." : "Contact Us"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
