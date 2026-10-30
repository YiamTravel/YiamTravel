import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as tours, i as brand, t as Frame } from "./frame-BLhNKSx9.mjs";
import { o as Route$5 } from "./router-BlLfkSRO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ajanlat-wKH1jHAZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var storageKey = "yiam-inquiries";
function InquiryPage() {
	const { tura } = Route$5.useSearch();
	const [sent, setSent] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [tour, setTour] = (0, import_react.useState)(tura);
	(0, import_react.useEffect)(() => {
		setTour(tura);
	}, [tura]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(storageKey);
			if (raw) setSaved(JSON.parse(raw));
		} catch {
			setSaved([]);
		}
	}, [sent]);
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const inquiry = {
			id: crypto.randomUUID(),
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			phone: String(data.get("phone") ?? ""),
			tour: String(data.get("tour") ?? ""),
			people: String(data.get("people") ?? ""),
			when: String(data.get("when") ?? ""),
			note: String(data.get("note") ?? ""),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const next = [inquiry, ...saved];
		localStorage.setItem(storageKey, JSON.stringify(next));
		setSaved(next);
		setSent(inquiry);
		event.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "page-enter mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-28 lg:grid-cols-[0.9fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-gold-deep",
				children: "Ajánlat"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl text-ink",
				children: "Írd meg, ki jön, és mikor."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-mist",
				children: "A kérés ezen a készüléken megmarad, hogy később is lásd, mit írtál. Ha azonnal választ szeretnél, hívd a magyar vagy a thai számot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "block font-display text-3xl text-ink hover:text-gold-deep",
						href: `tel:${brand.phoneHu.replace(/\s/g, "")}`,
						children: brand.phoneHu
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "block text-lg text-fg hover:text-gold-deep",
						href: `tel:${brand.phoneTh.replace(/\s/g, "")}`,
						children: brand.phoneTh
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "block text-fg hover:text-gold-deep",
						href: `mailto:${brand.email}`,
						children: brand.email
					})
				]
			}),
			saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-mist",
					children: "Ezen a gépen mentve"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: saved.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-paper-deep px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-mist",
								children: [" · ", tours.find((tour) => tour.slug === item.tour)?.title ?? "szabad program"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-mist",
								children: [
									item.when || "időpont nélkül",
									" · ",
									item.people || "?",
									" fő"
								]
							})
						]
					}, item.id))
				})]
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-card bg-ink p-8 text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-gold",
					children: "Megvan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl",
					children: [
						"Köszönöm, ",
						sent.name.split(" ")[0],
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-fog",
					children: "A kérésed itt van a böngésződben. Ha most szeretnéd elküldeni, a levél már meg van fogalmazva — csak nyisd meg."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-6 inline-flex rounded-full bg-saffron px-5 py-3 font-medium text-ink",
					href: `mailto:${brand.email}?subject=${encodeURIComponent("Ajánlatkérés — " + (tours.find((item) => item.slug === sent.tour)?.title ?? "Yiam"))}&body=${encodeURIComponent(mailBody(sent))}`,
					children: "Megnyitom a levelet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 block text-sm text-gold",
					onClick: () => setSent(null),
					children: "Új kérés"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-card bg-paper-deep p-6 sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Név",
						name: "name",
						required: true,
						autoComplete: "name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "E-mail",
						name: "email",
						type: "email",
						required: true,
						autoComplete: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Telefon",
						name: "phone",
						type: "tel",
						autoComplete: "tel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hányan",
						name: "people",
						inputMode: "numeric",
						placeholder: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mist",
							children: "Program"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "tour",
							value: tour,
							onChange: (event) => setTour(event.target.value),
							className: "mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Még nem tudom, szabd meg"
							}), tours.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.slug,
								children: item.title
							}, item.slug))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mist",
							children: "Mikor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "when",
							placeholder: "március 12–19., vagy rugalmas",
							className: "mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mist",
							children: "Megjegyzés"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "note",
							rows: 5,
							placeholder: "Gyerek, tempó, mit láttatok már, tenger kell-e a végére.",
							className: "mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-6 rounded-full bg-saffron px-6 py-3 font-medium text-ink transition-colors duration-200 hover:bg-gold",
				children: "Elrakom a kérést"
			})]
		}) })]
	}) });
}
function Field({ label, name, type = "text", required, autoComplete, inputMode, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-mist",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			autoComplete,
			inputMode,
			placeholder,
			className: "mt-1 w-full rounded-2xl border border-line bg-paper px-4 py-3 outline-none ring-gold focus:ring-2"
		})]
	});
}
function mailBody(inquiry) {
	const title = tours.find((item) => item.slug === inquiry.tour)?.title ?? "szabad program";
	return `Név: ${inquiry.name}\nE-mail: ${inquiry.email}\nTelefon: ${inquiry.phone}\nProgram: ${title}\nLétszám: ${inquiry.people}\nMikor: ${inquiry.when}\n\n${inquiry.note}`;
}
//#endregion
export { InquiryPage as component };
