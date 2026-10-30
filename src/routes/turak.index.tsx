import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Frame, TourCard } from "@/components/frame";
import { categoryLabel, tours, type Category } from "@/data/site";

const kinds = ["mind", "classic", "day", "circuit", "tailor", "meditation"] as const;
type Kind = (typeof kinds)[number];

export const Route = createFileRoute("/turak/")({
  validateSearch: (search: Record<string, unknown>) => {
    const fajta = kinds.includes(search.fajta as Kind) ? (search.fajta as Kind) : "mind";
    const q = typeof search.q === "string" ? search.q : "";
    return { fajta, q };
  },
  head: () => ({
    meta: [{ title: "Túrák · Yiam" }],
  }),
  component: ToursPage,
});

function ToursPage() {
  const { fajta, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/turak/" });
  const visible = useMemo(() => {
    const query = q.trim().toLowerCase();
    return tours.filter((tour) => {
      const kindOk = fajta === "mind" || tour.category === fajta;
      const text = `${tour.title} ${tour.blurb} ${tour.place} ${tour.highlights.join(" ")}`.toLowerCase();
      return kindOk && (!query || text.includes(query));
    });
  }, [fajta, q]);

  return (
    <Frame>
      <main className="page-enter mx-auto max-w-6xl px-5 pb-24 pt-28">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Programok</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-ink sm:text-6xl">Válassz tempót, ne csomagot.</h1>
        <p className="mt-4 max-w-2xl text-mist">
          Egynapos bangkoki napok, vidéki kitérők, többnapos körutak, és a szabott utak, amiket a létszámhoz vágunk. Az ár ajánlatban jön.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {kinds.map((kind) => {
              const active = fajta === kind;
              const label = kind === "mind" ? "Mind" : categoryLabel[kind as Category];
              return (
                <button
                  key={kind}
                  type="button"
                  onClick={() => navigate({ search: { fajta: kind, q } })}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    active ? "bg-ink text-paper" : "bg-paper-deep text-fg hover:bg-line"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <label className="block w-full sm:w-72">
            <span className="sr-only">Keresés</span>
            <input
              value={q}
              onChange={(event) => navigate({ search: { fajta, q: event.target.value } })}
              placeholder="Keresés: Angkor, híd, hajnal…"
              className="w-full rounded-full border border-line bg-paper px-4 py-3 text-sm outline-none ring-gold focus:ring-2"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-mist">Nincs ilyen túra. Próbáld ki, hogy „Ayutthaya” vagy „Chiang Mai”.</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        )}
      </main>
    </Frame>
  );
}
