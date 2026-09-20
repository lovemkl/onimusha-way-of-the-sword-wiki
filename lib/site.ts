export const SITE = {
  name: "Onimusha: Way of the Sword Wiki",
  shortName: "Onimusha WotS Wiki",
  tagline: "Unofficial English fan wiki — tools first, Steam facts only.",
  description:
    "Unofficial fan wiki for Onimusha: Way of the Sword (Steam app 2638890). Weapon & stance loadout planner, beginner guide, FAQ, and Steam-sourced facts. Not affiliated with CAPCOM.",
  steamAppId: 2638890,
  steamUrl: "https://store.steampowered.com/app/2638890/",
  officialSite: 'https://www.capcom-games.com/onimusha/ws/',
  developer: "CAPCOM Co., Ltd.",
  publisher: "CAPCOM Co., Ltd.",
  releaseDate: "Sep 3, 2026",
  genres: ["Action", "Adventure", "RPG"] as const,
  headerImage: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/ce31174fea86d0bafa21b26e853dcd0b7326e36f/header.jpg?t=1789430751',
  shortDescription: 'An Oni Gauntlet-wielding samurai makes a stand in Kyoto against the encroaching Genma menace. Through gritty, blood-soaked brawls, he searches for his reason to fight. What fate awaits at the end of his path?',
  protagonist: "Miyamoto Musashi",
  faceModel: "Toshiro Mifune",
  setting: "Edo-period Kyoto twisted by Malice",
} as const;

/** Steam CDN screenshots (app 2638890) — verified via store API. */
export const SCREENSHOTS = [
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/40e49fbd098140a69e897dcce736cba5eae8662f/ss_40e49fbd098140a69e897dcce736cba5eae8662f.1920x1080.jpg?t=1789430751',
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/8be802aef40ce301104a3ff5d3c6462913d57807/ss_8be802aef40ce301104a3ff5d3c6462913d57807.1920x1080.jpg?t=1789430751',
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/b8d1f33e7777aa1d1a0a2b9af5e84fb52e1f2e1c/ss_b8d1f33e7777aa1d1a0a2b9af5e84fb52e1f2e1c.1920x1080.jpg?t=1789430751',
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/4ee71e56889c1dc82b55e013d6bbe7f2cd2d1027/ss_4ee71e56889c1dc82b55e013d6bbe7f2cd2d1027.1920x1080.jpg?t=1789430751',
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/faa6433a23818f7684f5c4220708d60e4e71dc13/ss_faa6433a23818f7684f5c4220708d60e4e71dc13.1920x1080.jpg?t=1789430751',
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2638890/884ef55e720a36debf01d36f742a6db07e12320f/ss_884ef55e720a36debf01d36f742a6db07e12320f.1920x1080.jpg?t=1789430751',
] as const;

/** Capcom USA launch trailer (YouTube oEmbed verified). Prefer youtube-nocookie. */
export const YOUTUBE = {
  trailerId: "Gbmd6YFm5oU",
} as const;

export const STEAM_TRAILER = {
  thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257420566/75708777f255d26a359ee47484bdf384b941eb07/movie_600x337.jpg?t=1789430723',
  steamUrl: "https://store.steampowered.com/app/2638890/",
} as const;

/** Steam store PC requirements (published). */
export const PC_REQUIREMENTS = {
  minimum: {
    os: "Windows 11",
    processor: "Intel Core i5-8400 / AMD Ryzen 3 3100",
    memory: "16 GB RAM",
    graphics: "GeForce GTX 1660(6GB) / Radeon RX 5500 XT(8GB)",
    directX: "Version 12",
    storage: "50 GB available space",
    notes:
      "SSD required. 30 FPS on Low at 1080p with upscaling (Steam). DLSS 4.5 / FSR 3.1. Specs subject to change.",
  },
  recommended: {
    os: "Windows 11",
    processor: "Intel Core i5-10400 / AMD Ryzen 5 3600",
    memory: "16 GB RAM",
    graphics: "GeForce RTX 2060 Super (8GB) / Radeon RX 6600(8GB)",
    directX: "Version 12",
    storage: "50 GB available space",
    notes:
      "SSD required. 60 FPS on Medium at 1080p with upscaling (Steam). Specs subject to change.",
  },
} as const;
