import React from "react";
import Image from "next/image";

interface ServiceProps {
	item: {
		id: number;
		ru_title: string;
		description: string;
		img: string;
		points: any;
	};
}

const Service: React.FC<ServiceProps> = ({ item }) => {
	return (
		<div className="flex flex-col items-start justify-between w-full bg-white rounded-[24px] overflow-hidden custom-shadow">
			<div className="flex flex-col items-start p-5">
				<h2 className="text-3xl font-bold mb-3">{item.ru_title}</h2>
				<p className="font-normal text-[15px] md:text-[16px] h-[120px]">
					{item.description}
				</p>
				<div className="flex flex-col items-start gap-4 mt-4">
					{item.points.map((point: any) => (
						<div className="flex items-center gap-3">
							<div className="service-component-li-icon">
								<Image
									src={`/icons/services/${point.icon}.svg`}
									alt=""
									width="20"
									height="20"
									className="max-w-[20px] object-contain"
								/>
							</div>
							<span className="font-normal md:font-semibold text-sm ">
								{point.title}
							</span>
						</div>
					))}
				</div>
			</div>
			<Image
				src={item.img}
				alt=""
				width="400"
				height="100"
				className="w-full object-contain"
			/>
		</div>
	);
};

export default Service;
