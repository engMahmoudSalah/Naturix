import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
// import "./App.css";
import Page1 from "./Pages/Page1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Comp/ErrorPage/ErrorPage";
import DownloadSec from "./Comp/Dawnload/DownloadSec";
import Navbar from "./Comp/Navbar/Navbar.js";
import Recipe from "./Comp/Recipe/RecipeDetail.js";

import RecipeCard from "./Comp/Recipe/RecipeCard.js";
import RecipeDetail from "./Comp/Recipe/RecipeDetail.js";

// images
import img from "./Img/logo.png";
import Try from "./Comp/Try/Try.jsx";
import Recipes from "./Pages/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/download",
    element: <DownloadSec />,
  },

  {
    path: "/recipes",
    element: <Recipes />,
  },

  {
    path: "/try",
    element: <Try/>,
  },

  // {
  //   path: "/recipe/:name",
  //   element: <RecipeDetail/>,
  // },
]);

function App() {
  // animation config
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000); // يتم إخفاء العنصر بعد 5 ثواني

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" role="main">
      {showLoading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="h-16 animate-recyclee mx-auto block recyclee" src={img} />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
