import { jobListings } from "../data/sample";
import {getFirestore  ,doc, collection , getDocs, query, where,setDoc,Timestamp} from 'firebase/firestore/lite'
import { app } from "../lib/firebase";


const db = getFirestore(app)
const listingCollectionRef = collection(db,"listings")
const responsesCollectionRef = collection(db,"responses")

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

export async function getResponses(){
    const querySnapShot = await getDocs(responsesCollectionRef);
    const dataArray = querySnapShot.docs.map(doc=>({
        ...doc.data()
    }))
    return {responses:dataArray}
}

export async function getResponse(id){
    const q = query(responsesCollectionRef,where('id' ,'==',id))
    const jobsSnapshot= await getDocs(q);
    return {response:jobsSnapshot.docs[0].data()}
    // return jobListings[parseInt(id)];
}

export async function createNewJob(job){
    const docRef = doc(listingCollectionRef);
    const newId = docRef.id;
    const time =  Timestamp.now();
    const randomNumber = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
    const data = {...job,time:time,id:newId,total:randomNumber}
    await setDoc(docRef,data);
    return newId
}

export async function createNewResponse(response){
    const docRef = doc(responsesCollectionRef);
    const newId = docRef.id;
    const time = Timestamp.now();
    const data = {...response,time:time,id:newId};
    await setDoc(docRef,data);
}