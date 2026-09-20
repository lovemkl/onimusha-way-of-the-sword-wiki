import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PC_REQUIREMENTS, SCREENSHOTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beginner Guide",
  description:
    "Steam-sourced beginner overview for Onimusha: Way of the Sword — Musashi, Oni Gauntlet, Genma, Malice, Kyoto, editions, and PC specs. No invented combat numbers.",
  alternates: { canonical: "/guides/beginner" },
};

export default function BeginnerGuidePage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          Guide
        </p>
        <h1 className="text-3xl font-bold text-red-50">
          Beginner guide (Steam facts)
        </h1>
        <p className="leading-7">
          A scan-friendly overview of{" "}
          <strong className="text-zinc-100">Onimusha: Way of the Sword</strong>{" "}
          using only Capcom / Steam store text. Anything not published stays{" "}
          <strong className="text-zinc-100">Unknown</strong>.
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
        <Image
          src={SCREENSHOTS[0]}
          alt="Onimusha: Way of the Sword screenshot"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">What the game is</h2>
        <p className="leading-7">{SITE.shortDescription}</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            Developer / publisher: {SITE.developer} (Steam).
          </li>
          <li>
            Genres: {SITE.genres.join(", ")} · Release: {SITE.releaseDate} (Steam).
          </li>
          <li>
            Setting: Edo-period Kyoto twisted by malevolent clouds of Malice
            (Steam).
          </li>
          <li>
            Enemies: Genma — underworld monstrosities drawn into the living world
            by Malice (Steam).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Miyamoto Musashi & the Oni Gauntlet
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            Protagonist: <strong className="text-zinc-100">Miyamoto Musashi</strong>,
            a fierce young samurai (Steam).
          </li>
          <li>
            Face model: Japanese samurai-film legend{" "}
            <strong className="text-zinc-100">Toshiro Mifune</strong> (Steam).
          </li>
          <li>
            The <strong className="text-zinc-100">Oni Gauntlet</strong> grants power
            beyond human limits to cut down Genma, and can absorb Genma souls as a
            power source (Steam).
          </li>
          <li>
            Steam also describes bloody duels against martial rivals whose prowess
            rivals Musashi&apos;s — exact duel rules:{" "}
            <strong className="text-zinc-100">Unknown</strong>.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Charms, appearances & editions
        </h2>
        <p className="text-sm leading-6">
          Steam lists edition / early-adopter extras. Useful planning notes:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            <strong className="text-zinc-100">Charms</strong> (e.g. Oni Lady, Little
            Dancer, Mentor, Lion Dog, White Monkey) strengthen Musashi&apos;s
            abilities — exact numbers:{" "}
            <strong className="text-zinc-100">Unknown</strong>.
          </li>
          <li>
            <strong className="text-zinc-100">Sword appearances</strong> (Bamboo &amp;
            Panda, Whittled Oar, Raizan, Enryuu, Sealed Curse, White Lion) are
            cosmetic and do <em>not</em> alter battle performance (Steam).
          </li>
          <li>
            <strong className="text-zinc-100">Oni Gauntlet: Crimson Lotus</strong>{" "}
            appears on Deluxe / Premium Deluxe kit lists — combat impact:{" "}
            <strong className="text-zinc-100">Unknown</strong>.
          </li>
          <li>
            Some kit content may unlock later as you progress (Spirit Mirror /
            Equipment screens — Steam notes).
          </li>
        </ul>
        <p className="text-sm">
          Plan a shareable board in the{" "}
          <Link
            href="/tools/weapon-stance-loadout"
            className="text-red-300 underline-offset-2 hover:underline"
          >
            Weapon &amp; Stance Loadout
          </Link>{" "}
          tool.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">PC requirements</h2>
        <p className="text-sm leading-6">
          Minimum: {PC_REQUIREMENTS.minimum.os};{" "}
          {PC_REQUIREMENTS.minimum.processor}; {PC_REQUIREMENTS.minimum.memory};{" "}
          {PC_REQUIREMENTS.minimum.graphics}; DirectX{" "}
          {PC_REQUIREMENTS.minimum.directX}; {PC_REQUIREMENTS.minimum.storage}.{" "}
          {PC_REQUIREMENTS.minimum.notes}
        </p>
        <p className="text-sm leading-6">
          Recommended: {PC_REQUIREMENTS.recommended.processor};{" "}
          {PC_REQUIREMENTS.recommended.graphics}.{" "}
          {PC_REQUIREMENTS.recommended.notes}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">What we won&apos;t invent</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>Boss HP, DPS charts, frame data, or hidden multipliers.</li>
          <li>Named combat stance lists with stats (not on Steam store).</li>
          <li>Redeem codes or competitor-wiki copy.</li>
        </ul>
      </section>

      <p className="text-sm text-zinc-500">
        Sources:{" "}
        <a
          href={SITE.steamUrl}
          className="text-red-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam store
        </a>{" "}
        ·{" "}
        <a
          href={SITE.officialSite}
          className="text-red-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Capcom official site
        </a>
        .
      </p>
    </article>
  );
}
