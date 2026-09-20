import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About this unofficial ${SITE.name}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 text-zinc-300">
      <h1 className="text-3xl font-bold text-red-50">About</h1>
      <p className="leading-7">
        This is an unofficial English fan wiki for{" "}
        <strong className="text-zinc-100">Onimusha: Way of the Sword</strong>{" "}
        (Steam app {SITE.steamAppId}). It is not affiliated with {SITE.developer},
        Capcom, or Valve.
      </p>
      <p className="leading-7">
        We prioritize tools — especially the{" "}
        <Link
          href="/tools/weapon-stance-loadout"
          className="text-red-300 underline-offset-2 hover:underline"
        >
          Weapon &amp; Stance Loadout planner
        </Link>{" "}
        — plus Steam-sourced beginner notes and FAQ. We do not invent combat stats,
        copy competitor wikis, or publish redeem codes.
      </p>
      <p className="leading-7">
        Store copy and images come from the public Steam store API / CDN. Official
        marketing lives at{" "}
        <a
          className="text-red-300 underline-offset-2 hover:underline"
          href={SITE.officialSite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE.officialSite}
        </a>
        .
      </p>
    </article>
  );
}
