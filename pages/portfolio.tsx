import Layout from "@/layouts/Layout";
import React from "react";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
	return (
		<Layout>
			<section className="w-full max-w-[1400px] mx-auto px-5">
				<div className="flex flex-col items-start gap-2 my-10">
					<h1 className="text-6xl font-extrabold ">Наши работы</h1>
					<p>
						Посмотрите на уже реализованные проекты и убедитесь в
						качестве нашей работы!
					</p>
				</div>
				<div className="custom-grid">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
						<div className="job" key={item}>
							<div></div>
							<span className="text-xl md:text-2xl font-semibold">
								Eleven CRM
							</span>
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
};

export default Portfolio;
