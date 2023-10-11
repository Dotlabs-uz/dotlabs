import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";
import { BsFillPlayFill } from "react-icons/bs";
import Service from "@/components/Service";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import ServicesCont from "@/components/containers/ServicesCont";

const inter = Inter({ subsets: ["latin"] });

// md:700
// sm: 600
// lg: 1024
// xl: 1280

export default function Home() {

	return (
		<Layout>
			<section className="custom-bg w-full flex justify-center  ">
				<div className="bg-image"></div>
				<div className="flex items-center justify-between flex-col md:flex-row gap-10 max-w-[1040px] mx-auto my-10 md:my-0 z-50 relative max-h-[600px] w-[90%]">
					<div className=" flex flex-col items-start gap-6 w-full">
						<h1 className="hidden">Иноовации в каждом пикселе</h1>
						<Image
							src="/icons/mainTitle.svg"
							alt=""
							width="500"
							height="100"
						/>
						<p className="font-normal  text-lg text-[#747474] ">
							В DOT LABS мы привносим инновации в мир разработки,
							где каждый пиксель имеет значение. Мы следим за
							последними технологическими трендами и применяем их
							в каждом проекте, чтобы обеспечить выдающийся
							результат.
						</p>
						<button className="flex items-center gap-2 py-4 px-6 text-white font-semibold text-lg bg-black rounded-full uppercase">
							Заказать проект
						</button>
					</div>
					<div
						className="hidden md:flex justify-center items-center w-full h-[256px] rounded-xl cursor-pointer"
						style={{
							backgroundImage: "url(/images/video.png)",
						}}
						onClick={() => console.log("hello world")}
					>
						<BsFillPlayFill color="white" size="50" />
					</div>
				</div>
			</section>
			<ServicesCont/>
			{/* <section className="flex items-start justify-between gap-6 w-full max-w-[1400px] mx-auto relative -translate-y-[180px] px-5">
				<div className="flex flex-col items-start gap-4 w-full">
					<Image
						src="/icons/logo_text.svg"
						alt=""
						width="100"
						height="50"
					/>
					<h2 className="text-[44px] leading-[53px] uppercase">
						Ваш надежный партнер в{" "}
						<span className="text-main my-0 mx-0">
							разработке по
						</span>
					</h2>
					<p className="font-normal text-lg text-[#747474]">
						В Dot Labs мы страстно преданы созданию выдающихся
						веб-решений, которые поднимают ваш бизнес на новый
						уровень. С нашей экспертизой в разработке веб-сайтов,
						мобильных приложений и CRM-систем, мы стремимся быть
						вашим надежным технологическим партнером.
					</p>
					<hr className="w-full" />
					<div className="flex items-center justify-between w-full">
						<div className="flex flex-col items-start">
							<span className="font-semibold text-[44px]">
								78%
							</span>
							<span className="font-semibold text-sm text-[#747474]">
								Clients satisfaction
							</span>
						</div>
						<div className="flex flex-col items-start border-l-[1px] border-r-[1px] px-10">
							<span className="font-semibold text-[44px]">
								20%
							</span>
							<span className="font-semibold text-sm text-[#747474]">
								Clients satisfaction
							</span>
						</div>
						<div className="flex flex-col items-start">
							<span className="font-semibold text-[44px]">
								2.3М
							</span>
							<span className="font-semibold text-sm text-[#747474]">
								Clients satisfaction
							</span>
						</div>
					</div>
				</div>
				<div className="custom-shadow custom-gradient w-full p-5 rounded-3xl h-full ">
					<div className="w-full bg-white flex flex-col items-center gap-5 text-center rounded-2xl py-7">
						<h3 className="text-2xl font-bold">
							Специалисты с большим опытом
						</h3>
						<Image
							src="/images/team.png"
							alt="team"
							width="300"
							height="100"
						/>
						<p className="font-normal text-[#747474] w-[90%]">
							В DOT LABS мы страстно преданы созданию выдающихся
							веб-решений, которые поднимают ваш бизнес на новый
							уровень.
						</p>
						<div className="flex flex-col items-center gap-2 py-2 px-5 text-white bg-main rounded-xl">
							<span className="text-sm font-semibold">
								Всего сотрудников
							</span>
							<span className="text-3xl font-bold">24+</span>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full max-w-[1400px] mx-auto px-5 -translate-y-[80px]">
				<h2 className="text-[44px] font-semibold mb-3">Наши работы</h2>
				<div className="custom-grid">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
						<div className="job">
							<div></div>
							<span className="text-2xl font-semibold">
								Eleven CRM
							</span>
						</div>
					))}
				</div>
			</section> */}
		</Layout>
	);
}
