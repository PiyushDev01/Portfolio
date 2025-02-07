
import img from "../assets/certifi.png"
import fadeIn from "../framer/fadein.js";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard.jsx";


function CertifCard(props) {

    const {title, icons, link, disc} = props;


  return (
    <>
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(212, 154, 252, 0.2)">
    

        <div className=' absolute w-[50%] h-[50%] blur-3xl  bg-purple-500/50 -bottom-[20%] -right-[20%] ' ></div>
        <div className=' absolute w-[50%] h-[50%] blur-3xl  bg-purple-500/25 -top-[40%] -left-[40%] ' ></div>

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
            <div id='icon' className=' z-10 w-fit h-fit  ' ><img src={img} className=' w-8 opacity-50' alt="" /></div>
            </div>
            <h1  className="font-ubuntu text-xl md:text-2xl text-slate-100 " >{title}</h1>
            <p className='text-sm md:text-sm font-ubuntu text-slate-500 z-10 ' >{disc}</p>
             <a href={link} className=' z-10 w-fit' target='_blank'> 
                
                <button className='  flex gap-2 items-center  shadow-rose-500 my-4 transition-all hover:border-purple-400 border-transparent border-2 w-fit px-4 py-2 rounded-full text-sm md:text-base  bg-mybg text-zinc-200 font-light font-ubuntu  ' >Show Credential <span className=' text-xl text-purple-500 '>&#8599;</span> </button></a>

  
    </SpotlightCard>
    </>
  )
}

export default CertifCard