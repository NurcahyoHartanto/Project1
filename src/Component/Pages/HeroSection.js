import React, { useState } from "react";
import "../Pages/HeroSection.css";
import Slider from "react-slick";
import MyButton from "../MyButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero1 from "../../asset/Hero-1.png";
import Hero2 from "../../asset/Hero-2.png";
import Hero3 from "../../asset/Hero-3.png";
import Hero4 from "../../asset/Hero-4.png";

const HeroSection = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ maxHeight: "35rem" }}
      className="max-w-fit overflow-hidden bg-cover "
    >
      <div
        style={{
          fontFamily: "DM Serif Text",
          // left: "34%",
        }}
        className="
        absolute z-50 text-center w-full max-w-md text-4xl left-20 top-40 
        sm:text-5xl sm:top-44 sm:left-28  
        md:text-6xl md:left-44 md:top-40 
        lg:text-7xl lg:left-72 lg:top-56 
        xl:left-96 xl:ml-10 
        2xl:left-96 2xl:ml-44 2xl:top-40
        "
      >
        <h3 className="">Let's Ride With Us</h3>
      </div>
      <MyButton />
      <Slider {...settings}>
        <div>
          <img src={Hero1} alt="Slide 1" />
        </div>
        <div>
          <img src={Hero2} alt="Slide 2" />
        </div>
        <div>
          <img src={Hero3} alt="Slide 3" />
        </div>
        <div>
          <img src={Hero4} alt="Slide 4" />
        </div>
      </Slider>
      <div>
        <i
          class="fa fa-angle-left  absolute top-[30%] -translate-x-0 translate-y-[20%] left-5 text-4xl  sm:top-[36%] md:top-[40%] lg:top-[45%] xl:top-[44%] 2xl:top-[38%] "
          aria-hidden="true"
        ></i>
      </div>
      <div>
        <i
          class="fa fa-angle-right absolute top-[30%] -translate-x-0 translate-y-[20%] right-5 text-4xl sm:top-[36%] md:top-[40%] lg:top-[45%] xl:top-[44%] 2xl:top-[38%] "
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default HeroSection;
