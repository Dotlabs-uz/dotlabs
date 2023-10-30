import React, { useContext, useState } from "react";
import aboutCss from "../styles/about.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import TranslateContext from "@/context/useTranslate";


export default function Contact() {
	type userData = { userName: string; phone: string };
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<userData>();

	const onSubmit: SubmitHandler<userData> = async (data) => {
		try {
			const res = await axios.post('https://sheet.best/api/sheets/f24ba5dc-114e-4649-9fcd-68b5ca52992f', data)

			if(res.status === 200 || res.status === 201) {
				const body = {
					chat_id: '-1002062552409',
					parse_mode: "html",
					text: `
						Новая заявка 
						<a href="https://docs.google.com/spreadsheets/d/1Anq1vHx9tCmmDQAMa7A-MQ41S8culwb1fMIm7AYC7Dc/edit#gid=0" >
							Взгянуть на таблицу
						</a>
					`,
	
				}
				axios.post(`https://api.telegram.org/bot${'6710636505:AAHDUkdHn5187bpWzhGjZJr9EbX7eeclwPk'}/sendMessage`, body)
					.then(res => console.log(res))
			}

		} catch(e) {
			console.log(e);
		}
	};

    const translation: any = useContext(TranslateContext);


	return (
		<div className="w-full h-full bg-[#FFC000] ">
			<section className="max-w-[1040px] w-full mx-auto py-12 px-5 md:px-6 xl:px-0  lg:py-16">
				<h2 className=" uppercase text-2xl lg:text-5xl font-semibold mb-6 md:mb-16 leading-normal ">
					{translation?.contact?.title1} <br /> {translation?.contact?.title2}
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full gap-3 md:flex justify-between items-center relative "
				>
					<div className=" md:w-2/5 relative ">
						<input
							type="text"
							id="name"
							{...register("userName", {required: true, pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u})}
							placeholder=" "
							className={`${aboutCss.input} relative mb-4 md:mb-0 z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer autofill:bg-[#FFC000] `}
						/>
						<label
							htmlFor="name"
							className=" z-10 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold"
						>
							{translation?.contact?.inputName} 
						</label>
						{errors?.userName && <span className="text-red-600" >{translation?.contact?.inputNameEror} </span>}
					</div>
					<div className=" md:w-2/5 relative ">
						<input
							type="tel"
							id="tel"
							{...register("phone", {
								required: true,
								pattern:
									/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
							})}
							placeholder=" "
							className={` ${aboutCss.input} relative mb-4 md:mb-0 z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer`}
						/>
						<label className=" -z-2 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  text-2xl font-semibold">
						{translation?.contact?.inputNumber} 
						</label>
						{errors?.phone && <span className="text-red-600" >{translation?.contact?.inputNumberEror} </span>}
					</div>
					<button className="mt-9 uppercase flex items-center gap-2 py-3  px-8 text-white font-semibold bg-black rounded-full">
					{translation?.contact?.buttonText} {" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
						>
							<path
								d="M1 11L11 1"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1 1H11V11"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</form>
			</section>
		</div>
	);
}
