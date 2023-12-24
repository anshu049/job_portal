import React, { useEffect, useRef, useState } from "react";
import JobList from "../components/JobList";
import JobDesc from "../components/JobDesc";
import { jobListings } from "../data/sample";
import Profile from "../components/Profile";
import Avalibitly from "../components/Avalibitly";
import { Button, Modal } from "antd";
import SurveyComponent from "../components/SurveyComponent";
import ListingForm from "../components/ListingForm";
import { Outlet, useLoaderData } from "react-router-dom";
import { getListedJobs } from "../api/api";

const JobsLayout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const {jobs} = useLoaderData()
  console.log(jobs)
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr] gap-4 gap-y-4  p-2">
      <div className="">
        <div className="p-4 flex items-center justify-between bg-white rounded-lg drop-shadow-sm font-bold text-xl">
          <p>My Listings</p>
          <button
            onClick={showModal}
            className="bg-accent-color p-2 font-normal text-base text-white rounded-lg "
          >
            Create New
          </button>
          <Modal
            width={"80%"}
            style={{ top: 20, }}
            open={isModalOpen}
            footer={null}
            onCancel={handleCancel}
            maskClosable={false}
          >
            <ListingForm/>
          </Modal>
        </div>

        <div className={` flex justify-center overflow-y-auto `}>
          <JobList jobList={jobs}/>
        </div>
      </div>
      <div className="">
        <Outlet/>
      </div>
      <div className="h-[100%]">
        <Profile />
        <Avalibitly />
      </div>
    </div>
  )
}

export async function jobsLayoutLoader(){
  return await getListedJobs();
}

export default JobsLayout