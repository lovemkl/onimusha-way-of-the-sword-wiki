import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-400">
        <p>
          Unofficial fan site for{" "}
          <a
            className="text-red-300 underline-offset-2 hover:underline"
            href={SITE.steamUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Onimusha: Way of the Sword
          </a>
          . Not affiliated with {SITE.developer}, Capcom, or Valve.
        </p>
        <p>
          Store facts from Steam /{" "}
          <a
            className="text-red-300 underline-offset-2 hover:underline"
            href={SITE.officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Capcom official site
          </a>
          . Combat numbers marked{" "}
          <strong className="text-zinc-200">Unknown</strong> when unpublished. No
          redeem codes. No competitor wiki copy.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/tools/weapon-stance-loadout" className="hover:text-red-300">
            Loadout tool
          </Link>
          <Link href="/guides/beginner" className="hover:text-red-300">
            Beginner
          </Link>
          <Link href="/faq" className="hover:text-red-300">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-red-300">
            About
          </Link>
          <Link href="/privacy" className="hover:text-red-300">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
