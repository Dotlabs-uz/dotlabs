import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPlayFill } from "react-icons/bs";
import ModalHandelContext from "@/context/modalHandel";

interface FirstSectionProps {
    translation: any;
}

const FirstSection: React.FC<FirstSectionProps> = ({ translation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const changeHandlerModal: any = useContext(ModalHandelContext);

    return (
        <section className="w-full flex justify-center items-center md:py-20">
            <div className="flex items-center justify-between flex-col md:flex-row gap-10 max-w-[1040px] mx-auto my-10 md:my-0 z-50 relative max-h-[600px] w-[90%]">
                <div className=" flex flex-col items-start gap-6 w-full">
                    <h1 className="text-5xl uppercase font-black">
                        <div className="flex items-center">
                            {translation?.section1?.h1Text1}
                            <div className="w-[75px] h-[35px] border-8 border-[#068FFF] rounded-full"></div>
                            {translation?.section1?.h1Text2}
                        </div>
                        <div className="">{translation?.section1?.h1Text3}</div>
                    </h1>
                    <p className="font-normal  text-lg text-[#747474] ">
                        {translation?.section1?.pText}
                    </p>
                    <button
                        onClick={() => changeHandlerModal(true)}
                        className="flex items-center gap-2 py-4 px-6 text-white font-semibold text-lg bg-black rounded-full uppercase"
                    >
                        {translation?.section1?.buttonText}
                    </button>
                </div>
                {!isOpen ? (
                    <div
                        className="hidden md:flex justify-center items-center w-full h-[256px] rounded-xl cursor-pointer bg-[url(/images/video.png)] bg-no-repeat bg-center bg-cover"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <BsFillPlayFill color="white" size="50" />
                    </div>
                ) : null}

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            animate={{ backgroundColor: "#0000008d" }}
                            className="fixed top-0 left-0 w-full h-full backdrop-blur-md"
                        >
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className={
                                    "bg-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[url(/images/video.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center w-[80%] h-[80%]"
                                }
                            >
                                <BsFillPlayFill color="white" size="50" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
export default FirstSection;
