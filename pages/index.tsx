import Image from "next/image";
import Layout from "@/layouts/Layout";
import "swiper/css";
import ServicesCont from "@/components/containers/ServicesCont";
import PortfolioContainer from "@/components/containers/PortfolioContainer";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import TranslateContext from "@/context/useTranslate";
import ModalHandelContext from "@/context/modalHandel";
import FirstSection from "@/components/FirstSection";

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await fetch("https://dotlabs.uz/api/hello");

   const data = await res.json();

   return {
      props: { data },
   };
};

export default function Home({ data }: any) {
   const translation: any = useContext(TranslateContext);

   // useEffect(() => {
   //     const body: any = document.querySelector("body");

   //     if (isOpen) {
   //         body.style.overflow = "hidden";
   //     } else {
   //         body.style.overflow = "scroll";
   //     }
   // }, [isOpen]);

   return (
      <Layout>
         <div className="custom-bg bg-image"></div>
         <FirstSection translation={translation} />

         <section className="">
            <form className="max-w-[1400px] w-full m-auto flex max-sm:flex-col sm:items-center justify-center gap-20 max-lg:gap-10 max-sm:gap-5 bg-white shadow-md my-10 max-lg:my-5 py-5 px-5 rounded-lg">
               <div className="max-sm:w-full">
                  <h2 className="text-3xl max-md:text-2xl font-bold">
                     Оставьте заявку
                  </h2>
                  <p className="max-md:text-sm max-md:leading-4">
                     Пожалуйста, убедитесь, что правильно ввели данные.
                  </p>
                  <button className="mt-5 max-lg:mt-2 flex items-center max-md:text-xs gap-2 py-3 max-xl:py-2 px-6 text-white font-semibold text-base max-xl:text-base bg-black rounded-full uppercase max-sm:hidden">
                     ОСТАВИТЬ ЗАЯВКУ
                  </button>
               </div>
               <div className="max-w-md max-md:max-w-[250px] max-sm:max-w-full w-full">
                  <input
                     type="text"
                     placeholder="Имя"
                     className="w-full mb-5 max-md:mb-3 px-3 py-4 max-md:py-2 rounded-lg border"
                  />
                  <input
                     type="text"
                     placeholder="Номер"
                     className="w-full px-3 py-4 max-md:py-2 rounded-lg border"
                  />
               </div>
               <button className="w-fit py-2 px-6 text-white font-semibold bg-black rounded-full uppercase max-sm:block hidden">
                  ОСТАВИТЬ ЗАЯВКУ
               </button>
            </form>
         </section>

         <ServicesCont services={translation?.services_arr} />

         <section className="flex items-start justify-between flex-col md:flex-row gap-6 w-full md:w-[90%] max-w-[1400px] mx-auto relative px-5 my-[60px] md:my-[120px]">
            <div className="flex flex-col items-start gap-4 w-full">
               <Image
                  src="/icons/logo_text.svg"
                  alt=""
                  width="100"
                  height="50"
               />
               <h2 className="text-3xl  md:text-[44px] leading-[39px] md:leading-[53px] md:uppercase font-bold">
                  {translation?.section2?.title}{" "}
                  <span className="text-main my-0 mx-0">
                     {translation?.section2?.title2}
                  </span>
               </h2>
               <p className="font-normal md:text-lg text-[#747474]">
                  {translation?.section2?.pText}
               </p>
               <hr className="w-full" />
               <div className="flex items-center justify-between w-full gap-3">
                  <div className="flex flex-col items-start">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        78%
                     </span>
                     <span className="font-semibold text-[12px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
                  <div className="flex flex-col items-start md:border-l-[1px] md:border-r-[1px] md:px-10">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        20%
                     </span>
                     <span className="font-semibold text-[12px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
                  <div className="flex flex-col items-start">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        2.3М
                     </span>
                     <span className="font-semibold text-[12px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
               </div>
            </div>
            <div className="custom-shadow-sec custom-gradient w-full p-[10px] md:p-5 rounded-3xl h-full ">
               <div className="w-full bg-white flex flex-col items-center gap-5 text-center rounded-2xl py-7">
                  <h3 className="text-xl md:text-2xl font-normal md:font-bold">
                     {translation?.section2?.secontBlockTitle}
                  </h3>
                  <Image
                     src="/images/team3.png"
                     alt="team"
                     width="450"
                     height="80"
                  />
                  <p className="font-normal  text-[#747474] w-[90%]">
                     {translation?.section2?.secontBlockPText}
                  </p>
                  <div className="flex flex-row md:flex-col items-center gap-2 py-2 px-5 text-white bg-main rounded-xl">
                     <span className="text-sm font-semibold">
                        {translation?.section2?.blueButtonText}
                     </span>
                     <span className="text-xl md:text-3xl font-semibold md:font-bold">
                        24+
                     </span>
                  </div>
               </div>
            </div>
         </section>
         <section className="w-full md:w-[90%] max-w-[1400px] mx-auto px-5 pb-7">
            <h2 className="text-[44px] font-semibold mb-3 uppercase">
               {translation?.portfolio?.title}
            </h2>
            <PortfolioContainer arr={data} />
         </section>
      </Layout>
   );
}
