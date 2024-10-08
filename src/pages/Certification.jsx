import React from 'react'
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import CertifCard from '../component/CertifCard.jsx';
import { acc, ibm, ln, ms } from '../images/image.js';
import ibmcerti from "./Ibmcertificate.pdf";
import resume from "./Piyush_Vishwakarma.pdf";

const certificatesDetail = {
    microlinkedin:{
        title:"Microsoft and LinkedIn",
        disc:"Career Essential in Software Development by Microsoft and LinkedIn",
        link:"https://www.linkedin.com/learning/certificates/c44b6b2c519dcc03c04aedb306de9e82530d7a3ad56f235a6a316aec210835f9",
        icons:[ms,ln]
    },
    microazure:{
        title:"IBM",
        disc:"IBM SkillsBuild Summer Internship Program",
        link: ibmcerti,
        icons:[ibm]
    }
    ,
    accenture:{
        title:"Accenture",
        disc:"Digital Skills: Artificial Intelligence ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        link:"https://www.futurelearn.com/certificates/jmsiib5",
        icons:[acc]
    }
}



function Certification() {
  return (
   
    <>
   <div id="certificatcont" className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 ">
   <motion.h1
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          id="project"
          className="font-fira text-1xl md:text-4xl md:mb-16 py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
        >
          {`<Certifications/>`}{" "}
          <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
        </motion.h1>

    <div id="certificats" className=" flex flex-col md:flex-row items-center  md:px-20  w-full h-fit ">

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