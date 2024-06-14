import React from "react";
import Navbar from "../Comp/Navbar/Navbar.js";
import Section1 from "../Comp/Section1/Section1.js";
import Sec22 from "../Comp/Sec22/Sec22.js";
import OurTeam from "../Comp/OurTeam/OurTeam.js";
import Footer1 from "../Comp/Footer1/Footer1.js";
import Questions from "../Comp/Questions/Questions.js";
import Info from "../Comp/Information/Info.js";
import Info2 from "../Comp/Information2/Info2.js";
import Info3 from "../Comp/Information3/Info3.js";
import Info4 from "../Comp/Information4/Info4.js";
import GetSection from "../Comp/GetSection/GetSection.js";
import Quate from "../Comp/quate/quate.js";
import Opinions from "../Comp/Opinions/Opinions.js";
import Footer2 from "../Comp/Footer2/Footer2.js";
import RecipeRecommender from "../Comp/Recipe/Recipe.js";
import Try from "../Comp/Try/Try.jsx";

const Page1 = () => {
  return (
    <div className="Page1 ">
      <Navbar />
      <Section1 />
      <Info/>
      <Info2 />
      <Info3/>
      <Info4/>
      <GetSection/>
      <Opinions/>
      {/* <Quate /> */}
      <OurTeam/>
      <Questions/>
      {/* <Footer1/> */}
      <Footer2/>
      <RecipeRecommender/>
      <Try/>
    </div>
  );
};

export default Page1;
