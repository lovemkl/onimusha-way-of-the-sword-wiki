type Props = { videoId: string; title: string };

export function YouTubeEmbed({ videoId, title }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-red-900/40 bg-zinc-900 shadow-[0_0_40px_rgba(185,28,28,0.12)]">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
