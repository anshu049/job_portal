import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Jobs from "./pages/Jobs";
import Notifications from "./pages/Notifications";
import JobDesc from "./components/JobDesc";
import { example_job } from "./components/JobDesc";
import JobList from "./components/JobList";
import Responses from "./pages/Responses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Application, { loader } from "./pages/Application";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Layout />}>
      <Route index element={<Jobs />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="responses" element={<Responses />} />
      <Route path='test' element={<JobList/>}/>
      
    </Route>
    <Route path="apply/:jobId" element={<Application/>} loader={loader}/>

    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
