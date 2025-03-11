// "use client";
// import Image from "next/image";
// import React, { useRef } from "react";
// import IMAGES from "../../../../../public/images";
// import { AboutMeData } from "@/constants";
// import { useMyContext } from "@/contexts/MyContext";
// import { motion, useInView } from "framer-motion";

// const AboutMeSection = () => {
//   const { theme } = useMyContext();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark"
//           ? "bg-gradient-to-b from-gray-900 to-gray-800"
//           : "bg-white"
//       }  `}
//     >
//       <div className="max-w-[1350px] mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
//         <div className="max-w-4xl mx-auto mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: -250 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className={`text-4xl md:text-5xl font-bold font-orbitron text-center light:text-blue-950 ${
//               theme === "dark" ? "text-white" : "text-gray-800"
//             } mb-8`}
//             id="about-title"
//           >
//             About Me
//           </motion.h1>

//           <div className="relative lg:w-full mx-auto md:w-[90%] overflow-hidden rounded-[8px] shadow-lg">
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />
//             <Image
//               src={IMAGES.ABOUT}
//               alt="Portrait of Salman Dev - MERN Stack Developer"
//               className="w-full h-auto object-cover relative z-10"
//               width={1200}
//               height={675}
//             />
//           </div>
//         </div>

//         <main className="max-w-4xl mx-auto lg:w-full md:w-[90%] w-full">
//           <motion.section
//             ref={ref}
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.5 }}
//             className={` ${
//               theme === "dark"
//                 ? "bg-gray-800"
//                 : "bg-white border border-gray-200"
//             } rounded-[8px] shadow-custom-shadow2 p-6 md:p-8`}
//             aria-labelledby="bio-title"
//           >
//             <h2
//               id="bio-title"
//               className={`text-2xl md:text-3xl font-bold mb-6 light:text-gray-900 ${
//                 theme === "dark" ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Who is Salman Dev?
//             </h2>

//             <div className="space-y-6">
//               {AboutMeData.map((section) => (
//                 <p
//                   key={section.id}
//                   className={`${
//                     theme === "dark" ? "text-gray-100" : "text-gray-700"
//                   } md:text-lg text-base leading-relaxed`}
//                 >
//                   {section.content}
//                 </p>
//               ))}
//             </div>
//           </motion.section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AboutMeSection;
