import Image from "next/image";
import { CircleMinus, CirclePlus } from "lucide-react";
import PostVideo from "./PostVideo";
import { POST_QUOTE, POST_TAGS } from "@/lib/constants";

const PROS = [
  "A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.",
  "At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit neque.",
  "Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet ultricies odio fermentum arcu quam.",
  "Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio vel nulla vel.",
  "Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque diam in.",
  "Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.",
];

const CONS = [
  "Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus sollicitudin et quam vehicula amet lacus, integer.",
  "Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.",
  "Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.",
  "Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a turpis erat fermentum, rhoncus.",
  "Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum ultricies ac.",
];

const PostContent = () => {
  return (
    <article>
      <div>
        <p className="text-xl font-semibold leading-8 text-main">
          Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu pellentesque
          dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac porttitor lacus
          orci, cras lacus, quis leo.
        </p>

        <h3 className="mt-8 text-2xl leading-8">Paragraph Title</h3>
        <p className="mt-4.25">
          Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget
          velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus
          pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor
          porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget.
          Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna
          fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel
          ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur
          habitant faucibus ornare et vivamus.
        </p>

        <PostVideo />

        <p className="mt-8">
          Tempor donec aliquam est, a. Sit arcu tellus pharetra, bibendum hendrerit arcu, sed. Scelerisque dui enim
          libero sit ac sed lacus lectus. Quam in iaculis scelerisque feugiat nibh mi. Maecenas posuere lobortis
          praesent iaculis sagittis. Egestas vel at praesent ipsum pretium faucibus adipiscing gravida feugiat.
          Lacus, rhoncus velit at non nunc, quam urna, phasellus facilisis. Cursus elit posuere amet tortor at. Mi
          tristique congue vulputate eget in pellentesque tincidunt. In viverra est id nibh. Nunc tellus ultrices
          magna turpis. Viverra est morbi posuere dapibus nisi habitasse. Id tristique cursus vel metus.
        </p>

        <blockquote className="mt-8 border-l-3 border-brand pl-9.25">
          <p className="text-xl font-semibold leading-8 text-main">
            Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem
            cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed
            proin aliquet vulputate cras est. Ut ornare eget a viverra.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Image src={POST_QUOTE.avatar} alt="" className="size-12 rounded-full" />
            <div>
              <p className="font-bold leading-6 text-main">{POST_QUOTE.name}</p>
              <p className="text-sm leading-5 text-subtle">{POST_QUOTE.role}</p>
            </div>
          </div>
        </blockquote>

        <p className="mt-8">
          Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus tellus, amet,
          ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor, suscipit ut. Ullamcorper at
          faucibus dolor tortor suspendisse suscipit senectus convallis aliquam. At orci amet facilisi nunc mi
          vitae iaculis diam a. Mauris venenatis sed purus cursus torte.
        </p>

        <h3 className="mt-8 text-2xl leading-8">Paragraph Title 2</h3>
        <p className="mt-4.25">
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet
          habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque
          diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet
          turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet.
          Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus
          vitae.
        </p>

        <p className="mt-7.5 flex items-center gap-2.5 font-bold text-main">
          <CirclePlus className="size-4.5 text-brand" /> PROS
        </p>
        <ul className="mt-4 list-disc space-y-1.5 pl-6 leading-6 text-muted marker:text-xs">
          {PROS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="mt-7.75 flex items-center gap-2.5 font-bold text-main">
          <CircleMinus className="size-4.5 text-brand" /> CONS
        </p>
        <ul className="mt-3.75 list-disc space-y-1.5 pl-6 leading-6 text-muted marker:text-xs">
          {CONS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="mt-8.5 text-2xl leading-8">Conclusion</h3>
        <p className="mt-4.25">
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo odio semper.
          Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium dolor eget placerat morbi
          proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis diam at nulla libero. Turpis duis magna
          tellus condimentum.
        </p>
        <p className="mt-6.5">
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa
          ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed
          etiam scelerisque.
        </p>

        <hr className="mt-7.75" />

        <div className="mt-8.25 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-bold text-main">Related Tags:</span>
          {POST_TAGS.map((tag, i) => (
            <a
              key={tag}
              href="#"
              className={`flex h-9 items-center rounded border px-5 text-sm font-medium text-ink ${
                i === POST_TAGS.length - 1 ? "border-transparent bg-[#eff2fc]" : "border-line"
              }`}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostContent;
