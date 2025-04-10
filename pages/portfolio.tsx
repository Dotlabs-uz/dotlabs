import PortfolioContainer from "@/components/containers/PortfolioContainer";
import TranslateContext from "@/context/useTranslate";
import Layout from "@/layouts/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useContext } from "react";

interface PortfolioProps {}

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_TOKEN}/portfolios`);

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

            {/* Open Graph / Facebook */}
            <meta property="og:title" content="Dot Labs - Portfolio" />
            <meta property="og:description" content="Check out our latest portfolio of projects at Dot Labs." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dotlabs.uz/portfolio" />
            <meta property="og:image" content="https://dotlabs.uz/images/og-image.jpg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Dot Labs - Portfolio" />
            <meta name="twitter:description" content="Check out our latest portfolio of projects at Dot Labs." />
            <meta name="twitter:image" content="https://dotlabs.uz/images/og-image.jpg" />
         </Head>
         
         <section className="w-full md:w-[90%] max-w-[1400px] mx-auto px-5 pb-7">
            <div className="flex flex-col items-start gap-2 my-10">
               <h1 className="text-3xl md:text-6xl font-extrabold " 
                  dangerouslySetInnerHTML={{
                     __html: translation?.portfolio?.title
                  }}
               />
               <p>{translation?.portfolio?.pText}</p>
            </div>
            <PortfolioContainer arr={data} />
         </section>
      </Layout>
   );
};

export default Portfolio;
