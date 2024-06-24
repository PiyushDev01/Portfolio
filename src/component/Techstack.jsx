import React, { useState } from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js"

function Techstack(props) {

    const [hover, setHover] = useState(false);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);
  return (
    <>
     <motion.div
     variants={fadeIn("up", 0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: false, amount: 0.1 }}

      id="container"
      className='md:w-40 w-32 h-32 md:h-40 p-6 bg-white/5 backdrop-blur-sm border-slate-700 border-[1px] md:m-6 m-4 mx-2 rounded-3xl relative'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h1
        className={`absolute -top-3 rounded-3xl left-[50%] bg-white/20 text-white backdrop-blur-lg px-4 w-fit transform -translate-x-[50%] transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
      >
        {props.title}
      </h1>
      <img src={props.image} alt="Logo" />
    </motion.div>
    </>
  )
}

export default Techstack