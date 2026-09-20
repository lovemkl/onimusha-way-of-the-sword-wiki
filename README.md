# Onimusha: Way of the Sword Wiki

Unofficial English fan wiki for [Onimusha: Way of the Sword](https://store.steampowered.com/app/2638890/) (Steam app 2638890).

- Next.js App Router + TypeScript + Tailwind
- Interactive shareable tool: `/tools/weapon-stance-loadout` (URL query state)
- Facts from Steam / Capcom only — unpublished combat numbers stay **Unknown**

Not affiliated with CAPCOM.

## Develop

```bash
npm install
npm run dev
```

## Production URL

Set `NEXT_PUBLIC_SITE_URL` after deploy. Defaults to the Vercel production host in `lib/siteUrl.ts`.
