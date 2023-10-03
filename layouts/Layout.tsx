import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="w-full bg-white">
        <div className="flex justify-between items-center py-4 w-full max-w-[1920px] my-0 mx-auto px-10">
          <div className="flex items-center gap-10">
            <Image src={"/icons/logo.svg"} alt="" width="80" height="80" />
            <nav className="flex items-center gap-6">
              <Link href="#" className="font-semibold">
                Home
              </Link>
              <Link href="#" className="font-semibold">
                Home
              </Link>
              <Link href="#" className="font-semibold">
                Home
              </Link>
              <Link href="#" className="font-semibold">
                Home
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 py-2 px-5 font-semibold">
              RU <TbWorld size="25" />
            </button>
            <button className="flex items-center gap-2 py-2 px-5 text-white font-semibold bg-main rounded-full">
              Перезвоните мне
              <BsTelephoneFill />
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full bg-white">
        <div className="flex items-start justify-between max-w-[1040px] w-full mx-auto">
          <nav className="flex flex-col items-start gap-3 ">
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
          </nav>
          <nav className="flex flex-col items-start gap-3 ">
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
            <Link href="#" className="font-semibold">
              Главная
            </Link>
          </nav>
          <div className="flex flex-col items-start">
            <Image
              src="/icons/black_logo.svg"
              alt=""
              width="80"
              height="44"
              className="mb-8"
            />
            <Link href="" className="font-semibold text-[44px]">
              +998 (99) 911-01-11
            </Link>
            <span className="font-semibold text-[22px] text-[#A3A7AC] ">
              Буюк Ипак Йули 52, Самарканд, Узбекистан
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
