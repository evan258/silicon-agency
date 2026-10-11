"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, SERVICE_OPTIONS, SOCIAL_NETWORKS } from "@/lib/constants";
import { serviceRequestSchema, ServiceRequestFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";

const fieldClass =
  "w-full rounded-md border border-[#d4d7e5] bg-surface px-4 text-sm text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand";

// Facebook, Twitter, Linkedin and Instagram, in the order of the design
const SOCIAL_ORDER = [0, 2, 3, 1];

const GetInTouch = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
    defaultValues: { service: "", name: "", email: "", message: "", agree: false },
  });

  const onSubmit = async (data: ServiceRequestFormData) => {
    try {
      await sendMessage({ title: `${data.service}: ${data.name} <${data.email}>`, body: data.message }).unwrap();
      toast.success("Request sent! We will contact you soon.");
      reset();
    } catch {
      toast.error("Could not send your request. Please try again.");
    }
  };

  return (
    <section className="container-x pt-16 pb-12 lg:pt-28 lg:pb-12">
      <div className="grid gap-12 rounded-lg bg-soft px-6 py-12 lg:grid-cols-2 lg:gap-x-6 lg:px-27.5 lg:py-18">
        <div className="lg:pt-11">
          <h2>Get in Touch</h2>
          <p className="mt-4.75 max-w-105">
            Have a project in mind? To request a quote contact us directly or fill out the form and let us know how we
            can help.
          </p>

          <h3 className="mt-18.25 text-[28px] leading-10">Contact Info</h3>
          <ul className="mt-5.75 space-y-2.5 text-main">
            <li className="flex items-center gap-3">
              <Phone className="size-4.5 text-brand" /> {CONTACT_INFO.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4.5 text-brand" /> {CONTACT_INFO.email}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4.5 text-brand" /> {CONTACT_INFO.address}
            </li>
          </ul>

          <div className="mt-16.75 flex gap-4">
            {SOCIAL_ORDER.map((i) => {
              const network = SOCIAL_NETWORKS[i];
              const isTwitter = network.name === "Twitter";
              return (
                <a
                  key={network.name}
                  href={network.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={network.name}
                  className={`flex size-11 items-center justify-center rounded-md ${
                    isTwitter ? "bg-[#1da1f2] shadow-lg shadow-[#1da1f2]/40" : "bg-[#eff2fc]"
                  }`}
                >
                  <Image src={network.icon} alt="" className={`size-4.5 ${isTwitter ? "brightness-0 invert" : ""}`} />
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-surface p-8 shadow-lg shadow-brand/5">
          <label htmlFor="service" className="block text-sm font-medium leading-5 text-main">
            Service
          </label>
          <div className="relative mt-1.5">
            <select id="service" {...register("service")} className={`${fieldClass} h-12.5 cursor-pointer appearance-none pr-10`}>
              <option value="">Choose the service you are interested in</option>
              {SERVICE_OPTIONS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2" />
          </div>
          {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}

          <label htmlFor="name" className="mt-6.5 block text-sm font-medium leading-5 text-main">
            Full name
          </label>
          <input id="name" {...register("name")} className={`${fieldClass} mt-1.5 h-12.5`} />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}

          <label htmlFor="email" className="mt-6.5 block text-sm font-medium leading-5 text-main">
            Email address
          </label>
          <input id="email" {...register("email")} className={`${fieldClass} mt-1.5 h-12.5`} />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}

          <label htmlFor="message" className="mt-6.5 block text-sm font-medium leading-5 text-main">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Tell us about your project"
            className={`${fieldClass} mt-1.5 block h-26 resize-none py-3`}
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}

          <label className="mt-6 flex cursor-pointer items-center gap-2.5 text-sm leading-5">
            <span className="relative flex">
              <input
                type="checkbox"
                {...register("agree")}
                className="peer size-5 cursor-pointer appearance-none rounded border border-[#b4b7c9] bg-surface checked:border-brand checked:bg-brand"
              />
              <Check className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 peer-checked:opacity-100" />
            </span>
            <span>
              I agree to the{" "}
              <a href="#" className="text-brand underline">
                Terms
              </a>{" "}
              &amp;{" "}
              <a href="#" className="text-brand underline">
                Conditions
              </a>
              .
            </span>
          </label>
          {errors.agree && <p className="mt-1 text-sm text-red-500">{errors.agree.message}</p>}

          <button type="submit" disabled={isLoading} className="btn-brand mt-6 flex w-fit">
            {isLoading ? "Sending..." : "Send request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
