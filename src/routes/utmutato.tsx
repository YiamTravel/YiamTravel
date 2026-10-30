import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame } from "@/components/frame";
import { tips } from "@/data/site";

export const Route = createFileRoute("/utmutato")({
  head: () => ({ meta: [{ title: "Útmutató · Yiam" }] }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <Frame>
      <main className="page-enter mx-auto max-w-6xl px-5 pb-24 pt-28">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Mielőtt jössz</p>
            <h1 className="mt-2 font-display text-5xl text-ink">Amit a reptéren már késő megtudni.</h1>
            <p className="mt-4 text-mist">
              Thaiföld soha nem volt gyarmat, az angol a turistahelyeken is csak „inkább”. A hivatalos nyelv a thai. A lakosság túlnyomó többsége buddhista — a szentélyekben örülnek a vendégnek, ha csendben van és fel van öltözve.
            </p>
            <Link to="/ajanlat" search={{ tura: "" }} className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-paper">
              Kérdésed van? Írd meg.
            </Link>
          </div>
          <div className="overflow-hidden rounded-card">
            <img src="/photos/market.jpg" alt="Reggel egy vízipiacon" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-line md:grid-cols-2">
          {tips.map((tip) => (
            <article key={tip.title} className="bg-paper p-6 sm:p-8">
              <h2 className="font-display text-3xl text-ink">{tip.title}</h2>
              <p className="mt-3 text-fg">{tip.body}</p>
            </article>
          ))}
        </div>
      </main>
    </Frame>
  );
}
