import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import CertifCard from '../component/CertifCard.jsx';
import { ln, ms } from '../images/image.js';

const certificatesDetail = {
    microlinkedin:{
        title:"Software Development",
        disc:"Career Essential in Software Development by Microsoft and LinkedIn",
        link:"https://www.linkedin.com/learning/certificates/c44b6b2c519dcc03c04aedb306de9e82530d7a3ad56f235a6a316aec210835f9",
        icons:[ms,ln]
    },
    microazure:{
        title:"GitHub",
        disc:"Manage the lifecycle of your projects on GitHub",
        link:"https://learn.microsoft.com/api/achievements/share/en-us/PiyushVishwakarma-7228/3WAGY5DH?sharingId=2105964CD0766624",
        icons:[ms]
    }
}



function Certification() {
  return (
   
    <>
   <div id="certificatcont" className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 ">
   <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          id="project"
          className="font-fira text-1xl md:text-4xl md:mb-16 py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
        >
          {`<Certifications/>`}{" "}
          <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
        </motion.h1>

    <div id="certificats" className=" flex flex-col items-center justify-center md:px-20  w-full h-fit ">

        {
            Object.entries(certificatesDetail).map(([key, value])=>{
                return(
                    <CertifCard key={key} title={value.title} disc={value.disc} link={value.link} icons={value.icons} />
                );
            })
        }
        


    </div>

    </div> 
    </>
  )
}

export default Certification