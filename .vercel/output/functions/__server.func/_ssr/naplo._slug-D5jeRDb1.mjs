import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as stories, t as Frame } from "./frame-BLhNKSx9.mjs";
import { a as Route$2 } from "./router-BlLfkSRO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/naplo._slug-D5jeRDb1.js
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	const story = Route$2.useLoaderData();
	const more = stories.filter((item) => item.slug !== story.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-5 pb-12 pt-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/naplo",
					className: "text-sm text-gold-deep hover:text-ink",
					children: "Vissza a naplóhoz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs uppercase tracking-[0.18em] text-gold-deep",
					children: [
						story.kicker,
						" · ",
						story.minutes
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl text-ink sm:text-6xl",
					children: story.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story.image,
					alt: story.imageAlt,
					className: "mt-8 aspect-[16/9] w-full rounded-card object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-6 text-lg leading-relaxed",
					children: story.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph.slice(0, 24)))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-ink",
				children: "Tovább"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line",
				children: more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/naplo/$slug",
					params: { slug: item.slug },
					className: "flex items-baseline justify-between gap-4 py-4 hover:text-gold-deep",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-mist",
						children: item.minutes
					})]
				}) }, item.slug))
			})]
		})]
	}) });
}
//#endregion
export { StoryPage as component };
