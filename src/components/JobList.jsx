import React from "react";


import { jobListings } from "../data/sample";
import JobCard from "./JobCard";


const JobList = ({ jobList }) => {
  const onBookmarkclick = () => {};

  return (
    <div className="h-[calc(100vh-160px)] overflow-scroll">
      {jobListings.map((job, index) => {
        return <JobCard job={job} key={index} />;
      })}
    </div>
  );
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default JobList;
