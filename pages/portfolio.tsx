import PortfolioContainer from "@/components/containers/PortfolioContainer";
import TranslateContext from "@/context/useTranslate";
import Layout from "@/layouts/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useContext } from "react";

interface PortfolioProps {}

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await fetch("https://dotlabs.uz/api/hello");

   const data = await res.json();

   return {
      props: { data },
   };
};

const Portfolio: React.FC<PortfolioProps> = ({ data }: any) => {
   const translation: any = useContext(TranslateContext);

   return (
      <Layout>
         <Head>
            <title>Dot Labs - Portfolio</title>
         </Head>
         d
         <section className="w-full md:w-[90%] max-w-[1400px] mx-auto px-5 pb-7">
            <div className="flex flex-col items-start gap-2 my-10">
               <h1 className="text-3xl md:text-6xl font-extrabold ">
                  {translation?.portfolio?.title}
               </h1>
               <p>{translation?.portfolio?.pText}</p>
            </div>
            <PortfolioContainer arr={data} />
         </section>
      </Layout>
   );
};

export default Portfolio;
