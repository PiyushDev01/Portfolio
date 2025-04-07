import { useState } from "react";
import PropTypes from 'prop-types';
import git from "../assets/skills/GitHub.png";
import "./project.css";
import { motion } from "framer-motion";
import fadeIn from "../framer/fadein.js";

function Projectcomp(props) {
  const { title, image, dp, discr, link, gitlink, techs, mobile } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      id="maincont"
      className="relative my-8 flex flex-col md:flex-row w-[90%] md:w-[80%] h-fit bg-[#181827] overflow-hidden rounded-[2rem] md:rounded-[3rem] border-slate-600"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div 
        className='absolute w-[50%] h-[50%] blur-3xl -top-[50%] left-[50%] -translate-x-[50%] bg-slate-500/50'
        aria-hidden="true"
      />

      <div
        id="pleft"
        className="md:w-[50%] w-full h-full py-8 md:py-16 px-5 md:px-10 flex flex-col"
      >
        <img 
          src={dp} 
          className="w-[3rem] shadow-md shadow-slate-950 rounded-full" 
          alt={`${title} project logo`} 
        />
        <h2 
          id={`project-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="font-ubuntu text-2xl md:text-4xl text-slate-100 py-4"
        >
          {title}
        </h2>
        <div
          className={`relative overflow-hidden cursor-pointer ${isExpanded ? 'h-auto max-h-40' : 'h-10 max-h-10'} transition-height duration-300 ease-in`}
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          aria-expanded={isExpanded}
          aria-controls={`project-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
          tabIndex="0"
        >
          <p 
            id={`project-description-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-sm md:text-sm max-w-[18rem] font-ubuntu text-slate-400"
          >
            {discr}
          </p>
          {!isExpanded && (
            <div 
              className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#181827] pointer-events-none"
              aria-hidden="true"
            />
          )}
        </div>

        <div 
          id="techstack" 
          className="bg-slate-800 rounded-full mt-2 w-fit p-1 flex gap-2"
          role="list"
          aria-label="Technologies used"
        >
          {techs ? (
            techs.map((item, index) => (
              <img 
                key={index} 
                src={item} 
                className="w-5" 
                alt={`Technology ${index + 1}`}
                role="listitem"
              />
            ))
          ) : (
            <div>No tech stack available</div>
          )}
        </div>

        <div 
          id="buttons" 
          className="flex flex-row items-center gap-6"
          role="group"
          aria-label="Project links"
        >
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <button 
              id="button"
              aria-label={`View ${title} project live`}
            >
              Live View
            </button>
          </a>
          <a 
            href={gitlink} 
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            <img
              src={git}
              className="w-[3rem] cursor-pointer h-[3rem] hover:opacity-100 opacity-50 transition-all"
              alt={`View ${title} project on GitHub`}
            />
          </a>
        </div>
      </div>
      <div 
        id="pright" 
        className="md:w-[50%] h-20 translate-x-10 relative"
      >
        <img
          src={image}
          alt={`${title} project desktop view`}
          className="md:translate-y-[80%] -translate-y-5 translate-x-[10%] md:translate-x-[30%] rounded-[1rem] md:scale-150"
        />
        <img 
          src={mobile} 
          className="absolute w-24 -translate-x-[50%] translate-y-[10%] rounded-lg phoneimg" 
          alt={`${title} project mobile view`}
        />
      </div>

      {/* Hidden SEO content */}
      <div className="sr-only">
        <h3>Project Details</h3>
        <p>Project Name: {title}</p>
        <p>Description: {discr}</p>
        <p>Technologies: {techs ? techs.join(', ') : 'Not specified'}</p>
        <p>View Project: <a href={link}>Live Demo</a></p>
        <p>Source Code: <a href={gitlink}>GitHub Repository</a></p>
      </div>
    </motion.article>
  );
}

Projectcomp.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dp: PropTypes.string.isRequired,
  discr: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  gitlink: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string),
  mobile: PropTypes.string.isRequired
};

export default Projectcomp;
