import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "FAQ for Onimusha: Way of the Sword — release date, platforms, charms vs cosmetics, PC specs, and what this unofficial wiki will not invent.",
  alternates: { canonical: "/faq" },
};

const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "When does Onimusha: Way of the Sword release?",
    a: (
      <>
        Steam lists the release date as <strong>{SITE.releaseDate}</strong>. Always
        confirm on the{" "}
        <a
          href={SITE.steamUrl}
          className="text-red-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam store page
        </a>
        .
      </>
    ),
  },
  {
    q: "Who developed and published it?",
    a: (
      <>
        {SITE.developer} developed and published the game (Steam). Official site:{" "}
        <a
          href={SITE.officialSite}
          className="text-red-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Capcom Onimusha WS
        </a>
        .
      </>
    ),
  },
  {
    q: "What genres / modes does Steam list?",
    a: (
      <>
        Genres: {SITE.genres.join(", ")}. Steam categories include Single-player,
        Full controller support, Steam Achievements, Steam Cloud, and others —
        check the store for the live list.
      </>
    ),
  },
  {
    q: "Do sword appearances change damage?",
    a: (
      <>
        No — Steam states sword appearances are cosmetic and do{" "}
        <em>not</em> alter Musashi&apos;s battle performance.
      </>
    ),
  },
  {
    q: "What do charms do?",
    a: (
      <>
        Steam says equipping charms strengthens Miyamoto Musashi&apos;s abilities.
        Exact effect values are <strong>Unknown</strong> (not published on the
        store page).
      </>
    ),
  },
  {
    q: "Is there an official named stance list with stats?",
    a: (
      <>
        Not on the Steam store page. Our{" "}
        <Link
          href="/tools/weapon-stance-loadout"
          className="text-red-300 hover:underline"
        >
          loadout planner
        </Link>{" "}
        uses provisional focus labels clearly marked Unknown / not published.
      </>
    ),
  },
  {
    q: "What PC specs does Steam list?",
    a: (
      <>
        Minimum highlights: Windows 11, i5-8400 / Ryzen 3 3100, 16 GB RAM, GTX 1660
        6GB / RX 5500 XT 8GB, DirectX 12, 50 GB, SSD required. Full tables are on
        the home page and beginner guide.
      </>
    ),
  },
  {
    q: "Is this wiki official?",
    a: (
      <>
        No. Unofficial English fan project. Not affiliated with CAPCOM or Valve. We
        do not invent DPS, boss HP, or redeem codes.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-red-50">FAQ</h1>
        <p className="text-zinc-300 leading-7">
          Short answers grounded in Steam / Capcom store copy. Unpublished combat
          details stay Unknown.
        </p>
      </header>
      <div className="space-y-4">
        {FAQS.map((item) => (
          <section
            key={item.q}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <h2 className="text-lg font-semibold text-red-100">{item.q}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-300">{item.a}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
