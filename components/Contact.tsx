import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-full bg-[#FFC000] ">
      <section className="max-w-[1040px] w-full mx-auto py-16">
        <h2 className="uppercase text-5xl font-semibold mb-16 leading-normal ">
          Расскажите о задачах, <br /> мы оперативно свяжемся:
        </h2>
        <form className="w-full flex justify-between items-center ">
          <label className="relative w-2/5">
            <input
              type="text"
              id="name"
              className=" w-full h-14 pt-2 bg-transparent border-b-2 border-b-[#000] text-black outline-none transition duration-200"
            />
            <span className="text-2xl font-semibold transition duration-200 absolute top-2 left-0 input-text ">
              Имя
            </span>
          </label>
          <label className="relative w-2/5 ">
            <input
              type="tel"
              className="w-full h-14 pt-2 bg-transparent border-b-2 border-b-[#000] text-black outline-none transition duration-200"
            />
            <span className="text-2xl font-semibold  transition duration-200 absolute top-2 left-0 input-text ">
              Номер телефона
            </span>
          </label>
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
