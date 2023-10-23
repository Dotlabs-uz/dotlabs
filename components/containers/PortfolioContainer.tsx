import Image from "next/image";
import React from "react";

interface PortfolioContainerProps {
	arr: any;
}

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({ arr }) => {
	return (
		<div className="custom-grid">
			{arr.map((item: any) => (
				<div className="job" key={item.id}>
					<div className="w-full h-full overflow-hidden" >
						<Image
							src={item.image}
							alt={item.title}
							width="500"
							height="500"
							className="w-full h-full object-cover object-center scale-[1] hover:scale-[1.1] transition-all"
						/>
					</div>
					{/* <div
						style={{
							backgroundImage: `url(${item.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							WebkitBackgroundSize: "130%"
						}}
					></div> */}
					<span className="text-xl md:text-2xl font-semibold">
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default PortfolioContainer;
