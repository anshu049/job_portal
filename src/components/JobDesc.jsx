import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const JobDesc = ({ job }) => {
  const isBookmarked = false;
  const { title, icon, overview, requirements, skills, type, salary } = job;
  return (
    <div className="w-1/2 flex flex-col text-black bg-white p-4 m-4 rounded-lg font-sans">
      {/* topheader  */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-grow">
          <span className="w-24 p-4 bg-yellow-100 rounded-lg  mr-2">
            <img className="object-contain " src={icon} alt="" />
          </span>
          <div className="flex flex-col justify-start">
            <p className="flex-grow font-bold  mr-24">{title}</p>
            <p className="text-gray-400">{`•${type} •${salary}`}</p>
          </div>
        </div>
        <span className="self-start border p-4 rounded-lg text-2xl">
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </span>
      </div>
      {/* body */}
      <div className="mx-4 font-thin *:mt-4">
        <p className="font-bold">Project overview</p>
        <p>{overview}</p>
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
            return (
              <span
                className="p-2 bg-body-color m-2 px-3 font-thin rounded-lg text-gray-500"
                key={index}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-accent-color rounded-lg text-white w-1/4 py-2 mt-4" >Apply</button>
      </div>
    </div>
  );
};

export const example_job = {
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
  title:
    "Looking for Figma Designer for GAMING THEME with potential long term position",
  overview: `We are looking for a Figma designer for a 2 page design, IF we are satisfied then more pages will follow. Also it will be a trial for a potential long term position.The theme of the project is gaming related so it would be of advantage if you have done gaming related designs before.
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
};

export default JobDesc;
