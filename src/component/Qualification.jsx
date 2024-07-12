import React from "react";
import QualiSec from "./QualiSec";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

const QualificationDetails = { q1: {
    from: "2019",
    to: "2021",
    inst: "CBSE",
    clg: "Daffodils Public School",
    addr: "Mirzapur, Uttar Pradesh",
    disc1: "Completed my 12th grade with 91% in the Science Stream.",
    disc2: "Successfully completed intermediate studies at Daffodils Public School, focusing on developing tech-related skills problem-solving abilities, preparing for higher education.",
    },
    q2: {
    from: "2022",
    to: "2026",
    inst: "AKTU",
    clg: "Galgotias College of Engineering and Technology",
    addr: "Noida, Uttar Pradesh",
    disc1: "Currently pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Artificial intelligence and Machine Learning.",
    disc2: "",
    cur: true,
    },

}



function Qualification() {

 

  return (
    <>
      <div id="container" className=" md:w-[50%]   h-fit p-[2rem] ">
      <div id="qtitle" className=" flex ">
        <div id="qlogo" className=" w-12 flex items-center justify-center rounded-lg border-[1px] bg-gradient-to-t from-transparent  to-slate-400/30 border-slate-400 -translate-x-[50%]">
        <svg className=" w-10 h-10 p-2" viewBox="0 0 72 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.5001 0.833374H9.50008C4.64175 0.833374 0.666748 4.80837 0.666748 9.66671V80.3334C0.666748 85.1917 4.64175 89.1667 9.50008 89.1667H62.5001C67.3584 89.1667 71.3334 85.1917 71.3334 80.3334V9.66671C71.3334 4.80837 67.3584 0.833374 62.5001 0.833374ZM22.7501 9.66671H31.5834V31.75L27.1667 28.4375L22.7501 31.75V9.66671ZM62.5001 80.3334H9.50008V9.66671H13.9167V49.4167L27.1667 39.4792L40.4168 49.4167V9.66671H62.5001V80.3334Z" fill="#94a3b8"/>
</svg>

        </div>
      <motion.h1 
      variants={fadeIn("", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className=" md:text-5xl font-ubuntu text-3xl text-white font-semibold text-left">Qualifications<span className=" text-indigo-400">.</span></motion.h1>
      </div>
        <div
          id="innercont"
          className=" w-full h-fit flex flex-col  border-l-2 border-slate-700"
        >
          {
            Object.keys(QualificationDetails).map((key,index)=>{
              return <QualiSec key={index} {...QualificationDetails[key]} />
            })
          } 
          
          
        </div>
      </div>
    </>
  );
}

export default Qualification;
