import React from "react";
import "./sec22.css";
import "../Dawnload/DownloadSec.css";

// brands
import pr1 from "../../Img/pr1 copy.png";
import pr2 from "../../Img/pr2 copy.png";
import pr3 from "../../Img/pr3 copy.png";
import pr4 from "../../Img/pr4 copy.png";
import pr5 from "../../Img/pr5 copy.png";
import pr6 from "../../Img/pr6 copy.png";
import pr7 from "../../Img/pr7 copy.png";
import pr8 from "../../Img/pr8.png";
import pr9 from "../../Img/pr9.png";
// import MS1 from "../../img2/mobile_s1.png"
// import MS2 from "../../img2/‏‏mobile_s2.png"

const Sec22 = () => {
  return (
    <div className="Sec22">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="h3 text-3xl"
      >
        Global Partners that We can cooperate with them
      </h3>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="DownSec"
      >
        <div className="sec2">
          <div className="d-shape2">{/* <img src={shape2} /> */}</div>
          <div className="prands">
            <div className="prand">
              <img className="imgs" src={pr1} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr2} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr3} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr4} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr5} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr6} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr7} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr8} />
            </div>
            <div className="prand">
              <img className="imgs" src={pr9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec22;
