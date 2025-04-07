import { useState } from "react";
import "./nav.css";

function Nav() {
  const [toggle, settoggle] = useState(false);

  const handletoggle = () => {
    settoggle(!toggle);
  };
  //   bg-[#11111b]
  return (
    <nav 
      className="flex flex-col fixed items-center justify-center w-full md:h-[8rem] mt-10 md:mt-0 z-20"
      aria-label="Main navigation"
    >
      <div
        id="nav"
        className="bg-zinc-800/50 backdrop-blur-sm p-4 hidden rounded-full w-fit md:flex flex-row items-center px-[1rem] justify-between"
        role="navigation"
        aria-label="Desktop navigation"
      >
        {/* <img
          src={profile}
          id="profileimage"
          className="bg-slate-500 w-12 my-2 md:my-0 md:w-[3.5rem] md:h-[3.5rem] rounded-full"
        ></img> */}
        <ul 
          className="hidden md:flex flex-row gap-16 px-4 text-slate-100 font-light font-fira"
          role="menubar"
        >
          <li role="none">
            <a 
              href="#Home" 
              role="menuitem"
              aria-label="Go to Home section"
            >
              {"<Home/>"}
            </a>
          </li>
          <li role="none">
            <a 
              href="#About" 
              role="menuitem"
              aria-label="Go to About section"
            >
              {"<About/>"}
            </a>
          </li>
          <li role="none">
            <a 
              href="#Skills" 
              role="menuitem"
              aria-label="Go to Skills section"
            >
              {"<Skills/>"}
            </a>
          </li>
          <li role="none">
            <a 
              href="#Projects" 
              role="menuitem"
              aria-label="Go to Projects section"
            >
              {"<Projects/>"}
            </a>
          </li>
        </ul>
        {/* <img 
          src={menu}
          id="menu"
          onClick={handletoggle}
          className="w-[2.5rem] md:hidden h-[2.5rem] rounded-full"
        ></img> */}

        <div 
          id="menuToggle" 
          className="md:hidden scale-75"
          role="button"
          aria-label="Toggle mobile menu"
          aria-expanded={toggle}
          aria-controls="mobnav"
          onClick={handletoggle}
        >
          <input 
            id="checkbox" 
            type="checkbox" 
            aria-hidden="true"
          />
          <label 
            className="toggle" 
            htmlFor="checkbox"
            aria-hidden="true"
          >
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
      </div>

      {/* navbar for mobile view */}
      <div
        id="mobnav"
        className={`overflow-hidden flex items-center justify-center rounded-t-2xl h-[10vh] bottom-0 transition-all -z-10 md:hidden fixed w-full bg-zinc-800/50 backdrop-blur-lg ${toggle ? 'h-[320px]' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!toggle}
      >
        <ul
          className="flex items-center justify-around gap-8 w-[90%] font-fira text-slate-50 text-lg"
          role="menubar"
        >
          <li role="none">
            <a 
              href="#Home" 
              role="menuitem"
              aria-label="Go to Home section"
              className="flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path d="M22 10.498c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1M12 17.988v-3" 
                  stroke="#d9e3f0" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-ubuntu text-sm font-normal">Home</h2>
            </a>
          </li>
         
          <li role="none">
            <a 
              href="#Skills" 
              role="menuitem"
              aria-label="Go to Skills section"
              className="flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path d="M6.89 9c.98.49 1.82 1.23 2.43 2.15.35.52.35 1.19 0 1.71-.61.91-1.45 1.65-2.43 2.14" 
                  stroke="#d9e3f0" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path d="M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M13 15h4" 
                  stroke="#d9e3f0" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-ubuntu text-sm font-normal">Skills</h2>
            </a>
          </li>
          <li role="none">
            <a 
              href="#Projects" 
              role="menuitem"
              aria-label="Go to Projects section"
              className="flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path d="M12 2v20M2 9.5h10M12 14.5h10M3.96 3.32C2.6 4.43 2 6.27 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9" 
                  stroke="#d9e3f0" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-ubuntu text-sm font-normal">Project</h2>
            </a>
          </li>
          <li role="none">
            <a 
              href="#About" 
              role="menuitem"
              aria-label="Go to About section"
              className="flex flex-col justify-center items-center gap-1 cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <path d="M15.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0-2.21-.07-4-1.76-4.24-3.92C7.3 4.38 9.41 2 11.99 2M6.99 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.73-1.83-7.24-1.83-10.01 0Z" 
                  stroke="#d9e3f0" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="font-ubuntu text-sm font-normal">About</h2>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
