
  import { motion } from "framer-motion";
  import fadeIn from "../framer/fadein.js";
  import Projectcomp from '../component/Projectcomp.jsx';
  import artifex from "../assets/projectimg/artifex.png"
  import artdp from "../assets/projectimg/titlelogo2.webp"
  import portdp from "../assets/profile1.png"
  import portfolio from "../assets/projectimg/portfolio.png"
  import uifrydp from "../assets/projectimg/uifry.png"
  import uifryimg from "../assets/projectimg/uifryimage.png"
  import uifryphone from "../assets/projectimg/uifryphone.png"
  import artifexphone from "../assets/projectimg/artifexphone.png"
  import portfoliophone from "../assets/projectimg/portfoliophone.png"
  import doingphone from "../assets/projectimg/doingphone.png";
  import doing from "../assets/projectimg/doing.png";
  import doingdp from "../assets/projectimg/doingdp.png";
  import { ex, fire, fm, react, tailwind } from '../images/image.js';


  const projects = {
    Artifex: {
      profile: artdp, 
      image: artifex, 
      discr: "This project is an innovative e-commerce platform showcases and sells custom sketches and artworks. Customers can view my portfolio, order custom sketches, and enjoy secure payments and reliable delivery.",
      link:"https://artifex2.vercel.app/",
      gitlink:"https://github.com/PiyushDev01/Artifex-v2",
      tech:[react, tailwind,ex, fire,],
      mobile: artifexphone
    },
    Doing: {
     profile: doingdp, 
     image: doing, 
     discr: "A modern productivity platform combining task management, coding practice tracking, and time management tools in a customizable widget-based interface. Built with React/TypeScript, featuring local data storage, comprehensive analytics, and integrations for LeetCode practice and Pomodoro sessions.",
     link:"https://todotrack-dusky.vercel.app/",
     gitlink:"https://github.com/PiyushDev01/todotrack",
     tech:[react, fm, tailwind,],
     mobile: doingphone
   }
   ,
    Uifry: {
      profile: uifrydp, 
      image: uifryimg, 
      discr: "UIFry is a UI/UX project built with React and Tailwind CSS, exploring creative design solutions and interactive components. This project showcases my ability to build visually engaging and user-friendly interfaces using modern web technologies.",
      link:"https://uifrypiyush.vercel.app/",
      gitlink:"https://github.com/PiyushDev01/uiFry-v1",
      tech:[react, tailwind],
      mobile: uifryphone
    },
    Portfolio: {
      profile: portdp, 
      image: portfolio, 
      discr: "This portfolio website showcases my Web development skills using React, Tailwind, and Firebase, featuring diverse projects and a focus on user-centric design.",
      link:"https://portfoliopiyush.vercel.app/",
      gitlink:"https://github.com/PiyushDev01/Portfolio",
      tech:[react, fm, tailwind,],
      mobile: portfoliophone
    },
   
  };

  function Project() {
    return (
      <>
      <div id="Projects" className="flex flex-col w-full h-fit px-6 md:py-10 md:px-40 mb-10 ">
      <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          id="project"
          className="font-fira text-1xl md:text-4xl py-8 w-full h-10 gap-4 text-slate-100 font-light flex items-center"
        >
          {`<Projects/>`}{" "}
          <div className=" w-60 md:w-[80%] h-[0.1rem] bg-slate-50"></div>
        </motion.h1>
        <div id="projects" className=" flex flex-col items-center justify-center mt-10 md:px-20  w-full h-fit "> 

        {Object.entries(projects).map(([key, value]) => {
            return <Projectcomp 
            key={key}
            title={key} 
            image={value.image} 
            dp={value.profile} 
            discr={value.discr}
            link={value.link}
            gitlink={value.gitlink}
            techs={value.tech}
            mobile={value.mobile}
            />;
          })}
          

        </div>
      </div>
      </>
    )
  }

  export default Project