import React from 'react';
import './DownloadSec.css';

// imgs
import shape1 from "../../Img/shape1.png"
import shape2 from "../../Img/shape2.png"
import Img from "../../Img/QR.jpg"

// brands
import pr1 from "../../Img/pr1.png"
import pr2 from "../../Img/pr2.png"
import pr3 from "../../Img/pr3.png"
import pr4 from "../../Img/pr4.png"
import pr5 from "../../Img/pr5.png"
import pr6 from "../../Img/pr6.png"
import pr7 from "../../Img/pr7.png"
import pr8 from "../../Img/pr8.png"
import pr9 from "../../Img/pr9.png"
import MS1 from "../../Img/mobile_s1.png"
import MS2 from "../../Img/‏‏mobile_s2.png"

import Navbar from "../Navbar/Navbar.js"
import Footer2 from '../Footer2/Footer2.js';



function DownloadSec() {
  return (

        <div className='DownSec '>
            <Navbar/>
            <div className='sec1 bg-teal-300/5 border-y  '>
                <h1 className='pt-20 md:pt-0 text-center font-display font-medium text-3xl tracking-tight text-slate-900 sm:text-4xl'>Donate Everything<br/> For Nature Better</h1>
                <p> can you help <b>help</b> us to better <b>nature</b> </p>

                <div className='d-down-qrcode'>
                    <a href='#'><h6>Download App</h6></a>
                    <div className='d-QRcode'>
                        <img src={Img}/>
                    </div>    
                </div>


                {/* absolute blocks */}
                <img className='imgs img1' src={shape1} />
                <img className='imgs img2' src={shape1} />

            </div>

            <div className='sec2'>
               <div className='d-shape2'>
                    <img src={shape2} />
               </div>
               <div className='prands'>
                    <div className='prand'>
                        <img className='imgs' src={pr1} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr2} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr3} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr4} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr5} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr6} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr7} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr8} />  
                    </div>
                    <div className='prand'>
                        <img className='imgs' src={pr9} />  
                    </div>
                    
               </div>
            </div>


            <div className='sec3'>
                <div className='img-m-s'>
                    <img className='imgs img-r' src={MS1} />
                </div>
                <div className='d-sec3-txt-1'>
                    <h1 className='h3 text-center text-3xl pb-8 text-slate-900'>Recycling Food</h1>
                </div>

                {/* <img style={{height:'150px',position:'absolute',right:'0px',bottom:'200px',zIndex:'1',transform:'rotate(90deg) translatey(-200px)'}} src={shape3} /> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" version='1.1' xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters='sRGB'>
	            <feGaussianBlur stdDeviation="102" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="119" ry="224" cx="356.03679934846167" cy="403.37732806505346" fill="hsla(176, 72%, 60%, 1.00)"></ellipse></g></svg> */}
                
            </div>

            <div className='sec3'>
                <div className='d-sec3-txt-1'>
                    <h1 className='h3 text-center text-3xl pb-8 text-slate-900'>Development Nature</h1>
                </div>
                <div className='img-m-s'>
                    <img className='imgs img-l' src={MS2} />
                </div>
            </div>

            <Footer2/>

        </div>
  )
}

export default DownloadSec
