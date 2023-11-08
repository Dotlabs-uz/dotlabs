import Layout from "@/layouts/Layout";
import Image from "next/image";

import { motion } from "framer-motion";

interface PageProjectProps {}

// md:700
// sm: 600
// lg: 1024
// xl: 1280

const PageProject: React.FC<PageProjectProps> = () => {
   return (
      <Layout>
         <section>
            <div className="custom-container flex max-md:flex-col max-md:gap-10 items-center justify-around py-20 max-md:py-10 mb-20">
               <motion.div
                  initial={{
                     opacity: 0,
                     x: -50,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,

                     transition: {
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-2/5 max-md:w-full flex flex-col max-md:items-center"
               >
                  <div className="mb-5">
                     <p className="text-lg text-gray-400">
                        Main page / Portfolio /
                        <span className="text-black"> Polyglot</span>
                     </p>
                  </div>

                  <div className="flex flex-col max-md:items-center mb-9 max-md:mb-5">
                     <div className="mb-5 flex items-end gap-1">
                        <div className="w-11 h-11 rounded-lg bg-black"></div>

                        <h3 className="text-5xl max-xl:text-4xl font-semibold text-[#060e29]">
                           polyglot
                        </h3>
                     </div>

                     <p className="text-2xl max-xl:text-xl max-lg:text-base font-semibold max-md:text-center text-gray-900">
                        Explore options, book trips, check-in, and move easily
                        through airports. Find all the flight information that
                        matters to you, when it matters.
                     </p>
                  </div>

                  <div className="">
                     <button className="px-9 py-2 text-xl font-sans font-medium rounded-md bg-[#2e51ed] text-white">
                        перейти →
                     </button>
                  </div>
               </motion.div>
               <motion.div
                  initial={{
                     opacity: 0,
                     x: 50,
                  }}
                  whileInView={{
                     x: 0,
                     opacity: 1,

                     transition: {
                        duration: 0.5,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="w-2/5 max-lg:w-1/2 max-md:w-full"
               >
                  <Image
                     src={"/images/portfolio/polyglot.webp"}
                     width={1000}
                     height={1000}
                     alt="logo"
                  />
               </motion.div>
            </div>
         </section>

         <section className="overflow-hidden">
            <div className="">
               <h2 className="text-center text-4xl font-semibold">
                  Our success story with
               </h2>
               <h3 className="text-center text-4xl font-semibold text-blue-500">
                  Kia Access
               </h3>
            </div>

            <div className="custom-container mt-10">
               <div className="flex max-lg:flex-col items-center justify-center gap-20 max-xl:gap-16 max-lg:gap-10 mb-32 max-md:mb-10">
                  <motion.div
                     initial={{
                        opacity: 0,
                        x: -50,
                     }}
                     whileInView={{
                        x: 0,
                        opacity: 1,

                        transition: {
                           duration: 0.5,
                           ease: "easeIn",
                        },
                     }}
                     className="w-[40%] max-lg:w-full"
                  >
                     <h3 className="mb-5 text-4xl font-semibold max-sm:text-center text-blue-700">
                        Step 1: Investigation
                     </h3>
                     <p className="text-[20px] max-xl:text-[18px] leading-7 max-xl:leading-6 text-[#060e29]">
                        When we developed the KIA Access app, we recognized the
                        technical challenges that come with ensuring hardware
                        compatibility, third-party integrations, and regulatory
                        compliance. Our approach involved prioritizing these
                        considerations early in the development process to
                        ensure a successful and compliant app launch. Through
                        careful planning and execution, we ensured that the app
                        worked seamlessly with KIA Access-enabled devices,
                        integrated smoothly with third-party services, and met
                        all necessary regulatory requirements. By addressing
                        these challenges proactively, we were able to deliver a
                        robust and reliable app that met our clients needs and
                        exceeded user expectations.
                     </p>
                  </motion.div>
                  <motion.div
                     initial={{
                        opacity: 0,
                        x: 50,
                     }}
                     whileInView={{
                        x: 0,
                        opacity: 1,

                        transition: {
                           duration: 0.5,
                           ease: "easeIn",
                        },
                     }}
                     className="w-[30%] max-lg:w-1/2 max-sm:w-[90%]"
                  >
                     <img
                        className="w-full"
                        src={
                           "https://assets-global.website-files.com/640a0c11a624000a6dc63cad/6481062e326dd238191a3581_IMAGE%201-p-500.png"
                        }
                        alt="photo"
                     />
                  </motion.div>
               </div>
               <div className="flex max-lg:flex-col-reverse items-center justify-center gap-20 max-xl:gap-16 max-lg:gap-10 mb-32">
                  <motion.div
                     initial={{
                        opacity: 0,
                        x: -50,
                     }}
                     whileInView={{
                        x: 0,
                        opacity: 1,

                        transition: {
                           duration: 0.5,
                           ease: "easeIn",
                        },
                     }}
                     className="w-[30%] max-lg:w-1/2 max-sm:w-[90%]"
                  >
                     <img
                        className="w-full"
                        src={
                           "https://assets-global.website-files.com/640a0c11a624000a6dc63cad/6481062e326dd238191a3581_IMAGE%201-p-500.png"
                        }
                        alt="photo"
                     />
                  </motion.div>
                  <motion.div
                     initial={{
                        opacity: 0,
                        x: 50,
                     }}
                     whileInView={{
                        x: 0,
                        opacity: 1,

                        transition: {
                           duration: 0.5,
                           ease: "easeIn",
                        },
                     }}
                     className="w-[40%] max-lg:w-full"
                  >
                     <h3 className="mb-5 text-4xl font-semibold max-sm:text-center text-blue-700">
                        Step 1: Investigation
                     </h3>
                     <p className="text-[20px] max-xl:text-[18px] leading-7 max-xl:leading-6 text-[#060e29]">
                        When we developed the KIA Access app, we recognized the
                        technical challenges that come with ensuring hardware
                        compatibility, third-party integrations, and regulatory
                        compliance. Our approach involved prioritizing these
                        considerations early in the development process to
                        ensure a successful and compliant app launch. Through
                        careful planning and execution, we ensured that the app
                        worked seamlessly with KIA Access-enabled devices,
                        integrated smoothly with third-party services, and met
                        all necessary regulatory requirements. By addressing
                        these challenges proactively, we were able to deliver a
                        robust and reliable app that met our clients needs and
                        exceeded user expectations.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container">
               <motion.div
                  initial={{
                     opacity: 0,
                     y: 50,
                  }}
                  whileInView={{
                     y: 0,
                     opacity: 1,

                     transition: {
                        duration: 0.8,
                        ease: "easeIn",
                     },
                  }}
                  viewport={{ once: true }}
                  className="max-w-3xl w-full m-auto"
               >
                  <div className="">
                     <p className="text-2xl max-sm:text-xl">
                        dotlabs helped us develop an app for iOS and Android.
                        The developers that they provided matched the criteria
                        we were looking for.
                     </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 mt-4">
                     <div className="w-14 h-14 rounded-full bg-black"></div>
                     <div className="">
                        <p className="text-xl max-sm:text-lg font-semibold">
                           Eric Watson | Vice President at KIA
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </section>

         <section>
            <motion.div
               initial={{
                  opacity: 0,
                  y: 50,
               }}
               whileInView={{
                  y: 0,
                  opacity: 1,

                  transition: {
                     duration: 0.8,
                     ease: "easeIn",
                  },
               }}
               viewport={{ once: true }}
               className="custom-container my-20"
            >
               <div className="mb-5">
                  <h2 className="text-4xl text-center font-semibold">
                     Other <span className="text-blue-500">Projects</span>
                  </h2>
               </div>
               <div className="w-4/5 max-lg:w-full m-auto flex max-md:flex-col items-center gap-5">
                  {[0, 1, 2].map((item: number) => {
                     return (
                        <div
                           key={item}
                           className="max-w-xs w-full flex-col items-center justify-center px-10 max-lg:px-7 py-12 max-lg:py-9 rounded-lg border-[3px] border-gray-200 bg-[#f4f5fd]"
                        >
                           <div className="mb-5 flex items-end justify-center gap-2">
                              <div className="w-12 h-12 max-lg:w-10 max-lg:h-10 bg-black"></div>
                              <h3 className="text-2xl font-semibold text-[#060e29]">
                                 polyglot
                              </h3>
                           </div>
                           <div className="w-full">
                              <Image
                                 src={"/images/portfolio/polyglot.webp"}
                                 width={1000}
                                 height={1000}
                                 alt="logo"
                              />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </motion.div>
         </section>
      </Layout>
   );
};

export default PageProject;
