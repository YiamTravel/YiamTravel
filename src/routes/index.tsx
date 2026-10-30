import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Frame, TourCard } from "@/components/frame";
import { places, stories, tours } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = tours.filter((tour) => tour.featured);
  const loop = [...places, ...places];

  return (
    <Frame tone="ink">
      <main className="page-enter">
        <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
          <img
            src="/photos/river.jpg"
            alt="A Chao Phraya és a Wat Arun kék órában"
            className="ken absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-shade absolute inset-0" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Bangkok · 30 év helyismeret</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-paper sm:text-7xl">
              Thaiföld, magyarul. Nem a prospektusból.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-fog">
              Magán idegenvezetés: a kötelező templomok, a vízipiac, ami még él, az északi körút, Angkor, és ha kéred, egy kolostor, ahol tényleg csend van.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/turak"
                search={{ fajta: "mind", q: "" }}
                className="rounded-full bg-saffron px-5 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold"
              >
                Nézd a túrákat
              </Link>
              <Link
                to="/ajanlat"
                search={{ tura: "" }}
                className="rounded-full border border-fog/40 px-5 py-3 text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
              >
                Írj egy időpontot
              </Link>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-fog/15 bg-ink-soft py-4 text-fog">
          <div className="ticker-track flex w-max gap-8">
            {loop.map((place, index) => (
              <span key={`${place}-${index}`} className="text-sm uppercase tracking-[0.2em]">
                {place}
                <span className="ml-8 text-gold">·</span>
              </span>
            ))}
          </div>
        </div>

        <section className="bg-paper text-fg">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Kezdd itt</p>
                <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">A túrák, amiket tényleg kérek.</h2>
              </div>
              <Link to="/turak" search={{ fajta: "mind", q: "" }} className="inline-flex items-center gap-2 text-sm text-ink hover:text-gold-deep">
                Mind a {tours.length} program <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper-deep">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
            <div className="overflow-hidden rounded-card">
              <img src="/photos/palace.jpg" alt="A Királyi Palota tetőzete" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">A vezetés</p>
              <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Egy ember, végig. Nem egy tábla a buszablakban.</h2>
              <ul className="mt-8 space-y-5">
                {[
                  ["Magyarul", "A magyarázat nem fordítás. A Wat Pho-nál elmondom, miért fekszik a Buddha, és a palota kapujában, mit nem engednek be."],
                  ["Harminc év", "Ennyi ideje élek Thaiföldön. A taxi, a kifőzde, a templomi cipő — ezek nem lábjegyzetek."],
                  ["A második út más", "Ha már láttad a kötelezőket, nem viszlek vissza ugyanoda. Van rá külön északi ív."],
                  ["Csoportra szabva", "Nagyobb létszámnál olcsóbb, és a programot a tempótokhoz vágom, nem egy kész csomaghoz."],
                ].map(([title, text]) => (
                  <li key={title} className="border-t border-line pt-5">
                    <p className="font-display text-2xl text-ink">{title}</p>
                    <p className="mt-1 text-mist">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Napló</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl">Száz nap a dzsungelben, és ami utána maradt.</h2>
              <p className="mt-4 text-fog">
                Szerzetesként is éltem itt. A történetek nem idegenvezetői anekdoták a buszon — a kolostor hajnali négykor kezdődik.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {stories.slice(0, 2).map((story) => (
                <Link
                  key={story.slug}
                  to="/naplo/$slug"
                  params={{ slug: story.slug }}
                  className="group overflow-hidden rounded-card bg-ink-soft ring-1 ring-fog/15 transition duration-300 hover:ring-gold"
                >
                  <img src={story.image} alt={story.imageAlt} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.16em] text-gold">{story.kicker}</p>
                    <h3 className="mt-2 font-display text-3xl">{story.title}</h3>
                    <p className="mt-3 text-fog">{story.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/naplo" className="mt-8 inline-flex items-center gap-2 text-gold hover:text-paper">
              A teljes napló <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Következő lépés</p>
              <h2 className="mt-2 font-display text-4xl text-ink sm:text-6xl">Mondd meg, hányan vagytok, és mikor érkeztek.</h2>
            </div>
            <div>
              <p className="text-mist">
                Árat nem teszek ki a kirakatba. A belépő, a kocsi és a szállás a létszámtól függ, a monszun pedig a vízeséstől.
              </p>
              <Link
                to="/ajanlat"
                search={{ tura: "" }}
                className="mt-6 inline-flex rounded-full bg-saffron px-5 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold"
              >
                Ajánlatot kérek
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Frame>
  );
}
