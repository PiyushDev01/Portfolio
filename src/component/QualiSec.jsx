import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

const fadeInUpProps = {
  variants: fadeIn("right", 0.3),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.1 }
};

function QualiSec(props) {
    const{from,to,inst,clg,addr,disc1,disc2, cur=false}=props;
  return (
    <>
<div
            id="qualifications"
            className=" relative text-left w-full h-fit mt-4 pr-0 p-[1rem]"
          >
            <div
            variants={fadeIn("", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
              id="pointball"
              className={`absolute w-5 animate-pulse rounded-full h-5 top-[2rem] ${cur? 'flex': 'hidden'}  -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-900 `}
            ></div>
            <div
            
              id="pointball"
              className=" absolute w-3 rounded-full h-3 top-[2rem]  -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-500 "
            ></div>

            <motion.h3 {...fadeInUpProps} className=" text-slate-500 md:text-lg font-small">
              {from}-{to} | {inst}
            </motion.h3>
            <motion.h2 {...fadeInUpProps} className=" font-ubuntu text-white text-xl md:text-2xl font-semibold">
              {clg}
            </motion.h2>
            <motion.h2 {...fadeInUpProps} className=" text-slate-400 text-base font-semibold pb-4">
              {addr}
            </motion.h2>
            <motion.p {...fadeInUpProps} className=" text-slate-100 text-sm md:text-base font-small">
              {" "}
              {disc1}{" "}
            </motion.p>
            <motion.p {...fadeInUpProps} className=" text-slate-400 text-sm md:text-base  font-small">
            {disc2}
            </motion.p>
          </div>
    </>
  )
}

export default QualiSec