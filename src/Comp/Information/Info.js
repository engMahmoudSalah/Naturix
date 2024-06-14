import React from "react";
import "./Info.css";
import img7 from "../../Img/natnat.jpg";
import Accordion from "../OpenText/OpenText";

const Info = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="Info"
    >
      <div className="contanier">
        <div className="item">
          <div className="d-img">
            <img className="img" src={img7} alt="" />
          </div>
        </div>

        <div className="item">
          <h4 className="border-b pb-4 font-display font-medium text-2xl tracking-tight text-slate-900 sm:text-3xl">
            Our commitment to <span className="font-medium text-teal-600">green energy</span> is paving the way for a cleaner,
            healthier planet.
          </h4>
          <div data-aos="fade-right" data-aos-delay="200" className="slice">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
