import React, { useEffect, useRef, useState } from "react";
import JobList from "../components/JobList";
import JobDesc from "../components/JobDesc";
import { jobListings } from "../data/sample";
import Profile from "../components/Profile";
import Avalibitly from "../components/Avalibitly";
import { Button, Modal } from "antd";
import SurveyComponent from "../components/SurveyComponent";
import ListingForm from "../components/ListingForm";
import { useLoaderData } from "react-router-dom";
import { getJob } from "../api/api";


const Jobs = () => {
  const {job} = useLoaderData()  

  return (
    <JobDesc job={job} />
  );
};

export async function jobsLoader({params}){
  return await getJob(params.id)
}

export default Jobs;
