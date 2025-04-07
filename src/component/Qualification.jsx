import QualiSec from "./QualiSec";
import { FaUserGraduate } from "react-icons/fa6";
import { LettersPullUp } from './../framer/LettersPullUp';

const QualificationDetails = { q1: {
    from: "2020",
    to: "2021",
    inst: "CBSE",
    clg: "Daffodils Public School",
    addr: "Mirzapur, Uttar Pradesh",
    disc1: "Completed my 12th grade with 91% in the Science Stream.",
    disc2: "",
    },
    q2: {
    from: "2022",
    to: "2026",
    inst: "AKTU",
    clg: "Galgotias College of Engineering and Technology",
    addr: "Noida, Uttar Pradesh",
    disc2: "Currently pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Artificial intelligence and Machine Learning.",
    
    cur: true,
    },
}

function Qualification() {
  return (
    <section 
      id="container" 
      className="md:w-[50%] h-fit p-[2rem]"
      aria-labelledby="qualification-heading"
    >
      <div 
        id="qtitle" 
        className="flex"
        role="group"
        aria-label="Qualification section header"
      >
        <div 
          id="qlogo" 
          className="w-12 flex items-center justify-center rounded-full border-[0px] bg-gradient-to-t from-transparent to-slate-400/30 border-slate-400 -translate-x-[50%]"
          aria-hidden="true"
        >
          <FaUserGraduate 
            className="text-white scale-125" 
            aria-hidden="true"
          />
        </div>
        <h1 
          id="qualification-heading"
          className="sr-only"
        >
          Qualifications - Education History
        </h1>
        <LettersPullUp 
          text="Qualification" 
          aria-hidden="true"
        />
      </div>
      <div
        id="innercont"
        className="w-full h-fit flex flex-col border-l-2 border-slate-700"
        role="list"
        aria-label="Education timeline"
      >
        {Object.keys(QualificationDetails).map((key, index) => (
          <QualiSec 
            key={index} 
            {...QualificationDetails[key]} 
            role="listitem"
          />
        ))} 
      </div>

      {/* Hidden SEO content */}
      <div className="sr-only">
        <h2>Education History</h2>
        <div itemScope itemType="http://schema.org/EducationEvent">
          <h3>Higher Secondary Education</h3>
          <p itemProp="name">Daffodils Public School</p>
          <p itemProp="location">Mirzapur, Uttar Pradesh</p>
          <p itemProp="startDate">2020</p>
          <p itemProp="endDate">2021</p>
          <p itemProp="description">Completed 12th grade with 91% in Science Stream</p>
        </div>
        <div itemScope itemType="http://schema.org/EducationEvent">
          <h3>Bachelor of Technology</h3>
          <p itemProp="name">Galgotias College of Engineering and Technology</p>
          <p itemProp="location">Noida, Uttar Pradesh</p>
          <p itemProp="startDate">2022</p>
          <p itemProp="endDate">2026</p>
          <p itemProp="description">Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning</p>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
