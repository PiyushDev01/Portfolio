import img from "../assets/certifi.png"
import fadeIn from "../framer/fadein.js";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard.jsx";
import { ms } from "../images/image.js";

function CertifCard(props) {
    const { title, icons, link, disc, bgicon } = props;

    return (
        <SpotlightCard 
            className="custom-spotlight-card w-[90%] md:min-w-[25%] flex flex-col justify-between max-h-[15rem]" 
            spotlightColor="rgba(212, 154, 252, 0.2)"
            role="article"
            aria-label={`Certificate: ${title}`}
        >
            <div 
                className='absolute w-[50%] h-[50%] blur-3xl bg-purple-500/50 -bottom-[20%] -right-[20%]'
                aria-hidden="true"
            />
            <img 
                className="absolute w-3/5 -bottom-10 opacity-25 satu -right-14" 
                src={bgicon} 
                alt="" 
                aria-hidden="true"
            />
            <div 
                className='absolute w-[50%] h-[50%] blur-3xl bg-purple-500/25 -top-[40%] -left-[40%]'
                aria-hidden="true"
            />

            <div 
                id="allicons" 
                className='flex items-center justify-between mb-4'
                role="group"
                aria-label="Technology icons"
            >
                <div 
                    id="icons" 
                    className='flex gap-2 py-2'
                    role="list"
                >
                    {icons.map((item, index) => (
                        <img 
                            key={index} 
                            src={item} 
                            className='w-8' 
                            alt={`Technology ${index + 1}`}
                            role="listitem"
                        />
                    ))}
                </div>
            </div>

            <h1 className="font-ubuntu text-xl md:text-2xl text-slate-100">
                {title}
            </h1>

            <p className='text-sm md:text-sm font-light font-ubuntu text-slate-400 z-10'>
                {disc}
            </p>

            <a 
                href={link} 
                className='z-10 w-fit' 
                target='_blank'
                rel="noopener noreferrer"
                aria-label={`View ${title} certificate`}
            >
                <button 
                    className='flex gap-2 items-center shadow-rose-500 my-4 transition-all hover:border-purple-400 border-transparent border-2 w-fit px-4 py-2 rounded-full text-sm md:text-base bg-mybg text-zinc-200 font-light font-ubuntu'
                >
                    Show Credential 
                    <span 
                        className='text-xl text-purple-500'
                        aria-hidden="true"
                    >
                        &#8599;
                    </span>
                </button>
            </a>
        </SpotlightCard>
    );
}

export default CertifCard;