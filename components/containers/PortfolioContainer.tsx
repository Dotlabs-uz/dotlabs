import React from "react";

interface PortfolioContainerProps {
    arr: any
}

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({arr}) => {
	return (
		<div className="custom-grid">
			{arr.map((item: any) => (
				<div className="job" key={item}>
					<div></div>
					<span className="text-xl md:text-2xl font-semibold">
						Eleven CRM
					</span>
				</div>
			))}
		</div>
	);
};

export default PortfolioContainer;
