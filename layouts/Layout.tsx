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

type Inputs = {
   userName: string;
   phone: string;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const translation: any = useContext(TranslateContext);
   const modalHandelContext: any = useContext(ModalHandelContext);

   const [modalHandel, setModalHandel] = useState<boolean>(false);

   const changeHandlerModal = (event: boolean) => {
      setModalHandel(event);
   };

   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
   } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
                  setModalHandel(false);
               }
            });
      } catch (e) {
         console.log(e);
      }
   };

   return (
      <ModalHandelContext.Provider value={changeHandlerModal}>
         <Head>
            <link
               rel="shortcut icon"
               href="/icons/logo.svg"
               type="image/x-icon"
            />
            <title>Dot Labs</title>
         </Head>
         <Header setModalHandel={setModalHandel} />

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
                        {...register("userName", {
                           required: true,
                           pattern: {
                              value: /^[a-zA-Z ,ЁёА-я ']*$/,
                              message: "Введите только буквы!",
                           },
                        })}
                        className="mt-5 w-full border border-1 p-3 rounded-md"
                     />
                     {errors.userName ? (
                        <p className="text-[red] text-sm mt-1">
                           {errors.userName.message}
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
                  <p className="mt-4 text-sm">{translation?.modal?.warring}</p>
               </div>
            </div>
         ) : null}
      </ModalHandelContext.Provider>
   );
};

export default Layout;
