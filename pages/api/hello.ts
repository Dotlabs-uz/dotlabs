// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

let portfolio: any = [
   {
      id: 4,
      title: "Student's Platform",
      image: "/images/portfolio/wepro.webp",
      url: "https://go.wepro.uz/",
   },
   {
      id: 3,
      title: "Epi-Help",
      image: "/images/portfolio/feb.webp",
      url: "https://epi-help.com/",
   },
   {
      id: 2,
      title: "Polyglot-school",
      image: "/images/portfolio/polyglot.webp",
      url: "https://polyglot-school.uz/ru",
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
