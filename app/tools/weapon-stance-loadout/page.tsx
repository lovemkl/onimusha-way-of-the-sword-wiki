import type { Metadata } from "next";
import Link from "next/link";
import { WeaponStanceLoadout } from "@/components/WeaponStanceLoadout";

export const metadata: Metadata = {
  title: "Weapon & Stance Loadout Planner",
  description:
    "Shareable Onimusha: Way of the Sword loadout planner. Steam-listed charms and sword appearances plus provisional focus slots. No invented damage numbers. URL state for sharing.",
  alternates: { canonical: "/tools/weapon-stance-loadout" },
};

export default function WeaponStanceLoadoutPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
          Interactive tool
        </p>
        <h1 className="text-3xl font-bold text-red-50 sm:text-4xl">
          Weapon & Stance Loadout Planner
        </h1>
        <p className="max-w-3xl text-zinc-300 leading-7">
          Build a shareable planning board from names Capcom published on the Steam
          store (edition kits & early-adopter bonuses). Persist selections in the
          URL, copy a link, and reset anytime. Combat stance names with stats are{" "}
          <strong className="text-zinc-100">not</strong> published on Steam — focus
          slots are provisional labels marked Unknown.
        </p>
        <p className="text-sm text-zinc-500">
          Related:{" "}
          <Link href="/guides/beginner" className="text-red-300 hover:underline">
            Beginner guide
          </Link>{" "}
          ·{" "}
          <Link href="/faq" className="text-red-300 hover:underline">
            FAQ
          </Link>
        </p>
      </header>
      <WeaponStanceLoadout />
    </article>
  );
}
