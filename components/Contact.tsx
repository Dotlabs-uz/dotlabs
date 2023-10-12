import React, { useState } from "react";
import aboutCss from "../styles/about.module.scss";

export default function Contact() {
	return (
		<div className="w-full h-full bg-[#FFC000] ">
			<section className="max-w-[1040px] w-full mx-auto py-12 px-5 md:px-6 xl:px-0  lg:py-16">
				<h2 className=" uppercase text-2xl lg:text-5xl font-semibold mb-6 md:mb-16 leading-normal ">
					Расскажите о задачах, <br /> мы оперативно свяжемся:
				</h2>
				<form className="w-full gap-3 md:flex justify-between items-center relative ">
					<div className=" md:w-2/5 relative ">
						<input
							type="text"
							id="name"
							autoFocus
							placeholder=" "
							className={`${aboutCss.input} relative mb-4 md:mb-0 z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer autofill:bg-[#FFC000] `}
						/>
						<label
							htmlFor="name"
							className=" z-10 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold"
						>
							Имя
						</label>
					</div>
					<div className=" md:w-2/5 relative ">
						<input
							type="tel"
							id="tel"
							autoFocus
							placeholder=" "
							name="tel"
							className={` ${aboutCss.input} relative  mb-9 md:mb-0  z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer`}
						/>
						<label className=" z-10 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold">
							Номер телефона
						</label>
					</div>
					<button className=" uppercase flex items-center gap-2 py-3  px-8 text-white font-semibold bg-black rounded-full">
						отправить{" "}
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
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M1 1H11V11"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</form>
			</section>
		</div>
	);
}
