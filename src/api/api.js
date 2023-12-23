import { jobListings } from "../data/sample";



export async function getJob(id){
    return jobListings[parseInt(id)];
}