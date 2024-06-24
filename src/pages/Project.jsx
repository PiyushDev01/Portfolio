import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import Projectcomp from '../component/Projectcomp.jsx';
import artifex from "../assets/projectimg/artifex.png"
import artdp from "../assets/projectimg/titlelogo2.webp"
import uifrydp from "../assets/projectimg/uifry.png"
import uifryimg from "../assets/projectimg/uifryimage.png"


const projects = {
  Artifex: {
    profile: artdp, 
    image: artifex, 
    discr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntvel fugit, voluptates cum vero veniam aut quas. Quidem, mollitia debitis.",
    link:"https://artifexpiyush.vercel.app/",
    gitlink:"https://github.com/piyushSharma689/Artifex"
  },
  Uifry: {
    profile: uifrydp, 
    image: uifryimg, 
    discr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciuntvel fugit, voluptates cum vero veniam aut quas. Quidem, mollitia debitis.",
    link:"https://uifrypiyush.vercel.app/",
    gitlink:"https://github.com/piyushSharma689/uiFry"
  }
};

function Project() {
  return (
    <>
    <div id="projectcont" className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 ">
    <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        id="project"
        className="font-fira text-1xl md:text-4xl py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
      >
        {`<Projects/>`}{" "}
        <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
      </motion.h1>
      <div id="projects" className=" flex flex-col items-center justify-center md:px-20  w-full h-fit "> 

      {Object.entries(projects).map(([key, value]) => {
          return <Projectcomp title={key} 
          image={value.image} 
          dp={value.profile} 
          discr={value.discr}
          link={value.link}
          gitlink={value.gitlink} />;
        })}
        

      </div>
    </div>
    </>
  )
}

export default Project