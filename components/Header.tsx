import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/tools/weapon-stance-loadout", label: "Loadout" },
  { href: "/guides/beginner", label: "Beginner" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
] as const;

export function Header() {
  return (
    <header className="border-b border-red-950/60 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-red-100">
          {SITE.shortName}
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-red-300">
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-red-700 px-2.5 py-1 font-medium text-white hover:bg-red-600"
          >
            Steam
          </a>
        </nav>
      </div>
    </header>
  );
}
