import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Router, useRouter } from "next/router";
import eng from "@/languages/eng/eng";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import TranslateContext from "@/context/useTranslate";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import Script from "next/script";
import * as fbq from "../lib/fpixel";

const myFont = localFont({ src: "../fonts/proximanova_regular.ttf" });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { locale } = router;



    // useEffect(() => {
    //     // This pageview only triggers the first time (it's important for Pixel to have real information)
    //     fbq.pageview();
    
    //     const handleRouteChange = () => {
    //       fbq.pageview();
    //     };
    
    //     router.events.on("routeChangeComplete", handleRouteChange);
    //     return () => {
    //       router.events.off("routeChangeComplete", handleRouteChange);
    //     };
    //   }, [router.events]);



    const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;

    const [loading, setLoading] = useState(false);

    Router.events.on("routeChangeStart", () => {
        setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
        setLoading(false);
    });

    return (
        <>
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '280922751657091');
          fbq('track', 'PageView');
          fbq('track', 'Lead');
        `,
                }}
            ></Script>
            {loading ? (
                <Loader />
            ) : (
                <TranslateContext.Provider value={translation}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={myFont.style}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </TranslateContext.Provider>
            )}
        </>
    );
}
