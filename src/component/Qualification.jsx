import React from "react";
import QualiSec from "./QualiSec";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import { FaUserGraduate } from "react-icons/fa6";

const QualificationDetails = { q1: {
    from: "2020",
    to: "2021",
    inst: "CBSE",
    clg: "Daffodils Public School",
    addr: "Mirzapur, Uttar Pradesh",
    disc1: "Completed my 12th grade with 91% in the Science Stream.",
    disc2: "",
    },
    q2: {
    from: "2022",
    to: "2026",
    inst: "AKTU",
    clg: "Galgotias College of Engineering and Technology",
    addr: "Noida, Uttar Pradesh",
    disc2: "Currently pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Artificial intelligence and Machine Learning.",
    
    cur: true,
    },

}



function Qualification() {

 

  return (
    <>
      <div id="container" className=" md:w-[50%]   h-fit p-[2rem] ">
      <div id="qtitle" className=" flex ">
        <div id="qlogo" className=" w-12 flex items-center justify-center rounded-full border-[0px] bg-gradient-to-t from-transparent  to-slate-400/30 border-slate-400 -translate-x-[50%]">
        <FaUserGraduate className=" text-white scale-125 " />

        </div>
      <motion.h1 
      variants={fadeIn("", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.1 }}
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
