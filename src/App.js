


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Page1 from "./Pages/Page1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Comp/ErrorPage/ErrorPage";
import DownloadSec from "./Comp/Dawnload/DownloadSec";
import Navbar from "./Comp/Navbar/Navbar.js";
import Recipe from "./Comp/Recipe/Recipe.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
    errorElement: <ErrorPage/>
  },

  {
    path: "/download",
    element: <DownloadSec/>,
  },
]);




function App() {

  // animation config
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50
    });
  }, []);






  return (
    <div className="App">
     <RouterProvider router={router} />
     {/* <Recipe/> */}
     
    </div>
  );
}

export default App;
