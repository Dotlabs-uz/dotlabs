import Image from "next/image";
import React from "react";

export default function OurGoal() {
  return (
    <div>
      <div  >
        <Image
          src="/images/company-1.png"
          alt=""
          width="450"
          height="100"
          className="w-full mb-2 object-contain xl:mb-6 "
        />

        <h1 className=" text-xl xl:text-4xl font-bold  mb-2 ">Инновации</h1>
        <p className=" text-sm xl:text-base font-normal   ">
          Мы всегда в поиске новых идей и технологических решений, чтобы
          удивлять и вдохновлять наших клиентов.
        </p>
      </div>
    </div>
  );
}
