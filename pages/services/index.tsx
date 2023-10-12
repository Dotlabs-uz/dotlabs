import Layout from "@/layouts/Layout";
import Image from "next/image";
import React from "react";
import { FiFigma, FiServer, FiCode, FiArrowUpRight } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

export default function index() {
  return (
    <Layout>
      <section className="pt-5 mx-auto">
        <div className="w-full max-w-[1300px] mx-auto px-9 xl:px-0 sm:px-9 f-full mb-12">
          <div className=" w-full  lg:w-[70%] mb-7 ">
            <h1 className=" text-3xl  md:text-5xl lg:text-6xl font-extrabold mb-3">
              Чем мы занимаемся
            </h1>
            <p className=" text-lg sm:text-xl md:text-4xl md:font-normal leading-tight ">
              Мы - команда профессионалов, специализирующихся на создании
              веб-решений и разработке программного обеспечения.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 gap-6 ">
            <div className="flex justify-between gap-4 md:block ">
              <div>
                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                  <FiFigma className="text-[#068FFF] text-lg " />
                </div>
              </div>
              <div>
                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                  Инновации
                </h2>
                <p className=" text-base font-normal leading-5 ">
                  Мы всегда в поиске новых идей и технологических решений, чтобы
                  удивлять и вдохновлять наших клиентов.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 md:block ">
              <div>
                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                  <FiServer className="text-[#068FFF] text-lg " />
                </div>
              </div>
              <div>
                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                  Инновации
                </h2>
                <p className=" text-base font-normal leading-5 ">
                  Мы всегда в поиске новых идей и технологических решений, чтобы
                  удивлять и вдохновлять наших клиентов.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 md:block ">
              <div>
                <div className="w-12 h-12 md:w-12 md:h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                  <FiCode className="text-[#068FFF] text-lg " />
                </div>
              </div>
              <div>
                <h2 className=" text-xl md:text-4xl font-bold mb-2  ">
                  Инновации
                </h2>
                <p className=" text-base font-normal leading-5 ">
                  Мы всегда в поиске новых идей и технологических решений, чтобы
                  удивлять и вдохновлять наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#068FFF] ">
          <div className=" max-w-[1040px] mx-auto px-6 py-14 ">
            <h2 className="uppercase text-xl w-[90%] md:text-5xl font-semibold  md:w-9/12 leading-snug text-white mb-5">
              посмотрите реализованные <br /> проекты
            </h2>
            <p className="text-white w-7/12 text-xl font-normal mb-5 ">
              Наши работы - это не просто проекты, это истории успеха, и мы
              гордимся ими. Посмотрите нашу коллекцию, и вы убедитесь, как мы
              помогли другим клиентам достичь своих целей и преуспеть в онлайне.
              Ваша история успеха может быть следующей
            </p>
            <button className="border border-solid border-white font-normal uppercase px-6 py-2 rounded-full flex items-center justify-between text-white">
              перейти <FiArrowUpRight className="text-white text-xl " />{" "}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1300px] mx-auto flex items-center justify-between py-16 gap-8 ">
          <div className="w-2/5 h-full ">
            <Image
              src="/images/services.png"
              alt=""
              width="500"
              height="100"
              className="object-contain"
            />
          </div>
          <div className="w-3/5 h-full  ">
            <h1 className="text-[44px] font-semibold uppercase  ">
              проекты любой сложности
            </h1>
            <ul className="mb-6 h-full ">
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Разработка веб-сайтов
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Разработка мобильных приложений
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Разработка CRM-систем
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Веб-дизайн и UI/UX разработка
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> SEO и поисковая оптимизация
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Электронная коммерция и онлайн-магазины
              </li>
              <li className="flex items-center gap-2 text-2xl font-normal mb-3 ">
                <BsArrowReturnRight /> Веб-хостинг и обслуживание
              </li>
            </ul>
            <button className="flex items-center gap-2 py-4 px-6 text-white font-medium text-lg bg-black rounded-full uppercase">
              проконсультироваться{" "}
              <BiRightArrowAlt size="25" className="font-normal" />{" "}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
