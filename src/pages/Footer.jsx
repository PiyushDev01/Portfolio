import React from 'react'
import { image,linkedin,github1,insta,leetcode,mail,whatsapp } from "../images/image";


function Footer() {
  return (
    <>
    <div id="footcont" className=' w-full py-12 md:py-12 h-[21rem] md:h-[25rem] bg-gradient-to-t from-[#5a2a63] to-black flex flex-col items-center '>
            <h1 className='font-fira text-1xl md:text-3xl py-3 text-slate-300 font-medium' >'Lerning, Living and Leveling Up'</h1>
            <h1 className='font-fira text-1xl md:text-3xl py-3 text-transparent bg-gradient-to-r bg-clip-text from-purple-500 via-indigo-500 to-purple-500 font-medium'>GetinTouch();</h1>
            <div id="social" className=" flex py-5 gap-3 md:gap-6 cursor-pointer">
            <a href="https://www.linkedin.com/in/artifexpiyush/" target="_blank"><img  className="brightness-150 w-8" src={linkedin} alt="" /></a>
            <a href="https://github.com/piyushSharma689" target="_blank"><img  className=" w-8 brightness-150 " src={github1} alt="" /></a>
            <a href="https://leetcode.com/u/piyush6883/" target="_blank"><img  className="brightness-150 w-8" src={leetcode} alt="" /></a>
            <a href="https://www.instagram.com/im_artifex?igsh=dW0yZGN3NHNzNTM3" target="_blank"><img  className="brightness-150 w-8" src={insta} alt="" /></a>
            <a href="mailto:piyushvishwakarma6706@gmail.com" target="_blank"><img  className="brightness-150 w-8" src={mail} alt="" /></a>
            <a href="https://wa.me/+916392802689?text=Hello." target="_blank"><img  className="brightness-150 w-8" src={whatsapp} alt="" /></a>
            </div>
            {/* <h1 className='font-fira text-1xl md:text-3xl py-3 text-slate-300 font-medium' >'Adiós, amigo 👋'</h1> */}
            <a href="#home"> <h1 className=' text-4xl -rotate-90' >&#10148;</h1></a>
            <p className="  text-xs md:text-lg font-fira text-slate-300 py-6">Design & Built by Piyush Vishwakarma &#169; 2024 </p>
    </div>
    </>
  )
}

export default Footer