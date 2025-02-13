
import React from "react";
import Techstack from "../component/Techstack";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import {html,css,js,react,c,figma,java,tailwind,vite,boot, fire,git,github,Node,py,ex, mui,apw, nxt} from "../images/image.js";
import { LettersPullUp } from './../framer/LettersPullUp';

const skills = {
  HTML: [html, 1, "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  CSS3: [css, 1, "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  JS: [js, 1, "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  React: [react, 1, "https://reactjs.org/"],
  Vite: [vite, 1, "https://vitejs.dev/"],
  "Next⠀js": [nxt, 3, "https://nextjs.org/"],
  Appwrite: [apw, 2, "https://appwrite.io/"],
  Firebase: [fire, 1, "https://firebase.google.com/"],
  Nodejs: [Node, 2, "https://nodejs.org/"],
  Express: [ex, 2, "https://expressjs.com/"],
  Tailwind: [tailwind, 1, "https://tailwindcss.com/"],
  Bootstrap: [boot, 1, "https://getbootstrap.com/"],
  "Material⠀UI": [mui, 1, "https://mui.com/"],
  Figma: [figma, 1, "https://www.figma.com/"],
  Java: [java, 1, "https://www.java.com/"],
  C: [c, 1, "https://en.wikipedia.org/wiki/C_(programming_language)"],
  Python: [py, 2, "https://www.python.org/"],
  GitHub: [github, 1, "https://github.com/"],
  Git: [git, 1, "https://git-scm.com/"],
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
        viewport={{ once: true, amount: 0.1 }}
        
        className="font-fira text-1xl md:text-4xl py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
      >
        {`<Skills/>`}{" "}
        <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
      </motion.h1>
      {/* <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" font-fira py-8  text-4xl md:text-5xl text-slate-100 text-center"
      >
        Tech Stack<span className=" text-indigo-400">.</span> 
      </motion.h1> */}
      <div className="flex justify-center">

      <LettersPullUp text="Tech Stack" />
      </div>
      <div
        id="skillcont"
        className=" flex flex-wrap items-center justify-center md:px-20  w-full h-fit "
      >
        {/* <h1 className=' w-32 h-32 p-2 md:m-4 m-4 bg-purple-500'>hello</h1> */}
        {Object.entries(skills).map(([key, value]) => {
          return <Techstack key={key} title={key} image={value[0]} l={value[1]} link={value[2]} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
