import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import Qualification from "../component/Qualification";
import Aboutcomp from "../component/Aboutcomp";

function About() {
  return (
   <>
   <div id="About"  className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 ">
   <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        
        className="font-fira text-1xl md:text-4xl py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
      >
        {`<About/>`}{" "}
        <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
      </motion.h1>
      <div id="abbackgroud" className=' flex md:flex-row flex-col w-full h-fit'>
        <Aboutcomp />
        <Qualification />
      </div>

   </div>
   </>
  )
}

export default About