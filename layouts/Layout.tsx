import React, { useState } from "react";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Contact from "@/components/Contact";
import Head from "next/head";
const pages = [
	{
		id: 1,
		path: "/",
		name: "Home",
	},
	{
		id: 2,
		path: "/about",
		name: "About",
	},
	{
		id: 3,
		path: "/portfolio",
		name: "Portfolio",
	},
	{
		id: 4,
		path: "/services",
		name: "Services",
	},
	{
		id: 5,
		path: "/contact",
		name: "Contact",
	},
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [show, setShow] = useState<boolean>(false);
	const { pathname } = useRouter();

	function changeLang() {
		setShow(true);
		setTimeout(() => {
			console.log("lang changed");
			setShow(false);
		}, 2500);
	}

	return (
		<>
		<Head>
			<link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
			<title>Dot Labs</title>
		</Head>
			<header className="w-full bg-white">
				<div className="flex justify-between items-center py-4 md:w-[98%] w-full max-w-[1920px] my-0 mx-auto md:px-0 px-5">
					<div className="flex items-center gap-10">
						<Link href="/">
							<Image
								src={"/icons/logo.svg"}
								alt=""
								width="80"
								height="80"
							/>
						</Link>
						<nav className="hidden md:flex items-center gap-6">
							{pages.map((item) => (
								<Link
									key={item.id}
									href={item.path}
									className={`font-semibold ${
										pathname === item.path &&
										"text-main underline"
									}`}
								>
									{item.name}
								</Link>
							))}
						</nav>
					</div>
					<div className="flex items-center gap-5">
						<button
							onClick={changeLang}
							className="hidden md:flex items-center gap-2 py-2 px-5 font-semibold"
						>
							RU
							<div>
								{!show ? (
									<GoGlobe size="26" />
								) : (
									<Image
										src="/icons/anim.gif"
										alt=""
										width="26"
										height="26"
										priority={true}
									/>
								)}
							</div>
						</button>
						<Link href="tel:+998905047494" className="hidden md:flex items-center gap-2 py-2 px-5 text-white font-semibold bg-main rounded-full">
							Перезвоните мне
							<BsTelephoneFill />
						</Link>
						<button className="md:hidden" onClick={changeLang}>
							<div>
								{!show ? (
									<GoGlobe size="26" />
								) : (
									<Image
										src="/icons/anim.gif"
										alt=""
										width="26"
										height="26"
										priority={true}
									/>
								)}
							</div>
						</button>
						<Link href="tel:+998905047494"  className="md:hidden">
							<BsFillTelephoneFill size="26" />
						</Link>
						<div className="md:hidden">
							<Menu />
						</div>
					</div>
				</div>
			</header>
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

export const Menu = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			{!open ? (
				<button onClick={() => setOpen(true)} className="mt-2">
					<SlMenu size="26" />
				</button>
			) : (
				<aside className="w-full h-full bg-white fixed top-0 left-0 bottom-0 p-5 z-[1000]">
					<nav className="w-full flex items-center justify-between mb-7">
						<Image
							src={"/icons/logo.svg"}
							alt=""
							width="90"
							height="36"
						/>

						<button onClick={() => setOpen(false)}>
							<IoMdClose size="36" />
						</button>
					</nav>
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-sm text-[#545A61]">
							Мы облегчим вашу рутину
						</h3>
						<p className="text-start font-normal text-[#545A61]">
							<strong className="font-bold text-base text-black">
								Instantly build and deploy
							</strong>{" "}
							your sites to our global network from Git. Custom
							domains, https, deploy previews, rollbacks and much
							more.
						</p>
						<ul className="text-start flex flex-col gap-1">
							{pages.map((item) => (
								<li
									key={item.id}
									onClick={() => setOpen(false)}
								>
									<Link
										href={item.path}
										className="underline text-base"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
						<h3 className="text-sm text-[#545A61]">KEY FEATURES</h3>
						<ul className="text-start flex flex-col gap-1">
							<li>
								<Link href="#" className="underline text-base">
									Home
								</Link>
							</li>
							<li>
								<Link href="#" className="underline text-base">
									About
								</Link>
							</li>
							<li>
								<Link href="#" className="underline text-base">
									Portfolio
								</Link>
							</li>
							<li>
								<Link href="#" className="underline text-base">
									Services
								</Link>
							</li>
							<li>
								<Link href="#" className="underline text-base">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</aside>
			)}
		</>
	);
};
