import React from 'react'
import img from "../assets/certifi.png"
import fadeIn from "../framer/fadein.js";
import { motion } from "framer-motion";

function CertifCard(props) {

    const {title, icons, link, disc} = props;


  return (
    <>
    <motion.div 
    variants={fadeIn("", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.1 }}
    id="certcontainer" className= ' transition-all flex flex-col  md:w-[20rem] md:min-h-[10rem] h-fit bg-gradient-to-b border-[1px] border-slate-800 from-[#151423] to-[#221838] overflow-hidden rounded-3xl p-6 mx-4 my-4 justify-between '>
            <div id="allicons" className=' flex items-center justify-between mb-4'>
            
            <div id="icons" className=' flex  gap-2 py-2'  >
                {
                    icons.map((item, index)=>{
                        return(
                            <img src={item} key={index} className=' w-8' alt="" />
                        );
                    })
                }
                
            </div>
            <div id='icon' className=' w-fit h-fit  ' ><img src={img} className=' w-8 opacity-50' alt="" /></div>
            </div>
            <h1  className="font-ubuntu text-xl md:text-2xl text-slate-100 " >{title}</h1>
            <p className='text-sm md:text-sm font-ubuntu text-slate-400 ' >{disc}</p>
             <a href={link} className=' w-fit' target='_blank'> <button className=' flex gap-2 items-center my-4 transition-all hover:border-purple-400 border-slate-800 border-2 w-fit px-4 py-2 rounded-full text-sm md:text-base  bg-mybg text-zinc-200 font-light font-ubuntu ' >Show Credential <span className=' text-xl text-purple-500 '>&#8599;</span> </button></a>

    </motion.div>
    </>
  )
}

export default CertifCard