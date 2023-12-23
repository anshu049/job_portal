import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import TagChip from "./TagChip";
import SalaryandType from "./SalaryandType";
import { FaRegCopy } from "react-icons/fa";
import SurveyComponent from "./SurveyComponent";

const ApplicationData = ({ job }) => {
  const isBookmarked = false;
  const { title, icon, description, requirements, skills, type, salary } = job;
  return (
    <div className="max-w-[90vh] m-auto mt-4 shadow-lg overflow-scroll flex flex-col text-black bg-white p-4 rounded-lg font-sans">
      {/* topheader  */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-grow">
          <span className="w-24 p-4 bg-yellow-100 rounded-lg  mr-2">
            <img className="object-contain " src={icon} alt="" />
          </span>
          <div className="flex flex-col items-start">
            <p className="font-bold  mr-24">{title}</p>
            <div><SalaryandType salary={salary} type={type}/></div>
          </div>    
        </div>
        <span className="self-start border p-4 rounded-lg text-2xl">
          <FaRegCopy/>
        </span>
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
      {/* <div className="w-full flex justify-end">
        <button className="bg-accent-color font-bold rounded-lg text-white w-1/4 py-2 mt-4" >Apply Now</button>
      </div> */}
      <div>
        <SurveyComponent/>
      </div>
    </div>
  );
};




export default ApplicationData;
