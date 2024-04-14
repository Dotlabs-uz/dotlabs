import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioContainerProps {
	arr: any;
}

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({ arr }) => {
	
	return (
		<div className="custom-grid">
			{arr.map((item: any) => (
				<div className="job relative" key={item.id}>
					<div className="w-full h-full overflow-hidden">
						<Link href={"/portfolio/" + item.id}>
							<Image
								src={item.imageUrl}
								alt={item.title}
								width="1000"
								height="1000"
								className="w-full h-full object-cover object-center scale-[1] hover:scale-[1.1] transition-all"
							/>
						</Link>
					</div>
					<Link
						href={item.url}
						target="_blank"
						className="text-xl md:text-2xl font-semibold hover:underline
                     "
					>
						{item.title}
					</Link>
				</div>
			))}
		</div>
	);
};

export default PortfolioContainer;
