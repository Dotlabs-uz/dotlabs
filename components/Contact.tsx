import React, { useContext, useState } from "react";
import aboutCss from "../styles/about.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import InputMask from "react-input-mask";
import TranslateContext from "@/context/useTranslate";
import { useRouter } from "next/router";

export default function Contact() {
   type userData = { userName: string; phone: string };
   const { push } = useRouter();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm<userData>();

   const onSubmit: SubmitHandler<userData> = async (data) => {
      try {
         const body = {
            chat_id: "-1002062552409",
            parse_mode: "html",
            text: `
					Новая заявка 
						${data?.userName}
					   ${data?.phone}
					`,
         };
         axios
            .post(
               `https://api.telegram.org/bot${"6710636505:AAHDUkdHn5187bpWzhGjZJr9EbX7eeclwPk"}/sendMessage`,
               body
            )
            .then((res) => {
               if (res.status === 200 || res.status === 201) {
                  reset();
                  push("/thanks");
               }
            });
      } catch (e) {
         console.log(e);
      }
   };

   const translation: any = useContext(TranslateContext);

   return (
      <div className="w-full h-full bg-[#FFC000] ">
         <section className="max-w-[1040px] w-full mx-auto py-12 px-5 md:px-6 xl:px-0  lg:py-16">
            <h2 className=" uppercase text-2xl lg:text-5xl font-semibold leading-normal ">
               {translation?.contact?.title1}
            </h2>
            <p>{translation?.contact?.title2}</p>
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="w-full gap-3 md:flex justify-between items-center relative "
            >
               <div className=" md:w-2/5 relative ">
                  <input
                     type="text"
                     id="name"
                     {...register("userName", {
                        required: true,
                        pattern:
                           /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                     })}
                     placeholder=" "
                     className={`${aboutCss.input} relative mb-4 md:mb-0 z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer autofill:bg-[#FFC000] `}
                  />
                  <label
                     htmlFor="name"
                     className=" z-10 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold"
                  >
                     {translation?.contact?.inputName}
                  </label>
                  {errors?.userName && (
                     <span className="text-red-600">
                        {translation?.contact?.inputNameEror}{" "}
                     </span>
                  )}
               </div>
               <div className=" md:w-2/5 relative ">
                  <InputMask
                     mask="+\9\98-(99)-999-99-99"
                     // type="tel"
                     // id="tel"
                     {...register("phone", {
                        required: true,
                     })}
                     placeholder=""
                     className={` ${aboutCss.input} relative mb-4 md:mb-0 z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer`}
                  />
                  <label className=" -z-2 peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  text-2xl font-semibold">
                     {translation?.contact?.inputNumber}
                  </label>
                  {errors?.phone && (
                     <span className="text-red-600">
                        {translation?.contact?.inputNumberEror}{" "}
                     </span>
                  )}
               </div>
               <button className="mt-9 uppercase flex items-center gap-2 py-3  px-8 text-white font-semibold bg-black rounded-full">
                  {translation?.contact?.buttonText}{" "}
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
