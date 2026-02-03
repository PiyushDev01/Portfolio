import React from 'react'
import { image,linkedin,github1,insta,leetcode,mail,whatsapp } from "../images/image";
import Available from '../component/Available';
import { LettersPullUp } from './../framer/LettersPullUp';




function Footer() {
  return (
    <>
    <div id="footcont" className=' md:m-auto md:w-[80%] py-12 md:py-12 h-[21rem] md:h-[25rem] bg-[#291b3c88] rounded-t-3xl flex flex-col items-center '>
      <Available />
            <h1 className='font-fira md:hidden text-1xl md:text-3xl py-3 text-slate-300 font-medium' >'Learning, Living and Leveling Up'</h1>
            <div className=' md:block hidden '>
            <LettersPullUp text="'Learning, Living and Leveling Up'" /> 
            </div>
            <h1 className='font-fira text-1xl md:text-3xl py-3 text-transparent bg-gradient-to-r bg-clip-text from-purple-500 via-indigo-500 to-purple-500 font-medium'>GetinTouch();</h1>
            <div id="social" className=" flex py-5 gap-3 md:gap-6 cursor-pointer">
            <a href="https://www.linkedin.com/in/artifexpiyush/" target="_blank"><img  className="brightness-150 w-8" src={linkedin} alt="" /></a>
            <a href="https://github.com/PiyushDev01" target="_blank"><img  className=" w-8 brightness-150 " src={github1} alt="" /></a>
            <a href="https://leetcode.com/u/piyush6883/" target="_blank"><img  className="brightness-150 w-8" src={leetcode} alt="" /></a>
            <a href="https://www.instagram.com/im_artifex?igsh=dW0yZGN3NHNzNTM3" target="_blank"><img  className="brightness-150 w-8" src={insta} alt="" /></a>
            <a href="mailto:piyushvishwakarma6706@gmail.com" target="_blank"><img  className="brightness-150 w-8" src={mail} alt="" /></a>
            <a href="https://wa.me/+916392802689?text=Hello." target="_blank"><img  className="brightness-150 w-8" src={whatsapp} alt="" /></a>
            </div>
            {/* <h1 className='font-fira text-1xl md:text-3xl py-3 text-slate-300 font-medium' >'Adiós, amigo 👋'</h1> */}
            <a href="#Home"> <h1 className=' text-4xl hidden md:block ' >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none"><path fill="#ba68c8" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"></path><path fill="#ba68c8" d="M15.53 14.01c-.19 0-.38-.07-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path></svg>
              </h1></a>
            <p className="  text-xs md:text-lg font-fira text-slate-300 py-6">Design & Built by Piyush Vishwakarma &#169; 2026 </p>
    </div>
    </>
  )
}

export default Footer
