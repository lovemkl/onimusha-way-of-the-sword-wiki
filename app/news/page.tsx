import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsterraNative } from "@/components/AdsterraNative";
import { SCREENSHOTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Release Date & News Tracker",
  description:
    "Onimusha: Way of the Sword released on Steam September 3, 2026 (CAPCOM, app 2638890). Confirmed launch facts, official update sources, and a dated update log.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          News
        </p>
        <h1 className="text-3xl font-bold text-red-50">
          Release date &amp; news tracker
        </h1>
        <p className="leading-7">
          Onimusha: Way of the Sword launched on Steam on {SITE.releaseDate},
          developed and published by CAPCOM (app {SITE.steamAppId}). This page
          logs confirmed facts and points to the official places where updates
          appear — no rumor entries.
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
        <Image
          src={SCREENSHOTS[3]}
          alt="Onimusha: Way of the Sword screenshot"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      <AdsterraNative />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Launch facts</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            Released: {SITE.releaseDate} on Steam (app {SITE.steamAppId}).
          </li>
          <li>Developer / publisher: {SITE.developer}.</li>
          <li>Genres: {SITE.genres.join(", ")} (Steam).</li>
          <li>
            Protagonist: {SITE.protagonist}, with {SITE.faceModel} as face
            model (Steam / official materials).
          </li>
          <li>
            Setting: {SITE.setting} (Steam).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">
          Where official updates appear
        </h2>
        <p className="leading-7">
          Two sources, in order of authority: the{" "}
          <a
            className="text-red-300 underline"
            href={SITE.steamUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Steam news hub
          </a>{" "}
          for app {SITE.steamAppId} (patches and announcements) and{" "}
          <a
            className="text-red-300 underline"
            href={SITE.officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            CAPCOM&rsquo;s official site
          </a>
          . This wiki links and dates rather than republishing patch notes
          verbatim.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Update log</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            <strong className="text-zinc-100">2026-10-12:</strong> This tracker
            published. Launch facts as listed above; no post-launch patches
            logged here yet — check the Steam news hub for anything newer.
          </li>
        </ul>
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
            <Link href="/guides/combat" className="text-red-300 underline">
              Combat guide
            </Link>{" "}
            — Oni Gauntlet fundamentals.
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
        Unofficial fan wiki — not affiliated with CAPCOM or Valve.
      </p>
    </article>
  );
}
