import React from "react";
import Layout from "@/layouts/Layout";
import OurGoal from "@/components/OurGoal";

// md:700
// sm: 600
// lg: 1024
// xl: 1280

export default function AboutUs() {
  return (
    <Layout>
      <section className=" pt-5 max-w-[1650px] mx-auto mb-32  ">
        <div className="w-full px-9 sm:px-9 xl:ml-10 xl:w-3/4 f-full mb-12  ">
          <p className="text-xl font-medium sm:text-4xl  sm:leading-snug mb-3  xl:text-5xl xl:font-semibold text-black xl:leading-tight xl:mb-10 ">
            <span className="text-[#068FFF] font-extrabold ">Наша цель</span> -
            помочь вам достичь онлайн-успеха, предоставляя инновационные решения
            и высокий уровень профессионализма.
          </p>
          <p className=" text-lg font-normal  sm:text-2xl  xl:text-4xl  leading-normal ">
            DOT LABS - Ваш надежный партнер в веб-разработке
          </p>
        </div>
        <section className="flex justify-center items-center gap-6  w-full max-w-[1500px] mx-auto" >
          <OurGoal/>
          <OurGoal/>
          <OurGoal/>
        </section>
      </section>
    </Layout>
  );
}
