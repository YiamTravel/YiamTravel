import { createFileRoute, Link } from "@tanstack/react-router";
import { Frame } from "@/components/frame";
import { stories } from "@/data/site";

export const Route = createFileRoute("/naplo/")({
  head: () => ({ meta: [{ title: "Napló · Yiam" }] }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <Frame>
      <main className="page-enter mx-auto max-w-6xl px-5 pb-24 pt-28">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Kolostori évek</p>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-ink sm:text-6xl">A napló, amiből a vezetés lett.</h1>
        <p className="mt-4 max-w-2xl text-mist">
          Részletek abból az időből, amikor a szerző szerzetes volt. A helyesírás rendbe téve, a hang nem. A teljes történet ennél hosszabb — ezek a kapuk.
        </p>
        <div className="mt-12 space-y-8">
          {stories.map((story, index) => (
            <Link
              key={story.slug}
              to="/naplo/$slug"
              params={{ slug: story.slug }}
              className="group grid items-center gap-6 border-t border-line py-8 md:grid-cols-[160px_1fr_220px]"
            >
              <p className="font-display text-5xl text-gold-deep">0{index + 1}</p>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-mist">
                  {story.kicker} · {story.minutes}
                </p>
                <h2 className="mt-2 font-display text-4xl text-ink group-hover:text-gold-deep">{story.title}</h2>
                <p className="mt-3 max-w-xl text-mist">{story.excerpt}</p>
              </div>
              <img src={story.image} alt="" className="hidden aspect-[4/3] w-full rounded-card object-cover md:block" />
            </Link>
          ))}
        </div>
      </main>
    </Frame>
  );
}
