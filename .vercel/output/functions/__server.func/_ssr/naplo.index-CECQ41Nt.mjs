import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as stories, t as Frame } from "./frame-BLhNKSx9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/naplo.index-CECQ41Nt.js
var import_jsx_runtime = require_jsx_runtime();
function JournalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter mx-auto max-w-6xl px-5 pb-24 pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
				children: "Kolostori évek"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-3xl font-display text-5xl text-ink sm:text-6xl",
				children: "A napló, amiből a vezetés lett."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-mist",
				children: "Részletek abból az időből, amikor a szerző szerzetes volt. A helyesírás rendbe téve, a hang nem. A teljes történet ennél hosszabb — ezek a kapuk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-8",
				children: stories.map((story, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/naplo/$slug",
					params: { slug: story.slug },
					className: "group grid items-center gap-6 border-t border-line py-8 md:grid-cols-[160px_1fr_220px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-5xl text-gold-deep",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.16em] text-mist",
								children: [
									story.kicker,
									" · ",
									story.minutes
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl text-ink group-hover:text-gold-deep",
								children: story.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-mist",
								children: story.excerpt
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story.image,
							alt: "",
							className: "hidden aspect-[4/3] w-full rounded-card object-cover md:block"
						})
					]
				}, story.slug))
			})
		]
	}) });
}
//#endregion
export { JournalPage as component };
