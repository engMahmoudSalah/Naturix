import React from "react";
import "./Info2.css";


const Info2 = () => {


  return (
    <div id="vision" data-aos="fade-up" data-aos-delay="200" className="Info2">
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          position: "relative",
          borderBottom: "1px solid #ddd",
          padding: "25px 5% ",
          gap: "10px",
        }}
      >
        <div
          style={{
            height: "15px",
            width: "15px",
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        ></div>
        <h5 className="h5">About Us</h5>
      </div>

      <div className="contanier">
        <div className="item">
          <div className="d-imgs">
            <div className="d-img1">
              <h1 className="h3 text-3xl pb-8 text-teal-700"> Our vision and goals </h1>
              <h4>
                {" "}
                Our vision is to build a more sustainable
                society, balanced between humans and the environment, by
                reducing food waste and improving the use of food resources. Our
                goals are to reduce:
              </h4>
            </div>
          </div>
        </div>

        <div className="item">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="100"
            className="slice"
          >
            {/* <img className="img" src={img5} alt="" /> */}
            <h1 className="h1"> 1.3 billion tons </h1>
            <p className="p">Wasted quantities</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="50"
            className="slice"
          >
            {/* <img className="img" src={img5} alt="" /> */}
            <h1 className="h1"> 30% of global food production </h1>
            <p className="p">percentage</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="slice"
          >
            {/* <img className="img" src={img5} alt="" /> */}
            <h1 className="h1"> 3.3 billion tons of carbon dioxide </h1>
            <p className="p">Carbon Dioxide</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="slice"
          >
            {/* <img className="img" src={img5} alt="" /> */}
            <h1 className="h1"> Another result : </h1>
            <p className="p">
              Food waste can lead to inefficient energy consumption, as the
              processes of producing, distributing, storing and disposing of
              food consume large amounts of energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info2;
