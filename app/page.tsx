import Image from "next/image";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { PC_REQUIREMENTS, SCREENSHOTS, SITE, YOUTUBE } from "@/lib/site";
import { AdsterraNative } from "@/components/AdsterraNative";

const STATS = [
  `Released ${SITE.releaseDate}`,
  SITE.genres.join(" · "),
  `Dev ${SITE.developer}`,
  `Steam app ${SITE.steamAppId}`,
] as const;

const BULLETS = [
  "Play as Miyamoto Musashi, Oni Gauntlet-wielding samurai, in Edo-period Kyoto twisted by Malice (Steam store).",
  "Face Genma — underworld fiends drawn into the living world by Malice (Steam store).",
  "Oni Gauntlet grants power beyond human limits and can absorb Genma souls as a power source (Steam store).",
  "Face model: legendary samurai-film actor Toshiro Mifune (Steam store).",
  "Single-player Action / Adventure / RPG from CAPCOM; full controller support on Steam.",
] as const;

const CARDS = [
  {
    href: "/tools/weapon-stance-loadout",
    title: "Weapon & Stance Loadout",
    body: "Shareable planner for Steam-listed charms, sword appearances, and provisional focus slots. No invented damage numbers.",
    image: SCREENSHOTS[1],
  },
  {
    href: "/guides/beginner",
    title: "Beginner guide",
    body: "Steam-sourced overview: Musashi, Oni Gauntlet, Genma, Malice, Kyoto setting, editions, and PC specs.",
    image: SCREENSHOTS[0],
  },
  {
    href: "/faq",
    title: "FAQ",
    body: "Release date, platforms, charms vs cosmetics, what this wiki will not invent, and official links.",
    image: SCREENSHOTS[2],
  },
  {
    href: "/about",
    title: "About this wiki",
    body: "Unofficial English fan project. Sources, scope, and affiliation disclaimer.",
    image: SCREENSHOTS[3],
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-2xl border border-red-950/50">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={SITE.headerImage}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
        </div>
        <div className="relative space-y-5 px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400/90">
            Unofficial EN fan wiki · Steam app {SITE.steamAppId}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-red-50 sm:text-5xl">
            Onimusha: Way of the Sword
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-200">
            {SITE.shortDescription}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400">
            Tools and guides here stick to Steam / Capcom store text. Charm effects
            and combat numbers stay{" "}
            <strong className="text-zinc-200">Unknown</strong> when unpublished.
            Not affiliated with CAPCOM.
          </p>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat}
                className="rounded-lg border border-zinc-700/80 bg-zinc-900/80 px-3 py-3 text-sm font-medium text-zinc-200 backdrop-blur"
              >
                {stat}
              </div>
            ))}
          </dl>
          <ul className="max-w-2xl list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {BULLETS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/tools/weapon-stance-loadout"
              className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/40 hover:bg-red-600"
            >
              Open Loadout Planner
            </Link>
            <a
              href={SITE.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-500 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-red-400 hover:text-red-100"
            >
              View on Steam
            </a>
            <a
              href={SITE.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-300 hover:border-zinc-400"
            >
              Official Capcom site
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-50">Launch trailer</h2>
        <p className="text-sm text-zinc-400">
          Capcom USA launch trailer (YouTube). Privacy-enhanced embed.
        </p>
        <YouTubeEmbed
          videoId={YOUTUBE.trailerId}
          title="Onimusha: Way of the Sword — Launch Trailer"
        />
      </section>

      <AdsterraNative />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-50">Screenshots</h2>
        <p className="text-sm text-zinc-400">
          From the Steam store CDN (app {SITE.steamAppId}).
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENSHOTS.map((src) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden rounded-lg border border-zinc-800"
            >
              <Image
                src={src}
                alt="Onimusha: Way of the Sword screenshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-red-50">Explore</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {CARDS.map((c) => (
            <GuideCard key={c.href} {...c} />
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h2 className="text-2xl font-semibold text-red-50">
          PC system requirements
        </h2>
        <p className="text-sm text-zinc-400">
          Published on the Steam store page. Specs subject to change (Capcom /
          Steam notes).
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {(
            [
              ["Minimum", PC_REQUIREMENTS.minimum],
              ["Recommended", PC_REQUIREMENTS.recommended],
            ] as const
          ).map(([label, req]) => (
            <div
              key={label}
              className="rounded-lg border border-zinc-700 bg-zinc-950/60 p-4"
            >
              <h3 className="font-semibold text-red-200">{label}</h3>
              <dl className="mt-3 space-y-2 text-sm text-zinc-300">
                <div>
                  <dt className="text-zinc-500">OS</dt>
                  <dd>{req.os}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Processor</dt>
                  <dd>{req.processor}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Memory</dt>
                  <dd>{req.memory}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Graphics</dt>
                  <dd>{req.graphics}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">DirectX</dt>
                  <dd>{req.directX}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Storage</dt>
                  <dd>{req.storage}</dd>
                </div>
                <p className="pt-2 text-xs leading-5 text-zinc-500">{req.notes}</p>
              </dl>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
