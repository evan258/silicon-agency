import Image, { StaticImageData } from "next/image";
import { Reply } from "lucide-react";
import CommentForm from "./CommentForm";
import { POST_COMMENTS } from "@/lib/constants";

const CommentHead = ({ name, time, avatar }: { name: string; time: string; avatar: StaticImageData }) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={avatar} alt="" className="size-12 rounded-full" />
      <div>
        <p className="font-bold leading-6 text-main">{name}</p>
        <p className="mt-0.5 text-sm leading-5 text-subtle">{time}</p>
      </div>
      <button className="cursor-pointer ml-auto flex items-center gap-2 text-sm font-medium text-ink hover:text-brand">
        <Reply className="size-4.5" /> Reply
      </button>
    </div>
  );
};

const PostComments = () => {
  return (
    <section className="pt-16 lg:pt-28.25">
      <div>
        <h2>{POST_COMMENTS.length + 1} comments</h2>

        <div className="mt-10">
          {POST_COMMENTS.map((comment) => (
            <div key={comment.name} className="border-b py-8 first:pt-0 last:border-b-0 last:pb-0">
              <CommentHead name={comment.name} time={comment.time} avatar={comment.avatar} />
              <p className="mt-3">{comment.text}</p>

              {comment.reply && (
                <div className="mt-8 border-l border-brand pl-9.75">
                  <CommentHead name={comment.reply.name} time={comment.reply.time} avatar={comment.reply.avatar} />
                  <p className="mt-3">
                    <span className="font-semibold text-brand">{comment.reply.mention}</span>
                    {comment.reply.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <CommentForm />
      </div>
    </section>
  );
};

export default PostComments;
