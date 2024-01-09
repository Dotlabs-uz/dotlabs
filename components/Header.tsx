import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, useContext, useState } from "react";
import { BsFillTelephoneFill, BsTelephoneFill } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { Select } from "antd";
import TranslateContext from "@/context/useTranslate";

interface HeaderProps {
   setModalHandel: Dispatch<boolean>;
}

const Header: React.FC<HeaderProps> = ({ setModalHandel }) => {
   const router = useRouter();
   const { locale } = router;
   const { pathname } = router;

   const translation: any = useContext(TranslateContext);

   const [localeValue, setLocaleValue] = useState<any>(locale);

   const changeLang = (e: any) => {
      const locale = e;

      router.push(
         { pathname: router.pathname, query: router.query },
         router.asPath,
         { locale }
      );
      setLocaleValue(locale);
   };

   return (
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
                  {translation?.header?.links.map((item: any) => (
                     <Link
                        key={item.id}
                        href={item.path}
                        className={`font-semibold ${
                           pathname === item.path && "text-main underline"
                        }`}
                     >
                        {item.name}
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="flex items-center gap-5">
               <Select
                  defaultValue={localeValue}
                  style={{
                     width: "60px",
                     display: "flex",
                     justifyItems: "center",
                     justifyContent: "center",
                  }}
                  value={localeValue}
                  onChange={(e: any) => changeLang(e)}
                  options={[
                     {
                        value: "ru",
                        label: (
                           <p className="flex items-center gap-1">{"RU"}</p>
                        ),
                     },
                     {
                        value: "uz",
                        label: (
                           <span className="flex items-center gap-1">
                              {"UZ"}
                           </span>
                        ),
                     },
                     {
                        value: "en",
                        label: (
                           <span className="flex items-center gap-1">
                              {"EN"}
                           </span>
                        ),
                     },
                  ]}
               />
               <button
                  onClick={() => setModalHandel(true)}
                  className="hidden md:flex items-center gap-2 py-2 px-5 text-white font-semibold bg-main rounded-full"
               >
                  {translation?.header?.buttonText}
                  <BsTelephoneFill />
               </button>
               {/* <button className="md:hidden" onClick={changeLang}>
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
                    </button> */}
               <Link href="tel:+998905047494" className="md:hidden">
                  <BsFillTelephoneFill size="26" />
               </Link>
               <div className="md:hidden">
                  <Menu />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;

export const Menu = () => {
   const [open, setOpen] = useState<boolean>(false);
   const translation: any = useContext(TranslateContext);
   return (
      <>
         {!open ? (
            <button title="menu" onClick={() => setOpen(true)} className="mt-2">
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

                  <button title="menu" onClick={() => setOpen(false)}>
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
                     your sites to our global network from Git. Custom domains,
                     https, deploy previews, rollbacks and much more.
                  </p>
                  <ul className="text-start flex flex-col gap-1">
                     {translation?.header?.links.map((item: any) => (
                        <li key={item.id} onClick={() => setOpen(false)}>
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
