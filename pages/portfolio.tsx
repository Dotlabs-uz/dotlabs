import PortfolioContainer from "@/components/containers/PortfolioContainer";
import Layout from "@/layouts/Layout";
import React from "react";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
	return (
		<Layout>
			<section className="w-full max-w-[1400px] mx-auto px-5 pb-7">
				<div className="flex flex-col items-start gap-2 my-10">
					<h1 className="text-3xl md:text-6xl font-extrabold ">Наши работы</h1>
					<p>
						Посмотрите на уже реализованные проекты и убедитесь в
						качестве нашей работы!
					</p>
				</div>
				<PortfolioContainer arr={[1, 2, 3, 4, 5, 6, 7, 8]}/>
			</section>
		</Layout>
	);
};

export default Portfolio;
