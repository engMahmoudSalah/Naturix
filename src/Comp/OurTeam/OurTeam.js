import React from "react";
import Slider from "react-slick";
import "./OurTeam.css";

// imgs
import img1 from "../../Img/myImg.jpg";
import img2 from "../../Img/ahmedMagdy.jpg";

const ResponsiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
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
    <div className="relative overflow-hidden py-20 bg-teal-300/5 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <h2 className="border-b pb-4 font-display font-medium text-3xl tracking-tight text-slate-900 sm:text-4xl">
        {" "}
        Coders <span className="font-medium text-teal-600">Team</span>
      </h2>

      <p className="mt-4 font-semibold text-slate-600 ">Dr / Rasha El-Hadry</p>
      <p className="text-sm text-gray-400  text-slate-100 lnline-block bg-teal-600"> Under supervision </p>
      <Slider {...settings}>
        <div className="gap" style={{display: "flex"}}>
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>
          <p>Mahmoud Salah</p>
          <p className="text-sm text-gray-400 mb-10">front-end developer</p>
        </div>
        <div className="gap">
          <div className="d-img">
            <img src={img2} alt="Slide 1" />
          </div>
          <p> Ahmed Magdy</p>
          <p className="text-sm text-gray-400 mb-10"> back-end developer</p>
        </div>
        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Mohamed Saeed </p>
          <p className="text-sm text-gray-400 mb-10">machine learning</p>

        </div>

        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Ahmed bakr</p>
          <p className="text-sm text-gray-400 mb-10">flutter developer</p>

        </div>



        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p> ahmed fayez</p>
          <p className="text-sm text-gray-400 mb-10">flutter developer</p>
        </div>



        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p> Samaher Ahmed </p>
          <p className="text-sm text-gray-400 mb-10">machine learning</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Mariam Moustafa</p>
          <p className="text-sm text-gray-400 mb-10">back-end developer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Alaa Ahmed </p>
          <p className="text-sm text-gray-400 mb-10">flutter developer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Haneen Mohamed  </p>
          <p className="text-sm text-gray-400 mb-10">UI / UX designer</p>
        </div>


        <div className="gap">
          <div className="d-img">
            <img src={img1} alt="Slide 1" />
          </div>{" "}
          <p>Nourhan Mohamed </p>
          <p className="text-sm text-gray-400 mb-10">machine learning</p>
        </div>


      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
