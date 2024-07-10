"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerData = [
  { image: "../TrendingCat1.svg",name:"Earrings" },
  { image: "../TrendingCat2.svg" ,name:"bangles"},
  { image: "../TrendingCat3.svg" ,name:"gold" },
  { image: "../TrendingCat4.svg",name:"diamond" },
];

function TrendingCat() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: false,
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center py-4 bg-[#F9E6FF]">
    <h2 className="text-xl font-bold text-gray-900 text-center mt-7 mb-6">Trending Categories</h2>
      {bannerData && bannerData?.length > 0 && (
        <div className="banner-container w-full h-full pb-5 px-10 ">
          <Slider {...settings}>
            {bannerData?.map((image, index) => (
              <div key={index} className="relative sm:w-[160px] sm:h-[200px] md:w-[277.565px] md:h-[350.203px] flex items-center justify-center">
                <div className="absolute sm:w-[160px] sm:h-[200px] md:w-[277.565px] md:h-[350.203px] flex justify-center items-center px-7 py-7">
                <div className="z-10 w-full h-full flex justify-center items-center bg-transparent border border-solid border-1 border-white">
                    <div className="bg-white bg-opacity-10 backdrop-blur-xs  p-2">
                    <p className="text-xl uppercase">{image.name}</p>
                    </div>
                </div>
                </div>
                <div className="absolute sm:w-[160px] sm:h-[200px] md:w-[277.565px] md:h-[350.203px] flex justify-center items-center">
                <img
                  src={`${image.image}`}
                  alt={`Image ${index}`}
                  className="w-full h-full object-contain rounded-sm"
                />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default TrendingCat;
