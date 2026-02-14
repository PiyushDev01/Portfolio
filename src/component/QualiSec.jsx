import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import { FaExternalLinkAlt } from 'react-icons/fa';

const fadeInUpProps = {
  variants: fadeIn("right", 0.3),
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.1 }
};

function QualiSec(props) {
    const{from,to,inst,clg,addr,disc1,disc2, cur=false, certLink}=props;
  return (
    <article
      id="qualifications"
      className="relative text-left w-full h-fit  pr-0 p-[1rem]"
      role="article"
      aria-label={`Education at ${clg} from ${from} to ${to}`}
    >
      <div
        variants={fadeIn("", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        id="pointball"
        className={`absolute w-5 animate-pulse rounded-full h-5 top-[2rem] ${cur? 'flex': 'hidden'}  -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-900 `}
        aria-hidden="true"
      ></div>
      <div
        id="pointball"
        className=" absolute w-3 rounded-full h-3 top-[2rem]  -left-[1px] -translate-x-[50%] -translate-y-[50%] bg-indigo-500 "
        aria-hidden="true"
      ></div>

      <motion.h3 {...fadeInUpProps} className=" text-slate-500 md:text-lg font-small">
        {from}-{to} | {inst}
      </motion.h3>
      <motion.h2 {...fadeInUpProps} className=" font-ubuntu text-white text-xl md:text-2xl font-semibold flex items-center gap-3 w-fit">
        {clg}
        {certLink && (
            <a title='Completion Certificate' href={certLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="View Certificate">
                {/* <FaExternalLinkAlt size={20} /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1Z" fill="#d9e3f0"></path><path d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54ZM12.28 14.72a.754.754 0 0 0-1.06 0l-.72.72v-4.19c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.19l-.72-.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02.06.06.14.11.22.15.1.03.19.05.29.05.1 0 .19-.02.28-.06.09-.04.17-.09.25-.16l2-2c.29-.29.29-.77 0-1.06Z" fill="#d9e3f0"></path></svg>
            </a>
            
        )}
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
    </article>
  )
}

export default QualiSec