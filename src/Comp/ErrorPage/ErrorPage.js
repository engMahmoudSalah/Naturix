import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import TailwindFooter from "../TailwindFooter/TailwindFooter";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <div className="d-error">
        <h1>404</h1>{" "}
        <p>يوجد خطا في ادخال الصفحة</p>
        <Link to="/">
          {" "}
          <button>الصفحة الرئيسية </button>
        </Link>{" "}

      </div>
      {/* <TailwindFooter /> */}
    </div>
  );
};

export default ErrorPage;
