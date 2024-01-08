import React, { useState } from "react";
import cardimg from "../images/cardimg.png";
import star from "../images/star.png";
import starnotfill from "../images/starnotfill.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Components/Card.css";
import { useMediaQuery } from 'react-responsive';

function Card() {
  const [selectedItem, setSelectedItem] = useState(0);

  const cardData = [
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    {
      name: "Leo",
      role: "Lead Designer",
      stars: [star, star, star, star, starnotfill],
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ratione tenetur quas nulla aspernatur, repellat ad veniam et voluptate delectus est at voluptatibus inventore. Beatae illo neque quam porro officiis!",
    },
    // Add more objects for additional cards...
  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const isMediumScreen = useMediaQuery({ minWidth: 601, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  let slidesToShow = 3; // Default value

  if (isSmallScreen) {
    slidesToShow = 1;
  } else if (isMediumScreen) {
    slidesToShow = 3;
  } else if (isLargeScreen) {
    slidesToShow = 3;
  }

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: slidesToShow,
    speed: 500,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    beforeChange: (current, next) => setSelectedItem(next),
  };

  return (
    <div className="w-full h-full lg:py-[1rem] lg:p-7 bg-transparent">
      <div className="text-white p-[3rem]">
        <Slider {...settings}>
          {cardData.map((data, index) => (
            <div
              key={index}
              className={`carousel-item rounded-lg shadow-xl p-3 lg:p-8  duration-300 bg-black 
                ${selectedItem === index ? 'scale-up' : 'scale-down'}`}
            >
              <div className="flex gap-2">
                <div>
                  <img className=" h-12 w-12 lg:h-16 lg:w-16" src={cardimg} alt="" />
                </div>
                <div className="lg:mt-2">
                  <h2 className="text-md lg:text-xl font-bold">{data.name}</h2>
                  <div className="flex justify-between">
                    <div>
                      <span className="text-xs text-gray-400">
                        {data.role}
                      </span>
                    </div>
                    <div className="flex mt-[7px] ml-2 lg:ml-10">
                      {data.stars.map((starSrc, starIndex) => (
                        <img
                          key={starIndex}
                          className="h-3 w-3 lg:h-4 lg:w-4"
                          src={starSrc}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left text-xs lg:text-base font-medium mt-6">
                <p>{data.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Card;