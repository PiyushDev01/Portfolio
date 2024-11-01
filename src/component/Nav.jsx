import React, { useState } from "react";
import "./nav.css";
import profile from "../assets/profile1.png"
import menu from "../assets/menu.png"

function Nav() {
  const [toggle, settoggle] = useState(false);

  const handletoggle = () => {
    settoggle(!toggle);
  };
//   bg-[#11111b]
  return (
    <>
      <div className="flex flex-col fixed items-center justify-center w-full md:h-[10rem] mt-10 md:mt-0  z-10">
        <div
          id="nav"
          className=  " bg-white/10 backdrop-blur-sm h-2/4 rounded-full w-4/5 flex flex-row items-center px-[1rem] justify-between"
        >
          <img 
            src={profile}
            id="profileimage"
            className="bg-slate-500 w-12 my-2 md:my-0 md:w-[3.5rem] md:h-[3.5rem] rounded-full"
          ></img>
          <ul className="hidden md:flex flex-row gap-16 px-4 font-fira text-slate-100 font-medium">
            <a href="#Home"><li className=" transition-all cursor-pointer">{"<Home/>"}</li></a>
            <a href="#About"><li className=" transition-all cursor-pointer">{"<About/>"}</li></a>
           <a href="#Skills"><li className=" transition-all cursor-pointer">{"<Skills/>"}</li></a> 
           <a href="#Projects"><li className=" transition-all cursor-pointer">{"<Projects/>"}</li></a> 
          </ul>
          <img 
            src={menu}
            id="menu"
            onClick={handletoggle}
            className="w-[2.5rem] md:hidden h-[2.5rem] rounded-full"
          ></img>
        </div>
        <div
          id="mobnav"
          style={{ height: toggle ? "320px" : "0px" }}
          className=" overflow-hidden  flex items-center justify-center  transition-all -z-10 rounded-b-[3rem] md:hidden top-[2rem] absolute w-4/5 bg-white/5 backdrop-blur-sm"
        >
          <ul onClick={handletoggle} className="flex items-center justify-center gap-8 flex-col font-fira text-slate-50 text-lg ">
            <a href="#Home"><li>{"<Home/>"}</li></a>
            <a href="#About"><li>{"<About/>"}</li></a>
            <a href="#Skills"><li>{"<Skills/>"}</li></a>
            <a href="#Projects"><li>{"<Projects/>"}</li></a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
