import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as categoryLabel, d as tours, r as TourCard, t as Frame } from "./frame-BLhNKSx9.mjs";
import { i as kinds, r as Route$1 } from "./router-BlLfkSRO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/turak.index-CY-u2EER.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToursPage() {
	const { fajta, q } = Route$1.useSearch();
	const navigate = useNavigate({ from: "/turak/" });
	const visible = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return tours.filter((tour) => {
			const kindOk = fajta === "mind" || tour.category === fajta;
			const text = `${tour.title} ${tour.blurb} ${tour.place} ${tour.highlights.join(" ")}`.toLowerCase();
			return kindOk && (!query || text.includes(query));
		});
	}, [fajta, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter mx-auto max-w-6xl px-5 pb-24 pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
				children: "Programok"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-3xl font-display text-5xl text-ink sm:text-6xl",
				children: "Válassz tempót, ne csomagot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-mist",
				children: "Egynapos bangkoki napok, vidéki kitérők, többnapos körutak, és a szabott utak, amiket a létszámhoz vágunk. Az ár ajánlatban jön."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: kinds.map((kind) => {
						const active = fajta === kind;
						const label = kind === "mind" ? "Mind" : categoryLabel[kind];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ search: {
								fajta: kind,
								q
							} }),
							className: `rounded-full px-4 py-2 text-sm transition-colors duration-200 ${active ? "bg-ink text-paper" : "bg-paper-deep text-fg hover:bg-line"}`,
							children: label
						}, kind);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block w-full sm:w-72",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Keresés"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (event) => navigate({ search: {
							fajta,
							q: event.target.value
						} }),
						placeholder: "Keresés: Angkor, híd, hajnal…",
						className: "w-full rounded-full border border-line bg-paper px-4 py-3 text-sm outline-none ring-gold focus:ring-2"
					})]
				})]
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-mist",
				children: "Nincs ilyen túra. Próbáld ki, hogy „Ayutthaya” vagy „Chiang Mai”."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
				children: visible.map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour }, tour.slug))
			})
		]
	}) });
}
//#endregion
export { ToursPage as component };
