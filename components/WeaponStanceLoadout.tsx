"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CHARMS,
  FOCUS_SLOTS,
  GAUNTLET_APPEARANCES,
  SWORD_APPEARANCES,
  getCharm,
  getFocus,
  getGauntlet,
  getSword,
} from "@/lib/loadout";

type LoadoutState = {
  charm: string;
  sword: string;
  gauntlet: string;
  focus: string;
};

const EMPTY: LoadoutState = {
  charm: "",
  sword: "",
  gauntlet: "",
  focus: "",
};

function parseState(search: string): LoadoutState {
  const q = new URLSearchParams(search);
  const charm = q.get("charm") ?? "";
  const sword = q.get("sword") ?? "";
  const gauntlet = q.get("gauntlet") ?? "";
  const focus = q.get("focus") ?? "";
  return {
    charm: getCharm(charm) ? charm : "",
    sword: getSword(sword) ? sword : "",
    gauntlet: getGauntlet(gauntlet) ? gauntlet : "",
    focus: getFocus(focus) ? focus : "",
  };
}

function hasAny(s: LoadoutState) {
  return Boolean(s.charm || s.sword || s.gauntlet || s.focus);
}

export function WeaponStanceLoadout() {
  const [state, setState] = useState<LoadoutState>(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    try {
      setState(parseState(window.location.search));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const syncUrl = useCallback((next: LoadoutState) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    (["charm", "sword", "gauntlet", "focus"] as const).forEach((key) => {
      if (next[key]) url.searchParams.set(key, next[key]);
      else url.searchParams.delete(key);
    });
    url.hash = "";
    const path = url.pathname + url.search;
    window.history.replaceState(null, "", path);
    setShareUrl(url.origin + path);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    syncUrl(state);
  }, [state, hydrated, syncUrl]);

  const summary = useMemo(
    () => ({
      charm: getCharm(state.charm),
      sword: getSword(state.sword),
      gauntlet: getGauntlet(state.gauntlet),
      focus: getFocus(state.focus),
    }),
    [state],
  );

  const setField = (key: keyof LoadoutState, value: string) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  const reset = () => setState(EMPTY);

  const copyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="space-y-6">
      <div
        role="status"
        className="rounded-lg border border-amber-700/50 bg-amber-950/40 px-4 py-3 text-sm text-amber-100"
      >
        <strong>Planning board — not a damage calculator.</strong> Steam publishes
        charm / sword / gauntlet <em>names</em> on edition pages, but does{" "}
        <strong>not</strong> publish named combat stances with stats. Focus slots
        below are provisional planner labels marked Unknown. Sword appearances are
        cosmetic (Steam: do not alter battle performance). We never invent DPS /
        damage numbers.
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-zinc-300">
          Shareable URL state · query params{" "}
          <span className="font-mono text-red-200">
            charm / sword / gauntlet / focus
          </span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={copyShare}
            className="rounded bg-red-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600"
          >
            {copied ? "Link copied" : "Copy share link"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded border border-zinc-600 px-3 py-1.5 text-sm text-zinc-200 hover:border-zinc-400"
          >
            Reset
          </button>
        </div>
      </div>

      {hydrated && shareUrl && hasAny(state) ? (
        <p className="truncate rounded border border-zinc-800 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-500">
          {shareUrl}
        </p>
      ) : null}

      <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h2 className="mb-3 text-lg font-semibold text-red-100">Your loadout</h2>
        {!hasAny(state) ? (
          <p className="rounded border border-dashed border-zinc-700 px-4 py-8 text-center text-sm text-zinc-400">
            Empty board — pick a charm, sword appearance, optional gauntlet, and a
            provisional focus. Then copy the share link.
          </p>
        ) : (
          <dl className="grid gap-3 sm:grid-cols-2">
            <SummaryItem
              label="Charm"
              value={summary.charm?.name}
              note={summary.charm?.note}
            />
            <SummaryItem
              label="Sword appearance"
              value={summary.sword?.name}
              note={
                summary.sword
                  ? "Cosmetic only (Steam) — no combat change."
                  : undefined
              }
            />
            <SummaryItem
              label="Oni Gauntlet appearance"
              value={summary.gauntlet?.name}
              note={
                summary.gauntlet
                  ? "Listed on Steam Deluxe kit. Combat impact: Unknown."
                  : undefined
              }
            />
            <SummaryItem
              label="Focus (provisional)"
              value={summary.focus?.label}
              note={summary.focus?.note}
              badge="Unknown / not published on Steam"
            />
          </dl>
        )}
      </section>

      <OptionGrid
        title="Charm"
        hint="Steam-listed charm names only. Effects strengthen Musashi — exact numbers Unknown."
        options={CHARMS.map((c) => ({
          id: c.id,
          title: c.name,
          meta: c.source,
        }))}
        selected={state.charm}
        onSelect={(id) => setField("charm", id)}
      />

      <OptionGrid
        title="Sword appearance"
        hint="Cosmetic (Steam). Does not alter battle performance."
        options={SWORD_APPEARANCES.map((s) => ({
          id: s.id,
          title: s.name,
          meta: `${s.source} · cosmetic`,
        }))}
        selected={state.sword}
        onSelect={(id) => setField("sword", id)}
      />

      <OptionGrid
        title="Oni Gauntlet appearance (optional)"
        hint="Crimson Lotus appears on Steam Deluxe / Premium Deluxe kit copy."
        options={GAUNTLET_APPEARANCES.map((g) => ({
          id: g.id,
          title: g.name,
          meta: g.source,
        }))}
        selected={state.gauntlet}
        onSelect={(id) => setField("gauntlet", id)}
      />

      <OptionGrid
        title="Focus / stance slot (provisional)"
        hint="Not published as named stances on Steam. Qualitative planner labels only — no numbers."
        options={FOCUS_SLOTS.map((f) => ({
          id: f.id,
          title: f.label,
          meta: "Unknown / not published on Steam store",
        }))}
        selected={state.focus}
        onSelect={(id) => setField("focus", id)}
      />
    </div>
  );
}

function SummaryItem({
  label,
  value,
  note,
  badge,
}: {
  label: string;
  value?: string;
  note?: string;
  badge?: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/80 px-3 py-3">
      <dt className="text-xs uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="mt-1 font-medium text-zinc-100">{value ?? "—"}</dd>
      {badge ? (
        <p className="mt-1 text-xs font-medium text-amber-300">{badge}</p>
      ) : null}
      {note ? (
        <p className="mt-1 text-xs leading-5 text-zinc-500">{note}</p>
      ) : null}
    </div>
  );
}

function OptionGrid({
  title,
  hint,
  options,
  selected,
  onSelect,
}: {
  title: string;
  hint: string;
  options: { id: string; title: string; meta: string }[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-red-100">{title}</h2>
      <p className="mt-1 mb-3 text-sm text-zinc-400">{hint}</p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((opt) => {
          const active = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt.id)}
              className={`rounded-lg border px-3 py-3 text-left transition ${
                active
                  ? "border-red-500 bg-red-950/50 text-red-50"
                  : "border-zinc-700 bg-zinc-900/70 text-zinc-200 hover:border-zinc-500"
              }`}
            >
              <div className="font-medium">{opt.title}</div>
              <div className="mt-1 text-xs text-zinc-500">{opt.meta}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
