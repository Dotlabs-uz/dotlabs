import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Service from "../Service";

interface ServicesContProps {}

const ServicesCont: React.FC<ServicesContProps> = () => {
	return (
		<>
			<section className="hidden md:grid grid-cols-3 gap-3 w-full max-w-[1400px] mx-auto p-5 bg-[rgba(255,255,255,0.5)] backdrop-blur-md -translate-y-[350px] rounded-[40px] relative z-10">
				<Service />
				<Service />
				<Service />
			</section>
			<section className="relative z-[100] -translate-y-[400px] max-w-[1400px] mx-auto w-full md:hidden">
				<Swiper
					className="custom-swiper"
					spaceBetween={20}
					slidesPerView={1.2}
				>
					{[1, 2, 3].map((item: any) => {
						return (
							<SwiperSlide key={item} className="rounded-[24px]" >
								<Service />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
};

export default ServicesCont;
