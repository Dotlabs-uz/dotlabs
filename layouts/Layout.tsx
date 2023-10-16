import React, { useState } from "react";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Contact from "@/components/Contact";

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
							<Link
								href="/"
								className={`font-semibold ${
									pathname === "/" && "text-main underline"
								}`}
							>
								Home
							</Link>
							<Link
								href="/about"
								className={`font-semibold ${
									pathname === "/about" &&
									"text-main underline"
								}`}
							>
								About
							</Link>
							<Link
								href="/services"
								className={`font-semibold ${
									pathname === "/services" &&
									"text-main underline"
								}`}
							>
								Services
							</Link>
							<Link
								href="/portfolio"
								className={`font-semibold ${
									pathname === "/portfolio" &&
									"text-main underline"
								}`}
							>
								Portfolio
							</Link>
							<Link
								href="/portfolio"
								className={`font-semibold ${
									pathname === "/contacts" &&
									"text-main underline"
								}`}
							>
								Contacts
							</Link>
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
						<button className="hidden md:flex items-center gap-2 py-2 px-5 text-white font-semibold bg-main rounded-full">
							Перезвоните мне
							<BsTelephoneFill />
						</button>
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
						<button className="md:hidden">
							<BsFillTelephoneFill size="26" />
						</button>
						<button className="md:hidden">
							<SlMenu size="26" />
							{/* <Menu/> */}
						</button>
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
	return (
		<aside className="w-full h-full bg-white fixed top-0 left-0 bottom-0 " >
			<h3>THE NETLIFY PLATFORM</h3>
			<p>
				<strong>Instantly build and deploy</strong> your sites to our global network from
				Git. Custom domains, https, deploy previews, rollbacks and much
				more.
			</p>
			<ul  >
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Portfolio</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</aside>
	);
};
