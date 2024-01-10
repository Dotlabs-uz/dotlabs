import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPlayFill } from "react-icons/bs";
import ModalHandelContext from "@/context/modalHandel";
import Image from "next/image";
import Link from "next/link";

interface FirstSectionProps {
   translation: any;
}

const FirstSection: React.FC<FirstSectionProps> = ({ translation }) => {
   const [isOpen, setIsOpen] = useState(false);
   const changeHandlerModal: any = useContext(ModalHandelContext);

   return (
      <section className="w-full flex justify-center items-center md:py-20">
         <div className="flex items-center justify-between flex-col md:flex-row gap-10 max-w-[1040px] mx-auto my-10 md:my-0 z-50 relative w-[90%]">
            <div className=" flex flex-col items-start gap-6 max-xl:gap-4 w-full">
               <h1 className="text-white text-5xl max-xl:text-4xl max-lg:text-3xl max-sm:text-2xl leading-[60px] max-xl:leading-[50px] max-lg:leading-[40px] uppercase font-black">
                  {translation?.section1?.title}
               </h1>
               <Link
                  href="#form"
                  className="w-fit py-2 px-6 text-sm font-semibold rounded-full uppercase max-sm:block hidden text-white bg-[#068FFF]"
               >
                  ОСТАВИТЬ ЗАЯВКУ
               </Link>
               <div className="max-w-[300px] w-full m-auto max-md:block hidden relative my-2">
                  <img
                     className="w-full"
                     src={"/images/macbook.png"}
                     // width={1000}
                     // height={1000}
                     alt="photo"
                  />
                  <img
                     className="absolute top-8 -left-3 max-w-[80px]"
                     src={"/images/iphone.png"}
                     // width={1000}
                     // height={1000}
                     alt="photo"
                  />
               </div>
               <p className="font-normal text-xl max-lg:text-lg max-md:text-base max-sm:leading-5 text-[#747474]">
                  {translation?.section1?.pText}
               </p>
               {/* <button
                  onClick={() => changeHandlerModal(true)}
                  className="flex items-center gap-2 py-4 max-xl:py-2 px-6 text-white font-semibold text-lg max-xl:text-base bg-black rounded-full uppercase"
               >
                  {translation?.section1?.buttonText}
               </button> */}
            </div>
            <div className="max-w-[410px] w-full max-md:hidden relative">
               <img
                  className="max-w-[500px] max-xl:max-w-[400px] max-lg:max-w-[350px]"
                  src={"/images/macbook.png"}
                  // width={1000}
                  // height={1000}
                  alt="photo"
               />
               <img
                  className="max-w-[150px] max-xl:max-w-[120px] max-lg:max-w-[110px] w-full absolute -left-10 max-xl:-left-5 top-14 max-xl:top-10"
                  src={"/images/iphone.png"}
                  // width={1000}
                  // height={1000}
                  alt="photo"
               />
            </div>
            {/* {!isOpen ? (
               <div
                  className="hidden md:flex justify-center items-center w-full h-[256px] rounded-xl cursor-pointer bg-[url(/images/video.png)] bg-no-repeat bg-center bg-cover"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <BsFillPlayFill color="white" size="50" />
               </div>
            ) : null} */}

            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     animate={{ backgroundColor: "#0000008d" }}
                     className="fixed top-0 left-0 w-full h-full backdrop-blur-md"
                  >
                     <div
                        onClick={() => setIsOpen(!isOpen)}
                        className={
                           "bg-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[url(/images/video.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center w-[80%] h-[80%]"
                        }
                     >
                        <BsFillPlayFill color="white" size="50" />
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </section>
   );
};
export default FirstSection;
