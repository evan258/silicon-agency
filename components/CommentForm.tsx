"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { commentSchema, CommentFormData } from "@/lib/schemas";
import { useSendMessageMutation } from "@/state/api";

const fieldClass =
  "w-full rounded-md border border-[#d4d7e5] bg-surface px-4 text-main outline-none placeholder:text-[#b4b7c9] focus:border-brand";

const CommentForm = () => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: { name: "", email: "", comment: "", remember: false },
  });

  const onSubmit = async (data: CommentFormData) => {
    try {
      await sendMessage({ title: `Comment from ${data.name} <${data.email}>`, body: data.comment }).unwrap();
      toast.success("Your comment was posted");
      reset();
    } catch {
      toast.error("Could not post your comment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-16 rounded-lg bg-soft px-6 py-16 lg:px-27.5">
      <h2 className="md:text-[32px]">Leave a Comment</h2>

      <div className="mt-10.5 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-base font-medium leading-6 text-main">
            Name
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
        <label htmlFor="comment" className="block text-base font-medium leading-6 text-main">
          Comment
        </label>
        <textarea
          id="comment"
          {...register("comment")}
          placeholder="Type your comment here..."
          className={`${fieldClass} mt-1.25 h-26 resize-none py-3`}
        />
        {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>}
      </div>

      <label className="mt-6.25 flex cursor-pointer items-center gap-2.5 leading-5">
        <span className="relative flex">
          <input
            type="checkbox"
            {...register("remember")}
            className="peer size-5 cursor-pointer appearance-none rounded border border-[#b4b7c9] bg-surface checked:border-brand checked:bg-brand"
          />
          <Check className="pointer-events-none absolute inset-0 m-auto size-3.5 text-white opacity-0 peer-checked:opacity-100" />
        </span>
        Save my name and email in this browser for the next time I comment.
      </label>

      <button type="submit" disabled={isLoading} className="btn-brand mt-10 flex w-fit">
        {isLoading ? "Posting..." : "Post comment"}
      </button>
    </form>
  );
};

export default CommentForm;
