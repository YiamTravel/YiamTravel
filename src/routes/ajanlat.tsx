import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Frame } from "@/components/frame";
import { brand, tours } from "@/data/site";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  tour: string;
  people: string;
  when: string;
  note: string;
  at: string;
};

const storageKey = "yiam-inquiries";

export const Route = createFileRoute("/ajanlat")({
  validateSearch: (search: Record<string, unknown>) => ({
    tura: typeof search.tura === "string" ? search.tura : "",
  }),
  head: () => ({ meta: [{ title: "Ajánlat · Yiam" }] }),
  component: InquiryPage,
});

function InquiryPage() {
  const { tura } = Route.useSearch();
  const [sent, setSent] = useState<Inquiry | null>(null);
  const [saved, setSaved] = useState<Inquiry[]>([]);
  const [tour, setTour] = useState(tura);

  useEffect(() => {
    setTour(tura);
  }, [tura]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setSaved(JSON.parse(raw) as Inquiry[]);
    } catch {
      setSaved([]);
    }
  }, [sent]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inquiry: Inquiry = {
      id: crypto.randomUUID(),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      tour: String(data.get("tour") ?? ""),
      people: String(data.get("people") ?? ""),
      when: String(data.get("when") ?? ""),
      note: String(data.get("note") ?? ""),
      at: new Date().toISOString(),
    };
    const next = [inquiry, ...saved];
    localStorage.setItem(storageKey, JSON.stringify(next));
    setSaved(next);
    setSent(inquiry);
    event.currentTarget.reset();
  }

  return (
    <Frame>
      <main className="page-enter mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Ajánlat</p>
          <h1 className="mt-2 font-display text-5xl text-ink">Írd meg, ki jön, és mikor.</h1>
          <p className="mt-4 text-mist">
            A kérés ezen a készüléken megmarad, hogy később is lásd, mit írtál. Ha azonnal választ szeretnél, hívd a magyar vagy a thai számot.
          </p>
          <div className="mt-8 space-y-2">
            <a className="block font-display text-3xl text-ink hover:text-gold-deep" href={`tel:${brand.phoneHu.replace(/\s/g, "")}`}>
              {brand.phoneHu}
            </a>
            <a className="block text-lg text-fg hover:text-gold-deep" href={`tel:${brand.phoneTh.replace(/\s/g, "")}`}>
              {brand.phoneTh}
            </a>
            <a className="block text-fg hover:text-gold-deep" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
          </div>
          {saved.length > 0 ? (
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.16em] text-mist">Ezen a gépen mentve</p>
              <ul className="mt-3 space-y-3">
                {saved.slice(0, 4).map((item) => (
                  <li key={item.id} className="rounded-2xl bg-paper-deep px-4 py-3 text-sm">
                    <span className="text-ink">{item.name}</span>
                    <span className="text-mist"> · {tours.find((tour) => tour.slug === item.tour)?.title ?? "szabad program"}</span>
                    <span className="block text-mist">{item.when || "időpont nélkül"} · {item.people || "?"} fő</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div>
          {sent ? (
            <div className="rounded-card bg-ink p-8 text-paper">
              <p className="text-xs uppercase tracking-[0.16em] text-gold">Megvan</p>
              <h2 className="mt-3 font-display text-4xl">Köszönöm, {sent.name.split(" ")[0]}.</h2>
              <p className="mt-4 text-fog">
                A kérésed itt van a böngésződben. Ha most szeretnéd elküldeni, a levél már meg van fogalmazva — csak nyisd meg.
              </p>
              <a
                className="mt-6 inline-flex rounded-full bg-saffron px-5 py-3 font-medium text-ink"
                href={`mailto:${brand.email}?subject=${encodeURIComponent("Ajánlatkérés — " + (tours.find((item) => item.slug === sent.tour)?.title ?? "Yiam"))}&body=${encodeURIComponent(mailBody(sent))}`}
              >
                Megnyitom a levelet
              </a>
              <button type="button" className="mt-4 block text-sm text-gold" onClick={() => setSent(null)}>
                Új kérés
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-card bg-paper-deep p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Név" name="name" required autoComplete="name" />
                <Field label="E-mail" name="email" type="email" required autoComplete="email" />
                <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
                <Field label="Hányan" name="people" inputMode="numeric" placeholder="2" />
                <label className="block sm:col-span-2">
                  <span className="text-sm text-mist">Program</span>
                  <select
                    name="tour"
                    value={tour}
                    onChange={(event) => setTour(event.target.value)}
                    className="mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
                  >
                    <option value="">Még nem tudom, szabd meg</option>
                    {tours.map((item) => (
                      <option key={item.slug} value={item.slug}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm text-mist">Mikor</span>
                  <input name="when" placeholder="március 12–19., vagy rugalmas" className="mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm text-mist">Megjegyzés</span>
                  <textarea name="note" rows={5} placeholder="Gyerek, tempó, mit láttatok már, tenger kell-e a végére." className="mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2" />
                </label>
              </div>
              <button type="submit" className="mt-6 rounded-full bg-saffron px-6 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold">
                Elrakom a kérést
              </button>
            </form>
          )}
        </div>
      </main>
    </Frame>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm text-mist">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        className="mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
      />
    </label>
  );
}

function mailBody(inquiry: Inquiry) {
  const title = tours.find((item) => item.slug === inquiry.tour)?.title ?? "szabad program";
  return `Név: ${inquiry.name}\nE-mail: ${inquiry.email}\nTelefon: ${inquiry.phone}\nProgram: ${title}\nLétszám: ${inquiry.people}\nMikor: ${inquiry.when}\n\n${inquiry.note}`;
}
