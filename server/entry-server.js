import { StrictMode, createContext, useContext, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, NavLink, Navigate, Route, Routes, StaticRouter, useLocation } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ScrollToTop.tsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: reduceMotion ? "auto" : "smooth"
		});
	}, [pathname]);
	return null;
}
//#endregion
//#region src/content/navigation.ts
var navigation = [
	{
		n: "01",
		label: "Home",
		path: "/"
	},
	{
		n: "02",
		label: "About the Doctor",
		path: "/about"
	},
	{
		n: "03",
		label: "Career Highlights",
		path: "/career-highlights"
	},
	{
		n: "04",
		label: "Scientific Publications",
		path: "/scientific-publications"
	},
	{
		n: "05",
		label: "Facilities",
		path: "/facilities"
	},
	{
		n: "06",
		label: "Services",
		path: "/services"
	},
	{
		n: "07",
		label: "Clinical Research",
		path: "/research"
	},
	{
		n: "08",
		label: "Reach Us",
		path: "/reach-us"
	}
];
//#endregion
//#region src/lib/asset.ts
function asset(path) {
	return "/heartfirstsurat.com/" + path.replace(/^\/+/, "");
}
//#endregion
//#region src/components/BrandMark.tsx
function BrandMark({ onClick }) {
	return /* @__PURE__ */ jsx(Link, {
		to: "/",
		onClick,
		className: "inline-flex max-w-[176px] items-center",
		"aria-label": "HeartFirst Surat home",
		children: /* @__PURE__ */ jsx("img", {
			src: asset("/original-assets/logo.webp"),
			alt: "HeartFirst Cardiac and Vascular Centre",
			className: "h-auto w-full",
			width: "1024",
			height: "334"
		})
	});
}
//#endregion
//#region src/components/Rail.tsx
function Rail() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "label fixed left-4 top-4 z-50 flex items-center gap-2 bg-indigo px-3 py-2 text-paper lg:hidden",
			onClick: () => setOpen(true),
			"aria-label": "Open menu",
			children: [/* @__PURE__ */ jsx(Menu, { size: 16 }), " Menu"]
		}),
		/* @__PURE__ */ jsxs("aside", {
			className: `fixed inset-y-0 left-0 z-50 flex w-[min(320px,86vw)] flex-col border-r border-line bg-paper px-6 py-8 transition-transform lg:w-[220px] lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx(BrandMark, { onClick: () => setOpen(false) }), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "lg:hidden",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ jsx(X, { size: 18 })
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Pages",
					className: "mt-8 flex flex-col",
					children: navigation.map((item) => /* @__PURE__ */ jsx(NavLink, {
						to: item.path,
						end: item.path === "/",
						onClick: () => setOpen(false),
						className: ({ isActive }) => `flex items-baseline gap-3 border-t border-line py-3 text-[13px] ${isActive ? "font-semibold text-ink" : "text-mute"}`,
						children: ({ isActive }) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
							className: `text-[10px] ${isActive ? "text-indigo" : "text-mute/60"}`,
							children: item.n
						}), /* @__PURE__ */ jsx("span", { children: item.label })] })
					}, item.path))
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-auto pt-6 font-display text-[13px] italic text-indigo",
					children: [
						"Precision. Compassion.",
						/* @__PURE__ */ jsx("br", {}),
						"Every heart."
					]
				})
			]
		}),
		open && /* @__PURE__ */ jsx("button", {
			type: "button",
			"aria-label": "Close menu overlay",
			className: "fixed inset-0 z-40 bg-ink/30 lg:hidden",
			onClick: () => setOpen(false)
		})
	] });
}
//#endregion
//#region src/content/doctor.ts
var doctor = {
	name: "Dr. Atul D. Abhyankar",
	credentialLine: "MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE Interventional Cardiologist",
	mainHeading: "South Gujarat's Most Senior & Experienced Interventional Cardiologist",
	phones: ["98241-45738", "90992-31122"],
	email: "atulda@hotmail.com",
	addresses: [{
		label: "Clinic",
		lines: ["201 Milestone Leone, Athwagate Circle", "Surat 395001, Gujarat, India"]
	}, {
		label: "Hospital",
		lines: ["Cardiac Cath Lab, Mahavir Heart Institute", "Athwagate, Ring Road, Surat 395001, India"]
	}],
	hours: "Monday to Saturday · 10:00 AM–12:00 Noon & 6:00 PM–9:00 PM"
};
//#endregion
//#region src/components/ContactBar.tsx
function ContactBar() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-indigo text-paper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-3 px-[clamp(1.5rem,5vw,3.5rem)] py-6 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8",
			children: [
				/* @__PURE__ */ jsx("span", { children: doctor.hours }),
				doctor.phones.map((p) => /* @__PURE__ */ jsxs("a", {
					href: `tel:+91${p.replace(/\D/g, "")}`,
					className: "hover:text-yellow",
					children: ["+91 ", p]
				}, p)),
				/* @__PURE__ */ jsx("a", {
					href: `mailto:${doctor.email}`,
					className: "hover:text-yellow",
					children: doctor.email
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/reach-us",
					className: "text-yellow underline underline-offset-4 sm:ml-auto",
					children: "Reach us →"
				})
			]
		})
	});
}
//#endregion
//#region src/components/ExternalLink.tsx
function ExternalLink(props) {
	return /* @__PURE__ */ jsx("a", {
		target: "_blank",
		rel: "noreferrer",
		...props
	});
}
//#endregion
//#region src/lib/maps.ts
function mapUrl(query) {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
var CLINIC_MAP_QUERY = "Heart First Cardiac And Vascular Centre, 201 Milestone Leone, Athwagate Circle, Surat 395001";
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-line px-[clamp(1.5rem,5vw,3.5rem)] py-12 text-sm text-mute",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(BrandMark, {}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2",
					children: [doctor.name, ", Interventional Cardiologist"]
				})] }),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Footer",
					className: "flex flex-col gap-1",
					children: navigation.slice(1).map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.path,
						className: "hover:text-indigo",
						children: n.label
					}, n.path))
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(ExternalLink, {
					href: mapUrl(CLINIC_MAP_QUERY),
					className: "block hover:text-indigo",
					children: doctor.addresses[0].lines.map((l) => /* @__PURE__ */ jsx("span", {
						className: "block",
						children: l
					}, l))
				}), /* @__PURE__ */ jsx("a", {
					href: `mailto:${doctor.email}`,
					className: "mt-2 block hover:text-indigo",
					children: doctor.email
				})] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-10 flex flex-col gap-1 border-t border-line pt-4 text-xs sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ jsxs("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" HeartFirst Surat. All rights reserved."
			] }), /* @__PURE__ */ jsxs("p", { children: [
				"Developed by",
				" ",
				/* @__PURE__ */ jsx(ExternalLink, {
					href: "https://shivantra.com",
					className: "font-semibold text-indigo hover:underline",
					children: "Shivantra"
				})
			] })]
		})]
	});
}
//#endregion
//#region src/seo/Seo.tsx
var SeoContext = createContext(null);
function SeoProvider({ sink, children }) {
	return /* @__PURE__ */ jsx(SeoContext.Provider, {
		value: sink,
		children
	});
}
var SITE = "https://heartfirstsurat.com".replace(/\/$/, "");
var OG_IMAGE = `${SITE}/og-cover.png`;
function esc(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function tagsFor({ title, description, canonical, jsonLd }) {
	const url = SITE + canonical;
	const t = [
		`<title>${esc(title)}</title>`,
		`<meta name="description" content="${esc(description)}"/>`,
		`<link rel="canonical" href="${url}"/>`,
		`<meta property="og:type" content="website"/>`,
		`<meta property="og:site_name" content="HeartFirst Surat"/>`,
		`<meta property="og:title" content="${esc(title)}"/>`,
		`<meta property="og:description" content="${esc(description)}"/>`,
		`<meta property="og:url" content="${url}"/>`,
		`<meta property="og:image" content="${OG_IMAGE}"/>`,
		`<meta name="twitter:card" content="summary_large_image"/>`
	];
	if (jsonLd) t.push(`<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`);
	return t;
}
function setMeta(attr, key, value) {
	let el = document.head.querySelector(`meta[${attr}="${key}"]`);
	if (!el) {
		el = document.createElement("meta");
		el.setAttribute(attr, key);
		document.head.appendChild(el);
	}
	el.setAttribute("content", value);
}
function setLink(rel, href) {
	let el = document.head.querySelector(`link[rel="${rel}"]`);
	if (!el) {
		el = document.createElement("link");
		el.rel = rel;
		document.head.appendChild(el);
	}
	el.href = href;
}
function setJsonLd(obj) {
	document.head.querySelector("script[type=\"application/ld+json\"][data-dynamic]")?.remove();
	if (!obj) return;
	const s = document.createElement("script");
	s.type = "application/ld+json";
	s.dataset.dynamic = "true";
	s.textContent = JSON.stringify(obj);
	document.head.appendChild(s);
}
function Seo(props) {
	const sink = useContext(SeoContext);
	if (sink) sink.tags.push(...tagsFor(props));
	useEffect(() => {
		document.title = props.title;
		setMeta("name", "description", props.description);
		setLink("canonical", SITE + props.canonical);
		setMeta("property", "og:title", props.title);
		setMeta("property", "og:description", props.description);
		setMeta("property", "og:url", SITE + props.canonical);
		setJsonLd(props.jsonLd);
	}, [
		props.title,
		props.description,
		props.canonical,
		props.jsonLd
	]);
	return null;
}
//#endregion
//#region src/routes/NotFound.tsx
function NotFound() {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-[clamp(1.5rem,5vw,3.5rem)] py-24",
		children: [
			/* @__PURE__ */ jsx(Seo, {
				title: "Page not found | HeartFirst Surat",
				description: "The page you are looking for could not be found.",
				canonical: "/404"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "label text-indigo",
				children: "Error 404"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-3 font-display text-4xl",
				children: "This page could not be found."
			}),
			/* @__PURE__ */ jsx("ul", {
				className: "mt-8 space-y-1",
				children: navigation.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: n.path,
					className: "text-indigo hover:underline",
					children: n.label
				}) }, n.path))
			})
		]
	});
}
//#endregion
//#region src/seo/siteMeta.ts
var physician = {
	"@context": "https://schema.org",
	"@type": "Physician",
	name: doctor.name,
	medicalSpecialty: "Cardiovascular",
	telephone: "+91-98241-45738",
	email: doctor.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: "201 Milestone Leone, Athwagate Circle",
		addressLocality: "Surat",
		postalCode: "395001",
		addressRegion: "Gujarat",
		addressCountry: "IN"
	},
	openingHoursSpecification: {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		opens: "10:00",
		closes: "21:00"
	}
};
var TABLE = {
	"/": {
		title: `${doctor.name}, Interventional Cardiologist in Surat | HeartFirst Surat`,
		description: `${doctor.mainHeading}. Coronary angioplasty, angiography and preventive cardiology at 201 Milestone Leone, Athwagate Circle, Surat.`,
		jsonLd: physician
	},
	"/about": {
		title: "About Dr. Atul D. Abhyankar | HeartFirst Surat",
		description: "Know Dr. Atul D. Abhyankar, MD, DM, FACC and FSCAI. Explore his CV, academic activities, honours, publications and clinical research."
	},
	"/career-highlights": {
		title: "Career Highlights & Full Curriculum Vitae | Dr. Atul D. Abhyankar",
		description: "31 years and more than 17,000 interventions: qualifications, awards, residency, professional experience, research and the multicentre trials led by Dr. Abhyankar."
	},
	"/scientific-publications": {
		title: "Scientific Publications | Dr. Atul D. Abhyankar",
		description: "More than 100 peer-reviewed papers, abstracts and book chapters in interventional cardiology by Dr. Atul D. Abhyankar, 1986–2020."
	},
	"/facilities": {
		title: "Clinic Facilities | HeartFirst Surat",
		description: "Spacious, elegant clinic at 201 Milestone Leone, Athwagate Circle, Surat. ECG, treadmill test, 2D echo & colour Doppler, complete cardiac check-up, pathology and pharmacy."
	},
	"/services": {
		title: "Hospital Attachments & Procedures | Dr. Atul D. Abhyankar",
		description: "Director of Interventional Cardiology at Mahavir Heart Institute and senior visiting consultant at Tristar, Sunshine Global, Shalby and United Green hospitals, Surat."
	},
	"/research": {
		title: "Clinical Research & Education | Dr. Atul D. Abhyankar",
		description: "Multicentre national and global trials, original research, academic activities, student dissertations and teaching programs & workshops in interventional cardiology."
	},
	"/reach-us": {
		title: "Reach Us for Appointments and Emergency Care | HeartFirst Surat",
		description: "Outpatient appointment numbers for the clinic and Mahavir Heart Institute, plus what to do in a cardiac emergency in Surat."
	}
};
function metaFor(path) {
	const e = TABLE[path] ?? TABLE["/"];
	return {
		title: e.title,
		description: e.description,
		canonical: path,
		jsonLd: e.jsonLd
	};
}
//#endregion
//#region src/content/home.ts
var homeQuickLinks = [
	{
		label: "Know about your Doctor",
		to: "/about.html"
	},
	{
		label: "Clinic Informations & Facilities",
		to: "/facilities.html"
	},
	{
		label: "Hospital attachments and Procedures Performed",
		to: "/services.html"
	},
	{
		label: "Academic Activities, Research and Education",
		to: "/research.html"
	},
	{
		label: "Information and Videos for Patients and Public",
		to: "/about.html"
	},
	{
		label: "For Appointment and Emergency Situations",
		to: "/reach-us.html"
	},
	{
		label: "Recent Interesting Cases & CMEs for Medical Professionals",
		to: "/research.html"
	}
];
var homeStats = [
	{
		value: "31",
		label: "Years’ experience in interventional cardiology"
	},
	{
		value: "17,000+",
		label: "Interventions"
	},
	{
		value: "105+",
		label: "Publications and abstracts"
	},
	{
		value: "25+",
		label: "International clinical trials"
	}
];
//#endregion
//#region src/components/StatBand.tsx
function StatBand({ items }) {
	return /* @__PURE__ */ jsx("section", {
		className: "grid grid-cols-2 bg-indigo text-paper md:grid-cols-4",
		children: items.map((s) => /* @__PURE__ */ jsxs("div", {
			className: "border-l border-paper/20 p-6 first:border-l-0 md:first:border-l",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-display text-3xl font-light md:text-4xl",
				children: s.value
			}), /* @__PURE__ */ jsx("div", {
				className: "label mt-2 text-paper/80",
				children: s.label
			})]
		}, s.label))
	});
}
//#endregion
//#region src/components/Section.tsx
function Section({ eyebrow, title, children }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] py-[clamp(2rem,5vw,3.5rem)]",
		children: [
			eyebrow && /* @__PURE__ */ jsx("p", {
				className: "label text-mute",
				children: eyebrow
			}),
			title && /* @__PURE__ */ jsx("h2", {
				className: "mt-2 font-display text-2xl font-light md:text-3xl",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: eyebrow || title ? "mt-6" : "",
				children
			})
		]
	});
}
//#endregion
//#region src/components/CardiacIllustration.tsx
function CardiacIllustration({ className = "" }) {
	return /* @__PURE__ */ jsx("div", {
		className: `cardiac-illustration relative overflow-hidden border border-line bg-indigo/[0.035] ${className}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 520 390",
			className: "block h-auto w-full",
			fill: "none",
			children: [
				/* @__PURE__ */ jsxs("defs", { children: [
					/* @__PURE__ */ jsxs("linearGradient", {
						id: "heart-wash",
						x1: "150",
						y1: "80",
						x2: "380",
						y2: "340",
						gradientUnits: "userSpaceOnUse",
						children: [
							/* @__PURE__ */ jsx("stop", {
								stopColor: "#3f51b5",
								stopOpacity: ".2"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: ".72",
								stopColor: "#3f51b5",
								stopOpacity: ".06"
							}),
							/* @__PURE__ */ jsx("stop", {
								offset: "1",
								stopColor: "#ffea00",
								stopOpacity: ".08"
							})
						]
					}),
					/* @__PURE__ */ jsxs("radialGradient", {
						id: "soft-glow",
						children: [/* @__PURE__ */ jsx("stop", {
							stopColor: "#3f51b5",
							stopOpacity: ".1"
						}), /* @__PURE__ */ jsx("stop", {
							offset: "1",
							stopColor: "#3f51b5",
							stopOpacity: "0"
						})]
					}),
					/* @__PURE__ */ jsx("pattern", {
						id: "heart-grid",
						width: "28",
						height: "28",
						patternUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ jsx("path", {
							d: "M28 0H0V28",
							stroke: "#3f51b5",
							strokeOpacity: ".08"
						})
					})
				] }),
				/* @__PURE__ */ jsx("rect", {
					width: "520",
					height: "420",
					fill: "url(#heart-grid)"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "260",
					cy: "210",
					r: "185",
					fill: "url(#soft-glow)"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "260",
					cy: "210",
					r: "142",
					stroke: "#3f51b5",
					strokeOpacity: ".12"
				}),
				/* @__PURE__ */ jsx("circle", {
					className: "diagnostic-ring",
					cx: "260",
					cy: "210",
					r: "106",
					stroke: "#3f51b5",
					strokeOpacity: ".16",
					strokeDasharray: "4 8"
				}),
				/* @__PURE__ */ jsxs("g", {
					className: "heart-beat",
					children: [
						/* @__PURE__ */ jsx("path", {
							d: "M252 345c-60-41-131-95-131-176 0-55 67-85 106-43l25 27 27-29c39-42 104-10 104 45 0 80-70 135-131 176Z",
							fill: "url(#heart-wash)",
							stroke: "#3f51b5",
							strokeWidth: "2.4"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M252 153c17 42 8 81-7 123m31-117c-3 34 10 62 31 87",
							stroke: "#3f51b5",
							strokeOpacity: ".38",
							strokeWidth: "2.5",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M168 166c18-35 51-48 80-13",
							stroke: "#3f51b5",
							strokeOpacity: ".24",
							strokeWidth: "5",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M181 172c15-21 38-27 57-10",
							stroke: "#fff",
							strokeOpacity: ".72",
							strokeWidth: "2",
							strokeLinecap: "round"
						})
					]
				}),
				/* @__PURE__ */ jsx("path", {
					className: "ecg-trace",
					pathLength: "1",
					d: "M42 240h92l17-35 24 69 25-51 15 17h77l18-31 22 55 16-24h130",
					stroke: "#3f51b5",
					strokeWidth: "3",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ jsx("circle", {
					className: "ecg-dot",
					cx: "478",
					cy: "240",
					r: "7",
					fill: "#ffea00"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M62 72h72M62 84h42M386 342h72M416 354h42",
					stroke: "#3f51b5",
					strokeOpacity: ".25",
					strokeWidth: "2"
				})
			]
		})
	});
}
//#endregion
//#region src/routes/Home.tsx
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/") }),
		/* @__PURE__ */ jsxs("header", {
			className: "grid gap-8 border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] pb-12 pt-[clamp(1.75rem,7vw,5rem)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("p", {
					className: "load-reveal label flex items-center gap-2 text-indigo",
					children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-yellow" }), "Interventional Cardiologist"]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "load-reveal load-reveal-delay mt-4 font-display text-[clamp(2.25rem,7vw,4.5rem)] font-light leading-[0.98] tracking-tight",
					children: doctor.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 font-serif text-lg text-mute",
					children: doctor.credentialLine
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-7 max-w-xl border-l-2 border-indigo bg-gradient-to-r from-indigo/[0.07] to-transparent py-3 pl-5 pr-4 font-serif text-xl leading-snug text-ink",
					children: /* @__PURE__ */ jsx("span", {
						className: "italic",
						children: doctor.mainHeading
					})
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/about",
					className: "label mt-8 inline-flex items-center gap-3 border border-ink px-6 py-4 hover:bg-ink hover:text-paper",
					children: ["About the doctor ", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
				})
			] }), /* @__PURE__ */ jsx(CardiacIllustration, { className: "w-full max-w-[500px] justify-self-center lg:justify-self-end" })]
		}),
		/* @__PURE__ */ jsx(StatBand, { items: homeStats }),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Start here",
			title: "Quick access",
			children: /* @__PURE__ */ jsx("ul", {
				className: "grid border-l border-t border-line sm:grid-cols-2",
				children: homeQuickLinks.map((l) => /* @__PURE__ */ jsx("li", {
					className: "border-b border-r border-line",
					children: /* @__PURE__ */ jsxs(Link, {
						to: l.to,
						className: "flex h-full items-center justify-between gap-4 p-5 text-[15px] hover:text-indigo",
						children: [/* @__PURE__ */ jsx("span", {
							className: "min-w-0 break-words",
							children: l.label
						}), /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "shrink-0 text-indigo"
						})]
					})
				}, l.label))
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Explore",
			title: "A complete picture of your cardiac care.",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3",
				children: navigation.slice(1).map((n) => /* @__PURE__ */ jsxs(Link, {
					to: n.path,
					className: "flex min-h-[120px] flex-col justify-between border-b border-r border-line p-5 hover:text-indigo",
					children: [/* @__PURE__ */ jsx("span", {
						className: "label text-mute/70",
						children: n.n
					}), /* @__PURE__ */ jsx("span", {
						className: "text-[15px]",
						children: n.label
					})]
				}, n.path))
			})
		})
	] });
}
//#endregion
//#region src/components/Masthead.tsx
function Masthead({ n, eyebrow, title, accent }) {
	return /* @__PURE__ */ jsxs("header", {
		className: "masthead-vector relative overflow-hidden border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] pb-10 pt-[clamp(1.75rem,7vw,5rem)] sm:pr-32",
		children: [
			/* @__PURE__ */ jsxs("svg", {
				"aria-hidden": "true",
				viewBox: "0 0 720 260",
				preserveAspectRatio: "none",
				className: "pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] max-w-3xl text-indigo opacity-[0.11]",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M0 164h117l23-44 31 89 34-67 20 22h85l25-40 29 75 24-35h332",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						vectorEffect: "non-scaling-stroke"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "590",
						cy: "95",
						r: "76",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1",
						strokeDasharray: "5 9",
						vectorEffect: "non-scaling-stroke"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "590",
						cy: "95",
						r: "48",
						fill: "currentColor",
						opacity: ".12"
					})
				]
			}),
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-2 right-4 hidden font-display text-[clamp(4rem,12vw,8rem)] leading-none text-line/50 sm:block",
				children: n
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "load-reveal label relative flex items-center gap-2 text-indigo",
				children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-yellow" }), eyebrow]
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "load-reveal load-reveal-delay relative mt-4 max-w-2xl font-display text-[clamp(2rem,6vw,4rem)] font-light leading-[1.02] tracking-tight",
				children: [title, accent && /* @__PURE__ */ jsxs(Fragment, { children: [" ", /* @__PURE__ */ jsx("em", {
					className: "italic text-indigo",
					children: accent
				})] })]
			})
		]
	});
}
//#endregion
//#region src/components/Portrait.tsx
function Portrait({ src, name, fill = false }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: `relative overflow-hidden border border-line ${fill ? "h-full" : ""}`,
		children: [/* @__PURE__ */ jsx("img", {
			src: asset(src),
			alt: name,
			className: `w-full object-cover ${fill ? "h-full" : ""}`
		}), /* @__PURE__ */ jsx("figcaption", {
			className: "label absolute bottom-0 left-0 bg-paper px-3 py-2 text-ink",
			children: name
		})]
	});
}
//#endregion
//#region src/content/about.ts
var aboutResources = [
	{
		label: "Watch a short video about dr atul abhyankar's careers & achievements",
		to: "/research.html"
	},
	{
		label: "dr atul abhyankar's short CV and career highlights",
		to: "/career-Hightlight.html"
	},
	{
		label: "Academic & medical education activities industry collaborations",
		to: "/research.html"
	},
	{
		label: "civilian honours, awards & felicitations",
		to: "/career-Hightlight.html"
	},
	{
		label: "dr atul abhyankar's full curriculum vitae",
		to: "/career-Hightlight.html"
	},
	{
		label: "scientific publications books & editorial activities",
		to: "/scientific-publications.html"
	},
	{
		label: "clinical research",
		to: "/research.html"
	},
	{
		label: "Philanthropy & Editorial",
		to: "/research.html"
	}
];
//#endregion
//#region src/routes/About.tsx
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/about") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "02",
			eyebrow: "About the Doctor",
			title: "Know About",
			accent: "Dr. Atul Abhyankar"
		}),
		/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch",
			children: [/* @__PURE__ */ jsx(Portrait, {
				src: "/original-assets/dr-atul-abhyankar-athwa-gates-surat-cardiologists-lhzu2.webp",
				name: doctor.name,
				fill: true
			}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "font-serif text-lg leading-relaxed text-ink",
				children: doctor.credentialLine
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-8 grid border-t border-line",
				children: aboutResources.map((r) => /* @__PURE__ */ jsx("li", {
					className: "border-b border-line",
					children: /* @__PURE__ */ jsxs(Link, {
						to: r.to,
						className: "flex items-center justify-between gap-4 p-4 text-[15px] capitalize hover:text-indigo",
						children: [/* @__PURE__ */ jsx("span", {
							className: "min-w-0 break-words",
							children: r.label
						}), /* @__PURE__ */ jsx(ArrowRight, {
							size: 15,
							className: "shrink-0 text-indigo"
						})]
					})
				}, r.label))
			})] })]
		}) })
	] });
}
//#endregion
//#region src/components/DefinitionList.tsx
function DefinitionList({ rows }) {
	return /* @__PURE__ */ jsx("dl", {
		className: "grid gap-x-8 sm:grid-cols-2",
		children: rows.map((r) => /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 border-t border-line py-3",
			children: [/* @__PURE__ */ jsx("dt", {
				className: "label text-indigo",
				children: r.label
			}), r.values.map((v) => /* @__PURE__ */ jsx("dd", {
				className: "mt-1 break-words font-serif text-[15px] leading-relaxed text-ink",
				children: v
			}, v))]
		}, r.label))
	});
}
//#endregion
//#region src/components/NumberedList.tsx
function NumberedList({ items }) {
	return /* @__PURE__ */ jsx("ol", {
		className: "space-y-3",
		children: items.map((it, i) => /* @__PURE__ */ jsxs("li", {
			className: "flex gap-3 border-t border-line pt-3 font-serif text-[15px] leading-relaxed",
			children: [/* @__PURE__ */ jsx("span", {
				className: "w-7 shrink-0 font-display text-indigo",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ jsx("span", {
				className: "min-w-0 flex-1 break-words",
				children: it
			})]
		}, i))
	});
}
//#endregion
//#region src/content/trials.ts
var trials = [
	{
		"molecule": "Rivaroxaban",
		"condition": "Non Valvular AF",
		"sponsor": "Bayer",
		"cro": "Quintiles"
	},
	{
		"molecule": "Rivaroxaban low Dose",
		"condition": "Heart Failure",
		"sponsor": "Sanofi",
		"cro": "Iqova"
	},
	{
		"molecule": "Sacubitril Valsartan",
		"condition": "Unstable Angina",
		"sponsor": "Pfizer",
		"cro": "ECCRI"
	},
	{
		"molecule": "Vaespladib",
		"condition": "Acute Coronary Syndrome",
		"sponsor": "Astra Zeneca",
		"cro": "Kendle"
	},
	{
		"molecule": "Sitaxentan",
		"condition": "ACS undergoing PCI",
		"sponsor": "Novartis",
		"cro": "Novo Nordisk"
	},
	{
		"molecule": "Canacunimab",
		"condition": "ACS post PCI",
		"sponsor": "Johnson & Johnson",
		"cro": "Paraxel"
	},
	{
		"molecule": "Ticagrelor",
		"condition": "Hypercholesterolemia",
		"sponsor": "Kova",
		"cro": "Batra Hospital & Research Centre"
	},
	{
		"molecule": "Prasugrel",
		"condition": "Stable CAD",
		"sponsor": "Anthera",
		"cro": "Max Neeman"
	},
	{
		"molecule": "Pemafibrate",
		"condition": "Primary Pulmonary Hypertension",
		"sponsor": "Novo Nordisk",
		"cro": "JSS"
	},
	{
		"molecule": "Bempedoic Acid",
		"condition": "Statin Intolerance",
		"sponsor": "Espirion",
		"cro": "SIRO"
	},
	{
		"molecule": "Semaglutide",
		"condition": "Familial Hypercholesterolemia",
		"sponsor": "Torrent",
		"cro": "Tech Observer"
	},
	{
		"molecule": "Alirocumab",
		"condition": "CAD with high BMI",
		"sponsor": "Actavis",
		"cro": "Pacific"
	},
	{
		"molecule": "Alogliptin",
		"condition": "CAD with Diabetes",
		"sponsor": "Terumo",
		"cro": "Trident"
	},
	{
		"molecule": "Thyroxin Analogue",
		"condition": "PCI with High Bleeding Risk",
		"sponsor": "Boston Scientific",
		"cro": "WCT"
	},
	{
		"molecule": "Long acting nitrate",
		"condition": "PCI in Diabetics",
		"sponsor": "Abbott",
		"cro": ""
	},
	{
		"molecule": "Otamixaban",
		"condition": "PCI in AMI",
		"sponsor": "Sahajanand Medical Technologies",
		"cro": ""
	},
	{
		"molecule": "Amlodipine",
		"condition": "Multivessel PCI",
		"sponsor": "Multivessel PCI",
		"cro": ""
	},
	{
		"molecule": "Irbesartan",
		"condition": "Hypertension",
		"sponsor": "Vascular Concepts",
		"cro": ""
	},
	{
		"molecule": "Ultimaster Stent",
		"condition": "Envision Scientific",
		"sponsor": "",
		"cro": ""
	},
	{
		"molecule": "Tetriflex/Tetrilimus Stent",
		"condition": "",
		"sponsor": "",
		"cro": ""
	},
	{
		"molecule": "Pronova Stent",
		"condition": "",
		"sponsor": "",
		"cro": ""
	},
	{
		"molecule": "Nostrum Stent",
		"condition": "",
		"sponsor": "",
		"cro": ""
	}
];
//#endregion
//#region src/components/TrialsTable.tsx
function TrialsTable() {
	return /* @__PURE__ */ jsx("div", {
		className: "max-w-full overflow-x-auto",
		children: /* @__PURE__ */ jsxs("table", {
			"aria-label": "Multicentre national and global trials",
			className: "w-full min-w-[640px] border-collapse text-left text-sm",
			children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
				className: "label border-b border-line text-mute",
				children: [
					/* @__PURE__ */ jsx("th", {
						className: "py-3 pr-4 font-semibold",
						children: "Molecule / Device"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "py-3 pr-4 font-semibold",
						children: "Clinical condition"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "py-3 pr-4 font-semibold",
						children: "Sponsor"
					}),
					/* @__PURE__ */ jsx("th", {
						className: "py-3 font-semibold",
						children: "Research organization"
					})
				]
			}) }), /* @__PURE__ */ jsx("tbody", { children: trials.map((t, i) => /* @__PURE__ */ jsxs("tr", {
				className: "border-b border-line/60 align-top",
				children: [
					/* @__PURE__ */ jsx("td", {
						className: "py-3 pr-4 font-medium",
						children: t.molecule
					}),
					/* @__PURE__ */ jsx("td", {
						className: "py-3 pr-4 text-mute",
						children: t.condition || "Not listed"
					}),
					/* @__PURE__ */ jsx("td", {
						className: "py-3 pr-4 text-mute",
						children: t.sponsor || "Not listed"
					}),
					/* @__PURE__ */ jsx("td", {
						className: "py-3 text-mute",
						children: t.cro || "Not listed"
					})
				]
			}, i)) })]
		})
	});
}
//#endregion
//#region src/content/cv.ts
var careerHighlights = [
	"Doctor of Medicine (Cardiology) – University of Mumbai",
	"Fellow – Society for Cardiac Angiography and Interventions",
	"Fellow – American College of Cardiology",
	"31 Years’ Experience in Interventional Cardiology with more than 17000 interventions",
	"Invited as Faculty to more than 50 international & national conferences/workshops",
	"Course Director – 6 Clinical conferences",
	"More than 105 Publications and abstracts, Two best paper awards",
	"Editorial Consultant – Cath Cardiovascular Interventions, Indian Heart Journal, Int J of Cardiology, Heart & Mind, Expert Review in Cardiology, Minerva Cardiologica, Journal of Indian College of Cardiology",
	"PI – 2 First in Man and 10 Phase-4 Trials related to stents",
	"PI – More than 25 international clinical trials",
	"Superspecialty (Cardiology) Teacher for Diplomate of National Board",
	"Live case operator for India Live 2019",
	"Course Director – PACT (Preceptorship in Advanced Coronary Technology) – 3 Courses till now",
	"Course Director – SECT (Skill Enhancements for Cathlab Technicians) – 3 Courses till now"
];
var cv = {
	details: [
		{
			label: "Name",
			values: ["Dr. Atul Damodar Abhyankar"]
		},
		{
			label: "Permanent address",
			values: ["205/C Abhishek Park, Athwalines Road, Parle point, Surat, Gujarat 395007, India"]
		},
		{
			label: "Hospital Address",
			values: ["Cardiac Cath Lab, Mahavir Heart Institute, Athwagate, Ring Road, Surat 395001, India"]
		},
		{
			label: "Contact Tel. No.",
			values: ["+91-261-2472211", "+91-98241-45738 (Mobile)"]
		},
		{
			label: "Facsimile",
			values: ["+91-261-2254669"]
		},
		{
			label: "E-mail",
			values: ["atulda@hotmail.com"]
		},
		{
			label: "Qualifications",
			values: [
				"M.B. B.S [University of Bombay]",
				"M.D. [Medicine] [University of Bombay]",
				"D.M. [Cardiology] [University of Bombay]",
				"FSCAI (Fellow Society for Cardiac Angiography and Interventions, USA)",
				"FACC (American College of Cardiology, USA)",
				"FAPSIC (Fellow Asia Pacific Society for Interventional Cardiology)",
				"FCSI (Fellow Cardiological Society of India)",
				"FISE (Fellow Indian Society for Electrocardiology)"
			]
		},
		{
			label: "Present Designation",
			values: ["Clinical Director – Interventional Cardiology Mahavir Heart Institute, Surat, India"]
		},
		{
			label: "Date of Birth",
			values: ["25th September 1961"]
		},
		{
			label: "Nationality",
			values: ["Indian"]
		}
	],
	academicAchievements: [
		"Fenneleno Bossuet Godinho Gold Medal in Physiology.",
		"Dr. T. H. Rindani Scholarship Prize in Physiology",
		"Second Prize - Competitive Examination in Pharmacology",
		"First Rank in College at MD [Medicine] examination.",
		"First Rank in University at D.M. [Cardiology] examination.",
		"First Prize in Intercollegiate Symposium Competition in Geriatrics held during First National Conference on Geriatrics.",
		"Second Prize in Dr. Bagadia trophy intermedical Psychiatry Seminar Competition."
	],
	bestPaperAwards: ["Dr. R.S.Rajgopalan Award for Best Paper in Electrocardiology - 1991 “Prognostic Value of Programmed Electrical Stimulation after acute Myocardial Infarction”", "Dr. R.S.Rajgopalan Award for best Paper in Electrocardiology - 1992 “Comparative Study of Late Potentials and Programmed Stimulation in Post Infarction Patients”"],
	otherAwards: [
		"Best All Round Student of the College [1983]",
		"Appreciation Award for the Valuable Contribution to the Progress of the Institution: April 1991.",
		"Giants’ International Award for excellence in Medicine (2002)",
		"Jewel in the Crown of Surat (Divyabhaskar)",
		"Pathdarshak Pratibha (Government of Gujarat)",
		"Times Education Icon",
		"MyFM Award for Excellence in Cardiology"
	],
	scholarships: [
		"University Scholarships for Undergraduate, Postgraduate and Superspeciality",
		"Hargobind Medical Foundation Fellowship for Advanced Training in Interventional Cardiology.",
		"K.C.Mahindra Education Trust Scholarship for Training in Interventional Cardiology.",
		"Diwaliben Mehta Charitable Trust Scholarship for Training in Interventional Cardiology."
	],
	educationalDetail: [
		"Secondary School Certificate: April 1976, Maharashtra State Board of Secondary Education, Awarded Distinction and National Merit Scholarship.",
		"Higher Secondary Certificate: April 1978, Maharashtra State Board of Secondary and Higher Secondary Education, Awarded Distinction and State Merit Scholarship.",
		"M.B.B.S: October 1982, University of Bombay. Subjects taken: Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Forensic Medicine, Preventive and Social Medicine, Internal Medicine, Surgery, Gynecology and Obstetrics, Pediatrics, Ophthalmology, Otolaryngology, Orthopedics, Dermatology, Psychiatry, Radiology. Awards: First Class, Gold Medal in Physiology, Distinction in Pathology.",
		"Internship - December 1982 to December 1983",
		"M.D. [Medicine and Therapeutics]: November 1986, University of Bombay. Internal Medicine, Cardiology, Neurology, Respiratory Medicine, Nephrology, Hematology, Gastroenterology, Infective diseases, Multisystem Diseases, Immunology, Genetics, Toxicology, Nutrition etc. Dissertation: Glycosylated Haemoglobin in Diabetes and chronic Renal Failure.",
		"D.M. (Doctor of Medicine) [Cardiology]: October 1989, University of Bombay. General Cardiology, Congenital Heart Diseases, Valvular Heart Diseases, Ischaemic Heart Disease, Non-invasive diagnostic techniques - [Exercise testing, Echocardiography, Ambulatory EKG Monitoring], Invasive Diagnostic and therapeutic techniques - [Cardiac Catheterisation, Electrophysiology, Interventional Procedures], Aortic and Vascular Diseases. Passed D.M. in first attempt with first rank in the University.",
		"Fellow in Interventional Cardiology: March 1993 - December 1996, Royal Prince Alfred Hospital, University of Sydney."
	],
	residency: [
		{
			role: "House Officer in Medicine",
			institution: "L.T.M.G. Hospital Sion, Bombay",
			dates: "01/03/84 to 31/07/84",
			teaching: false
		},
		{
			role: "House Officer in Cardiology",
			institution: "L.T.M.G. Hospital",
			dates: "01/08/84 to 31/12/84",
			teaching: false
		},
		{
			role: "Registrar in Cardiology",
			institution: "L.T.M.G. Hospital",
			dates: "01/01/85 to 31/01/85",
			teaching: true
		},
		{
			role: "Registrar in Tetanus and Respiratory Medicine",
			institution: "L.T.M.G. Hospital",
			dates: "01/02/85 to 14/02/86",
			teaching: true
		},
		{
			role: "Registrar in Medicine",
			institution: "L.T.M.G. Hospital",
			dates: "15/02/86 to 28/02/87",
			teaching: true
		},
		{
			role: "Registrar in Cardiology",
			institution: "L.T.M.G. Hospital",
			dates: "01/03/87 to 11/04/89",
			teaching: true
		}
	],
	experience: [
		{
			heading: "Lecturer in Cardiology",
			period: "12/04/89 to 27/03/93",
			blocks: [
				{ text: "Department of Cardiology, L.T.M.G. Hospital, Sion, Mumbai, India." },
				{
					label: "Clinical responsibilities",
					text: "Management of Acute Myocardial infarction and other ischaemic heart disease patients, Management of Congenital and Valvular Heart diseases, Consultations, Performance of non-invasive & invasive diagnostic and therapeutic procedures."
				},
				{
					label: "Academic responsibilities",
					text: "Undergraduate, postgraduate & superspeciality teaching, Conduct various research projects, Organise educational updates."
				},
				{
					label: "Administrative responsibilities",
					text: "Supervise Registrars and House-Officers in their clinical and academic work, Form guidelines and evaluate purchase of new equipment, Provide guidelines for technical and nursing staff."
				}
			]
		},
		{
			heading: "Fellow in Interventional Cardiology",
			period: "29/03/93 to 20/12/97",
			blocks: [{ text: "Department of Cardiology, Royal Prince Alfred Hospital [University of Sydney], Camperdown, Sydney, Australia." }, { text: "Diagnostic Cardiac Catheterisations, Coronary Angioplasties, Stent Implantations, Rotational and Directional Atherectomy, Radial Artery Interventions, Intravascular Ultrasound, Intracoronary Doppler, Participation in Clinical Research Projects." }]
		},
		{
			heading: "Senior Specialist in Interventional Cardiology",
			period: "May 1997 – January 2001",
			blocks: [
				{ text: "Royal Hospital, Muscat, Oman." },
				{ text: "Responsible for setting up of a new interventional program. Within 3 years completed more than 800 coronary interventions single handedly. Interventions include angioplasty & stenting, rotational atherectomy, radial artery access stenting etc. Cases include small vessels, bifurcations, long lesions, total occlusions, ostial lesions, unprotected left main, cardiogenic shock, vein graft & LIMA lesions, diffuse disease. Achieved one of the lowest rate of complications and highest success rates in the world. Conducted two live demonstration courses, two courses on Intraaortic balloon pump, symposia on “Acute Coronary Syndromes”, “Hot topics in Cardiology”, “Cardiology in the new millennium”." },
				{ text: "Published 10 abstracts in 2 years at international level inclusive of an abstract presented at the TCT meeting in Washington DC. Published one full article and 2 more are under consideration." },
				{ text: "Responsibility of computerization & database development." }
			]
		},
		{
			heading: "Clinical Director – Interventional Cardiology, Mahavir Heart Institute, Surat, India",
			blocks: []
		},
		{
			heading: "Cardiology teacher for Diplomate of National Board (DNB)",
			period: "From 2017",
			blocks: [{ text: "Mahavir Heart Institute, Surat." }]
		}
	],
	positionsHeld: [
		"Honorary Editor: Indian Journal of Electrocardiology [Past]",
		"Honorary Treasurer: Indian Society of Electrocardiology [Past]",
		"Vice President: Indian Society of Electrocardiology [Past]"
	],
	fellowships: [
		"Indian Society of Electrocardiology",
		"The Society of Cardiac Angiography & Interventions (USA)",
		"American College of Cardiology",
		"Cardiological Society of India",
		"Asia Pacific Society for Interventional Cardiology",
		"Indian Society of Electrocardiology"
	],
	memberships: ["EAPACI"],
	extracurricular: [
		"Participation in Marathi Theater as an actor and director with prizes for acting.",
		"Cricket: Represented college, participated in Grade V competitive cricket in Sydney.",
		"Participation in other Sports: Table-tennis, Hockey [Competitive], Badminton [Recreational]",
		"Participation [with prizes] in Elocution, Debates etc.",
		"Worked as a Child Artist on Radio Bombay.",
		"Directed a Video Film on Heart Attack.",
		"Lay press publications about Cardiology.",
		"System Analysis for software development for cardiology related databases.",
		"Member of Organizing Committee: Annual Conference of Cardiological Society of India 1990.",
		"Member of Organizing Committee: International Congress on Coronary Heart Disease 1988.",
		"Honorary Treasurer: First National Update on Bronchoscopy 1985.",
		"Honorary General Secretary: Past Associates of L.T.M. Medical College [PALS].",
		"Course Director: First Muscat Interventional Meeting",
		"Course Director: Workshop on Intraaortic Balloon Pump (Muscat)",
		"Course Director: Second Muscat Interventional Meeting & Workshop on Minimally Invasive Coronary Surgery.",
		"Course Director: “Cardiology in the new millennium.”"
	],
	interventionalExperience: [
		"Coronary Angioplasties: > 17000",
		"Published technique of hand mounting Palmaz-Schatz stent (Catheterization & Cardiovascular Diagnosis 1994). New design for monorail wall stent (application for patent).",
		"Published stenting in severely angulated lesions - Catheterization & Cardiovascular diagnosis.",
		"Published first paper on primary angioplasty in India.",
		"Proctor for Rotational Atherectomy, Intracoronary Ultrasound, Intracoronary Doppler, Fractional Flow Reserve, Optical Coherence Tomography.",
		"Designed protocol for ICUS through coronary sinus.",
		"Mitral Valvuloplasty: >1000",
		"Published “Mitral valve dilator - a new design concept” - J. of Thoracic & Cardiovascular Surgery 1994.",
		"Pulmonary / Aortic Valvuloplasty, coarctation dilatation, Subvalvar Aortic Stenosis dilatation, Congenital Interventions: 200 approx",
		"Radial Artery procedures: >5000",
		"Carotid Artery Stenting: Renal Denervation for Hypertension",
		"Atrial Septal Defect Closure with Amplatzer Device: Training with Dr. Ziyad Hijazi (Chicago) at Muscat November 1999.",
		"Diagnostic Cardiac Catheterisations: > 30000",
		"Published New catheter designs for unusually wide ascending aortas - Catheterisation & Cardiovascular Diagnosis 1996.",
		"Published “Dancing Needle sign for obtaining access to femoral artery” - Catheterisation and Cardiovascular Diagnosis 1995.",
		"Cardiac Biopsy for Post-transplant patients & cardiomyopathies."
	],
	researchProjects: [
		"Dissertation for Doctorate (DM-cardiology) - Thrombolysis in unstable angina.",
		"STAT trial (Sion Thrombolysis Angioplasty Trial): Designed protocol and participated as investigator. L.T.M.G. Hospital, Sion, Mumbai. (First Primary Angioplasty Trial in India)",
		"Intracoronary ultrasound through coronary sinus: designed protocol, patient information - Royal Prince Alfred Hospital, Sydney, Australia.",
		"Designed protocols for “Fractional flow reserve using balloon catheter” & “Vascular reactivity and elastic recoil” - RPA Hospital, Sydney, Australia.",
		"Designed protocol for “LAST - LAD Angioplasty stent trial” - RPA Hospital, Sydney, Australia.",
		"Principal Investigator for various multicenter, multinational trials related to new medications (Completed – 23, Ongoing 3)."
	],
	firstInManTrials: ["Pronova – Sirolimus eluting stent", "Focus NP – Nanoparticle based DES"],
	phase4Trials: [
		"TUXEDO – Taxus Element V Xience Prime in Diabetics",
		"Promus element Registry",
		"E registry : Supralimus and Supralimus core stent",
		"SELL : Supralimus stent in Long Lesions",
		"OCT study of Supracore stent"
	],
	editorialPositions: [
		"Catheterization & Cardiovascular Interventions",
		"Indian Heart Journal",
		"Int J of Cardiology",
		"Heart & Mind",
		"Expert Review in Cardiology",
		"Minerva Cardiologica",
		"Journal of Indian College of Cardiology"
	]
};
//#endregion
//#region src/content/publications.ts
var publications = [
	{
		"n": 1,
		"text": "Abhyankar A, Abizaid A, Chamié D, Rathod M. Comparison of neointimal coverage between ultrathin biodegradable polymer‐coated sirolimus‐eluting stents and durable polymer‐coated everolimus‐eluting stents: 6 months optical coherence tomography follow‐up from the TAXCO study. Catheter Cardiovasc Interv. 2020. 10.1002/ccd.28833."
	},
	{
		"n": 2,
		"text": "Abhyankar A, Abizaid LC, Chamie D. Early vascular responses after ultrathin strut biodegradable polymer-coated sirolimus-eluting stent implantation: SiBi OCT study. EuroPCR 2019; 03-May, 2019; Paris.https://abstractbook.pcronline.com/export/pdf/id/130564 [Abstract]"
	},
	{
		"n": 3,
		"text": "Twelve-month comparative analysis of clinical outcomes using biodegradable polymer-coated everolimus-eluting stents versus durable polymer-coated everolimus-eluting stents in all-comers patients. Abhyankar A, Sandhu MS, Polavarapu RS. Indian Heart J. 2019, Available online 3 May 2019 (https://doi.org/10.1016/j.ihj.2019.04.013)."
	},
	{
		"n": 4,
		"text": "Evaluation of vascular response and healing after implantation of tetrilimus everolimus-eluting coronary stent by optical coherence tomography (EVER-OCT): 3- and 6-Month Serial Analysis. Kaul U, Abhaichand R, Abhyankar A, et al. J Am Coll Cardiol. Volume 73, Issue 15 Supplement, April 2019 (doi: 10.1016/j.jacc.2019.03.027). [Abstract]"
	},
	{
		"n": 5,
		"text": "Impact of diabetes, hypertension and smoking on magnitude of improvement in LVEF in patients with anterior wall ST elevation myocardial infarction (STEMI) treated with primary PCI. Rathod M, Patel G, Abhyankar A. Indian Heart J. Volume 70, Supplement 2, November 2018, Page S33 (https://doi.org/10.1016/j.ihj.2018.10.099)."
	},
	{
		"n": 6,
		"text": "Seven-year clinical outcomes in patients undergoing percutaneous coronary intervention with biodegradable polymer coated sirolimus-eluting stent: Results from a single-center real-world experience. Abhyankar A, Kaul U, Sinha SK. Published online 26 May 2018. Indian Heart J. 2018 Dec;70 Suppl 3:S280-S284 (doi: 10.1016/j.ihj.2018.05.014)."
	},
	{
		"n": 7,
		"text": "Interventional Cardiology Practices in India. Indian Stents: Gaps Are Narrowing. Abhyankar A, Kaul U. In: Deb PK. CSI Textbook of Cardiology: The Indian Perspective. JAYPEE BROTHERS Medical Publishers (P) Ltd., India. 2018. Chapter 37, Page no. 489-513."
	},
	{
		"n": 8,
		"text": "Comparison of neointimal coverage between ultrathin biodegradable polymer-coated sirolimus-eluting stents and durable polymer-coated everolimus-eluting stents: six-month OCT follow-up from the TAXCO study. Abhyankar A, Abizaid LC, Chamié D, Rathod M. EuroPCR 2018 programme, 22-25 May 2018, Paris (Euro18A-POS141) and published on 15 May 2018. (https://abstractbook.pcronline.com/export/pdf/id/100317) [Abstract]"
	},
	{
		"n": 9,
		"text": "Twelve-month comparative analysis of clinical outcomes using biodegradable polymer-coated everolimus-eluting stents vs. durable polymer-coated everolimus-eluting stents in all-comer patients. Abhyankar A, Sandhu MS, Polavarapu RS. EuroPCR 2018 programme, 22-25 May 2018, Paris (Euro18A-POS140) and published on 15 May 2018. (https://abstractbook.pcronline.com/export/pdf/id/100316) [Abstract]"
	},
	{
		"n": 10,
		"text": "Seven-year clinical outcomes in patients undergoing PCI with biodegradable polymer-coated sirolimus-eluting stent: results from a single-centre real-world experience. Abhyankar A, Kaul U, Sinha SK. EuroPCR 2018 programme, 22-25 May 2018, Paris (Euro18A-POS144) and published on 15 May 2018. (https://abstractbook.pcronline.com/export/pdf/id/100320) [Abstract]"
	},
	{
		"n": 11,
		"text": "Clinical Outcomes in 995 Unselected Real-world Patients Treated With an Ultra-thin Biodegradable Polymer-Coated Sirolimus-Eluting Stent: 12 Months Results from the FLEX-Registry. Lemos PA, Chandwani P, Saxena S, Ramachandran P, Abhyankar A, Campos CM, Marchini JF, Galon MZ, Verma P, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. BMJ Open. 2016 Feb 17;6(2):e010028. doi: 10.1136/bmjopen-2015-010028."
	},
	{
		"n": 12,
		"text": "Comparison of Clinical Outcomes Following Single versus Multivessel Percutaneous Coronary Intervention Using Biodegradable Polymer Coated Sirolimus-Eluting Stent in an All-comers Patient Population. Chandwani P, Verma P, Saxena S, Ramachandran PK, Abhyankar A, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. Cardiovasc Hematol Agents Med Chem. 2016;14(1):39-48"
	},
	{
		"n": 13,
		"text": "Clinical Outcomes in 995 Unselected Real-world Patients Treated With an Ultra-thin Biodegradable Polymer-Coated Sirolimus-Eluting Stent: 12 Months Results from the FLEX-Registry. Lemos PA, Chandwani P, Saxena S, Ramachandran P, Abhyankar A, Campos CM, Marchini JF, Galon MZ, Verma P, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. Catheter Cardiovasc Interv. 2016;87(S2):S131 (C-018). DOI 10.1002/ccd. [Abstract]"
	},
	{
		"n": 14,
		"text": "Biodegradable polymer-based, ultra-thin, sirolimus-eluting coronary stents have favorable outcomes in unselected 'real-world' patients with coronary artery lesions irrespective of implanted stent size: The Size-FLEX registry. Chandwani P, Saxena S, Ramachandran P, Abhyankar A, Verma P, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. Catheter Cardiovasc Interv. 2016;87(S2):S131 (C-019). DOI 10.1002/ccd. [Abstract]"
	},
	{
		"n": 15,
		"text": "Immediate and 1-Year Outcomes following Sirolimus-Eluting Stent Implantation in Elderly Patients: An Indian Experience. Sandhu MS, Jain S, Chandwani P, Saxena S, Parikh N, Abhyankar A, Verma P, Ramachandran P, Bhupali A, Prajapati J. Catheter Cardiovasc Interv. 2016;87(S2):S132 (C-020). DOI 10.1002/ccd. [Abstract]"
	},
	{
		"n": 16,
		"text": "A Propensity Matched Real-world Evaluation of Ultra-thin Biodegradable Polymer Coated Sirolimus-eluting Stents in Diabetic and Non-Diabetic Patients with Coronary Artery Disease – One-year Clinical Outcomes of the DiaFLEX Registry. Prajapati J, Jain S, Saxena S, Chandwani P, Ramachandran P, Abhyankar A, Verma P, Parikh N, Sandhu MS, Bhupali A. Catheter Cardiovasc Interv. 2016;87(S2):S134 (C-070). DOI 10.1002/ccd. [Abstract]"
	},
	{
		"n": 17,
		"text": "Clinical Outcomes in 995 Unselected Real-world Patients Treated With an Ultra-thin Biodegradable Polymer-Coated Sirolimus-Eluting Stent: 12 Months Results from the FLEX-Registry. Lemos PA, Chandwani P, Saxena S, Ramachandran P, Abhyankar A, Campos CM, Marchini JF, Galon MZ, Verma P, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. EuroIntervention. Abstracts EuroPCR 2016. May 2016. (Euro16A-OP0324) [Abstract]"
	},
	{
		"n": 18,
		"text": "Paclitaxel-Eluting versus Everolimus-Eluting Coronary Stents in Diabetes. Kaul U, Bangalore S, Seth A, Arambam P, Abhaychand RK, Patel TM, Banker D, Abhyankar A, Mullasari AS, Shah S, Jain R, Kumar PR, Bahuleyan CG; TUXEDO–India Investigators. N Engl J Med. 2015 Oct 29;373(18):1709-19."
	},
	{
		"n": 19,
		"text": "Real-world experience with ultra-thin biodegradable polymer coated sirolimus-eluting coronary stent: Six-month clinical outcomes of FLEX-Registry. A. Abhyankar , P. Chandwani, S. Saxena, P. Kumar, P. Verma, M.S. Sandhu, N. Parikh, A. Bhupali, S. Jain, J. Prajapati. European Heart Journal. Volume 36, Issue suppl 1, 1 August 2015 (Abstract P4713). [Abstract]"
	},
	{
		"n": 20,
		"text": "Real world use of ultra-thin sirolimus-eluting stent with biodegradable polymers. 9-month results from the FLEX-registry. Lemos PA, Chandwani P, Saxena S, Ramachandran P, Abhyankar A, Campos CM, Marchini JF, Galon MZ, Verma P, Sandhu MS, Parikh N, Bhupali A, Jain S, Prajapati J. J Am Coll Cardiol. 2015;66(15_S): doi:10.1016/j.jacc.2015.08.499 (Abstract No. TCT-483). [Abstract]"
	},
	{
		"n": 21,
		"text": "Clinical Outcomes of Biodegradable-Polymer Coated Sirolimus-Eluting Stent in Unselected Patients with Long Coronary Lesions: LONG-FLEX Registry. Prakash Chandwani, Puneet Verma, Sudheer Saxena, Atul Abhyankar, Manjinder Singh Sandhu, Nikhil Parikh, Jayesh Prajapati, Sharad Jain, Ashok N. Bhupali, Padma Kumar Ramachandran, Arohi Sarang, Ashok Thakkar. J Am Coll Cardiol. 2015;66(15_S):. doi:10.1016/j.jacc.2015.08.1041 (Abstract No. TCT-571). [Abstract]"
	},
	{
		"n": 22,
		"text": "Clinical performance of the cobalt-chromium biodegradable polymer coated sirolimus-eluting stent in an unselected real-world population. P. Chandwani, A. D. Abhyankar, J. S. Prajapati, S. C. Porwal, and A. S. Thakkar. Int J Clin Med, vol. 5, no., pp. 206-215, 2014."
	},
	{
		"n": 23,
		"text": "Clinical performance of the cobalt-chromium biodegradable polymer coated sirolimus-eluting stent in an unselected real-world population (S-CORE Registry). Sanjay Porwal, Prakash Chandwani, Atul Abhyankar, Jayesh Prajapati, Ashok Thakkar. Catheterization and Cardiovascular Interventions. Volume 83, Issue Supplement S1, pages S1–S247 (S180), 1 May 2014 (C-079). [Abstract]"
	},
	{
		"n": 24,
		"text": "Comparative conformability of two cobalt-chromium stents with different stents design and strut thickness. Abhyankar A., Chodvadiya P., Shah P., Virupil M., Thakkar A. EuroIntervention. EuroPCR Abstracts and Posters 2014. May 2014. (Euro14A-POS078). [Abstract]"
	},
	{
		"n": 25,
		"text": "A case of type variant Kounis syndrome with Samter-Beer triad. Prajapati JS, Virpariya KM, Thakkar AS, Abhyankar AD. World J Cardiol. 2013 Apr 26;5(4):112-4."
	},
	{
		"n": 26,
		"text": "Early vascular healing with biodegradable polymer coated sirolimus-eluting coronary stent implantation: assessed by optical coherence tomography results at 4-month follow-up. Abhyankar A, Prajapati J, Reddy S, Reddy S. Minerva Cardioangiol. 2013 Jun;61(3):313-22."
	},
	{
		"n": 27,
		"text": "Systemic exposure of sirolimus after coronary stent implantation in patients with de novo coronary lesions: Supralimus-Core® pharmacokinetic study. Thakkar AS, Abhyankar AD, Dani SI, Banker DN, Singh PI, Parmar SA, Mehta AA. Indian Heart J. 2012 May-Jun;64(3):273-9."
	},
	{
		"n": 28,
		"text": "In vivo assessment of stent recoil of biodegradable polymer-coated cobalt-chromium sirolimus-eluting coronary stent system. Abhyankar AD, Thakkar AS. Indian Heart J. 2012 Nov-Dec;64(6):541-6."
	},
	{
		"n": 29,
		"text": "Use of enoxaparin in emergency room for improving outcomes of primary percutaneous coronary interventions for acute myocardial infarction. Abhyankar AD, Pothiawala SE, Kazi GJ, Jha MJ, Petrolwala M. Indian Heart J; 2008 Jan-Feb;60(1):39-44."
	},
	{
		"n": 30,
		"text": "Multivessel stenting in patients with very low ejection fraction. Abhyankar AD, Riyami AA, Suleiman KJ, Shahrabani R, Riyami AM. American Journal of Cardiology: October 2000. [Abstract]"
	},
	{
		"n": 31,
		"text": "Post-infarction ventricular septal defect: percutaneous transvenous temporary closure using a Swan-Ganz catheter. Abhyankar AD, Jagtap PM. Catheter Cardiovasc Interv. 1999 Jun;47(2):208-10."
	},
	{
		"n": 32,
		"text": "Reconstructive angioplasty for diffuse disease. Abhyankar AD, Riyami AA, Shhrabani R, Suleiman KJ, Riyami AM. Indian Heart Journal Dec. 1999. [Abstract]"
	},
	{
		"n": 33,
		"text": "Direct stenting v/s conventional stenting: Early outcomes. Abhyankar AD, Riyami AA, Shahrabani R, Suleiman KJ, Riyami AM. Indian Heart Journal: Dec. 1999. [Abstract]"
	},
	{
		"n": 34,
		"text": "Delayed appearance of coronary artery perforation after stent implantation. Abhyankar AD, England D, Bernstein L, Harris PJ. Cathet Cardiovasc Diagn. 1998 Mar;43(3):311-2."
	},
	{
		"n": 35,
		"text": "Results of stent implantation in small coronary arteries [< 2.7 mm] with complex lesions. Abhyankar AD, Riyami AA, Jagtap PM, Riyami AM. American Journal of Cardiology. 1998. [Abstract]"
	},
	{
		"n": 36,
		"text": "Comparative Elastic Recoil of Palmaz-Schatz and BE stents. Abhyankar AD. Indian Heart Journal. December 1998. [Abstract]"
	},
	{
		"n": 37,
		"text": "Stent Implantation in presence of intracoronary thrombus without adjuvant use of Platelet IIb/IIIa receptor antagonist. Abhyankar AD, Jagtap PM, Shahrabani R, Riyami AA, Suleiman KJ, Riyami AM. Indian Heart Journal. December 1998. [Abstract]"
	},
	{
		"n": 38,
		"text": "Multivessel Stenting: Comparison of Single Vs Staged Approach. Abhyankar AD, Riyami AA, Jagtap PM, Riyami AM. Indian Heart Journal. December 1998. [Abstract]"
	},
	{
		"n": 39,
		"text": "Stent Implantations for Bifurcation Lesions. Abhyankar AD, Riyami AA. Indian Heart Journal. December 1998. [Abstract]"
	},
	{
		"n": 40,
		"text": "Intracoronary Doppler Velocimetry: A New Technique for Physiological Assessment of Coronary Circulation. Abhyankar AD, Bernstein L. Journal of the Association of Physicians of India / v.46 Oct.1998, pp.882-885."
	},
	{
		"n": 41,
		"text": "Stent implantation in severely angulated lesions: safety, efficacy, and morphological remodelling. Abhyankar AD, Luyue G, Bailey BP. Cathet Cardiovasc Diagn. 1997 Mar;40(3):261-4."
	},
	{
		"n": 42,
		"text": "Lack of evidence for improvement in internal mammary graft flow by occlusion of side branch. Abhyankar AD, Mitchell AS, Bernstein L. Cathet Cardiovasc Diagn. 1997 Nov;42(3):291-3."
	},
	{
		"n": 43,
		"text": "Spontaneous regression of post-percutaneous transluminal coronary angioplasty aneurysm. Abhyankar AD, Richmond DR, Bernstein L. Int J Cardiol. 1997 Aug 8;60(3):233-8."
	},
	{
		"n": 44,
		"text": "Warfarin During Pregnancy: Safety for embryopathy and Predisposition to Abortion. Jagtap PM, Abhyankar AD, Pawar NC, Riyami AM. Indian Heart Journal 1997; 49: 658. [Abstract]"
	},
	{
		"n": 45,
		"text": "Angioplasty through a Stent Side-door. Abhyankar A, Gai L, Bailey BP. Int J Cardiol. 1996 Jul 5;55(1):107-10."
	},
	{
		"n": 46,
		"text": "Stent Implantation in Angulated Lesions. Abhyankar AD, Bernstein L, Harris PJ, Bailey BP. Australia and New Zealand Medical Journal 1996. [Abstract]"
	},
	{
		"n": 47,
		"text": "Multiple Coronary-Pulmonary fistulae arising from all three coronary arteries. Abhyankar AD, Mok NS, Helprin G, Pressley L. Int J Cardiol. 1996 Dec 6;57(2):181-3."
	},
	{
		"n": 48,
		"text": "Intracoronary Drug Delivery Systems. Abhyankar AD, Hutt J, Bernstein L. Intercontinental Cardiology 1996."
	},
	{
		"n": 49,
		"text": "Modified Catheter Shapes for unusually wide aortas. Abhyankar AD. Cathet Cardiovasc Diagn. 1996 Nov;39(3):327."
	},
	{
		"n": 50,
		"text": "Reintervention and clinical events after saphenous vein graft angioplasty- a comparison of optimal PTCA v stenting. Abhyankar A, Bernstein L, Harris PJ, Bailey BP. Circulation October 1996. [Abstract]"
	},
	{
		"n": 51,
		"text": "Angioplasty and stenting with adjuvant Abciximab in presence of angiographically detected thrombus. Abhyankar AD, Bernstein L, Harris PJ. Asia Pacific Heart Journal 1996; 5 (2): 103-104."
	},
	{
		"n": 52,
		"text": "Stents for Aorto-Ostial Lesions. Abhyankar AD, Bernstein L. Asia Pacific Interrventional Cardiology - Text Book. December 1996."
	},
	{
		"n": 53,
		"text": "ReoPro for angiographically detected thrombus in relation to PTCA. Abhyankar AD, Bernstein L. Asia Pacific Interventional Cardiology Text Book. December 1996."
	},
	{
		"n": 54,
		"text": "New convenient and fast method of hand mounting Palmaz-Schatz coronary stent. Abhyankar AD, Bailey BP, Harris PJ, Bernstein L. Cathet Cardiovasc Diagn. 1995 Jun;35(2):159-60."
	},
	{
		"n": 55,
		"text": "Transventricular mitral valve dilator: an improved design concept. Kaul A, Bhattacharya S, Borker S, Patwardhan AM, Chaukar AP, Abhyankar AD. J Thorac Cardiovasc Surg. 1995 Sep;110(3):856-9."
	},
	{
		"n": 56,
		"text": "\"Dancing needle sign\" for obtaining access to the femoral artery. Abhyankar AD. Cathet Cardiovasc Diagn. 1995 Aug;35(4):378."
	},
	{
		"n": 57,
		"text": "Outcome of stable coronary dissections following PTCA. Gai L, Abhyankar AD, Bailey BP, Bernstein L, Harris PJ. Australia and New Zealand Medical Journal. 1995 [Abstract]"
	},
	{
		"n": 58,
		"text": "Rotational atherectomy of calcified ostial saphenous vein graft lesion with long term follow-up: a case report. Abhyankar AD, Vaidya KA, Bernstein L. Int J Cardiol. 1995 Nov 10;52(1):11-2."
	},
	{
		"n": 59,
		"text": "Outcome of stable coronary dissections. Gai L, Abhyankar AD, Bernstein L, Harris PJ. Chinese Journal of Cardiology 1995."
	},
	{
		"n": 60,
		"text": "Sion thrombolysis trial-randomised trial of intravenous thrombolysis & primary percutaneous transluminal coronary angioplasty for acute myocardial infarction [AMI]-feasibility phase data of angioplasty limb. Mehta AB, Abhyankar AD. J Assoc Physicians India. 1994 Jan;42(1):43-4."
	},
	{
		"n": 61,
		"text": "Recovery positive exercise stress test: an indication for coronary artery disease. Abhyankar AD, Agrawal AG, Mehta AB. J Assoc Physicians India. 1994 Sep;42(9):700-2."
	},
	{
		"n": 62,
		"text": "Percutaneous transluminal coronary angioplasty (PTCA) in unstable angina. Parikh JA, Abhyankar AD, Kane GR, Chonkar NS, Patwardhan AM, Gandhi MJ. J Assoc Physicians India. 1993 Jan;41(1):9-10."
	},
	{
		"n": 63,
		"text": "Emergency and elective percutaneous balloon mitral valvoplasty by Inoue's technique during pregnancy. Kaneria VK, Kane GR, Abhyankar AD, Patel YS, Pahlajani DB, Mehta AB. Indian Heart Journal 1993: 45;349. [Abstract]"
	},
	{
		"n": 64,
		"text": "Predictors of mortality after angioplasty in acute myocardial infarction. Kane GR, Kaneria VK, Rathod AB, Abhyankar AD, Pahlajani DB, Mehta AB. Indian Heart Journal 1993: 45 ; 422. [Abstract]"
	},
	{
		"n": 65,
		"text": "A preliminary report of a randomised trial of intravenous streptokinase and direct angioplasty in acute myocardial infarction. Mehta AB, Kaneria VK, Kane GR, Abhyankar AD, Pahlajani DB. Indian Heart Journal 1993: 45; 313. [Abstract]"
	},
	{
		"n": 66,
		"text": "Acute accidental exposure to chlorine fumes--a study of 82 cases. Moulick ND, Banavali S, Abhyankar AD, Borkar S, Aiyengar J, Kapadia NM, Khokhani RC. Indian J Chest Dis Allied Sci. 1992 Apr-Jun;34(2):85-9."
	},
	{
		"n": 67,
		"text": "Balloon mitral valvuloplasty in medically critically ill patients. Abhyankar AD, Damle AV, Agarwal A, Kaneria VK, Pahlajani DB, Mehta AB Indian Heart Journal 1992 : 44 ; 324. [Abstract]"
	},
	{
		"n": 68,
		"text": "Our experience with first fifty patient of percutaneous balloon mitral valvuloplasty by Inoue technique. Kaneria VK, Abhyankar AD, Kane GR, Damle AV, Pahlajani DB, Mehta AB. Indian Heart Journal 1992: 44; 324. [Abstract]"
	},
	{
		"n": 69,
		"text": "Coronary angiographic profile of patients with computerised treadmill positive only during recovery. Abhyankar AD, Agarwal A, Damle AV, Kaneria VK, Hiregouder NS, Pahlajani DB, Mehta AB. Indian Heart Journal 1992: 44; 273. [Abstract]"
	},
	{
		"n": 70,
		"text": "Atrial pacing stress echocardiography in assessment of coronary artery disease. Agarwal A, Abhyankar AD, Damle AV, Mehta AB, Pahlajani DB. Indian Heart Journal 1992:44; 302. [Abstract]"
	},
	{
		"n": 71,
		"text": "Hemodynamic response to intravenous disopyramide and verapamil in patients with hypertrophic cardiomyopathy. Abhyankar AD, Petkar SB, Punamiya KK, Kaneria VK, Pahlajani DB, Mehta AB. Indian Heart Journal 1992: 44; 291. [Abstract]"
	},
	{
		"n": 72,
		"text": "Comparison of percutaneous balloon mitral valvoplasty using Inoue balloon with surgical closed mitral commissurotomy using Tubb's dilator with surgical closed mitral commissurotomy using Inoue balloon- preliminary report. Abhyankar AD, Kaul A , Pahalajani DB, Chaukar A, Mehta AB. Indian Heart Journal 1992 :44 ;260. [Abstract]"
	},
	{
		"n": 73,
		"text": "Late potentials - current concepts. Verma VK, Abhyankar AD, Chonkar NS, Parikh JA. Indian Journal of Electrocardiology. Jan.1991; Vol 2:No.1, Pg 13."
	},
	{
		"n": 74,
		"text": "Wide QRS on exercise stress testing. Agarwal A, Parikh JA, Abhyankar AD, Vyas P, Athanikar N. Indian Journal of Electrocardiology. Jan.1991; Vol.2:No.1, Pg 19."
	},
	{
		"n": 75,
		"text": "Diagnosis of AMI in presence of conduction disturbances. Chonkar NS, Verma VK, Punamiya KK, Agarwal AG, Abhyankar AD. Indian journal of Electrocardiology. Jan 1991; vol.2:No.1, Pg 10."
	},
	{
		"n": 76,
		"text": "Angiographic Evaluation of Saphenous Vein Grafts. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 77,
		"text": "Study of native circulation in patients following CABG. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 78,
		"text": "Prognostic value of Programmed stimulation in patients following AMI. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 79,
		"text": "Late potentials : Utility in arrhythmia prediction in post MI patients. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 80,
		"text": "Balloon mitral valvuloplasty in patients with previous closed and open commissurotomy. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 81,
		"text": "Electrophysiological study of patients with concealed bypass tract presenting with PSVT. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 82,
		"text": "Study of electrophysiological properties of ventricle during programmed stimulation. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 83,
		"text": "Semiquantitative assessment of Aortic regurgitation by colour doppler - comparison with angiocardiography. Abhyankar AD. Indian Heart Journal 1991. [Abstract]"
	},
	{
		"n": 84,
		"text": "Haemodynamic monitoring - When and what next? Abhyankar AD, Gandhi MJ. Postgraduate Clinics of APICON : 1990, Pg 22."
	},
	{
		"n": 85,
		"text": "Histopathological Characteristics in various cardiomyopathies by endomyocardial biopsy. Deshpande MA, Abhyankar AD, Chonkar NS, Parikh JA, Kane GR, Pandit SP, Gandhi MJ. Indian Heart Journal. 1990; 42, Pg 237 [Abstract]"
	},
	{
		"n": 86,
		"text": "PTCA in Cardiogenic Shock . Abhyankar AD, Parikh JA, Kane GR, Agarwal A, Patwardhan AM, Mehta AB, Gandhi MJ. Indian Heart Journal. 1990 : 42, Pg 267. [Abstract]"
	},
	{
		"n": 87,
		"text": "Acute Ventricular Septal Rupture. Verma VK, Abhyankar AD, Parikh JA, Kane GR, Gandhi MJ. Indian Heart Journal. 1990 : 42,Pg 301 [Abstract]"
	},
	{
		"n": 88,
		"text": "Type A lesion PTCA in our patient population. Parikh JA, Kane GR, Abhyankar AD, Kaneria VK, Verma VK, Chaukar AP, Gandhi MJ. Indian Heart Journal. 1990 :42,Pg 302 [Abstract]"
	},
	{
		"n": 89,
		"text": "Thrombolysis as an adjuvant to PTCA. Kane GR, Parikh JA, Abhyankar AD, Kaneria VK, Vyas P, Kaul AU, Gandhi MJ. Indian Heart Journal. 1990 :42, Pg 302 [Abstract ]"
	},
	{
		"n": 90,
		"text": "Torsade de pointes-an ECG discussion. Abhyankar AD, Parikh JA, Gandhi MJ. J Assoc Physicians India. 1989 Oct;37(10):653-4."
	},
	{
		"n": 91,
		"text": "Culprit vessel angioplasty in Unstable Angina. Parikh JA, Kane GR, Abhyankar AD, Gandhi MJ. Indian Heart Journal. 1989: 41, 362 [Abstract]."
	},
	{
		"n": 92,
		"text": "Thrombolytic therapy in unstable angina. Abhyankar AD, Kane GR, Parikh JA, Mehta AB, Gandhi MJ. Indian Heart journal. 1989, 41, Pg 363. [Abstract]"
	},
	{
		"n": 93,
		"text": "Coronary angiographic findings soon after non-Q wave MI. Parikh JA, Sharma P, Abhyankar AD, Gandhi MJ. Indian Heart Journal. 1989: 41,280-283."
	},
	{
		"n": 94,
		"text": "Six month follow-up of fourteen victims with short-term exposure to chlorine gas. Abhyankar AD, Bhambure N, Kamath NN, Pajankar SP, Nabar ST, Shrenivas A, Shah AC, Deshmukh SN. J Soc Occup Med. 1989 Winter;39(4):131-2."
	},
	{
		"n": 95,
		"text": "Vignettes in Electrocardiology - Bradycardia dependent block. Abhyankar AD, Chonkar NS, Gandhi MJ. Indian J. of Electrocardiology. 1988, Vol 1, Pg 31-32."
	},
	{
		"n": 96,
		"text": "Re-entry. Pahlajani DB, Parikh JA, Abhyankar AD. Indian J. of Electrocardiology. 1988 , Vol.1 Pg 20-23."
	},
	{
		"n": 97,
		"text": "Correlation of mitral valve area obtained by 2D Echo with intraoperative area. Abhyankar AD, Desai J, Parikh JA, Mehta AB, Pahlajani DB, Gandhi MJ. Indian Heart Journal. 1988, 40 : Pg 377. [Abstract ]"
	},
	{
		"n": 98,
		"text": "Ventriculoatrial shunt - an unusual cause of pulmonary hypertension. Kane GR, Parikh JA, Abhyankar AD, Gandhi MJ. Indian Heart Journal. 1988, 302 [ Abstract]"
	},
	{
		"n": 99,
		"text": "Electrolytes and the Heart. Abhyankar AD, Parikh JA. Indian Practitioner. November 1987, 40: 907-914."
	},
	{
		"n": 100,
		"text": "Rational therapy of Angina. Parikh JA, Abhyankar AD. Indian Practitioner. December 1987, 40: 1005-1012."
	},
	{
		"n": 101,
		"text": "Respiratory problems in Geriatrics. Abhyankar AD, Savargaonkar RS. Indian Practitioner. July 1986, Pg 619."
	},
	{
		"n": 102,
		"text": "Pulmonary functions and bronchoscopic evaluation of 62 patients of chlorine gas poisoning. Abhyankar AD. Journal of Asso. of Physicians of India; January1986. [Abstract]"
	}
];
//#endregion
//#region src/routes/Career.tsx
function Career() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/career-highlights") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "03",
			eyebrow: "Experience & Credentials",
			title: "Career",
			accent: "Highlights"
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Overview",
			title: "Career highlights",
			children: /* @__PURE__ */ jsx(NumberedList, { items: careerHighlights })
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Curriculum vitae",
			title: "Personal & professional details",
			children: /* @__PURE__ */ jsx(DefinitionList, { rows: cv.details })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Academic Achievements",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.academicAchievements })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Best Paper Awards",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.bestPaperAwards })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Other Awards",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.otherAwards })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Scholarships / Fellowships",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.scholarships })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Educational Detail",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.educationalDetail })
		}),
		/* @__PURE__ */ jsxs(Section, {
			title: "Residency Training",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-full overflow-x-auto",
				children: /* @__PURE__ */ jsxs("table", {
					"aria-label": "Residency training",
					className: "w-full min-w-[560px] border-collapse text-left text-sm",
					children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
						className: "label border-b border-line text-mute",
						children: [
							/* @__PURE__ */ jsx("th", {
								className: "py-3 pr-4",
								children: "Position"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "py-3 pr-4",
								children: "Institution"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "py-3",
								children: "Dates"
							})
						]
					}) }), /* @__PURE__ */ jsx("tbody", { children: cv.residency.map((r, i) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-line/60",
						children: [
							/* @__PURE__ */ jsxs("td", {
								className: "py-3 pr-4",
								children: [r.role, r.teaching && /* @__PURE__ */ jsx("span", {
									className: "text-indigo",
									children: " *"
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "py-3 pr-4 text-mute",
								children: r.institution
							}),
							/* @__PURE__ */ jsx("td", {
								className: "py-3 text-mute",
								children: r.dates
							})
						]
					}, i)) })]
				})
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-xs text-mute",
				children: "* Teaching posts"
			})]
		}),
		cv.experience.map((x) => /* @__PURE__ */ jsx(Section, {
			eyebrow: x.period,
			title: x.heading,
			children: x.blocks.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "space-y-4",
				children: x.blocks.map((b, i) => /* @__PURE__ */ jsxs("p", {
					className: "font-serif text-[15px] leading-relaxed",
					children: [b.label && /* @__PURE__ */ jsx("span", {
						className: "label mr-2 text-indigo",
						children: b.label
					}), b.text]
				}, i))
			})
		}, x.heading)),
		/* @__PURE__ */ jsx(Section, {
			title: "Positions Held",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.positionsHeld })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Fellowships",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.fellowships })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Memberships",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.memberships })
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Extracurricular Activities and Organisational Experience",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.extracurricular })
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Scientific Publications",
			title: `${publications.length} papers, abstracts & chapters`,
			children: /* @__PURE__ */ jsxs("p", {
				className: "font-serif text-[15px] leading-relaxed text-ink",
				children: [
					"The complete list of ",
					publications.length,
					" peer-reviewed publications, abstracts and book chapters (1986–2020) is on the",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/scientific-publications",
						className: "text-indigo hover:underline",
						children: "Scientific Publications"
					}),
					" ",
					"page."
				]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Interventional Experience, Special Skills and Contributions",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.interventionalExperience })
		}),
		/* @__PURE__ */ jsxs(Section, {
			title: "Research Projects and Experience in Clinical Investigations",
			children: [
				/* @__PURE__ */ jsx(NumberedList, { items: cv.researchProjects }),
				/* @__PURE__ */ jsx("h3", {
					className: "label mt-8 text-indigo",
					children: "Principal Investigator for First-in-Man Stent Trials"
				}),
				/* @__PURE__ */ jsx(NumberedList, { items: cv.firstInManTrials }),
				/* @__PURE__ */ jsx("h3", {
					className: "label mt-8 text-indigo",
					children: "Principal Investigator for Phase-4 Trials and Stent Registries"
				}),
				/* @__PURE__ */ jsx(NumberedList, { items: cv.phase4Trials })
			]
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Research leadership",
			title: "Multicentre National & Global Trials",
			children: /* @__PURE__ */ jsx(TrialsTable, {})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "Editorial Consultant / Reviewer Positions",
			children: /* @__PURE__ */ jsx(NumberedList, { items: cv.editorialPositions })
		})
	] });
}
//#endregion
//#region src/routes/Publications.tsx
function Publications() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/scientific-publications") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "04",
			eyebrow: "Scientific Work",
			title: "Evidence that moves",
			accent: "cardiac care forward."
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: `${publications.length} peer-reviewed papers, abstracts and chapters from 1986–2020`,
			children: /* @__PURE__ */ jsx("ol", {
				className: "space-y-4",
				children: publications.map((p) => /* @__PURE__ */ jsxs("li", {
					className: "grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line pt-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display text-indigo",
						children: String(p.n).padStart(2, "0")
					}), /* @__PURE__ */ jsx("p", {
						className: "min-w-0 break-words font-serif text-[15px] leading-relaxed text-ink",
						children: p.text
					})]
				}, p.n))
			})
		})
	] });
}
//#endregion
//#region src/components/Gallery.tsx
function Gallery({ images, altPrefix }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: images.map((src, i) => /* @__PURE__ */ jsx("figure", {
			className: "border border-line bg-paper",
			children: /* @__PURE__ */ jsx("img", {
				src: asset(src),
				alt: `${altPrefix} ${i + 1}`,
				loading: "lazy",
				className: "aspect-[4/3] w-full object-contain"
			})
		}, src))
	});
}
//#endregion
//#region src/content/facilities.ts
var facilities = {
	description: "Spacious, elegant and efficient clinic at a convenient central location.",
	address: "201 Milestone Leone, Athwagate Circle, Surat 395001, Gujarat, India",
	timing: "Open Monday to Saturday, 10:00 AM–12:00 Noon and 6:00 PM–9:00 PM.",
	apptContacts: [
		"+91 90992 31122",
		"+91 261 2472211",
		"+91 98241 45738"
	],
	webAppointment: "atulda@hotmail.com",
	mapQuery: "Heart First Cardiac And Vascular Centre Surat",
	facilityList: [
		"Cardiology consultation / angio CD review",
		"Electrocardiogram (ECG)",
		"Treadmill exercise test",
		"2D echo & colour Doppler",
		"Complete cardiac check-up",
		"On-site pathology collection",
		"On-site pharmacy"
	],
	images: ["/original-assets/Picture4.webp", "/original-assets/Picture5.webp"]
};
//#endregion
//#region src/routes/Facilities.tsx
function Facilities() {
	const clinicMap = mapUrl(CLINIC_MAP_QUERY);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/facilities") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "05",
			eyebrow: "HeartFirst Surat",
			title: "Clinic",
			accent: "Facilities"
		}),
		/* @__PURE__ */ jsxs(Section, {
			eyebrow: "HeartFirst Cardiac Care",
			title: facilities.description,
			children: [
				/* @__PURE__ */ jsx(ExternalLink, {
					href: clinicMap,
					className: "font-serif text-[15px] text-ink underline decoration-line underline-offset-4 hover:decoration-indigo",
					children: facilities.address
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 font-serif text-[15px] text-mute",
					children: facilities.timing
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm",
					children: [
						facilities.apptContacts.map((p) => /* @__PURE__ */ jsx("a", {
							href: `tel:${p.replace(/[^\d+]/g, "")}`,
							className: "text-indigo hover:underline",
							children: p
						}, p)),
						/* @__PURE__ */ jsx("a", {
							href: `mailto:${facilities.webAppointment}`,
							className: "text-indigo hover:underline",
							children: facilities.webAppointment
						}),
						/* @__PURE__ */ jsx(ExternalLink, {
							href: clinicMap,
							className: "text-indigo hover:underline",
							children: "Open clinic location →"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "On site",
			title: "Clinic Facilities",
			children: /* @__PURE__ */ jsx("ul", {
				className: "grid border-l border-t border-line sm:grid-cols-2",
				children: facilities.facilityList.map((f, i) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-baseline gap-3 border-b border-r border-line p-4 text-[15px]",
					children: [/* @__PURE__ */ jsx("span", {
						className: "label text-mute/70",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ jsx("span", {
						className: "min-w-0 break-words",
						children: f
					})]
				}, f))
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			title: "The clinic",
			children: /* @__PURE__ */ jsx(Gallery, {
				images: facilities.images,
				altPrefix: "HeartFirst clinic"
			})
		})
	] });
}
//#endregion
//#region src/content/services.ts
var services = {
	attachments: [
		"Director Interventional Cardiology, Mahavir Heart Institute, Ring Road, Athwagate, Surat",
		"Senior Visiting Consultant, Tristar Hospital, Opp T & TV School, Nanpura",
		"Senior Visiting Consultant, Sunshine Global Hospital, Dumas Road",
		"Senior Visiting Consultant, Shalby Hospital",
		"Senior Visiting Consultant, United Green Hospital"
	],
	procedureSlides: Array.from({ length: 8 }, (_, i) => `/original-assets/slide${i + 1}.webp`)
};
//#endregion
//#region src/routes/Services.tsx
function Services() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/services") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "06",
			eyebrow: "Hospitals & Procedures",
			title: "Hospital",
			accent: "Attachments"
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Attachments",
			title: "Where Dr. Abhyankar practises",
			children: /* @__PURE__ */ jsx(NumberedList, { items: services.attachments })
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Cath lab",
			title: "Procedures Performed",
			children: /* @__PURE__ */ jsx(Gallery, {
				images: services.procedureSlides,
				altPrefix: "Procedure"
			})
		})
	] });
}
//#endregion
//#region src/content/research.ts
var dissertations = [
	{
		name: "Dr. Mihir Rathod",
		photo: "/original-assets/Pic1.webp",
		topic: "A study of left ventricular remodeling by 2D echocardiography in anterior wall ST elevation myocardial infarction following primary percutaneous transluminal coronary angioplasty."
	},
	{
		name: "Dr. Gaurang Patel",
		photo: "/original-assets/Pic2.webp",
		topic: "Impact of baseline WBC counts and haemoglobin on in-hospital and medium-term outcome in acute myocardial infarction patients treated with primary PCI."
	},
	{
		name: "Dr. Sunny Patel",
		photo: "/original-assets/Pic3.webp",
		topic: "Prognostic significance of heart rate, blood pressure and blood sugar level in patients undergoing primary angioplasty in myocardial infarction.",
		ongoing: true
	}
];
var teachingGroups = [
	{
		title: "Cath Lab Workshops",
		items: [
			"Preceptorship in Advanced Cardiac Technology (PACT)",
			"Skill Advancement for Cathlab Technicians (SECT)",
			"CTO Workshops",
			"Live Case Demonstrations"
		]
	},
	{
		title: "Post-graduate Teaching Programme",
		items: [
			"Interactive ECG Sessions",
			"Focused Reviews",
			"Journal Club",
			"Case Presentation"
		]
	},
	{
		title: "CME Videos",
		items: ["CME videos for physicians and family practitioners"]
	}
];
//#endregion
//#region src/routes/Research.tsx
function Research() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/research") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "07",
			eyebrow: "Academic Work",
			title: "Clinical Research",
			accent: "& Education"
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "01",
			title: "Clinical Research",
			children: /* @__PURE__ */ jsxs("p", {
				className: "font-serif text-[15px] leading-relaxed text-ink",
				children: [
					"Principal Investigator for multicentre national and global clinical trials, including first-in-man and Phase-4 studies. See the",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/career-highlights",
						className: "text-indigo hover:underline",
						children: "full research record on the Career Highlights page"
					}),
					"."
				]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "02",
			title: "Multicentre National & Global Trials",
			children: /* @__PURE__ */ jsx(TrialsTable, {})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "03",
			title: "Original Research",
			children: /* @__PURE__ */ jsxs("p", {
				className: "font-serif text-[15px] leading-relaxed text-ink",
				children: [
					"More than 100 peer-reviewed papers, abstracts and book chapters — see",
					" ",
					/* @__PURE__ */ jsx(Link, {
						to: "/scientific-publications",
						className: "text-indigo hover:underline",
						children: "Scientific Publications"
					}),
					"."
				]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "04",
			title: "Academic Activities",
			children: /* @__PURE__ */ jsx("p", {
				className: "font-serif text-[15px] leading-relaxed text-ink",
				children: "Invited faculty at more than 50 national and international conferences and workshops; Course Director for six clinical conferences; Superspecialty (Cardiology) teacher for the Diplomate of National Board."
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "05",
			title: "Student Dissertations",
			children: /* @__PURE__ */ jsx("ul", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: dissertations.map((d) => /* @__PURE__ */ jsxs("li", {
					className: "border border-line",
					children: [/* @__PURE__ */ jsx("img", {
						src: asset(d.photo),
						alt: d.name,
						loading: "lazy",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-lg leading-tight",
								children: d.name
							}),
							d.ongoing && /* @__PURE__ */ jsx("p", {
								className: "label mt-1 text-indigo",
								children: "Ongoing"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 font-serif text-[14px] leading-relaxed text-mute",
								children: d.topic
							})
						]
					})]
				}, d.name))
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "06",
			title: "Teaching Programs & Workshops",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-8 sm:grid-cols-3",
				children: teachingGroups.map((g) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "label text-indigo",
					children: g.title
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-3 space-y-2 font-serif text-[15px] leading-relaxed text-ink",
					children: g.items.map((it) => /* @__PURE__ */ jsx("li", {
						className: "border-t border-line pt-2",
						children: it
					}, it))
				})] }, g.title))
			})
		})
	] });
}
//#endregion
//#region src/routes/ReachUs.tsx
var clinic = [
	"+91-9099231122",
	"+91-261-2472211",
	"+91-9824145738"
];
var hospital = ["+91-261-2290000", "+91-261-2290003"];
function Numbers({ items }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "mt-2 space-y-1",
		children: items.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: `tel:${p.replace(/[^\d+]/g, "")}`,
			className: "text-indigo hover:underline",
			children: p
		}) }, p))
	});
}
function ReachUs() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Seo, { ...metaFor("/reach-us") }),
		/* @__PURE__ */ jsx(Masthead, {
			n: "08",
			eyebrow: "Appointments & Emergency",
			title: "Reach",
			accent: "HeartFirst"
		}),
		/* @__PURE__ */ jsxs(Section, {
			eyebrow: "Emergency",
			title: "What to do in an Emergency Situation?",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "font-serif text-[15px] leading-relaxed text-ink",
				children: [
					"You can call",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "tel:9824145738",
						className: "text-indigo",
						children: "9824145738"
					}),
					" ",
					"/",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "tel:9825145738",
						className: "text-indigo",
						children: "9825145738"
					}),
					" ",
					"at any time of day or night for a genuine emergency."
				]
			}), /* @__PURE__ */ jsxs("p", {
				className: "mt-3 font-serif text-[15px] leading-relaxed text-ink",
				children: [
					"Call 108 or reach in your vehicle at the earliest to the Emergency Department of",
					" ",
					/* @__PURE__ */ jsx(ExternalLink, {
						href: mapUrl("Mahavir Heart Institute, Ring Road, Athwagate, Surat"),
						className: "text-indigo underline underline-offset-2",
						children: "Mahavir Heart Institute, Ring Road, Athwagate, Surat"
					}),
					"."
				]
			})]
		}),
		/* @__PURE__ */ jsx(Section, {
			eyebrow: "Out Patient Appointments",
			title: "Contact for appointment",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "label text-indigo",
					children: "At Clinic"
				}), /* @__PURE__ */ jsx(Numbers, { items: clinic })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "label text-indigo",
					children: "At Mahavir Heart Institute"
				}), /* @__PURE__ */ jsx(Numbers, { items: hospital })] })]
			})
		})
	] });
}
//#endregion
//#region src/routes.tsx
var routeList = [
	{
		path: "/",
		element: /* @__PURE__ */ jsx(Home, {})
	},
	{
		path: "/about",
		element: /* @__PURE__ */ jsx(About, {})
	},
	{
		path: "/career-highlights",
		element: /* @__PURE__ */ jsx(Career, {})
	},
	{
		path: "/scientific-publications",
		element: /* @__PURE__ */ jsx(Publications, {})
	},
	{
		path: "/facilities",
		element: /* @__PURE__ */ jsx(Facilities, {})
	},
	{
		path: "/services",
		element: /* @__PURE__ */ jsx(Services, {})
	},
	{
		path: "/research",
		element: /* @__PURE__ */ jsx(Research, {})
	},
	{
		path: "/reach-us",
		element: /* @__PURE__ */ jsx(ReachUs, {})
	}
];
var redirectMap = {
	"/index.html": "/",
	"/home.html": "/",
	"/about.html": "/about",
	"/career-Hightlight.html": "/career-highlights",
	"/career-highlight.html": "/career-highlights",
	"/experience.html": "/career-highlights",
	"/trials.html": "/career-highlights",
	"/scientific-publications.html": "/scientific-publications",
	"/facilities.html": "/facilities",
	"/services.html": "/services",
	"/research.html": "/research",
	"/teachings-workshops.html": "/research",
	"/students-dissertations.html": "/research",
	"/reach-us.html": "/reach-us"
};
var legacyRedirectMap = redirectMap;
var LegacyRedirects = Object.entries(redirectMap).map(([from, to]) => /* @__PURE__ */ jsx(Route, {
	path: from,
	element: /* @__PURE__ */ jsx(Navigate, {
		to,
		replace: true
	})
}, from));
var prerenderPaths = routeList.map((r) => r.path);
//#endregion
//#region src/App.tsx
function App() {
	return /* @__PURE__ */ jsxs("div", {
		className: "site-shell min-h-screen overflow-x-clip lg:pl-[220px]",
		children: [
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsx(Rail, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-screen min-w-0 flex-col",
				children: [
					/* @__PURE__ */ jsx("main", {
						className: "min-w-0 flex-1 pt-14 lg:pt-0",
						children: /* @__PURE__ */ jsxs(Routes, { children: [
							routeList.map((r) => /* @__PURE__ */ jsx(Route, {
								path: r.path,
								element: r.element
							}, r.path)),
							LegacyRedirects,
							/* @__PURE__ */ jsx(Route, {
								path: "*",
								element: /* @__PURE__ */ jsx(NotFound, {})
							})
						] })
					}),
					/* @__PURE__ */ jsx(ContactBar, {}),
					/* @__PURE__ */ jsx(Footer, {})
				]
			})
		]
	});
}
//#endregion
//#region src/entry-server.tsx
var basename = "/heartfirstsurat.com/".replace(/\/$/, "");
async function render(url) {
	const sink = { tags: [] };
	const location = basename && !url.startsWith(basename + "/") ? basename + url : url;
	return {
		html: renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(SeoProvider, {
			sink,
			children: /* @__PURE__ */ jsx(StaticRouter, {
				basename: basename || void 0,
				location,
				children: /* @__PURE__ */ jsx(App, {})
			})
		}) })),
		head: sink.tags.join("\n    ")
	};
}
//#endregion
export { legacyRedirectMap, prerenderPaths, render, routeList };
