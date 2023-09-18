import React from "react";
import { SiFigma } from "react-icons/si";
import { AiOutlineMobile, AiOutlineLike } from "react-icons/ai";
import Image from "next/image";

interface ServiceProps {}

const Service: React.FC<ServiceProps> = () => {
	return (
		<div
			className="w-full bg-white rounded-[24px] overflow-hidden custom-shadow"
		>
			<div className="flex flex-col items-start p-7">
				<h2 className="text-3xl font-bold mb-3">Веб-сайты</h2>
				<p className="font-normal">
					Наши опытные дизайнеры и разработчики создадут для вас
					современный, функциональный и креативный веб-сайт, который
					выделяется среди конкурентов.
				</p>
				<div className="flex flex-col items-start gap-4 mt-4">
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-[32px] h-[32px] bg-[#E9F0F9] rounded-full">
							<SiFigma color="#068FFF" size="20" />
						</div>
						<span className="font-semibold" >Уникальный дизайн, отражающий ваш бренд</span>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-[32px] h-[32px] bg-[#E9F0F9] rounded-full">
							<AiOutlineMobile color="#068FFF" size="20" />
						</div>
						<span className="font-semibold" >Уникальный дизайн, отражающий ваш бренд</span>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-[32px] h-[32px] bg-[#E9F0F9] rounded-full">
							<AiOutlineLike color="#068FFF" size="20" />
						</div>
						<span className="font-semibold" >Уникальный дизайн, отражающий ваш бренд</span>
					</div>
				</div>
			</div>
			<Image
				src="/images/serviceOne.png"
				alt=""
				width="400"
				height="100"
                className="w-full object-contain"
			/>
		</div>
	);
};

export default Service;
