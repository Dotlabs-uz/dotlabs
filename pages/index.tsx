import Image from "next/image";
import Layout from "@/layouts/Layout";
import "swiper/css";
import ServicesCont from "@/components/containers/ServicesCont";
import PortfolioContainer from "@/components/containers/PortfolioContainer";
import { BsFillPlayFill } from "react-icons/bs";
import { GetServerSideProps } from "next";
import { useContext, useState } from "react";
import TranslateContext from "@/context/useTranslate";
import { motion } from "framer-motion";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch("https://dotlabs.uz/api/hello");

    const data = await res.json();

    return {
        props: { data },
    };
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 1,
        },
    }),
    closed: {
        clipPath: "circle(0 at 50% 50%)",
        transition: {
            type: "spring",
            stiffness: 10,
            damping: 1000,
        },
    },
};

export default function Home({ data }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const translation: any = useContext(TranslateContext);

    return (
        <Layout>
            <div className="custom-bg bg-image"></div>
            <section className="w-full flex justify-center items-center md:py-20">
                <div className="flex items-center justify-between flex-col md:flex-row gap-10 max-w-[1040px] mx-auto my-10 md:my-0 z-50 relative max-h-[600px] w-[90%]">
                    <div className=" flex flex-col items-start gap-6 w-full">
                        <h1 className="text-5xl uppercase font-black">
                            <div className="flex items-center">
                                {translation?.section1?.h1Text1}
                                <div className="w-[75px] h-[35px] border-8 border-[#068FFF] rounded-full"></div>
                                {translation?.section1?.h1Text2}
                            </div>
                            <div className="">
                                {translation?.section1?.h1Text3}
                            </div>
                        </h1>
                        <p className="font-normal  text-lg text-[#747474] ">
                            {translation?.section1?.pText}
                        </p>
                        <button className="flex items-center gap-2 py-4 px-6 text-white font-semibold text-lg bg-black rounded-full uppercase">
                            {translation?.section1?.buttonText}
                        </button>
                    </div>
                    <div
                        className="hidden md:flex justify-center items-center w-full h-[256px] rounded-xl cursor-pointer bg-[url(/images/video.png)] bg-no-repeat bg-center bg-cover"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <BsFillPlayFill color="white" size="50" />
                    </div>
                    <motion.div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center w-full h-screen bg-[royalblue] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={isOpen ? "open" : "closed"}
                        variants={sidebar}
                    >
                        <h1 className="text-6xl text-black">Клик</h1>
                    </motion.div>
                </div>
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
