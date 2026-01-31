/**
 * Projects: list + detail per slug.
 * All project media (images, video URLs) and copy live here.
 * Add/remove projects or edit fields in one place.
 */

import type { Project, ProjectDetail } from "@/types";

/** Base project list (cards on homepage). Each must have a unique slug. */
export const PROJECTS_LIST: Project[] = [
	{
		id: "p1",
		title: "Polyglot.uz",
		category: "Web",
		slug: "polyglot-uz",
		image: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=1200&auto=format&fit=crop",
		description: "Corporate website for a language school in Uzbekistan.",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p2",
		title: "Parisahome.com",
		category: "Web",
		slug: "parisahome-co",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a textile manufacturer specializing in premium cotton towels and terry products.",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p3",
		title: "Royalpass.com",
		category: "Web",
		slug: "royalpass-com",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a car leasing and automotive services company offering premium vehicle leasing solutions with competitive terms, transparent pricing, and a wide selection of luxury and everyday cars.",
		tags: ["Next.js", "Node.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p4",
		title: "Kohinur-plaza.com",
		category: "Web",
		slug: "kohinur-plaza-com",
		image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a 4-star hotel and spa in Samarkand offering premium accommodation, wellness and leisure services, modern amenities, and versatile facilities for both travelers and business guests. ",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p5",
		title: "Puremilky.uz",
		category: "Web",
		slug: "puremilky-uz",
		image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a dairy products manufacturer producing a range of natural milk-based foods such as kefir, yogurt, sour cream and cottage cheese from its own farm-sourced milk with high quality control and modern production processes.",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p6",
		title: "Tespack.uz",
		category: "Web",
		slug: "tespack-uz",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a packaging manufacturer specializing in high-quality PET bottles, preforms, caps and custom plastic packaging solutions for various industries, combining modern production technologies with sustainable and reliable products. ",
		tags: ["Next.js", "WordPress", "Tailwind", "TypeScript"],
	},
	{
		id: "p7",
		title: "Wokin.uz",
		category: "CRM",
		slug: "wokin-uz",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Web platform (CRM with mobile app) for Wokin — a comprehensive business management system designed for agents, warehouses, and accounting, offering advanced features for inventory, financial calculations, income analytics, and operational workflow automation.",
		tags: ["React.js", "Node.js", "Flutter", "TypeScript"],
	},
	{
		id: "p8",
		title: "AsiaTaren.com",
		category: "Web",
		slug: "asia-taren-com",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a supplier of poultry farming and industrial equipment providing systems for ventilation, heating, cooling and agricultural machinery to support modern livestock and farm operations.",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p9",
		title: "EditoryPress.uz",
		category: "Web",
		slug: "editorypress-com",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Online academic publishing platform for Editory Press — a research publishing system with manuscript submission, peer-reviewed journals, and tools supporting global scholarly communication and publication workflows. ",
		tags: ["Next.js", "Node.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p10",
		title: "Okeytour.uz",
		category: "Web",
		slug: "okeytour-com",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a travel agency offering a wide range of services including hotel reservations, car rentals, tours, and travel insurance, with a focus on providing personalized and convenient travel solutions for both domestic and international clients. ",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p11",
		title: "Pilavtour.uz",
		category: "Web",
		slug: "pilavtour-com",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Corporate website for a tour operator offering a wide range of services including hotel reservations, car rentals, tours, and travel insurance, with a focus on providing personalized and convenient travel solutions for both domestic and international clients. ",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
	{
		id: "p12",
		title: "MshBeauty.uz",
		category: "Web",
		slug: "mshbeauty-com",
		image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
		description:
			"Website for Msh Beauty — a premium beauty and skincare clinic offering advanced aesthetic treatments, personalized skincare services, and professional cosmetic procedures to enhance natural beauty and client confidence. ",
		tags: ["Next.js", "Tailwind", "TypeScript"],
	},
];

/** Extended content for each project (page content). Key = slug. */
export const PROJECT_DETAILS: Record<
	string,
	Omit<ProjectDetail, keyof Project> & { slug: string }
> = {
	"fintech-pulse": {
		slug: "fintech-pulse",
		duration: "5 months",
		teamSize: 6,
		year: 2026,
		technologies: [
			"React",
			"TypeScript",
			"D3.js",
			"Tailwind",
			"Node.js",
			"PostgreSQL",
			"AWS",
			"Stripe",
		],
		longDescription:
			"We designed and built a secure, scalable digital banking platform from the ground up. Real-time dashboards, KYC flows, and seamless payment rails—all with a focus on compliance and performance.",
		deliverables: [
			"Web Application",
			"Admin Dashboard",
			"API & Integrations",
			"Design System",
			"Documentation",
		],
		clientBenefits: [
			{
				title: "Faster onboarding",
				description:
					"KYC and account setup reduced from days to under 10 minutes.",
				metric: "70% faster",
			},
			{
				title: "Real-time analytics",
				description:
					"Live dashboards for transactions, risk, and growth metrics.",
				metric: "24/7",
			},
			{
				title: "Scalable infrastructure",
				description:
					"Built to handle 10x traffic spikes without downtime.",
				metric: "99.9% uptime",
			},
		],
		storytellingVideos: [
			{
				title: "Sprint 1 — Discovery & Architecture",
				url: "https://www.w3schools.com/html/mov_bbb.mp4",
				duration: "2:34",
				caption: "How we defined the core banking flows.",
			},
			{
				title: "Sprint 3 — Dashboard Build",
				url: "https://www.w3schools.com/html/mov_bbb.mp4",
				duration: "4:12",
				caption: "Building the real-time analytics layer.",
			},
		],
	},
	"ecodrive-app": {
		slug: "ecodrive-app",
		duration: "4 months",
		teamSize: 4,
		year: 2026,
		technologies: ["Flutter", "Firebase", "Maps API", "TensorFlow Lite"],
		longDescription:
			"A gamified mobile app that encourages sustainable travel. Users track trips, earn rewards, and compete on leaderboards—all while reducing their carbon footprint.",
		deliverables: [
			"iOS & Android App",
			"Backend & Auth",
			"Gamification Engine",
			"Admin Panel",
		],
		clientBenefits: [
			{
				title: "Higher engagement",
				description:
					"Gamification and rewards drove daily active usage up.",
				metric: "3x DAU",
			},
			{
				title: "Accurate tracking",
				description:
					"Low-power background tracking without draining battery.",
				metric: "<2% battery",
			},
			{
				title: "Social virality",
				description:
					"Leaderboards and challenges increased organic installs.",
				metric: "40% organic",
			},
		],
		storytellingVideos: [
			{
				title: "Design to Code — EcoDrive",
				url: "https://www.w3schools.com/html/mov_bbb.mp4",
				duration: "3:00",
				caption: "From Figma to Flutter in 2 weeks.",
			},
		],
	},
	"nexgen-crm": {
		slug: "nexgen-crm",
		duration: "6 months",
		teamSize: 8,
		year: 2026,
		technologies: [
			"Node.js",
			"TypeScript",
			"React",
			"PostgreSQL",
			"Redis",
			"WebSockets",
		],
		longDescription:
			"Enterprise CRM with AI-powered lead scoring, automated pipelines, and real-time collaboration. Built for sales teams that move fast.",
		deliverables: [
			"CRM Platform",
			"Integrations (Slack, Email)",
			"Reporting Suite",
			"Mobile Companion",
		],
		clientBenefits: [
			{
				title: "Lead scoring accuracy",
				description:
					"AI models improved qualified lead identification.",
				metric: "85% accuracy",
			},
			{
				title: "Pipeline visibility",
				description: "Real-time boards and forecasts for every team.",
				metric: "Real-time",
			},
			{
				title: "Adoption",
				description:
					"Intuitive UX led to full team rollout in 3 weeks.",
				metric: "100% adoption",
			},
		],
		storytellingVideos: [],
	},
	"aura-lifestyle": {
		slug: "aura-lifestyle",
		duration: "3 months",
		teamSize: 3,
		year: 2026,
		technologies: [
			"Figma",
			"Prototyping",
			"Design Systems",
			"User Research",
		],
		longDescription:
			"End-to-end product design for a premium wellness e-commerce brand. Research, strategy, visual identity, and high-fidelity prototypes ready for development.",
		deliverables: [
			"Research Report",
			"UI/UX Design",
			"Design System",
			"Prototypes",
			"Handoff",
		],
		clientBenefits: [
			{
				title: "Conversion-focused UX",
				description:
					"Checkout and product pages optimized for conversion.",
				metric: "+25% CVR",
			},
			{
				title: "Consistent brand",
				description:
					"Design system ensured coherence across all touchpoints.",
				metric: "1 system",
			},
			{
				title: "Dev-ready",
				description:
					"Specs and components handed off for zero-friction build.",
				metric: "0 rework",
			},
		],
		storytellingVideos: [
			{
				title: "Aura — From Moodboard to UI",
				url: "https://www.w3schools.com/html/mov_bbb.mp4",
				duration: "5:20",
				caption: "The design journey.",
			},
		],
	},
	"solaris-dash": {
		slug: "solaris-dash",
		duration: "5 months",
		teamSize: 5,
		year: 2026,
		technologies: ["Next.js", "Three.js", "WebGL", "WebSockets", "Python"],
		longDescription:
			"Real-time monitoring dashboard for renewable energy networks. 3D visualizations, live sensor data, and predictive maintenance alerts.",
		deliverables: [
			"Web Dashboard",
			"3D Visualizations",
			"API & Data Pipeline",
			"Alerting",
		],
		clientBenefits: [
			{
				title: "Real-time visibility",
				description: "Live status of every asset across the network.",
				metric: "<1s latency",
			},
			{
				title: "Predictive maintenance",
				description: "ML-driven alerts reduced unplanned downtime.",
				metric: "30% fewer",
			},
			{
				title: "Stakeholder clarity",
				description: "3D maps and charts made complex data accessible.",
				metric: "10x clearer",
			},
		],
		storytellingVideos: [],
	},
	"quickpath-logistics": {
		slug: "quickpath-logistics",
		duration: "4 months",
		teamSize: 5,
		year: 2026,
		technologies: ["React Native", "Maps API", "Node.js", "PostgreSQL"],
		longDescription:
			"Fleet management and driver app with live tracking, route optimization, and proof-of-delivery. Built for logistics companies that need reliability at scale.",
		deliverables: [
			"Driver App",
			"Fleet Dashboard",
			"Routing Engine",
			"Integrations",
		],
		clientBenefits: [
			{
				title: "On-time delivery",
				description:
					"Smart routing and ETA updates improved delivery rates.",
				metric: "95% on-time",
			},
			{
				title: "Driver adoption",
				description: "Simple, reliable app led to quick fleet rollout.",
				metric: "2 weeks",
			},
			{
				title: "Visibility",
				description:
					"Dispatchers see every vehicle and delivery in real time.",
				metric: "Real-time",
			},
		],
		storytellingVideos: [
			{
				title: "QuickPath — Driver App Demo",
				url: "https://www.w3schools.com/html/mov_bbb.mp4",
				duration: "1:45",
				caption: "In the hands of drivers.",
			},
		],
	},
};

export function getProjectBySlug(slug: string): ProjectDetail | null {
	const base = PROJECTS_LIST.find((p) => p.slug === slug);
	if (!base) return null;
	const detail = PROJECT_DETAILS[slug];
	return { ...base, ...detail } as ProjectDetail;
}
