import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AdsterraNative } from "@/components/AdsterraNative";
import { PC_REQUIREMENTS, SCREENSHOTS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Onimusha Way of the Sword — PC System Requirements",
  description: "Steam PC system requirements for Onimusha: Way of the Sword (app 2638890): Windows 11 minimum and recommended CPU, GPU, RAM, DirectX 12, and SSD notes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/guides/system-requirements" },
};

export default function SystemRequirementsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 text-zinc-300">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          Guide
        </p>
        <h1 className="text-3xl font-bold text-red-50">
          PC system requirements (Steam)
        </h1>
        <p className="leading-7">
          Steam-published minimum and recommended specs for{" "}
          <strong className="text-zinc-100">Onimusha: Way of the Sword</strong> 
          (app {SITE.steamAppId}). Specs can change — re-check the live store
          page.
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
        <h2 className="text-xl font-semibold text-red-100">Minimum (Steam)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>OS: {PC_REQUIREMENTS.minimum.os}</li>
          <li>Processor: {PC_REQUIREMENTS.minimum.processor}</li>
          <li>Memory: {PC_REQUIREMENTS.minimum.memory}</li>
          <li>Graphics: {PC_REQUIREMENTS.minimum.graphics}</li>
          <li>DirectX: {PC_REQUIREMENTS.minimum.directX}</li>
          <li>Storage: {PC_REQUIREMENTS.minimum.storage}</li>
          <li>{PC_REQUIREMENTS.minimum.notes}</li>
        </ul>
      </section>

      <AdsterraNative />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">Recommended (Steam)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
          <li>OS: {PC_REQUIREMENTS.recommended.os}</li>
          <li>Processor: {PC_REQUIREMENTS.recommended.processor}</li>
          <li>Memory: {PC_REQUIREMENTS.recommended.memory}</li>
          <li>Graphics: {PC_REQUIREMENTS.recommended.graphics}</li>
          <li>DirectX: {PC_REQUIREMENTS.recommended.directX}</li>
          <li>Storage: {PC_REQUIREMENTS.recommended.storage}</li>
          <li>{PC_REQUIREMENTS.recommended.notes}</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-red-100">What we will not invent</h2>
        <p className="text-sm leading-6">
          No forged 4K/ray-tracing guarantee tables and no combat FPS claims beyond
          Steam&apos;s published notes. Prefer the live Steam / Capcom pages when
          numbers update.
        </p>
        <p className="text-sm">
          Related: 
          <Link href="/guides/beginner" className="text-red-300 underline-offset-2 hover:underline">
            Beginner guide
          </Link>
           · 
          <Link href="/guides/editions-and-charms" className="text-red-300 underline-offset-2 hover:underline">
            Editions &amp; charms
          </Link>
           · 
          <Link href="/tools/weapon-stance-loadout" className="text-red-300 underline-offset-2 hover:underline">
            Loadout tool
          </Link>
        </p>
      </section>
    </article>
  );
}
