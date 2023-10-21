// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

let portfolio: any = [
	{
		id: 4,
		title: "Student's Platform",
		image: "/images/portfolio/wepro.webp",
		url: "go.wepro.uz",
	},
	{
		id: 3,
		title: "Fit-life",
		image: "/images/portfolio/feb.webp",
		url: "",
	},
	{
		id: 2,
		title: "Polyglot-school",
		image: "/images/portfolio/polyglot.webp",
		url: "polyglot-school.uz",
	},
	{
		id: 1,
		title: "Eleven CRM",
		image: "/images/portfolio/eleven.webp",
		url: "",
	},
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json(portfolio);
}
