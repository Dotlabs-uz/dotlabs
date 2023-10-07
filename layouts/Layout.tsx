import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { SlMenu } from "react-icons/sl";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<header className="w-full bg-white">
				<div className="flex justify-between items-center py-4 w-full max-w-[1920px] my-0 mx-auto px-10">
					<div className="flex items-center gap-10">
						<Image
							src={"/icons/logo.svg"}
							alt=""
							width="80"
							height="80"
						/>
						<nav className="hidden md:flex items-center gap-6">
							<Link href="/" className="font-semibold">
								Home
							</Link>
							<Link href="/about" className="font-semibold">
								About
							</Link>
							<Link href="#" className="font-semibold">
								Home
							</Link>
							<Link href="#" className="font-semibold">
								Home
							</Link>
						</nav>
					</div>
					<div className="flex items-center gap-5">
						<button className="hidden md:flex items-center gap-2 py-2 px-5 font-semibold">
							RU
							<GoGlobe size="26" />
						</button>
						<button className="hidden md:flex items-center gap-2 py-2 px-5 text-white font-semibold bg-main rounded-full">
							Перезвоните мне
							<BsTelephoneFill />
						</button>
						<button className="md:hidden">
							<GoGlobe size="26" />
						</button>
						<button className="md:hidden">
							<BsFillTelephoneFill size="26" />
						</button>
						<button className="md:hidden">
							<SlMenu size="26" />
						</button>
					</div>
				</div>
			</header>
			<main>{children}</main>
			<Contact/>
			<footer className="w-full bg-white my-10 px-6">
				<div className="flex items-start justify-between flex-col-reverse gap-4 md:flex-row max-w-[1040px] w-full mx-auto">
					<div className="flex items-start justify-between w-full md:w-[50%]">
						<nav className="flex flex-col items-start gap-3 ">
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
						</nav>
						<nav className="flex flex-col items-start gap-3">
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
							<Link href="#" className="font-semibold">
								Главная
							</Link>
						</nav>
					</div>
					<div className="flex flex-col items-start mb-5">
						<Image
							src="/icons/black_logo.svg"
							alt=""
							width="80"
							height="44"
							className="mb-8"
						/>
						<Link href="" className="font-semibold text-[32px] md:text-[44px]">
							+998 (99) 911-01-11
						</Link>
						<span className="font-semibold text-[14px] md:text-[22px] text-[#A3A7AC] ">
							Буюк Ипак Йули 52, Самарканд, Узбекистан
						</span>
					</div>
				</div>
				<span className="block max-w-[1040px] w-full mx-auto mt-10 text-[#A3A7AC] ">
					© Dot Labs 2023. Все права защищены
				</span>
			</footer>
		</>
	);
};

export default Layout;
