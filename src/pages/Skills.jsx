import html from "../assets/skills/HTML5.png";
import css from "../assets/skills/CSS3.png";
import js from "../assets/skills/JavaScript.png";
import react from "../assets/skills/react.png";
import c from "../assets/skills/C.png";
import figma from "../assets/skills/Figma.png";
import java from "../assets/skills/Java.png";
import tailwind from "../assets/skills/Tailwind CSS.png";
import vite from "../assets/skills/Vite.js.png";
import boot from "../assets/skills/Bootstrap.png";
import fire from "../assets/skills/Firebase.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/GitHub.png";
import Node from "../assets/skills/Node.js.png";
import React from "react";
import Techstack from "../component/Techstack";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

const skills = {
  HTML: html,
  CSS3: css,
  JS: js,
  React: react,
  Figma: figma,
  Tailwind: tailwind,
  Vite: vite,
  Bootstrap: boot,
  C: c,
  Java: java,
  Firebase: fire,
  Nodejs: Node,
  GitHub: github,
  Git: git
};

function Skills() {
  return (
    <div
      id="container"
      className="flex flex-col w-full h-fit px-10 md:py-10 md:px-40"
    >
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        id="skill"
        className="font-fira text-1xl md:text-4xl py-3 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
      >
        {`<Skills/>`}{" "}
        <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
      </motion.h1>
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="font-ubuntu py-8  text-4xl md:text-5xl text-slate-100 text-center"
      >
        Tech Stack
      </motion.h1>
      <div
        id="skillcont"
        className=" flex flex-wrap items-center justify-center md:px-20  w-full h-fit "
      >
        {/* <h1 className=' w-32 h-32 p-2 md:m-4 m-4 bg-purple-500'>hello</h1> */}
        {Object.entries(skills).map(([key, value]) => {
          return <Techstack title={key} image={value} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
