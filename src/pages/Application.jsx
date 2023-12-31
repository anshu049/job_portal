import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { getJob } from '../api/api';
import ApplicationData from '../components/ApplicationData';
import { jobListings } from '../data/sample';
jobListings
const Application = () => {
    const {job} = useLoaderData();
  return (
    <ApplicationData job={job}/>
  )
}

export async function loader({params,request}){
    return await getJob(params.jobId)

}

export default Application