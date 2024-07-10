"use client";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerData = [{image: "../HeropageBgImg.svg"},
    {image: "../HeropageBgImg.svg"},
    {image: "../HeropageBgImg.svg"},
    {image: "../HeropageBgImg.svg"}
]

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: false,
  };

  return (
    <div className="sm:h-[400px] lg:h-full w-full flex justify-center pb-4 items-center bg-gray-50">
      {bannerData && bannerData?.length > 0 && (
        <div className="banner-container w-full h-full pb-5">
          <div className="w-full h-0.5 bg-white"></div>
          <Slider {...settings}>
            {bannerData?.map((image, index) => (
              <div key={index} className="relative">
                <div className="absolute w-full h-full z-10 flex justify-center items-center">
                  <div className="relative sm:w-[279] sm:h-[128] lg:w-[579] lg:h-[228]">
                    <div className="absolute w-full h-full ">
                      <p className="uppercase text-center mt-3 md:text-xl sm:text-md">WELCOME TO site name</p>
                      <p className="uppercase text-center md:text-3xl sm:text-xl px-10 sm:mt-8 md:mt-12">Explore our latest
                      jewellery designs</p>
                      <div className="w-full sm:mt-3 md:mt-8 flex justify-center items-center">
                      <button className="uppercase text-center sm:px-[12px] sm:py-[4px] md:px-[24px] md:py-[16px] mt-3 bg-[#914493]">see collection</button>
                      </div>
                    </div>
                    <div className="p-5">
                    <img src="HeropageImg1.png" className="w-full h-full object-contain"/>
                    </div>
                  </div>
                </div>
                <img
                  src={`${image.image}`}
                  alt={`Image ${index}`}
                  className="relative w-full h-full object-cover rounded-sm"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Banner;