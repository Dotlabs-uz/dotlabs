import React from "react";
import Layout from "@/layouts/Layout";
import OurGoal from "@/components/OurGoal";
import Team from "@/components/Team";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";


import { Grid } from "swiper/modules";

// md:700
// sm: 600
// lg: 1024
// xl: 1280

export default function AboutUs() {
  const team = [
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
    {
      name: "Алексей Задорожный",
      position: "Дизайн-директор, основатель",
      img: "/images/aboutTeamImg.png",
    },
  ];

  return (
    <Layout>
      <section className=" pt-5  mx-auto mb-32  ">
        <div className="w-full max-w-[1650px] px-9 sm:px-9 xl:ml-10 xl:w-3/4 f-full mb-12  ">
          <p className="text-xl font-medium sm:text-4xl  sm:leading-snug mb-3  xl:text-5xl xl:font-semibold text-black xl:leading-tight xl:mb-10 ">
            <span className="text-[#068FFF] font-extrabold ">Наша цель</span> -
            помочь вам достичь онлайн-успеха, предоставляя инновационные решения
            и высокий уровень профессионализма.
          </p>
          <p className=" text-lg font-normal  sm:text-2xl  xl:text-4xl  leading-normal ">
            DOT LABS - Ваш надежный партнер в веб-разработке
          </p>
        </div>

        <section className=" w-full  px-8 grid md:grid-cols-2 md:px-8 lg:px-8  lg:grid-cols-3  xl:grid-cols-3 xl:px-0 gap-5 max-w-[1500px] mx-auto mb-14 ">
          <OurGoal />
          <OurGoal />
          <OurGoal />
        </section>

        <section className="w-full   h-full aboutBg  py-16 ">
          <h1 className="text-white mx-8 text-2xl lg:mx-16 xl:mx-52 lg:text-4xl uppercase font-semibold mb-10">
            наши принципы
          </h1>
          <div className="w-full px-8 lg:px-16 xl:pl-52 xl:pr-20 grid lg:grid-cols-2 xl:grid-cols-2 ">
            <div className="w-full   mb-6 lg:pr-16 lg:mb-14">
              <h1 className="text-[#A3A7AC] text-2xl md:text-3xl lg:text-3xl font-normal mb-4 ">
                1.
              </h1>
              <p className="text-white text-lg md:text-2xl lg:text-2xl">
                Всегда искренны с клиентами. Слышим, предлагаем и стараемся быть
                гибкими, не боимся говорить «нет».
              </p>
            </div>
            <div className="w-full mb-6 lg:pr-16 lg:mb-14">
              <h1 className="text-[#A3A7AC] text-2xl md:text-3xl lg:text-3xl font-normal mb-4 ">
                2.
              </h1>
              <p className="text-white text-lg md:text-2xl lg:text-2xl">
                Нацелены не только на качественный результат, но и на комфортный
                и понятный процесс решения клиентских задач.
              </p>
            </div>
            <div className="w-full mb-6 lg:pr-16 lg:mb-14">
              <h1 className="text-[#A3A7AC] text-2xl md:text-3xl lg:text-3xl font-normal mb-4 ">
                3.
              </h1>
              <p className="text-white text-lg md:text-2xl lg:text-2xl">
                Не берем проекты с политическим подтекстом. Имеем свой взгляд и
                допускаем наличие других точек зрения.
              </p>
            </div>
            <div className="w-full mb-6 lg:pr-16 lg:mb-14">
              <h1 className="text-[#A3A7AC] text-2xl md:text-3xl lg:text-3xl font-normal mb-4 ">
                4.
              </h1>
              <p className="text-white text-lg md:text-2xl lg:text-2xl">
                Не участвуем в фиктивных тендерах, различных закупках, бартерных
                проектах и прочих непрозрачных схемах.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1650px] mx-auto h-full  pt-10 pl-7  md:px-16 md:py-16  ">
          <h1 className="text-4xl font-semibold mb-10 uppercase ">команда</h1>
          <div className="w-full h-full hidden  sm:hidden md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            {team.map((item, index) => (
              <Team
                key={index}
                name={item.name}
                position={item.position}
                img={item.img}
              />
            ))}
          </div>
        </section>
        <div className="block w-full px-5 mb-10  md:hidden ">
          <Swiper
            slidesPerView={1.8}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Grid]}
            className="mySwiper"
          >
            {team.map((item, index) => (
              <SwiperSlide className="mr-4 h-48 " key={index}>
                <Team
                  name={item.name}
                  position={item.position}
                  img={item.img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  );
}
