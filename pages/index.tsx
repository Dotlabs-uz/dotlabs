import Image from "next/image";
import Layout from "@/layouts/Layout";
import "swiper/css";
import ServicesCont from "@/components/containers/ServicesCont";
import PortfolioContainer from "@/components/containers/PortfolioContainer";
import { useContext, useEffect, useState } from "react";
import TranslateContext from "@/context/useTranslate";
import FirstSection from "@/components/FirstSection";
import axios from "axios";
import InputMask from "react-input-mask";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import * as fbq from "../lib/fpixel";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Home() {
    const translation: any = useContext(TranslateContext);
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { push } = useRouter();
    type userData = { name: string; phone: string };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<userData>();

    const onSubmit: SubmitHandler<userData> = async (data) => {
        setLoader(true);
        try {
            axios
                .post(`${process.env.NEXT_PUBLIC_TOKEN}/applications`, data)
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        reset();
                        push("/thanks");
                        setLoader(false);
                        fbq.event("Заявка отправлена", { value: 1 });
                    }
                });
        } catch (e: any) {
            throw new Error(e.message);
        }
    };

    // console.log(getPortfolios());

    useEffect(() => {
        axios
        	.get("https://dotlabs-admin.vercel.app/api/portfolios")
        	.then((res) => {
        		if (res.status === 200 || res.status === 201) {
        			setData(res.data);
        			// console.log(res.data);
        		}
        	})
        	.catch((err) => console.log("error", err));
    }, []);

    return (
        <Layout>
            {loader ? (
                <div className="w-full h-screen fixed top-0 left-0 flex z-[400] bg-white/30 backdrop-blur-sm">
                    <div className="w-16 h-16 m-auto rounded-full animate-spin border-r border-black"></div>
                </div>
            ) : null}

            <div className="custom-bg bg-image"></div>
            <FirstSection translation={translation} />

            <section className="w-full">
                <form
                    id="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-[1400px] w-full m-auto flex max-sm:flex-col sm:items-center justify-center gap-20 max-lg:gap-10 max-sm:gap-5 bg-white shadow-md my-10 max-lg:my-5 py-5 px-5 rounded-lg"
                >
                    <div className="max-sm:w-full">
                        <h2 className="text-3xl max-md:text-2xl font-bold">
                            {translation?.contact?.title1}
                        </h2>
                        <p className="max-md:text-sm max-md:leading-4">
                            {translation?.contact?.title2}
                        </p>
                        <button className="mt-5 max-lg:mt-2 flex items-center max-md:text-xs gap-2 py-3 max-xl:py-2 px-6 text-white font-semibold text-base max-xl:text-base bg-[#068FFF] rounded-full uppercase max-sm:hidden">
                            {translation?.contact?.buttonText}
                        </button>
                    </div>
                    <div className="max-w-md max-md:max-w-[250px] max-sm:max-w-full w-full">
                        <input
                            {...register("name", {
                                required: true,
                            })}
                            type="text"
                            placeholder={translation?.contact?.inputName}
                            className="w-full mb-5 max-md:mb-3 px-3 py-4 max-md:py-2 rounded-lg border"
                        />
                        <InputMask
                            mask="+\9\98-(99)-999-99-99"
                            type="text"
                            {...register("phone", {
                                required: true,
                            })}
                            placeholder={translation?.contact?.inputNumber}
                            className="w-full px-3 py-4 max-md:py-2 rounded-lg border"
                        />
                    </div>
                    <button className="w-fit py-2 px-6 text-white font-semibold bg-[#068FFF] rounded-full uppercase max-sm:block hidden">
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
                    {/* <hr className="w-full" /> */}
                    {/* <div className="flex items-center justify-between max-sm:justify-center w-full gap-3 max-sm:flex-wrap">
                  <div className="flex flex-col items-start max-sm:items-center">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        78%
                     </span>
                     <span className="font-semibold text-[10px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
                  <div className="flex flex-col items-start max-sm:items-center md:border-l-[1px] md:border-r-[1px] md:px-10">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        20%
                     </span>
                     <span className="font-semibold text-[10px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
                  <div className="flex flex-col items-start max-sm:items-center">
                     <span className="font-semibold text-3xl md:text-[44px]">
                        2.3М
                     </span>
                     <span className="font-semibold text-[10px] md:text-sm text-[#747474]">
                        {translation?.section2?.persentText}
                     </span>
                  </div>
               </div> */}
                </div>
                <div className="custom-gradient w-full p-[10px] md:p-5 rounded-3xl h-full ">
                    <div className="shadow w-full bg-white flex flex-col items-center gap-5 text-center rounded-2xl py-7">
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
                        <Link href="/about#team">
                            <div className="hover:scale-[1.1] transition-all flex flex-row md:flex-col items-center gap-2 py-2 px-5 text-white bg-main rounded-xl">
                                <span className="text-sm font-semibold">
                                    {translation?.section2?.blueButtonText}
                                </span>
                                <span className="text-xl md:text-3xl font-semibold md:font-bold">
                                    24+
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="my-20">
                <HeroParallax products={data} translation={translation} />
            </section>
            <center className="mb-10">
                <Link
                    href={"/portfolio"}
                    className="text-xl font-bold underline hover:text-blue-500"
                >
                    Посмотреть все работы
                </Link>
            </center>
            {/* <section className="w-full md:w-[90%] max-w-[1400px] mx-auto px-5 pb-7">
				<h2 className="text-[44px] font-semibold mb-3 uppercase">
					{translation?.portfolio?.title}
				</h2>
				<PortfolioContainer arr={data} />
			</section> */}
        </Layout>
    );
}
