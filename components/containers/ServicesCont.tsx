import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Service from "../Service";

interface ServicesContProps {
	services: Array<{id: number, ru_title: string, description: string, img: string, points: any}>
}

const ServicesCont: React.FC<ServicesContProps> = ({services}) => {

	return (
		<>
			<section className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-[90%] max-w-[1400px] mx-auto p-5 bg-[rgba(255,255,255,0.5)] backdrop-blur-md rounded-[40px] relative z-10">
				{services.map(item => <Service key={item.id} item={item} />)}
			</section>
			<section className="relative z-[100] max-w-[1400px] mx-auto w-full md:hidden">
				<Swiper
					className="custom-swiper"
					spaceBetween={20}
					slidesPerView={1.2}
				>
					{services.map((item: any) => {
						return (
							<SwiperSlide key={item.id} className="rounded-[24px]">
								<Service item={item} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
};

export default ServicesCont;
