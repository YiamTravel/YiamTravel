import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Frame } from "@/components/frame";
import { stories, storyBySlug } from "@/data/site";

export const Route = createFileRoute("/naplo/$slug")({
  loader: ({ params }) => {
    const story = storyBySlug(params.slug);
    if (!story) throw notFound();
    return story;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Napló"} · Yiam` }],
  }),
  component: StoryPage,
});

function StoryPage() {
  const story = Route.useLoaderData();
  const more = stories.filter((item) => item.slug !== story.slug);

  return (
    <Frame>
      <main className="page-enter">
        <article className="mx-auto max-w-3xl px-5 pb-12 pt-28">
          <Link to="/naplo" className="text-sm text-gold-deep hover:text-ink">
            Vissza a naplóhoz
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold-deep">
            {story.kicker} · {story.minutes}
          </p>
          <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">{story.title}</h1>
          <img src={story.image} alt={story.imageAlt} className="mt-8 aspect-[16/9] w-full rounded-card object-cover" />
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </article>
        <section className="mx-auto max-w-3xl px-5 pb-20">
          <h2 className="font-display text-2xl text-ink">Tovább</h2>
          <ul className="mt-4 divide-y divide-line">
            {more.map((item) => (
              <li key={item.slug}>
                <Link to="/naplo/$slug" params={{ slug: item.slug }} className="flex items-baseline justify-between gap-4 py-4 hover:text-gold-deep">
                  <span className="font-display text-2xl">{item.title}</span>
                  <span className="text-sm text-mist">{item.minutes}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Frame>
  );
}
