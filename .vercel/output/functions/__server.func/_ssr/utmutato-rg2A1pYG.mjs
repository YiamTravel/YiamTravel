import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as tips, t as Frame } from "./frame-BLhNKSx9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utmutato-rg2A1pYG.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter mx-auto max-w-6xl px-5 pb-24 pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
					children: "Mielőtt jössz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl text-ink",
					children: "Amit a reptéren már késő megtudni."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-mist",
					children: "Thaiföld soha nem volt gyarmat, az angol a turistahelyeken is csak „inkább”. A hivatalos nyelv a thai. A lakosság túlnyomó többsége buddhista — a szentélyekben örülnek a vendégnek, ha csendben van és fel van öltözve."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ajanlat",
					search: { tura: "" },
					className: "mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-paper",
					children: "Kérdésed van? Írd meg."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/market.jpg",
					alt: "Reggel egy vízipiacon",
					className: "aspect-[4/3] w-full object-cover"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-px overflow-hidden rounded-card bg-line md:grid-cols-2",
			children: tips.map((tip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-paper p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-ink",
					children: tip.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-fg",
					children: tip.body
				})]
			}, tip.title))
		})]
	}) });
}
//#endregion
export { GuidePage as component };
