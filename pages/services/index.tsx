import Layout from "@/layouts/Layout";
import Image from "next/image";
import React, { useContext } from "react";
import { FiFigma, FiServer, FiCode, FiArrowUpRight } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import serviceCss from "../../styles/services.module.scss";
import Head from "next/head";
import TranslateContext from "@/context/useTranslate";
import Link from "next/link";
import ModalHandelContext from "@/context/modalHandel";

export default function Index() {
    const translation: any = useContext(TranslateContext);
    const  { setModalHandel }: any = useContext(ModalHandelContext);

    
    
    return (
        <Layout>
            <Head>
                <title>Dot Labs - Services</title>
            </Head>
            <section className="pt-5 mx-auto">
                <div className="w-full md:w-[90%] max-w-[1440px] mx-auto px-5 h-full mb-12">
                    <div className=" w-full  lg:w-[70%] mb-7 ">
                        <h1 className=" text-3xl  md:text-5xl lg:text-6xl font-extrabold mb-3">
                            {translation?.servicesPage?.section1?.title}
                        </h1>
                        <p className=" text-lg sm:text-xl md:text-4xl md:font-normal leading-tight ">
                            {translation?.servicesPage?.section1?.pText}
                        </p>
                    </div>
                    <div className="w-full grid md:grid-cols-3 gap-6 ">
                        <div className="flex justify-between gap-4 md:block ">
                            <div>
                                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                                    <FiFigma className="text-[#068FFF] text-lg " />
                                </div>
                            </div>
                            <div>
                                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[0]?.title
                                    }
                                </h2>
                                <p className=" text-base font-normal leading-5 ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[0]?.text
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 md:block ">
                            <div>
                                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                                    <FiServer className="text-[#068FFF] text-lg " />
                                </div>
                            </div>
                            <div>
                                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[1]?.title
                                    }
                                </h2>
                                <p className=" text-base font-normal leading-5 ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[1]?.text
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 md:block ">
                            <div>
                                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                                    <FiCode className="text-[#068FFF] text-lg " />
                                </div>
                            </div>
                            <div>
                                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[2]?.title
                                    }
                                </h2>
                                <p className=" text-base font-normal leading-5 ">
                                    {
                                        translation?.servicesPage?.section1
                                            ?.bottomBlocks[2]?.text
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-[#068FFF] ">
                    <div className=" max-w-[1040px] mx-auto px-6 py-14 ">
                        <h2 className="uppercase text-xl w-[90%] md:text-5xl font-semibold  md:w-9/12 leading-snug text-white mb-5">
                            {translation?.servicesPage?.section2?.title}
                        </h2>
                        <p className="text-white text-base md:w-7/12 md:text-xl font-normal mb-5 ">
                            {translation?.servicesPage?.section2?.pText}
                        </p>
                        <Link href="/portfolio" >
                            <button className="border border-solid border-white font-normal uppercase px-6 py-2 rounded-full flex items-center justify-between text-white" >
                                {translation?.servicesPage?.section2?.buttonText}{" "}
                                <FiArrowUpRight className="text-white text-xl " />{" "}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-[90%] px-5 max-w-[1440px] mx-auto block relative md:flex items-center justify-between py-16 gap-8 ">
                    <div
                        className={`absolute top-14 md:top-0 md:relative right-0 w-72 -z-10   md:w-2/5 h-full  ${serviceCss.progectBg} `}
                    >
                        <Image
                            src="/images/services.png"
                            alt=""
                            width="500"
                            height="100"
                            className={`object-contain `}
                        />
                    </div>
                    <div className="w-full py-5 md:w-3/5 h-full  ">
                        <h1 className=" text-2xl md:text-[44px] md:leading-10 mb-3 font-semibold uppercase  ">
                            {translation?.servicesPage?.section3?.title}
                        </h1>
                        <ul className="mb-6 h-full ">
                            {translation?.servicesPage?.section3?.services.map(
                                (item: any) => (
                                    <li key={item?.id} className="flex items-center gap-2 text-xl md:text-2xl font-normal mb-3 ">
                                        <BsArrowReturnRight className="text-lg text-[#A3A7AC] " />{" "}
                                        {item?.text}
                                    </li>
								)
                            )}
                        </ul>
                        <button className="flex items-center gap-2 py-2 px-4 md:py-4 md:px-6 text-white font-medium text-sm md:text-lg bg-black rounded-full uppercase"
                            onClick={() => setModalHandel(true)}
                        >
                            {translation?.servicesPage?.section3?.button}{" "}
                            <BiRightArrowAlt
                                size="25"
                                className="font-normal"
                            />{" "}
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
