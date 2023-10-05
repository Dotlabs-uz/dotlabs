import Image from "next/image";
import React from "react";

interface Props {
  name: String;
  position: String;
  img: String;
}

export default function Team({ name, position, img }: Props) {
  return (
    <div className="mb-6" >
      <div>
        <Image
          src={String(img)}
          alt=""
          width="450"
          height="100"
          className="w-full  object-contain xl:mb-4 "
        />
        <h1 className="text-2xl font-semibold mb-1 " >{name}</h1>
        <p className="text-lg font-normal " >{position}</p>
      </div>
    </div>
  );
}
