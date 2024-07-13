import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

function Aboutcomp() {
  return (
    <>
      <div id="abcontainer" className="md:w-[50%]  h-fit p-[2rem] ">
        <div id="aboutsection" className=" w-full h-fit ">
          <motion.h1 
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          
          className=" md:text-5xl text-3xl text-white font-semibold font-ubuntu text-center md:text-left">
            About me<span className=" text-indigo-400">.</span>
          </motion.h1>

          <div
            id="aboutcontent"
            className=" text-left w-full h-fit flex flex-col text-slate-400"
          >
            <motion.p 
            variants={fadeIn("left", 0.1)}In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above? At least it is true that man has no control; even over his own will.
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}

            className=" mt-4 font-sans md:text-xl text-sm font-medium  md:font-semibold md:p-[1rem]">
              Hi there! I'm an eager developer who likes to write code and make new stuff. I'm working toward a Bachelor of Technology in Computer Science Engineering with a focus.

within machine learning and artificial intelligence. I'm always willing to learn about and experiment with new technologies. I am skilled in many programming languages and technologies, including Python, Java, JavaScript, React, Node.js, and MongoDB. I'm constantly looking for new projects to work on and possibilities to interact with other devs. I'm excited to grow as a developer, learn new things, and contribute to the tech sector.

            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcomp;
