import React from "react";

import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Head from "next/head";
import Header from "@/components/Header";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

	return (
		<>
		<Head>
			<link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
			<title>Dot Labs</title>
		</Head>
			<Header/>
			<main>{children}</main>
			{/* <div className="h-[120px]" ></div> */}
			<Contact />
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
						<Link
							href=""
							className="font-semibold text-[32px] md:text-[44px]"
						>
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
