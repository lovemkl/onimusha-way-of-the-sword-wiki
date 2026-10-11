import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = [
    "/",
    "/tools/weapon-stance-loadout",
    "/guides/beginner",
    "/guides/system-requirements",
    "/guides/editions-and-charms",
    "/faq",
    "/about",
    "/privacy",
  ];
  return paths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: new Date("2026-10-11"),
    changeFrequency: path.startsWith("/tools") ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/tools")
          ? 0.9
          : path.startsWith("/guides")
            ? 0.8
            : 0.5,
  }));
}
