import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { d as tours, o as places, r as TourCard, s as stories, t as Frame } from "./frame-BLhNKSx9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BtmhYQlS.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = tours.filter((tour) => tour.featured);
	const loop = [...places, ...places];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		tone: "ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "page-enter",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-[100svh] overflow-hidden bg-ink text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/river.jpg",
							alt: "A Chao Phraya és a Wat Arun kék órában",
							className: "ken absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.22em] text-gold",
									children: "Bangkok · 30 év helyismeret"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-paper sm:text-7xl",
									children: "Thaiföld, magyarul. Nem a prospektusból."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-lg text-fog",
									children: "Magán idegenvezetés: a kötelező templomok, a vízipiac, ami még él, az északi körút, Angkor, és ha kéred, egy kolostor, ahol tényleg csend van."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/turak",
										search: {
											fajta: "mind",
											q: ""
										},
										className: "rounded-full bg-saffron px-5 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold",
										children: "Nézd a túrákat"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/ajanlat",
										search: { tura: "" },
										className: "rounded-full border border-fog/40 px-5 py-3 text-paper transition-colors duration-200 hover:border-gold hover:text-gold",
										children: "Írj egy időpontot"
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border-y border-fog/15 bg-ink-soft py-4 text-fog",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ticker-track flex w-max gap-8",
						children: loop.map((place, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm uppercase tracking-[0.2em]",
							children: [place, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-8 text-gold",
								children: "·"
							})]
						}, `${place}-${index}`))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-5 py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
								children: "Kezdd itt"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
								children: "A túrák, amiket tényleg kérek."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/turak",
								search: {
									fajta: "mind",
									q: ""
								},
								className: "inline-flex items-center gap-2 text-sm text-ink hover:text-gold-deep",
								children: [
									"Mind a ",
									tours.length,
									" program ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
							children: featured.map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour }, tour.slug))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/palace.jpg",
								alt: "A Királyi Palota tetőzete",
								className: "aspect-[4/3] w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
								children: "A vezetés"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
								children: "Egy ember, végig. Nem egy tábla a buszablakban."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-5",
								children: [
									["Magyarul", "A magyarázat nem fordítás. A Wat Pho-nál elmondom, miért fekszik a Buddha, és a palota kapujában, mit nem engednek be."],
									["Harminc év", "Ennyi ideje élek Thaiföldön. A taxi, a kifőzde, a templomi cipő — ezek nem lábjegyzetek."],
									["A második út más", "Ha már láttad a kötelezőket, nem viszlek vissza ugyanoda. Van rá külön északi ív."],
									["Csoportra szabva", "Nagyobb létszámnál olcsóbb, és a programot a tempótokhoz vágom, nem egy kész csomaghoz."]
								].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t border-line pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl text-ink",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-mist",
										children: text
									})]
								}, title))
							})
						] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ink text-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.18em] text-gold",
										children: "Napló"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-4xl sm:text-5xl",
										children: "Száz nap a dzsungelben, és ami utána maradt."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-fog",
										children: "Szerzetesként is éltem itt. A történetek nem idegenvezetői anekdoták a buszon — a kolostor hajnali négykor kezdődik."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-6 md:grid-cols-2",
								children: stories.slice(0, 2).map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/naplo/$slug",
									params: { slug: story.slug },
									className: "group overflow-hidden rounded-card bg-ink-soft ring-1 ring-fog/15 transition duration-300 hover:ring-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: story.image,
										alt: story.imageAlt,
										className: "aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs uppercase tracking-[0.16em] text-gold",
												children: story.kicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-3xl",
												children: story.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-fog",
												children: story.excerpt
											})
										]
									})]
								}, story.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/naplo",
								className: "mt-8 inline-flex items-center gap-2 text-gold hover:text-paper",
								children: ["A teljes napló ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
							children: "Következő lépés"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl text-ink sm:text-6xl",
							children: "Mondd meg, hányan vagytok, és mikor érkeztek."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-mist",
							children: "Árat nem teszek ki a kirakatba. A belépő, a kocsi és a szállás a létszámtól függ, a monszun pedig a vízeséstől."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/ajanlat",
							search: { tura: "" },
							className: "mt-6 inline-flex rounded-full bg-saffron px-5 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold",
							children: "Ajánlatot kérek"
						})] })]
					})
				})
			]
		})
	});
}
//#endregion
export { Home as component };
