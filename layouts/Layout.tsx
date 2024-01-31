import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Head from "next/head";
import Header from "@/components/Header";
import TranslateContext from "@/context/useTranslate";
import { IoClose } from "react-icons/io5";
import ModalHandelContext from "@/context/modalHandel";
import axios from "axios";
import * as fbq from "../lib/fpixel";
import { useRouter } from "next/router";

type Inputs = {
	name: string;
	phone: string;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const translation: any = useContext(TranslateContext);

	const { push } = useRouter();
	const [loader, setLoader] = useState(false);
	const { modalHandel, setModalHandel }: any = useContext(ModalHandelContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setLoader(true);

		try {
			axios
				.post(`${process.env.NEXT_PUBLIC_TOKEN}/applications`, data)
				.then((res) => {
					if (res.status === 200 || res.status === 201) {
						reset();
						push("/thanks");
						setLoader(false);
						setModalHandel(false);
						fbq.event("Заявка отправлена", { value: 1 });
					}
				});
		} catch (e:any) {
			alert(e.message);
		}
	};

	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href="/icons/logo.svg"
					type="image/x-icon"
				/>
				<title>Dot Labs</title>
				<meta
					name="description"
					content="Разработка сайта ♛ создание сайтов в Самарканде ➤ Заказать сайт в Gigalab. 14 лет опыта. ☎ +998 (90) 504-74-94. Комплексный интернет-маркетинг и продвижение бизнеса в Интернете. Услуги нашего агентства: SEO-продвижение, Контекстная реклама в Яндекс и Google, разработка и поддержка сайтов."
				/>
			</Head>
			<Header setModalHandel={setModalHandel} />
			{loader ? (
				<div className="w-full h-screen fixed top-0 left-0 flex z-[400] bg-white/30 backdrop-blur-sm">
					<div className="w-16 h-16 m-auto rounded-full animate-spin border-r border-black"></div>
				</div>
			) : null}
			<main>{children}</main>

			<Contact />
			<footer className="w-full bg-white my-10 px-6">
				<div className="flex items-start justify-between flex-col-reverse gap-4 md:flex-row max-w-[1040px] w-full mx-auto">
					<div className="flex items-start justify-between w-full md:w-[50%]">
						<nav className="flex flex-col items-start gap-3">
							{translation?.header?.links.map((item: any) => (
								<Link
									key={item.id}
									href={item.path}
									className={`font-semibold`}
								>
									{item.name}
								</Link>
							))}
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
							href="tel:+998 (90) 504-74-94"
							className="font-semibold text-[32px] md:text-[44px]"
						>
							+998 (90) 504-74-94
						</Link>
						<span className="font-semibold text-[14px] md:text-[22px] text-[#A3A7AC] ">
							{translation?.footer?.adress}
						</span>
					</div>
				</div>
				<span className="block max-w-[1040px] w-full mx-auto mt-10 text-[#A3A7AC] ">
					© Dot Labs 2023. {translation?.footer?.bottomText}
				</span>
			</footer>

			{modalHandel ? (
				<div className="z-[100] fixed top-0 left-0 bg-[#000000c4] backdrop-blur-sm w-full h-screen flex items-center justify-center">
					<IoClose
						onClick={() => setModalHandel(false)}
						color="white"
						size={50}
						className="absolute top-4 right-4 cursor-pointer"
					/>
					<div className="bg-[white] px-7 max-sm:px-5 max-sm:py-7 py-10 rounded-lg flex flex-col items-start justify-center w-[550px] max-lg:w-[500px] max-sm:w-[90%]">
						<Image
							src={"/icons/logo.svg"}
							alt=""
							height={70}
							width={70}
						/>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col w-full"
						>
							<p className="mt-5 font-semibold text-3xl max-sm:text-2xl text-[#000000]">
								{translation?.modal?.title}
							</p>
							<input
								placeholder={translation?.modal?.inputName}
								{...register("name", {
									required: true,
									pattern: {
										value: /^[a-zA-Z ,ЁёА-я ']*$/,
										message: "Введите только буквы!",
									},
								})}
								className="mt-5 w-full border border-1 p-3 rounded-md"
							/>
							{errors.name ? (
								<p className="text-[red] text-sm mt-1">
									{errors.name.message}
								</p>
							) : null}
							<InputMask
								className={
									"text-start w-full mt-5 border border-1 p-3 rounded-md"
								}
								mask="+\9\98-(99)-999-99-99"
								placeholder={translation?.modal?.inputNumber}
								{...register("phone", {
									required: true,
									minLength: 19,
								})}
								// value={phone}
								// onChange={(e: any) => setPhone(e.target.value)}
							></InputMask>
							<button
								type="submit"
								className="mt-5 bg-[#0659ff] text-white py-2.5 max-sm:py-2 rounded-md text-xl border-2 border-[#0659ff] font-medium transition duration-300 ease-in-out hover:bg-[white] hover:text-[#0659ff]"
							>
								{translation?.modal?.button}
							</button>
						</form>
						<hr className="mt-4 w-full border border-[#b3b3b3]" />
						<p className="mt-4 text-sm">
							{translation?.modal?.warring}
						</p>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Layout;
