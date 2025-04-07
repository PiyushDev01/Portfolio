import React, { useState } from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js"
import Exbar from './Exbar.jsx';

function Techstack(props) {
    const lvl = props.l;
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            window.open(props.link, '_blank');
        }
    };

    return (
        <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            onClick={() => window.open(props.link, '_blank')}
            onKeyPress={handleKeyPress}
            id="container"
            className='md:w-40 w-32 h-32 md:h-fit cursor-pointer pt-4 py-3 px-6 bg-gradient-to-br from-[#212134] to-[#12121c] transform rotate-45 flex flex-col items-center backdrop-blur-sm border-slate-700 border-[0px] md:m-6 m-4 mx-2 rounded-3xl relative'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            role="button"
            tabIndex="0"
            aria-label={`${props.title} technology skill level ${lvl}`}
        >
            <h2
                className={`absolute -top-3 rounded-3xl left-[50%] bg-white/20 text-white backdrop-blur-lg px-4 w-fit transform -translate-x-[50%] transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={!hover}
            >
                {props.title}
            </h2>
            <img 
                src={props.image} 
                className='w-[80%]' 
                alt={`${props.title} logo`} 
            />
            <Exbar l={lvl} />
        </motion.div>
    );
}

export default Techstack;