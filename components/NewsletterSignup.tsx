"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check, Mail } from "lucide-react";
import { NEWSLETTER_TOPICS } from "@/lib/constants";
import { signupSchema, SignupFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";
import scribble from "@/assets/scribble.png";

// The scribble sits next to the heading without taking part in the layout
const NewsletterSignup = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { email: "", topics: ["Advertising Updates"] },
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await sendMessage({ title: "Newsletter signup", body: `${data.email}: ${data.topics.join(", ")}` }).unwrap();
      toast.success("Thanks for subscribing!");
      reset();
    } catch {
      toast.error("Could not subscribe. Please try again.");
    }
  };

  return (
    <section className="mt-16 bg-soft px-5 py-16 lg:mt-24 lg:pt-25 lg:pb-28">
      <div className="mx-auto max-w-214">
        <div className="relative w-fit">
          <h2>Don&apos;t Want to Miss Anything?</h2>
          <Image src={scribble} alt="" className="absolute left-full top-2 ml-8 hidden h-14 w-16 sm:block" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-11.5 flex flex-col gap-6 lg:flex-row">
            <p className="max-w-40 shrink-0 text-xl font-bold leading-7 text-main lg:mr-10">Sign up for Newsletters</p>
            <div className="mt-0.5 grid gap-y-3 sm:grid-cols-[repeat(3,196px)] sm:gap-x-6">
              {NEWSLETTER_TOPICS.map((topic) => (
                <label key={topic} className="flex cursor-pointer items-center gap-3 text-sm leading-5">
                  <span className="relative flex">
                    <input
                      type="checkbox"
                      value={topic}
                      {...register("topics")}
                      className="peer size-5 cursor-pointer appearance-none rounded border border-[#b4b7c9] checked:border-brand checked:bg-brand"
                    />
                    <Check className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 peer-checked:opacity-100" />
                  </span>
                  {topic}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute left-4.5 top-1/2 size-4.5 -translate-y-1/2 text-subtle" />
              <input
                {...register("email")}
                placeholder="Your Email"
                className="h-13 w-full rounded-md border border-[#d4d7e5] bg-surface pl-11 text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand"
              />
            </div>
            <button type="submit" disabled={isLoading} className="btn-brand">
              Subscribe *
            </button>
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}

          <p className="mt-4.25 text-sm leading-5 text-subtle">
            * Yes, I agree to the{" "}
            <a href="#" className="text-brand underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-brand underline">
              privacy policy
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
