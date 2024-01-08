import Image from "next/image";
import Layout from "@/layouts/Layout";
import "swiper/css";
import ServicesCont from "@/components/containers/ServicesCont";
import PortfolioContainer from "@/components/containers/PortfolioContainer";
import { GetServerSideProps } from "next";
import { useContext, useEffect, useState} from "react";
import TranslateContext from "@/context/useTranslate";
import ModalHandelContext from "@/context/modalHandel";
import FirstSection from "@/components/FirstSection";
import axios from "axios";

// export const getServerSideProps: GetServerSideProps = async () => {
//     const res = await fetch("https://dotlabs.uz/api/hello");

//     const data = await res.json();

//     return {
//         props: { data },
//     };
// };

export default function Home() {
    const translation: any = useContext(TranslateContext);  
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/hello")
            .then(res =>{
                if(res.status === 200 || res.status === 201) {
                    setData(res.data)
                }
            })
            .catch(err => console.log("error", err))
    }, []);

    return (
        <Layout>
            <div className="custom-bg bg-image"></div>
            <FirstSection translation={translation}/>

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
