import React from "react";
import Slider from "react-slick";
import "./OurTeam.css";

// imgs
import img1 from "../../Img/myImg.jpg";
import img2 from "../../Img/ahmedMagdy.jpg";
import img3 from "../../Img/haneen.jpg";
import img4 from "../../Img/bakr2.jpg";
import img5 from "../../Img/nour.jpg";
import img6 from "../../Img/Mandor.jpg";
import img7 from "../../Img/sama.jpg";
import man from "../../Img/man.jpg";
import we from "../../Img/we.jpg";


const ResponsiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="OurTeam relative overflow-hidden py-20 bg-teal-300/5 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <h2 className="border-b pb-4 font-display font-medium text-3xl tracking-tight text-slate-900 sm:text-4xl">
        {" "}
        Coders <span className="font-medium text-teal-700">Team</span>
      </h2>

      <p className="mt-4 font-semibold text-2xl text-slate-600 text-center flex justify-center">Dr / Rasha El-Hadry</p>
      <p className="text-lg text-gray-400 text-slate-100  text-center mt-3 bg-teal-700 flex justify-center"> Under supervision </p>
      <Slider {...settings}>
        <div className="gap" style={{display: "flex"}}>
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>
          <p>Mahmoud Salah</p>
          <p className="text-sm text-gray-600 mb-10">front-end developer</p>
        </div>

        <div className="gap">
          <div className="d-img">
            <img src={img2} alt="Slide 1" />
          </div>
          <p> Ahmed Magdy <span className="text-sm text-gray-400 ml-2  text-slate-100 lnline-block bg-teal-700">Leader</span></p>
          <p className="text-sm text-gray-600 mb-10"> back-end developer</p>
        </div>

        <div className="gap">
          <div className="d-img">
            <img src={img6} alt="Slide 1" />
          </div>{" "}
          <p>Mohamed Saeed </p>
          <p className="text-sm text-gray-600 mb-10">machine learning</p>

        </div>

        <div className="gap">
          <div className="d-img">
            <img src={img4} alt="Slide 1" />
          </div>{" "}
          <p>Ahmed bakr</p>
          <p className="text-sm text-gray-600 mb-10">flutter developer</p>

        </div>



        <div className="gap">
          <div className="d-img">
            <img src={man} alt="Slide 1" />
          </div>{" "}
          <p> ahmed fayez</p>
          <p className="text-sm text-gray-600 mb-10">flutter developer</p>
        </div>



        <div className="gap">
          <div className="d-img">
            <img src={img7} alt="Slide 1" />
          </div>{" "}
          <p> Samaher Ahmed </p>
          <p className="text-sm text-gray-600 mb-10">machine learning</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={we} alt="Slide 1" />
          </div>{" "}
          <p>Mariam Moustafa</p>
          <p className="text-sm text-gray-600 mb-10">back-end developer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={we} alt="Slide 1" />
          </div>{" "}
          <p>Alaa Ahmed </p>
          <p className="text-sm text-gray-600 mb-10">flutter developer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img3} alt="Slide 1" />
          </div>{" "}
          <p>Haneen Mohamed  </p>
          <p className="text-sm text-gray-600 mb-10">UI / UX designer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img5} alt="Slide 1" />
          </div>{" "}
          <p>Nourhan Mohamed </p>
          <p className="text-sm text-gray-600 mb-10">machine learning</p>
        </div>


      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
