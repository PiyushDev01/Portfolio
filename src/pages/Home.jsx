import Nav from "../component/Nav";
import download from "../assets/downloadicon.png";
import { motion } from "framer-motion";
import "./home.css";
import { useState } from "react";
import resume from "./Piyush_Vishwakarma.pdf";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Footer from "./Footer";
import {
  image,
  linkedin,
  github1,
  insta,
  leetcode,
  mail,
  whatsapp,
  mkty,
} from "../images/image";
import Certification from "./Certification";
import { GradualSpacing } from "../framer/GradualSpacing";
import { RotateWords } from "../framer/RotateWords";
import Available from "../component/Available";
import TiltedCard from "../component/TiltedCard";
import Lanyard from '../component/Lanyard/Lanyard';
import Like from './../component/Like';




function Home() {
  const [imghover, setimghover] = useState(false);

  return (
    <>
      <Nav />

      <div
        id="Home"
        className=" overflow-hidden flex flex-col relative bg-[#0b0b14] pt-[3rem] md:pt-0 w-full h-fit "
      >
        <svg
          id="third"
          className=" absolute w-[40rem] md:translate-x-[180%] translate-y-[320%] md:translate-y-[320%] "
          viewBox="0 0 1433 1433"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_97_2)">
            <circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA" />
          </g>
          <defs>
            <filter
              id="filter0_f_97_2"
              x="0"
              y="0"
              width="1433"
              height="1433"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_97_2"
              />
            </filter>
          </defs>
        </svg>
        <svg
          id="second"
          className=" absolute w-[40rem] md:w-[screen-1rem] -translate-x-[50%] translate-y-[100%] md:translate-y-[100%] "
          viewBox="0 0 1433 1433"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_97_2)">
            <circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA" />
          </g>
          <defs>
            <filter
              id="filter0_f_97_2"
              x="0"
              y="0"
              width="1433"
              height="1433"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_97_2"
              />
            </filter>
          </defs>
        </svg>
        <svg
          id="first"
          className=" animate-pulse absolute w-[screen-1rem] translate-x-[50%] md:-translate-y-[40%] "
          viewBox="0 0 1433 1433"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_97_2)">
            <circle cx="716.5" cy="716.5" r="216.5" fill="#6200EA" />
          </g>
          <defs>
            <filter
              id="filter0_f_97_2"
              x="0"
              y="0"
              width="1433"
              height="1433"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_97_2"
              />
            </filter>
          </defs>
        </svg>

        <div className=" w-full flex md:hidden justify-center mb-5 ">
          <Available />
        </div>

        <div
          id="hero"
          className="flex flex-col md:flex-row w-full h-fit gap-10 md:px-40"
        >
          <div id="left" className=" md:w-4/6 px-10  md:pt-[10rem]  ">
            <h1 className=" font-custom text-1xl md:text-4xl py-3 tracking-wide text-slate-100 font-normal">
              Hey! It's me
            </h1>
            
            <GradualSpacing text="Piyush " />
            <GradualSpacing text="Vishwakarma" />
            <br />
            
            <RotateWords />
            <p className=" md:w-2/3 font-custom trac text-sm md:text-lg text-slate-400 py-6">
              I enjoy creating engaging web UI and collaborating to develop
              innovative products.
              <br />
              
            </p>
            <div className=" flex gap-4 md:gap-8 items-center"> 
               <button
              className="button z-[1] "
              onClick={() => {
                window.open(resume);
              }}
            >
              <span className="button-content">
                {" "}
                <img src={download} className=" w-4 h-4" alt="" /> Resume{" "}
              </span>
            </button>
            <Like />
            </div>
           



            <div
              id="social"
              className=" items-center saturate-0 flex  z-10  justify-between w-full py-10 md:gap-8  md:w-fit"
           
            >
              <a
                href="https://www.linkedin.com/in/artifexpiyush/"
                target="_blank"
                
              >
                <img className=" w-8" src={linkedin} alt="" />
              </a>
              <a href="https://github.com/PiyushDev01" target="_blank">
                <img className=" w-8" src={github1} alt="" />
              </a>
              <a href="https://leetcode.com/u/piyush6883/" target="_blank">
                <img className=" w-8" src={leetcode} alt="" />
              </a>
              <a
                href="https://monkeytype.com/profile/piyush786321"
                target="_blank"
              >
                <img
                  id="mk"
                  className=" w-10 md:block hidden saturate-0"
                  src={mkty}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/im_artifex?igsh=dW0yZGN3NHNzNTM3"
                target="_blank"
              >
                <img className=" w-8" src={insta} alt="" />
              </a>
              <a href="mailto:piyushvishwakarma6706@gmail.com" target="_blank">
                <img className=" w-8" src={mail} alt="" />
              </a>
              <a href="https://wa.me/+916392802689?text=Hello." target="_blank">
                <img className=" w-8" src={whatsapp} alt="" />
              </a>
            </div>
          </div>
           {/* for pc view */}
                <div id="right" className=" md:block hidden h-[120vh]   absolute w-[170vw] -left-40 -mt-18 ">
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />

                </div>
           {/* for mobile view */}
                <div id="right" className=" relative md:hidden overflow-hidden  w-[100vw] -mt-10 ">
                  <div className="flex justify-center -mt-40 ">
                  <Lanyard position={[0, 0 ,12]} gravity={[0, -40, 0]} />
                  </div>
                  <div className=" w-full h-[100vh]  top-0 absolute"></div>

                </div>
         
        </div>

        {/* skills section started */}
        <Skills />

        <Project />
        <About />
        <Certification />
        <Footer />
      </div>
    </>
  );
}

export default Home;
