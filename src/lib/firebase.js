
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDiwfsvHI6vy09i58inhe2UvQSf37xVntk",
  authDomain: "codellpjobportal.firebaseapp.com",
  projectId: "codellpjobportal",
  storageBucket: "codellpjobportal.appspot.com",
  messagingSenderId: "648174927273",
  appId: "1:648174927273:web:5bdb5bdadd2b3370b9d8b8",
  measurementId: "G-17XHZBQHFZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)