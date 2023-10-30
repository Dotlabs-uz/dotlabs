import TranslateContext from "@/context/useTranslate";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";

interface contactsProps {}

const Contacts: React.FC<contactsProps> = () => {

    const translation: any = useContext(TranslateContext);

	return (
		<Layout>
			<Head>
				<title>Dot Labs - Portfolio</title>
			</Head>
			<section>
				<div className="w-full md:w-[90%] max-w-[1440px] mx-auto flex flex-col gap-5 items-start px-5 md:px-0">
					<h1 className="text-3xl md:text-[64px] font-extrabold my-0 leading-[60px]">
						{translation?.contactPage?.title}
					</h1>
					<span className="text-xl md:text-[34px] font-normal">
					{translation?.contactPage?.pText}
					</span>
					<Link href="tel:+998905047494" className="text-base px-4 py-3 md:px-6 md:py-4 bg-black text-white uppercase rounded-full">
					{translation?.contactPage?.buttonText}
					</Link>
				</div>
				<div className="w-full md:w-[90%] max-w-[1440px] mx-auto flex  item-start flex-col md:flex-row justify-between my-6 px-5 md:px-0">
					<div className="flex flex-col items-start">
						<h3 className="text-3xl md:text-[44px] font-semibold mb-7">
						{translation?.contactPage?.connectWithUs}
						</h3>
						<div className="flex flex-col md:flex-row gap-5 md:gap-0 items-start justify-between w-full mb-7">
							<div className="flex flex-col">
								<Link className="text-xl font-semibold" href="">
									+998 (99) 911-01-11
								</Link>
								<span className="text-[#A3A7AC] ">
									По вопросам услуг
								</span>
							</div>
							<div className="flex flex-col">
								<Link className="text-xl font-semibold" href="">
									+998 (99) 026-88-67{" "}
								</Link>
								<span className="text-[#A3A7AC] ">
									Вакансии
								</span>
							</div>
						</div>
						<div className="flex flex-col">
							<h3 className="text-xl font-semibold">
								ПН-СБ 09:00-19:00
							</h3>
							<span className="text-[#A3A7AC]">
								Рабочее время:
							</span>
						</div>
					</div>
					<div>
						<h3 className="text-3xl md:text-[44px] font-semibold mb-7">
						{translation?.contactPage?.adressTitle}
						</h3>
						<div className="flex flex-col">
							<h3 className="text-xl font-semibold">
							{translation?.contactPage?.adress1} <br /> {translation?.contactPage?.adress2}
							</h3>
							<span className="text-[#A3A7AC]">
								Рабочее время:
							</span>
						</div>
					</div>
					<div>
						<h3 className="text-3xl md:text-[44px] font-semibold mb-7">
						{translation?.contactPage?.social}
						</h3>
						<ul>
							<li className="text-xl hover:underline">
								<Link href="#">LinkedIn</Link>
							</li>
							<li className="text-xl hover:underline">
								<Link href="#">Upwork</Link>
							</li>
							<li className="text-xl hover:underline">
								<Link href="#">Facebook</Link>
							</li>
							<li className="text-xl hover:underline">
								<Link href="#">Instagram</Link>
							</li>
							<li className="text-xl hover:underline">
								<Link href="#">Telegram </Link>
							</li>
						</ul>
					</div>
				</div>
				<iframe
					src="https://yandex.uz/map-widget/v1/?ll=66.923688%2C39.651670&z=18.01&mode=whatshere&whatshere%5Bpoint%5D=66.923688%2C39.651670&z=18.01"
					width="100%"
					height="500px"
				></iframe>
			</section>
		</Layout>
	);
};

export default Contacts;
