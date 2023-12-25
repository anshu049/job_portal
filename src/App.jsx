import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import Notifications from "./pages/Notifications";
import Responses, { responseLoader } from "./pages/Responses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Application, { loader } from "./pages/Application";
import JobsLayout, { jobsLayoutLoader } from "./layouts/JobsLayout";
import ResponsesLayout, { responseLayoutLoader } from "./layouts/ResponsesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<JobsLayout />}  loader={jobsLayoutLoader}>
        <Route path=':id' element={<Jobs/>} loader={jobsLoader}/>
      </Route>
      <Route path="notifications" element={<Notifications />} />
      <Route path="responses" element={<ResponsesLayout />} loader={responseLayoutLoader} >
        <Route path=":responseId" element={<Responses/>} loader={responseLoader}/>
      </Route>
      
      
    </Route>
    <Route path="/apply/:jobId" element={<Application/>} loader={loader}/>

    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
