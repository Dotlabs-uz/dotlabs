import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layouts/Layout";
import {BsFillPlayFill } from 'react-icons/bs'

const inter = Inter({ subsets: ["latin"] });

// md:700
// sm: 600
// lg: 1024
// xl: 1280

export default function Home() {
	return (
		<Layout>
			<section className="custom-bg w-full flex justify-center items-center ">
				<div className="bg-image"></div>
				<div className="flex items-center justify-between gap-10 max-w-[1040px] mx-auto z-50 relative">
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
						className="flex justify-center items-center w-full h-[256px] rounded-xl"
						style={{
							backgroundImage: "url(/images/video.png)",
						}}
					>
						<BsFillPlayFill color="white" size="50" />
					</div>
				</div>
			</section>
		</Layout>
	);
}
