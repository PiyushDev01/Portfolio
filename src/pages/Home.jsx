import React from "react";
import Nav from "../component/Nav";
import download from "../assets/downloadicon.png";
import "./home.css";
import resume from "./Piyush_Vishwakarma.pdf";

import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import { image,linkedin,github1,insta,leetcode,mail,whatsapp } from "../images/image";

function Home() {
  return (
    <>
      <Nav />
      <div id="home" className=" flex flex-col relative bg-[#11111b] w-full pt-[10rem] h-fit ">
        <div
          id="hero"
          className="flex flex-col md:flex-row w-full h-fit px-10 md:py-10 md:px-40"
        >
          <div id="hero" className=" md:w-4/6 ">
            <h1 className=" font-fira text-1xl md:text-4xl py-3 text-slate-100 font-semibold">{`Namaste(); I'm`}</h1>
            <h1 className=" font-ubuntu text-4xl md:text-7xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 inline-block py-3 bg-clip-text text-transparent">
              Piyush Vishwakarma.
            </h1>
            <br />
            <h1 className=" font-ubuntu text-4xl md:text-7xl text-slate-100 ">
              I design & code for web.
            </h1>
            <p className=" md:w-2/3 text-sm md:text-lg text-slate-300 py-6">
              Web Developer with experience of Digital Concept Arts, Frontend
              Web Designs. <br /> I Love fun Web UI, collaboration and making
              products.
              <br />
              {/* <br />I value simple content structure, clean design patterns, and
              thoughtful interactions. */}
            </p>
            <a href={resume} download="Piyush_Vishwakarma">
              <button class="button">
                <span class="button-content">
                  {" "}
                  <img src={download} className=" w-4 h-4" alt="" /> Resume{" "}
                </span>
              </button>
            </a>
            <div id="social" className=" flex py-5 gap-6 cursor-pointer">
            <a href="https://www.linkedin.com/in/artifexpiyush/" target="_blank"><img  className=" w-8" src={linkedin} alt="" /></a>
            <a href="https://github.com/piyushSharma689" target="_blank"><img  className=" w-8" src={github1} alt="" /></a>
            <a href="https://leetcode.com/u/piyush6883/" target="_blank"><img  className=" w-8" src={leetcode} alt="" /></a>
            <a href="https://www.instagram.com/im_artifex?igsh=dW0yZGN3NHNzNTM3" target="_blank"><img  className=" w-8" src={insta} alt="" /></a>
            <a href="mailto:piyushvishwakarma6706@gmail.com" target="_blank"><img  className=" w-8" src={mail} alt="" /></a>
            <a href="https://wa.me/+916392802689?text=Hello." target="_blank"><img  className=" w-8" src={whatsapp} alt="" /></a>
            </div>
          </div>

          <div id="sideImage" className="py-16 px-4 w-full h-full md:w-2/6  ">
            <div className=" backimage flex justify-center rotate-6 rounded-2xl bg-slate-700">
              <img
                src={image}
                className=" shadow-2xl -rotate-6  rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* skills section started */}

        <Skills />
       <Project/>
       <Footer/>
       
      </div>
    </>
  );
}

export default Home;
