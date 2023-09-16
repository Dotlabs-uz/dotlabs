import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<Layout>
			<section className="custom-bg w-full" >
				<div className="bg-image" ></div>
			</section>
		</Layout>
	);
}