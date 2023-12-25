import React, { Suspense, useEffect, useRef, useState } from "react";
import JobList from "../components/JobList";
import JobDesc from "../components/JobDesc";
import { jobListings } from "../data/sample";
import Profile from "../components/Profile";
import Avalibitly from "../components/Avalibitly";
import { Button, Modal, Spin } from "antd";
import SurveyComponent from "../components/SurveyComponent";
import ListingForm from "../components/ListingForm";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getJob } from "../api/api";
import { LoadingOutlined } from "@ant-design/icons";


const Jobs = () => {
  const dataPromise = useLoaderData()  

  return (
    <Suspense fallback={<Spin className='min-h-[85vh] rounded-lg w-full flex items-center justify-center bg-white' indicator={<LoadingOutlined style={{ fontSize: 64 ,color:'#268D61' }} spin />}/>}>
      <Await resolve={dataPromise.job}>
        {({job})=><JobDesc job={job} />}
      </Await>
    </Suspense>
    
  );
};

export async function jobsLoader({params}){
  return defer({job:getJob(params.id)})
}

export default Jobs;
