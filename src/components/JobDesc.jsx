import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import TagChip from "./TagChip";
import SalaryandType from "./SalaryandType";
import defalutIcon from "../assets/defalut_logo.png"
import { useNavigate } from "react-router-dom";

const JobDesc = ({ job }) => {
  const isBookmarked = false;
  const hostName = window.location.protocol + '//' + window.location.host;
  const { title, icon, description, requirements, skills, type, salary,id } = job;
  const navigate = useNavigate();
  return (
    <div className="max-h-[85vh] min-h-[85vh] overflow-scroll flex flex-col text-black bg-white p-4 rounded-lg font-sans">
      {/* topheader  */}
      <div className="flex justify-between mb-2">
        <div className="flex flex-grow">
          <span className="w-24 p-4 bg-yellow-100 rounded-lg drop-shadow-lg  mr-2">
            <img className="object-contain " src={icon || defalutIcon} alt="" />
          </span>
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold  mr-24">{title}</p>
            <SalaryandType salary={salary} type={type}/>
          </div>    
        </div>
        <span className="self-start border p-4 rounded-lg text-2xl">
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="">
          <p className="bg-body-color border rounded-lg font-mono p-2 cursor-pointer" onClick={()=>{
            navigate(`/apply/${id}`);
          }}>{hostName + '/apply'+'/'+id}</p>
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



export default JobDesc;
