import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import TagChip from "./TagChip";
import SalaryandType from "./SalaryandType";
import defalutIcon from "../assets/defalut_logo.png"

const JobDesc = ({ job }) => {
  const isBookmarked = false;
  const hostName = window.location.protocol + '//' + window.location.host;
  const { title, icon, description, requirements, skills, type, salary,id } = job;
  return (
    <div className="max-h-[90vh] overflow-scroll flex flex-col text-black bg-white p-4 rounded-lg font-sans">
      {/* topheader  */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-grow">
          <span className="w-24 p-4 bg-yellow-100 rounded-lg  mr-2">
            <img className="object-contain " src={icon || defalutIcon} alt="" />
          </span>
          <div className="flex flex-col justify-start">
            <p className="flex-grow font-bold  mr-24">{title}</p>
            <SalaryandType salary={salary} type={type}/>
          </div>    
        </div>
        <span className="self-start border p-4 rounded-lg text-2xl">
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="">
          <p className="bg-body-color border rounded-lg font-mono p-2">{hostName + '/apply'+'/'+id}</p>
        </div>
        <button className="bg-accent-color rounded-lg text-white w-1/4 py-2" >Copy Link</button>
      </div>
      {/* body */}
      <div className="mx-4 font-thin *:mt-4">
        <p className="font-bold">Job overview</p>
        <p>{description}</p>
        <p className="font-bold">Requierements</p>
        <div className="mx-5 ">
          <ul className="list-disc *:mt-2">
            {requirements.map((requirement, index) => {
              return <li key={index}>{requirement}</li>;
            })}
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">Skills and Expertise</p>
          {skills.map((skill, index) => {
            return <TagChip skill={skill} key={index}/>
          })}
        </div>
      </div>
      
    </div>
  );
};

export const example_job = {
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
  title:
    "Looking for Figma Designer for GAMING THEME with potential long term position",
  description: `We are looking for a Figma designer for a 2 page design, IF we are satisfied then more pages will follow. Also it will be a trial for a potential long term position.The theme of the project is gaming related so it would be of advantage if you have done gaming related designs before.
    We are not looking for a "Canva designer so if you think you are good with Canva, please do not apply.
    We are looking for someone who brings in his/her designer knowledge and brings in own ideas.
    Start would be immediately`,
  skills: ["Ui Designer", "Figma", "Landing Page"],
  requirements: [
    "2+ years of development experience including team leadership experience",
    "Design, build, and maintain efficient, reusable, and reliable codes by setting expectations and features priorities throughout the development life cycle.",
    "Proven experience in building, mentoring and managing efficient development teams Modern web framework React JS Typescript, CSS or LESS, Javascripts, HTML/CSS. Modern source control systems (like Git, Bitbucket ) Analyzing user requirements, envisioning system features and functionality.",
    "Proven track record of delivery high quality, high stake projects in agile environment",
  ],
  type: "Remote",
  salary: "100k-400k",
  total:200,
};


export default JobDesc;
