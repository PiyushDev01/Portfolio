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
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}

            className=" mt-4 md:text-xl text-sm font-medium  md:font-semibold md:p-[1rem]">
              Hello! I am an enthusiastic developer who enjoys coding and
              creating new things. I am currently pursuing a Bachelor of
              Technology in Computer Science Engineering with a specialization
              in Artificial Intelligence and Machine Learning. I am always open
              to learning and exploring new technologies. I am a quick learner
              and a team player who is ready to take on new challenges. I am
              proficient in various programming languages and technologies such
              as Java, JavaScript, Python, React, Node.js, and MongoDB. I am
              actively seeking opportunities to work on new projects and
              collaborate with other developers. I am eager to learn and advance
              as a developer and contribute to the tech industry.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcomp;
