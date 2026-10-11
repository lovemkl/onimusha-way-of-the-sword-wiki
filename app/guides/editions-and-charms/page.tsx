import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsterraNative } from "@/components/AdsterraNative";
import { SCREENSHOTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Onimusha Editions, Charms & Early Adopter Bonus Wiki" },
  description: "Steam-listed Onimusha: Way of the Sword Deluxe, Premium Deluxe, Early Adopter charms and sword appearances. Cosmetic vs charm notes — no invented combat stats.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/guides/editions-and-charms" },
};

export default function EditionsAndCharmsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          Guide
        </p>
        <h1 className="text-3xl font-bold text-red-50">
          Editions, charms &amp; Early Adopter bonus
        </h1>
        <p className="leading-7">
          Steam-listed Deluxe, Premium Deluxe, and Early Adopter extras for{" "}
          <strong className="text-zinc-100">Onimusha: Way of the Sword</strong>.
          Charm effects strengthen Musashi — exact numbers stay{" "}
          <strong className="text-zinc-100">Unknown</strong>. Sword appearances are
          cosmetic (Steam).
        </p>
      </header>

      <div className="relative aspect-video overflow-hidden rounded-xl border border-zinc-800">
        <Image
          src={SCREENSHOTS[1]}
          alt="Onimusha: Way of the Sword screenshot"
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Deluxe Kit (Steam)</h2>
        <p className="text-sm leading-6">
          Steam lists the Deluxe Edition as base game plus the Deluxe Kit, including:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>Charms: Oni Lady, Little Dancer, Mentor</li>
          <li>Sword appearances: Bamboo &amp; Panda, Whittled Oar, Raizan, Enryuu</li>
          <li>Outfit for Musashi: Red Armor</li>
          <li>Oni Gauntlet: Crimson Lotus (combat impact: Unknown)</li>
        </ul>
        <p className="text-sm leading-6">
          Steam notes some content may become available at a later date.
        </p>
      </section>

      <AdsterraNative />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Premium Deluxe Kit (Steam)</h2>
        <p className="text-sm leading-6">
          Steam describes Premium Deluxe as including Deluxe Kit contents plus Premium
          Kit extras, including Hellfire / Moonlight / Cloudbiter Haori, Okuni outfits
          (Flower Dance, Goldfish Dance, Oni Dance), Oni Lady outfits (Bird Call, Snow
          Camellia, Elegance), and an In-Game Mini Digital Soundtrack.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Early Adopter bonus (Steam)</h2>
        <p className="text-sm leading-6">
          Base-game Early Adopter set (Steam): Charm: Lion Dog; Sword Appearance: Sealed
          Curse. Deluxe / Premium Early Adopter set also lists Charm: White Monkey and
          Sword Appearance: White Lion.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>
            Equipping charms strengthens Miyamoto Musashi&apos;s abilities — exact numbers
            Unknown (Steam).
          </li>
          <li>
            Sword appearances are cosmetic and do not alter battle performance (Steam).
          </li>
          <li>
            Spirit Mirrors, Change Appearance, and Equipment screens unlock as the game
            progresses (Steam).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Plan without inventing stats</h2>
        <p className="text-sm leading-6">
          Use the{" "}
          <Link
            href="/tools/weapon-stance-loadout"
            className="text-red-300 underline-offset-2 hover:underline"
          >
            Weapon &amp; Stance Loadout
          </Link> 
          to log Steam-listed charm and appearance names with shareable URL state. Soft
          stance labels are planner aids only — not a published combat enum.
        </p>
        <p className="text-sm">
          Related: 
          <Link href="/guides/beginner" className="text-red-300 underline-offset-2 hover:underline">
            Beginner guide
          </Link>
           · 
          <Link href="/guides/system-requirements" className="text-red-300 underline-offset-2 hover:underline">
            PC specs
          </Link>
           · 
          <Link href="/faq" className="text-red-300 underline-offset-2 hover:underline">
            FAQ
          </Link>
        </p>
      </section>
    </article>
  );
}
