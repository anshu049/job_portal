import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import TagChip from "./TagChip";
import { GoShieldCheck } from "react-icons/go";
import SalaryandType from "./SalaryandType";
import defalutIcon from "../assets/defalut_logo.png"

const JobCard = ({ job, isActive}) => {
    const { title, description, icon, skills, type, salary, total } = job;
    const isBookmarked = false;
    return (
      <>
        <div
          className={`"flex flex-col rounded-lg p-4  shadow-md m-4 truncate text-ellipsis" ${
            isActive ? "bg-green-200" : "bg-white"
          }`}
        >
          {/* header */}
          <div className="flex">
            <div className="flex flex-grow items-center drop-shadow-lg">
              <span className="w-16 p-4 bg-yellow-100 rounded-lg  mr-2">
                <img className="object-contain" src={icon || defalutIcon} alt="" />
              </span>
              <div className="flex-grow flex flex-col w-[10px] mr-2">
                <p className={`truncate`}>{title}</p>
                <p className="truncate text-gray-500">{description}</p>
              </div>
            </div>
            <span className="self-start border-gray-200 border-2 p-4 rounded-lg text-xl">
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
            </span>
          </div>
          {/* body */}
          <div>
            <div className="py-4 text-sm">
              {skills.map((skill, index) => {
                if(index>2){
                    return
                }
                return <TagChip skill={skill} key={index} />;
              })}
            </div>
            <div className="flex mx-3 justify-between text-gray-400 text-[.8rem] items-center">
              <SalaryandType salary={salary} type={type} />
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-1">
                  <GoShieldCheck className="text-lg text-blue-500 mt-1 mr-1" />
                  <p>Verified Recruiter</p>
                </div>
                <div className="text-black">Number of applicants {total}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default JobCard;