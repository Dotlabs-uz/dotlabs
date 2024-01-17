import Image from "next/image";
import React from "react";

export default function OurGoal({item}:any) {
    return (
        <div>
            <div>
                <Image
                    src={`/images/${item.img}`}
                    alt=""
                    width="450"
                    height="100"
                    className="w-full mb-2 object-contain xl:mb-6 "
                />

                <h1 className=" text-xl xl:text-4xl font-bold  mb-2 ">
                    {item.title}
                </h1>
                <p className=" text-sm xl:text-base font-normal   ">
                    {item.text}
                </p>
            </div>
        </div>
    );
}
