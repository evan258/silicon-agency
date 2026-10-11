"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import Logo from "./Logo";
import { FOOTER_LINKS } from "@/lib/constants";
import { newsletterSchema, NewsletterFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";

const Footer = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      await sendMessage({ title: "Newsletter signup", body: data.email }).unwrap();
      toast.success("Thanks for subscribing!");
      reset();
    } catch {
      toast.error("Could not subscribe. Please try again.");
    }
  };

  return (
    <footer className="container-x w-full pt-17.5 pb-15.5">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-104">
          <Logo />
          <p className="mt-8 text-sm leading-5.5">
            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae
            nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum
            dolor ullamcorper sodales ultrices eros.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <label htmlFor="newsletter" className="text-sm font-medium">
              Subscribe to our newsletter
            </label>
            <div className="mt-2 flex">
              <div className="relative flex-1">
                <Mail className="absolute left-4.5 top-1/2 size-4.5 -translate-y-1/2 text-subtle" />
                <input
                  id="newsletter"
                  {...register("email")}
                  placeholder="Your Email"
                  className="h-11 w-full rounded-l-md border border-line bg-surface pl-11 text-sm text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer h-11 rounded-r-md bg-brand px-8 text-sm font-medium text-white hover:bg-brand-violet disabled:opacity-60"
              >
                Subscribe
              </button>
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </form>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:w-159">
          <div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.pages.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-medium text-ink hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-11 space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-medium text-ink hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-2.5">
            {FOOTER_LINKS.social.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-2.5">
            <p className="font-bold text-main">Contact Us</p>
            <a href="mailto:example@gmail.com" className="font-medium text-brand underline">
              example@gmail.com
            </a>
          </div>
        </div>
      </div>

      <p className="mt-18 text-xs text-subtle">{new Date().getFullYear()}. All rights reserved. Silicon Template</p>
    </footer>
  );
};

export default Footer;
