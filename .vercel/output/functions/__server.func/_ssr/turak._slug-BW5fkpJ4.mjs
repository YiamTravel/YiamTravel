import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as categoryLabel, d as tours, r as TourCard, t as Frame } from "./frame-BLhNKSx9.mjs";
import { n as Route } from "./router-BlLfkSRO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/turak._slug-BW5fkpJ4.js
var import_jsx_runtime = require_jsx_runtime();
function TourPage() {
	const tour = Route.useLoaderData();
	const related = tours.filter((item) => item.slug !== tour.slug && item.category === tour.category).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[68svh] bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: tour.image,
						alt: tour.imageAlt,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[68svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-28 text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-gold",
								children: [
									categoryLabel[tour.category],
									" · ",
									tour.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-3xl font-display text-5xl sm:text-6xl",
								children: tour.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl text-fog",
								children: tour.place
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-fg",
						children: tour.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-mist",
						children: tour.goodFor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 space-y-8",
						children: tour.days.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl text-ink",
								children: day.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-fg",
								children: day.text
							})]
						}, day.label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card bg-ink p-6 text-paper",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-gold",
								children: tour.eyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-fog",
								children: tour.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-b border-fog/15 py-2",
									children: item
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-fog",
								children: "Belépő, kocsi, szállás: az ajánlatban, a létszám szerint. Üdítő és alkohol mindig a vendégé."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ajanlat",
								search: { tura: tour.slug },
								className: "mt-6 block rounded-full bg-saffron px-4 py-3 text-center font-medium text-ink transition-colors duration-200 hover:bg-gold",
								children: "Ezt kérem árajánlatra"
							})
						]
					})
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-ink",
						children: "Ha ez tetszett"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: item }, item.slug))
					})]
				})
			}) : null
		]
	}) });
}
//#endregion
export { TourPage as component };
