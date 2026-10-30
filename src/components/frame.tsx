import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { brand, categoryLabel, type Tour } from "@/data/site";

export function Frame({ children, tone = "paper" }: { children: ReactNode; tone?: "paper" | "ink" }) {
  return (
    <div className={tone === "ink" ? "bg-ink text-paper" : "bg-paper text-fg"}>
      <Header overDark={tone === "ink"} />
      {children}
      <Footer />
    </div>
  );
}

function Header({ overDark }: { overDark: boolean }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const home = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const solid = !home || scrolled || open || !overDark;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-fog/15 bg-ink/92 text-paper backdrop-blur-md" : "bg-transparent text-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight">Yiam</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-fog sm:inline">Thaiföld</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/turak" search={{ fajta: "mind", q: "" }} className="text-sm text-fog transition-colors duration-200 hover:text-gold">
            Túrák
          </Link>
          <Link to="/turak" search={{ fajta: "circuit", q: "" }} className="text-sm text-fog transition-colors duration-200 hover:text-gold">
            Körutak
          </Link>
          <Link to="/naplo" className="text-sm text-fog transition-colors duration-200 hover:text-gold">
            Napló
          </Link>
          <Link to="/utmutato" className="text-sm text-fog transition-colors duration-200 hover:text-gold">
            Útmutató
          </Link>
          <Link
            to="/ajanlat"
            search={{ tura: "" }}
            className="rounded-full bg-saffron px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-gold md:py-2"
          >
            Ajánlatot kérek
          </Link>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-fog/30 md:hidden"
          aria-label={open ? "Menü bezárása" : "Menü"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-fog/15 bg-ink px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/turak" search={{ fajta: "mind", q: "" }} className="rounded-xl px-3 py-3 text-lg text-paper">
              Túrák
            </Link>
            <Link to="/turak" search={{ fajta: "circuit", q: "" }} className="rounded-xl px-3 py-3 text-lg text-paper">
              Körutak
            </Link>
            <Link to="/naplo" className="rounded-xl px-3 py-3 text-lg text-paper">
              Napló
            </Link>
            <Link to="/utmutato" className="rounded-xl px-3 py-3 text-lg text-paper">
              Útmutató
            </Link>
            <Link to="/ajanlat" search={{ tura: "" }} className="mt-2 rounded-full bg-saffron px-4 py-3 text-center font-medium text-ink">
              Ajánlatot kérek
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl">Yiam</p>
          <p className="mt-3 max-w-sm text-fog">{brand.line}. Harminc év Bangkokban, magyarul, végig.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Telefon</p>
          <a className="mt-3 block hover:text-gold" href={`tel:${brand.phoneHu.replace(/\s/g, "")}`}>
            {brand.phoneHu}
          </a>
          <a className="mt-1 block hover:text-gold" href={`tel:${brand.phoneTh.replace(/\s/g, "")}`}>
            {brand.phoneTh}
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Levél</p>
          <a className="mt-3 block hover:text-gold" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <p className="mt-4 text-sm text-fog">Árat a létszám, a szezon és a tempó dönti el. Nem listázok kamu „tól-ig” számot.</p>
        </div>
      </div>
      <div className="border-t border-fog/15 px-5 py-5 text-center text-xs uppercase tracking-[0.16em] text-mist">
        Bangkok · Chiang Mai · Angkor
      </div>
    </footer>
  );
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to="/turak/$slug"
      params={{ slug: tour.slug }}
      className="group flex flex-col overflow-hidden rounded-card bg-paper shadow-[0_1px_0_rgba(16,22,18,0.06)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-gold"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
          {categoryLabel[tour.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-gold-deep">{tour.eyebrow}</p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-ink">{tour.title}</h3>
        <p className="mt-3 flex-1 text-sm text-mist">{tour.blurb}</p>
        <p className="mt-4 flex items-center justify-between text-sm text-fg">
          <span>{tour.place}</span>
          <span className="text-gold-deep">{tour.length}</span>
        </p>
      </div>
    </Link>
  );
}

export function NotFoundPage() {
  return (
    <Frame>
      <main className="page-enter mx-auto max-w-3xl px-5 pb-24 pt-36">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink">Ez az út nincs a térképen.</h1>
        <p className="mt-4 text-mist">A túrák között biztosan megvan, amit kerestél.</p>
        <Link to="/turak" search={{ fajta: "mind", q: "" }} className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-paper">
          Összes túra
        </Link>
      </main>
    </Frame>
  );
}
