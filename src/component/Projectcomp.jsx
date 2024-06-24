import React from "react";
import git from "../assets/skills/GitHub.png"
import "./project.css";

function Projectcomp(props) {
  return (
    <>
      <div
        id="maincont"
        className=" my-16 flex flex-col md:flex-row w-[90%] md:w-[80%] h-fit bg-[#181827] overflow-hidden rounded-[3rem] border border-slate-600 "
      >
        <div
          id="pleft"
          className="md:w-[50%] w-full h-full py-8 md:py-16 px-5 md:px-10 flex flex-col  "
        >
          <img src={props.dp} className=" w-[3rem] rounded-full " alt="" />
          <h1 className="font-ubuntu text-2xl md:text-4xl text-slate-100 py-4">{props.title}</h1>
          <p  className="  text-sm md:text-sm font-ubuntu text-slate-400 ">
            {props.discr}
          </p>
          <div id="buttons" className="flex flex-row items-center gap-6">
          <a href={props.link} target="_blank"><button id="button" >Live View</button></a>
          <a href={props.gitlink} target="_blank"><img src={git} className="w-[3rem] cursor-pointer h-[3rem] hover:opacity-100 opacity-50 transition-all " alt="" /></a>
          </div>


        </div>
        <div id="pright" className=" md:w-[50%] h-20  ">
                <img src={props.image} alt=""  className=" md:translate-y-[80%] -translate-y-5 translate-x-[10%] md:translate-x-[30%] rounded-[2rem] md:scale-150 "/>
        </div>
      </div>
    </>
  );
}

export default Projectcomp;
