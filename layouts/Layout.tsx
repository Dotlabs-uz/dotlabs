import React, { useContext } from "react";

import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Head from "next/head";
import Header from "@/components/Header";
import TranslateContext from "@/context/useTranslate";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const translation: any = useContext(TranslateContext);

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/icons/logo.svg"
                    type="image/x-icon"
                />
                <title>Dot Labs</title>
            </Head>
            <Header />
            <main>{children}</main>
            {/* <div className="h-[120px]" ></div> */}
            <Contact />
            <footer className="w-full bg-white my-10 px-6">
                <div className="flex items-start justify-between flex-col-reverse gap-4 md:flex-row max-w-[1040px] w-full mx-auto">
                    <div className="flex items-start justify-between w-full md:w-[50%]">
                        <nav className="flex flex-col items-start gap-3">
                            {translation?.header?.links.map((item: any) => (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className={`font-semibold`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <nav className="flex flex-col items-start gap-3">
                            {translation?.header?.links.map((item: any) => (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    className={`font-semibold`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-col items-start mb-5">
                        <Image
                            src="/icons/black_logo.svg"
                            alt=""
                            width="80"
                            height="44"
                            className="mb-8"
                        />
                        <Link
                            href=""
                            className="font-semibold text-[32px] md:text-[44px]"
                        >
                            +998 (99) 911-01-11
                        </Link>
                        <span className="font-semibold text-[14px] md:text-[22px] text-[#A3A7AC] ">
                            {translation?.footer?.adress}
                        </span>
                    </div>
                </div>
                <span className="block max-w-[1040px] w-full mx-auto mt-10 text-[#A3A7AC] ">
                    © Dot Labs 2023. {translation?.footer?.bottomText}
                </span>
            </footer>
        </>
    );
};

export default Layout;
