import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { banner } from "../constants/Data"; 

export const Banner = () => {
  const sliderRef = useRef(null); 
  const [currentSlide, setCurrentSlide] = useState(0); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    cssEase: "ease-in-out",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), 
    customPaging: (i) => (
      <div
        className={`slick-dot p-1 rounded-full 
          ${i === currentSlide ? "bg-blue-600" : "bg-gray-100"}`
        }
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
<div className="w-full relative overflow-hidden">
  <Slider {...settings} ref={sliderRef}>
    {banner.map((value, index) => (
      <div key={index} className="relative">
        <img
          src={value.img}
          alt={`banner-image-${index}`}
          className="w-full h-[400px] object-cover"
        />
      </div>
    ))}
  </Slider>


  <div className="absolute top-1/2 w-full transform -translate-y-1/2 flex justify-between px-4 z-50">
    <button
      onClick={() => sliderRef.current.slickPrev()}
      className="text-2xl text-white  rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
    >
      {'<'}
    </button>
    <button
      onClick={() => sliderRef.current.slickNext()}
      className="text-2xl text-white  rounded-full w-10 h-10 flex items-center justify-center shadow-lg "
    >
      {'>'}
    </button>
  </div>
</div>

  );
};
