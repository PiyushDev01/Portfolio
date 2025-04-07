import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";
import { LettersPullUp } from './../framer/LettersPullUp';

function Aboutcomp() {

  const text = " Hi there! I'm web developer & designer who likes to write code and make new stuff. I'm pursuing Bachelor of Technology in Computer Science Engineering with a focus within machine learning and artificial intelligence. I'm always willing to learn about and experiment with new technologies. I am skilled in many programming languages and technologies, including Java, JavaScript, Python, React, Node.js, and MongoDB. I'm constantly looking for new projects to work on and possibilities to interact with other devs. I'm excited to grow as a developer, learn new things, and contribute to the tech sector.".split(" ");

  return (
    <section 
      id="abcontainer" 
      className="md:w-[50%] h-fit p-[1rem]"
      aria-labelledby="about-heading"
    >
      <div 
        id="aboutsection" 
        className="w-full h-fit"
        role="region"
        aria-label="About section"
      >
        <h1 
          id="about-heading"
          className="sr-only"
        >
          About me
        </h1>
        <LettersPullUp 
          text="About me" 
          aria-hidden="true"
        />

        <div
          id="aboutcontent"
          className="mt-4 text-justify w-full h-fit flex flex-wrap gap-2 text-slate-400"
          role="article"
        >
          {text.map((el, i) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.25,
                delay: i / 50,
              }}
              key={i}
              className="font-ubantu md:text-xl text-base font-normal tracking-tighter md:font-normal"
            >
              {el}{" "}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aboutcomp;
