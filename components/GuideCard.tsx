import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
  body: string;
  image: string;
  external?: boolean;
};

export function GuideCard({ href, title, body, image, external }: Props) {
  const className =
    "group overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/80 transition hover:border-red-600/60 hover:shadow-[0_0_30px_rgba(185,28,28,0.1)]";
  const inner = (
    <>
      <div className="relative h-36 overflow-hidden bg-zinc-950">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-red-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{body}</p>
      </div>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
