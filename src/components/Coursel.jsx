import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import LazyLoadCarouselItem from "./LazyLoadCarouselItem";
import "./header.css";
import imageOne from "../assets/images/IMG-20221114-WA0008.jpg";
import imageTwo from "../assets/images/IMG-20221114-WA0012.jpg";
import imageThree from "../assets/images/IMG-20221114-WA0014.jpg";
import { Link } from "react-router-dom";
function Coursel() {
  return (
    <Carousel className="h-[100vh]">
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselOne" imageUrl={imageOne}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">
                Health & Environment  
                </h5>
                <h3 data-animation="fadeInUp" className="text-[3.5rem] text-white" data-delay=".4s">
                We recognize the relationships between communities and  {" "}
                  <span>their environment .</span>
                </h3>
                {/* <div className="slider-btn mb-200">
                  <a href="#" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Donate </a>
                </div> */}
                <div className="second-header-btn flex">
                  <Link  to={"/donate"} className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselTwo" imageUrl={imageTwo}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp bg-black/20 " data-delay=".4s">
                Gender & Climate Action 
                </h5>
                <h3 className="text-[3.5rem] text-white" data-animation="fadeInUp bg-black/20 " data-delay=".4s">
                We recognize the gendered impacts of <span>  climate change</span>
                </h3>
                <div className="second-header-btn flex">
                  <Link to={"/donate"} className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
      <Carousel.Item>
        <LazyLoadCarouselItem className="courselThree" imageUrl={imageThree}>
          <div className="row justify-content-center align-items-center pl-10 pts-5 h-[85vh]">
            <div className="col-lg-7 col-md-8">
              <div className="slider-content s-slider-content pt-[14rem]">
                <h5 data-animation="fadeInUp" data-delay=".4s">
                Climate Change Adaptation 
                </h5>
                <h3 className="text-[3.5rem] text-white" data-animation="fadeInUp" data-delay=".4s">
                  {" "}
                  We assist all types and sizes of vulnerable populations in  <span> adapting to a changing climate</span>
                </h3>
                <div className="second-header-btn flex">
                  <Link to={"/donate"} className="btn">
                    Donate <i className="fal fa-wallet " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-4"></div>
          </div>
        </LazyLoadCarouselItem>
      </Carousel.Item>
    </Carousel>
  );
}

export default Coursel;
