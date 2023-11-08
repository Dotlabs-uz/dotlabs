import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { Router, useRouter } from "next/router";
import eng from "@/languages/eng/eng";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import TranslateContext from "@/context/useTranslate";
import { useState } from "react";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";


const myFont = localFont({ src: "../fonts/proximanova_regular.ttf" });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { locale } = router;

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
