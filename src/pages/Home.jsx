import React from "react";
import Nav from "../component/Nav";
import download from "../assets/downloadicon.png"
import "./home.css";

function Home() {
  return (
    <>
      <Nav />
      <div className=" flex flex-row relative bg-[#11111b] w-full pt-[10rem] h-[200vh] ">
        <div
          id="container"
          className=" w-full h-[100vh-10rem] px-10 md:py-10 md:px-40"
        >
          <div id="hero">
            <h1 className=" font-fira text-1xl md:text-4xl py-3 text-slate-100 font-semibold">{`Namaste(); I'm`}</h1>
            <h1 className=" font-ubuntu text-4xl md:text-7xl font-semibold  text-slate-100">
              Piyush Vishwakarma.
            </h1>
            <br />
            <h1 className=" font-ubuntu text-4xl md:text-7xl text-slate-100 ">
              I design & code for web.
            </h1>
            <p className=" md:w-1/2 text-sm md:text-lg text-slate-300 py-6">
              Web Developer with experience of Digital Concept Arts, Frontend
              Web Designs. <br /> I Love fun Web UI, collaboration and making
              products.
              <br />
              <br />I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
            <a href="../assets/my_resume.pdf" download="Piyush_Vishwakarma.pdf"><button class="button">
  <span class="button-content">  <img src={download} alt="" /> Resume </span>
</button></a>

          </div>
        </div>

      {/* <div id="sideImage" className=" w-20 h-40 bg-orange-500">

      </div> */}


      </div>
    </>
  );
}

export default Home;
