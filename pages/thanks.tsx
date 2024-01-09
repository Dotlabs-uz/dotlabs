import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import TranslateContext from "@/context/useTranslate";

import Layout from "@/layouts/Layout";

interface ThanksProps {}

const Thanks: React.FC<ThanksProps> = () => {
   const translation: any = useContext(TranslateContext);

   return (
      <Layout>
         <Head>
            <title>Dot Labs - Thanks</title>
         </Head>
         <section className="max-w-[1200px] w-full m-auto my-10 px-5">
            <div className="">
               <h2 className="text-4xl max-lg:text-3xl font-semibold mb-1">
                  {translation?.thakns?.title}
               </h2>
               <p className="mb-5">{translation?.thakns?.title2}</p>
               <Link
                  href="tel:+998 (90) 504-74-94"
                  className="font-semibold text-[32px] md:text-[44px]"
               >
                  +998 (90) 504-74-94
               </Link>
            </div>
         </section>
      </Layout>
   );
};

export default Thanks;
