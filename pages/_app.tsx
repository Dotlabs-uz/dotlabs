import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import localFont from "next/font/local";
import { useRouter } from "next/router";
import eng from "@/languages/eng/eng";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import TranslateContext from "@/context/useTranslate";

const myFont = localFont({ src: "../fonts/proximanova_regular.ttf" });

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const { locale } = router;

    const translation = locale === "uz" ? uz : locale === "ru" ? ru : eng;

    return (
        <TranslateContext.Provider value={translation}>
            <div style={myFont.style}>
                <Component {...pageProps} />
            </div>
        </TranslateContext.Provider>
    );
}
