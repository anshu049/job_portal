import React, { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ResponseCard from "../components/ResponseCard";
import ResponseDesc from "../components/ResponseDesc";
import { responsesampleData } from "../data/sample";
import { getResponses } from "../api/api";

const ResponsesLayout = () => {
  const {responses} = useLoaderData();
  const [currentSelectedResponse,setSelectedResponse] = useState(null);
  return (
    <>
      <div className="grid grid-cols-[3fr_7fr] gap-6 mt-6  mx-2">
        <div className="">
          <div className="p-4 drop-shadow-lg  flex items-center justify-center bg-white rounded-lg font-bold text-xl">
            <p>My Responses</p>
          </div>
          <div className="h-[calc(100vh-160px)] overflow-scroll scroll-smooth p-2">
            {responses.map((response,index)=>{
              return (<Link to={response.id} key={index}>
                <ResponseCard isActive={currentSelectedResponse === response.id} fullName={response.firstName+" "+response.lastName} appliedFor={response.position}  />
              </Link>)
            })}
          </div>

        </div>
        <div className="">
            <Outlet context={{setSelectedResponse}}/>
        </div>
      </div>
    </>
  );
};

export async function responseLayoutLoader({ params, request }) {
  return await getResponses();
}

export default ResponsesLayout;
