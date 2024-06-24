import React from 'react'
import Techstack from '../component/Techstack'

function Skills() {
  return (
    <div id="container"
    className="flex flex-col w-full h-fit px-10 md:py-10 md:px-40" >
        <h1 className='font-fira text-1xl md:text-4xl py-3 w-full h-10 gap-4 text-slate-100 font-light flex items-center' >{`<Skills/>`} <div className=' w-60 md:w-[80%] h-[0.1rem] bg-slate-50'></div></h1>
        <h1 className='font-ubuntu py-8  text-4xl md:text-5xl text-slate-100 text-center'>Tech Stack</h1>
        <div id="skillcont" className=' flex flex-wrap items-center justify-center md:px-20  w-full h-fit '>
                {/* <h1 className=' w-32 h-32 p-2 md:m-4 m-4 bg-purple-500'>hello</h1> */}
                <Techstack/>
                <Techstack/>
                <Techstack/>
                <Techstack/>
               
                
               
                
        </div>
    </div>
  )
}

export default Skills