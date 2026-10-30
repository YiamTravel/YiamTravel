import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Frame, TourCard } from "@/components/frame";
import { categoryLabel, tourBySlug, tours } from "@/data/site";

export const Route = createFileRoute("/turak/$slug")({
  loader: ({ params }) => {
    const tour = tourBySlug(params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Túra"} · Yiam` },
      { name: "description", content: loaderData?.blurb ?? "" },
    ],
  }),
  component: TourPage,
});

function TourPage() {
  const tour = Route.useLoaderData();
  const related = tours.filter((item) => item.slug !== tour.slug && item.category === tour.category).slice(0, 3);

  return (
    <Frame>
      <main className="page-enter">
        <section className="relative min-h-[68svh] bg-ink">
          <img src={tour.image} alt={tour.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto flex min-h-[68svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 text-paper">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              {categoryLabel[tour.category]} · {tour.length}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl sm:text-6xl">{tour.title}</h1>
            <p className="mt-4 max-w-2xl text-fog">{tour.place}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-lg text-fg">{tour.blurb}</p>
            <p className="mt-4 text-mist">{tour.goodFor}</p>
            <ol className="mt-12 space-y-8">
              {tour.days.map((day) => (
                <li key={day.label} className="border-t border-line pt-6">
                  <h2 className="font-display text-3xl text-ink">{day.label}</h2>
                  <p className="mt-3 text-fg">{day.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-card bg-ink p-6 text-paper">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">{tour.eyebrow}</p>
              <ul className="mt-4 space-y-2 text-sm text-fog">
                {tour.highlights.map((item) => (
                  <li key={item} className="border-b border-fog/15 py-2">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-fog">Belépő, kocsi, szállás: az ajánlatban, a létszám szerint. Üdítő és alkohol mindig a vendégé.</p>
              <Link
                to="/ajanlat"
                search={{ tura: tour.slug }}
                className="mt-6 block rounded-full bg-saffron px-4 py-3 text-center font-medium text-ink transition-colors duration-200 hover:bg-gold"
              >
                Ezt kérem árajánlatra
              </Link>
            </div>
          </aside>
        </section>

        {related.length > 0 ? (
          <section className="bg-paper-deep">
            <div className="mx-auto max-w-6xl px-5 py-16">
              <h2 className="font-display text-3xl text-ink">Ha ez tetszett</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <TourCard key={item.slug} tour={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </Frame>
  );
}
