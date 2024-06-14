import React, { useState } from "react";
import "./OpenText.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Set the initial active index

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="Accordion"
    >
      <h2
        onClick={() => handleClick(0)}
        className={activeIndex === 0 ? "active" : ""}
      >
        - Food Donation
      </h2>
      {activeIndex === 0 && (
        <div className=" text-sm text-slate-700">
          facilitating the donation process of surplus food that cannot be used
          or sold commercially. This food is directed either to charitable
          organizations for distribution to those in need or directly to
          individuals through the application.
        </div>
      )}
      <h2
        onClick={() => handleClick(1)}
        className={activeIndex === 1 ? "active" : ""}
      >
        - Expiration Date Notifications{" "}
      </h2>
      {activeIndex === 1 && (
        <div className=" text-sm text-slate-700">
          Automatic notifications are sent to users to remind them of expiration
          dates for food stored in the application, making it easier for them to
          manage their usage effectively.
        </div>
      )}
      <h2
        onClick={() => handleClick(2)}
        className={activeIndex === 2 ? "active" : ""}
      >
        - AI-Based Recepe Recommendation
      </h2>
      {activeIndex === 2 && (
        <div className=" text-sm text-slate-700">
          {" "}
          utilizes artificial intelligence techniques to analyze user
          preferences and suggest suitable and preferred meals, contributing to
          increased food utilization and waste reduction.
        </div>
      )}

      <h2
        onClick={() => handleClick(3)}
        className={activeIndex === 3 ? "active" : ""}
      >
        - Shopping Basket Recommendations
      </h2>
      {activeIndex === 3 && (
        <div className=" text-sm text-slate-700">
          {" "}
          This part provides recommendations for shopping basket contents based
          on the required quantities of foods, helping to avoid purchasing
          excess quantities and reducing financial and food waste
        </div>
      )}

      <h2
        onClick={() => handleClick(4)}
        className={activeIndex === 4 ? "active" : ""}
      >
        - Food Recycling
      </h2>
      {activeIndex === 4 && (
        <div className=" text-sm text-slate-700">
          {" "}
          In cases where food is not suitable for donation or consumption, it is
          directed to recycling facilities to be converted into organic compost
          that can be used in agriculture, thus preserving the environment.
        </div>
      )}

      <h2
        onClick={() => handleClick(5)}
        className={activeIndex === 5 ? "active" : ""}
      >
        - Community Interaction
      </h2>
      {activeIndex === 5 && (
        <div className=" text-sm text-slate-700">
          {" "}
          By promoting community interaction and engagement, users can learn
          from each other, collaborate on initiatives, and collectively
          contribute to the goal of reducing food waste.
        </div>
      )}
    </div>
  );
};

export default Accordion;
