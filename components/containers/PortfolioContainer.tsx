import React from "react";

interface PortfolioContainerProps {
    arr: any
}

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({arr}) => {
	return (
		<div className="custom-grid">
			{arr.map((item: any) => (
				<div className="job" key={item.id}>
					<div
						style={{
							backgroundImage: `url(${item.image})`,
							backgroundSize: "cover"
						}}
					></div>
					<span className="text-xl md:text-2xl font-semibold">
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default PortfolioContainer;
