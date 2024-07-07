import React from "react";
import Nav from "../component/Nav";
import download from "../assets/downloadicon.png";
import "./home.css";
import resume from "./Piyush_Vishwakarma.pdf";

import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import { image,linkedin,github1,insta,leetcode,mail,whatsapp } from "../images/image";
import Certification from "./Certification";

function Home() {
  return (
    <>
      <Nav />
      <div id="home" className=" overflow-hidden flex flex-col relative bg-[#11111b] w-full pt-[8rem] md:pt-[10rem] h-fit ">
      <svg id="third" className=" absolute w-[40rem] md:translate-x-[180%] translate-y-[320%] md:translate-y-[320%] "  viewBox="0 0 1433 1433" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_97_2)">
<circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA"/>
</g>
<defs>
<filter id="filter0_f_97_2" x="0" y="0" width="1433" height="1433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_97_2"/>
</filter>
</defs>
</svg>
      <svg id="second"   className=" absolute w-[40rem] md:w-[screen-1rem] -translate-x-[50%] translate-y-[100%] md:translate-y-[100%] "  viewBox="0 0 1433 1433" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_97_2)">
<circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA"/>
</g>
<defs>
<filter id="filter0_f_97_2" x="0" y="0" width="1433" height="1433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_97_2"/>
</filter>
</defs>
</svg>
      <svg id="first" className=" animate-pulse absolute w-[screen-1rem] translate-x-[50%] md:-translate-y-[40%] "  viewBox="0 0 1433 1433" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_97_2)">
<circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA"/>
</g>
<defs>
<filter id="filter0_f_97_2" x="0" y="0" width="1433" height="1433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_97_2"/>
</filter>
</defs>
</svg>

        <div
          id="hero"
          className="flex flex-col md:flex-row w-full h-fit px-10 md:py-10 md:px-40"
        >
          <div id="hero" className=" md:w-4/6 ">
            <h1 className=" font-fira text-1xl md:text-4xl py-3 text-slate-100 font-semibold">{`Namaste(); I'm`}</h1>
            <h1 className="font-ubuntu text-4xl md:text-7xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 inline-block py-3 bg-clip-text text-transparent">
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
            <div id="social" className=" flex py-10 gap-6  w-fit">
            <a href="https://www.linkedin.com/in/artifexpiyush/" target="_blank"><img  className=" w-8" src={linkedin} alt="" /></a>
            <a href="https://github.com/PiyushDev01" target="_blank"><img  className=" w-8" src={github1} alt="" /></a>
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
      <Certification/>
       <Footer/>
      </div>
    </>
  );
}

export default Home;
