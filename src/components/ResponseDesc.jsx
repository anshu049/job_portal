import React, { useEffect, useState } from "react";
import { responsesampleData } from "../data/sample";
import { CiFileOn } from "react-icons/ci";


const ResponseDesc = ({ response }) => {
  


  return (
    <div className="max-h-[85vh] overflow-scroll  text-black bg-white p-12 rounded-lg font-sans drop-shadow-md">
      <p className="font-bold text-xl mb-2">Personal Details</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <p>First Name</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.firstName}
            </div>
          </div>
          <div>
            <p>Birth Date</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
              {response.birthdate}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div>
            <p>Last Name</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
              {response.lastName}
            </div>
          </div>
          <div>
            <p>Email</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
              {response.email}
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-xl mb-2 mt-6">Residence Details</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div>
            <p>Country</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.country}
            </div>
          </div>
          <div>
            <p>Address</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.address}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>City</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.city}
            </div>
          </div>
          <div>
            <p>Zip</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.zip}
            </div>
          </div>
        </div>
      </div>
      <p className="font-bold text-xl mb-2 mt-6">Employment Details</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <div>
            <p>Expected Salary</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.salary}
            </div>
          </div>
          <div>
            <p>Position</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
            {response.position}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Date Available to Start Work</p>
            <div className="ring-2 p-2 rounded-lg mr-8 mt-2 ring-accent-color">
              {response.startDate}
            </div>
          </div>
          
        </div>
      </div>
      <p className="mt-4">Find Attached Resume</p>
      <div className="text-6xl">
      <CiFileOn  className=" cursor-pointer"/>
      </div>
    </div>
  );
};

export default ResponseDesc;
