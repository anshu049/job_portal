import { jobListings } from "../data/sample";
import {getFirestore  ,doc, collection , getDocs, query, where} from 'firebase/firestore/lite'
import { app } from "../lib/firebase";


const db = getFirestore(app)
const listingCollectionRef = collection(db,"listings")

export async function getListedJobs(){
    const querySnapShot = await getDocs(listingCollectionRef);
    const dataArray = querySnapShot.docs.map(doc=>({
        ...doc.data()
    }))
    return {jobs:dataArray}
}


export async function getJob(id){
    const q = query(listingCollectionRef,where('id' ,'==',id))
    const jobsSnapshot= await getDocs(q);
    return {job:jobsSnapshot.docs[0].data()}
    // return jobListings[parseInt(id)];
}