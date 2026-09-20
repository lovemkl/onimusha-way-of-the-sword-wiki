import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for this unofficial Onimusha fan wiki.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-4 text-zinc-300">
      <h1 className="text-3xl font-bold text-red-50">Privacy</h1>
      <p className="leading-7">
        This site is a static fan wiki. The loadout planner stores state in the page
        URL (query string) so you can share boards. That state stays in your browser
        / shared link — we do not run accounts or loadout databases on a backend.
      </p>
      <p className="leading-7">
        Hosting (Vercel) and your browser may collect standard request logs and
        technical data. We do not intentionally collect personal information for
        marketing.
      </p>
      <p className="leading-7">
        Steam images and store text are loaded from Steam&apos;s public CDN / APIs
        under Valve&apos;s terms. Game trademarks belong to their respective owners.
      </p>
    </article>
  );
}
