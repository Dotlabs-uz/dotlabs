import Image from "next/image";
import React from "react";

function Loader() {
   return (
      <div className="w-full h-screen bg-[#dcdcdc] flex items-center justify-center">
         <Image
            src={"/icons/logo_text.svg"}
            alt={"logo"}
            width={100}
            height={100}
            className="animate-pulse animate-infinite animate-duration-[3000ms] animate-ease-linear w-[20%] z-10"
         ></Image>
      </div>
   );
}

export default Loader;