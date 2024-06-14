import React from "react";
import Grid from "../Grid/Grid";
import "./GetSection.css"


// images
import img2 from "../../Img/s1-m1.jpg";
import img3 from "../../Img/s1-m5.jpg";
import img4 from "../../Img/s1-m3.png";
import { Link } from "react-router-dom";

const GetSection = () => {
  return (
    <div className="GetSection">
      <section
        id="get-started-today"
        className="relative overflow-hidden bg-teal-600 py-32 border-y-2"
      >
        <Grid/>

        {/* blob1 absoul */}
        <div
          className=" absolute -tob-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#46ffff] to-[#449e6e] opacity-2"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* blob2 absoul */}

        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl "
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#449e6e] to-[#3ba0a0]  opacity-2"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>


        {/* abos */}
      <img data-aos="fade-right" data-aos-delay="200" className="img2-abs i-abs gradient-mask-top z-40  gradient-mask-right" src={img2} alt="" />
      <img data-aos="fade-left" data-aos-delay="200" className="img3-abs i-abs   gradient-mask-left z-40" src={img4} alt="" />
      <img data-aos="fade-down" data-aos-delay="0" className="img4-abs i-abs gradient-mask-bottom z-40" src={img3} alt="" />
      {/*  */}

{/* end absoul */}


        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-40 ">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-100 sm:text-4xl">
              Start Reducing Food Waste Today
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-100">
              Join us in the fight against food waste. Our app helps you track
              your food usage, minimize waste, and contribute to a greener
              planet.
            </p>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-teal-600 active:bg-green-200 active:text-green-600 focus-visible:outline-white mt-10"
              color="white"
              variant="solid"
              to="/download"
            >
              Download Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetSection;
