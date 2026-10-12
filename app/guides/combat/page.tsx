import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsterraNative } from "@/components/AdsterraNative";
import { SCREENSHOTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Combat Guide: Oni Gauntlet Fundamentals",
  description:
    "Onimusha: Way of the Sword combat fundamentals from Steam facts: the Oni Gauntlet, blood-soaked brawls against the Genma, and how to think about Musashi's toolkit — no invented damage numbers.",
  alternates: { canonical: "/guides/combat" },
};

export default function CombatGuidePage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          Guide
        </p>
        <h1 className="text-3xl font-bold text-red-50">
          Combat guide: Oni Gauntlet fundamentals
        </h1>
        <p className="leading-7">
          How to think about{" "}
          <strong className="text-zinc-100">Onimusha: Way of the Sword</strong>{" "}
          fights, grounded in CAPCOM&rsquo;s store description: gritty,
          blood-soaked brawls between an Oni Gauntlet-wielding samurai and the
          Genma. Numbers stay{" "}
          <strong className="text-zinc-100">Unknown</strong> where CAPCOM has
          not published them.
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
        <Image
          src={SCREENSHOTS[1]}
          alt="Onimusha: Way of the Sword combat screenshot"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      <AdsterraNative />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          The fight, as the store describes it
        </h2>
        <p className="leading-7">
          Steam&rsquo;s short description is a combat pitch: an Oni
          Gauntlet-wielding samurai makes a stand in Kyoto against the
          encroaching Genma menace, through gritty, blood-soaked brawls. Two
          words do the mechanical work — <em>brawls</em> (close, physical,
          sustained exchanges rather than ranged chess) and{" "}
          <em>Oni Gauntlet</em> (the artifact that defines Musashi&rsquo;s
          power). Build your expectations around close-quarters commitment, not
          hit-and-run.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Three habits for early brawls
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            Hold your ground longer than other action games teach — the store
            frames these as stands against a menace, and hit-and-run pacing
            wastes the brawl structure.
          </li>
          <li>
            Treat the Gauntlet as your finisher economy: series tradition ties
            the Oni Gauntlet to absorbing defeated Genma, so the faster a fight
            ends, the more it pays. Exact absorption mechanics in this entry:{" "}
            <strong className="text-zinc-100">Unknown</strong> here.
          </li>
          <li>
            Read Genma types before upgrading — the{" "}
            <Link href="/guides/beginner" className="text-red-300 underline">
              beginner guide
            </Link>{" "}
            lists the enemy framing (underworld monstrosities drawn into the
            living world by Malice); name what killed you before spending
            anything.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Musashi&rsquo;s toolkit, fenced
        </h2>
        <p className="leading-7">
          CAPCOM publishes Musashi (modeled on Toshiro Mifune), the Oni
          Gauntlet, and brawls in Kyoto twisted by Malice. Weapon lists, stance
          names, combo tables, and damage values are not published as a
          complete public set — this wiki does not invent them. When official
          channels detail systems, the{" "}
          <Link href="/news" className="text-red-300 underline">
            news tracker
          </Link>{" "}
          logs them with dates.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Where to go next
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            <Link href="/guides/beginner" className="text-red-300 underline">
              Beginner guide
            </Link>{" "}
            — first-session framing and store facts.
          </li>
          <li>
            <Link
              href="/guides/editions-and-charms"
              className="text-red-300 underline"
            >
              Editions &amp; charms
            </Link>{" "}
            — what each Steam edition includes.
          </li>
          <li>
            <Link href="/faq" className="text-red-300 underline">
              FAQ
            </Link>{" "}
            — release, platforms, and the unofficial-wiki disclaimer.
          </li>
        </ul>
      </section>

      <p className="text-xs leading-5 text-zinc-500">
        Sources: {SITE.steamUrl} and {SITE.officialSite}. Unofficial fan wiki —
        not affiliated with CAPCOM or Valve.
      </p>
    </article>
  );
}
