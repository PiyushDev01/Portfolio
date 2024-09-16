
import React from "react";
import Techstack from "../component/Techstack";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import {html,css,js,react,c,figma,java,tailwind,vite,boot, fire,git,github,Node,py, mui,apw} from "../images/image.js";

const skills = {
  HTML: [html,1],
  CSS3: [css,1],
  JS: [js,2],
  React: [react,2],
  Figma: [figma,1],
  Tailwind: [tailwind,1],
  Vite: [vite,1],
  Bootstrap: [boot,1],
  C: [c,1],
  Java: [java,1],
  Firebase: [fire,2],
  Appwrite:[apw,3],
  Nodejs: [Node,3],
  Python:[py,2],
  GitHub: [github,2],
  Git: [git,1],
  "Material⠀UI" : [mui,3]
};

function Skills() {
  return (
    <div
      id="Skills"
      className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 "
    >
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        
        className="font-fira text-1xl md:text-4xl py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
      >
        {`<Skills/>`}{" "}
        <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
      </motion.h1>
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" font-fira py-8  text-4xl md:text-5xl text-slate-100 text-center"
      >
        Tech Stack<span className=" text-indigo-400">.</span> 
      </motion.h1>
      <div
        id="skillcont"
        className=" flex flex-wrap items-center justify-center md:px-20  w-full h-fit "
      >
        {/* <h1 className=' w-32 h-32 p-2 md:m-4 m-4 bg-purple-500'>hello</h1> */}
        {Object.entries(skills).map(([key, value]) => {
          return <Techstack title={key} image={value[0]} l={value[1]} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
