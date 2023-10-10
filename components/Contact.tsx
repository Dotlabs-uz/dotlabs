import React, { useState } from "react";

export default function Contact() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full h-full bg-[#FFC000] ">
      <section className="max-w-[1040px] w-full mx-auto py-16">
        <h2 className="uppercase text-5xl font-semibold mb-16 leading-normal ">
          Расскажите о задачах, <br /> мы оперативно свяжемся:
        </h2>
        <form className="w-full flex justify-between items-center relative ">
          <div className="w-2/5 relative ">
            <input
              type="text"
              id="name"
              autoFocus
              placeholder=" "
              className="relative z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer"
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold"
            >
              Имя
            </label>
          </div>
          <div className="w-2/5 relative ">
            <input
              type="tel"
              id="tel"
              autoFocus
              placeholder=" "
              name="tel"
              className="relative z-10 bg-transparent border-b-2 border-b-[#000] w-full h-14 text-black pt-2 outline-none peer"
            />
            <label className="peer-focus:font-medium absolute text-black  duration-500 transform -translate-y-5 scale-75 top-3 left-0  origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0   text-2xl font-semibold">
              Номер телефона
            </label>
          </div>
          <button className=" uppercase hidden md:flex items-center gap-2 py-3 px-8 text-white font-semibold bg-black rounded-full">
            отправить{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 17L17 7"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 7H17V17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </button>
        </form>
      </section>
    </div>
  );
}
