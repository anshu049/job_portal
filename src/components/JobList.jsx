import React from "react";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";


const JobList = ({ jobList }) => {
  const onBookmarkclick = () => {};

  return (
    <div className="h-[calc(100vh-160px)] overflow-scroll">
      {jobList.map((job, index) => {
        return <Link to={job.id} key={index}>
          <JobCard job={job}  />
        </Link>
      })}
    </div>
  );
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default JobList;
