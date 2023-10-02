"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner_0.jpg",
      title: "Cac dong san pham",
      mainTitle: "HANU SOUVERNIR SHOP",
      
    },
    {
      id: 1,
      img: "/banner_1.jpg",
      title: "Cac dong san pham",
      mainTitle: "HANU SOUVERNIR SHOP",
      
    },
    {
      id: 2,
      img: "/banner_2.jpg",
      title: "Cac dong san pham",
      mainTitle: "HANU SOUVERNIR SHOP",
      
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;