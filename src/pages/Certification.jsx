
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import CertifCard from '../component/CertifCard.jsx';
import { acc,awsc,aws, ibm, ln, ms, github1, gitfound, ibmnew } from '../images/image.js';
import ibmcerti from "./Ibmcertificate.pdf";
import resume from "./Piyush_Vishwakarma.pdf";

const certificatesDetail = {
    microlinkedin:{
        title:"Microsoft and LinkedIn",
        disc:"Career Essential in Software Development",
        link:"https://www.linkedin.com/learning/certificates/c44b6b2c519dcc03c04aedb306de9e82530d7a3ad56f235a6a316aec210835f9",
        icons:[ms,ln],
        bgicon:ms
    },
    microazure:{
        title:"IBM",
        disc:"IBM SkillsBuild Summer Internship Program",
        link: ibmcerti,
        icons:[ibm],
        bgicon:ibmnew
    }
    ,
    gitfoundation:{
        title:"GitHub",
        disc:"GitHub Foundations ",
        link:"https://www.credly.com/badges/889d77e4-7413-4fb4-8c04-342693ab0aad/public_url",
        icons:[github1],
        bgicon:gitfound
    },
    // accenture:{
    //     title:"Accenture",
    //     disc:"Digital Skills: Artificial Intelligence",
    //     link:"https://www.futurelearn.com/certificates/jmsiib5",
    //     icons:[acc],
    //     bgicon:acc
    // }
    // ,
    aws:{
        title:"AWS Academy",
        disc:"Cloud Foundations",
        link:"https://www.credly.com/badges/e3618beb-d2cb-44f4-8444-fb1cec4f7cef/public_url",
        icons:[aws],
        bgicon:awsc
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
          viewport={{ once: true, amount: 0.1 }}
          id="project"
          className="font-fira text-1xl md:text-4xl md:mb-16 py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
        >
          {`<Certifications/>`}{" "}
          <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
        </motion.h1>

    <div id="certificats" className=" flex flex-col items-center md:grid md:grid-cols-4  gap-4   w-full h-fit ">

        {
            Object.entries(certificatesDetail).map(([key, value])=>{
                return(
                    <CertifCard key={key} title={value.title} disc={value.disc} link={value.link} icons={value.icons} bgicon={value.bgicon} />
                );
            })
        }
        


    </div>

    </div> 
    </>
  )
}

export default Certification