import Layout from "@/layouts/Layout";
import React from "react";
import { FiFigma, FiServer, FiCode } from "react-icons/fi";

export default function index() {
  return (
    <Layout>
      <section className="pt-5 mx-auto">
        <div className="w-full max-w-[1300px] mx-auto px-9 xl:px-0 sm:px-9 f-full mb-12">
          <div className="  lg:w-[70%] mb-7 ">
            <h1 className=" md:text-5xl lg:text-6xl font-extrabold mb-3">Чем мы занимаемся</h1>
            <p className="text-4xl font-normal leading-tight ">
              Мы - команда профессионалов, специализирующихся на создании
              веб-решений и разработке программного обеспечения.
            </p>
          </div>
          <div className="w-full grid grid-cols-3 gap-6 ">
            <div>
              <div className="w-12 h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                <FiFigma className="text-[#068FFF] text-lg " />
              </div>
              <h2 className="text-4xl font-bold mb-2  ">Инновации</h2>
              <p className="text-base font-normal leading-5 ">
                Мы всегда в поиске новых идей и технологических решений, чтобы
                удивлять и вдохновлять наших клиентов.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                <FiServer className="text-[#068FFF] text-lg " />
              </div>
              <h2 className="text-4xl font-bold mb-2  ">Инновации</h2>
              <p className="text-base font-normal leading-5 ">
                Мы всегда в поиске новых идей и технологических решений, чтобы
                удивлять и вдохновлять наших клиентов.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 border border-solid border-[#A3A7AC] rounded-full flex justify-center items-center mb-3">
                <FiCode className="text-[#068FFF] text-lg " />
              </div>
              <h2 className="text-4xl font-bold mb-2  ">Инновации</h2>
              <p className="text-base font-normal leading-5 ">
                Мы всегда в поиске новых идей и технологических решений, чтобы
                удивлять и вдохновлять наших клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
