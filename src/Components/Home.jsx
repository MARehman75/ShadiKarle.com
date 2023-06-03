import React, { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import { FaCaretLeft } from "react-icons/fa";

const Home = () => {
  const slides = [
    {
      url: "./Images/1.8.jpg",
    },
    {
      url: "./Images/1.14.jpg",
    },
    {
      url: "./Images/1.7.jpg",
    },
  ];

  const [CurrentState, setCurrentState] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = CurrentState === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : CurrentState - 1;
    setCurrentState(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = CurrentState === slides.length - 1;
    const newSlide = isLastSlide ? 0 : CurrentState + 1;
    setCurrentState(newSlide);
  };

  return (
    <div className="max-w-full h-[780px] w-full m-auto py-16 px-4  duration-1000 flex justify-between ">
      <div className="text-pink-600 mt-[295px]  text-[50px] ml-10">
        <h1 className=" font-bold ">
          Shadi Karle
        </h1>
        <p style={{color:'#8F9BB3'}} className="  text-[20px]">
         Shadi krlee a Best Matrimony Site in Pakistan LogIn and Find your Partner With us <br/> We Will Find Your SoulMate
        </p>
      </div>
      <carousel autoSlide={true}>
      <div style={{ backgroundImage: `url(${slides[CurrentState].url})` }} className=" drop-shadow-lg bg-slate-500 h-[550px] w-[600px] mt-[90px] rounded-lg mr-10 duration-700 group" >
     
      <div className="hidden group-hover:block absolute top-[50%] text-2xl right-[1px]  text-white cursor-pointer hover:text-pink-700 duration-300">
        <BiCaretRight onClick={nextSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%]  text-2xl Left-5 text-white cursor-pointer hover:text-pink-700 duration-300">
        <FaCaretLeft onClick={prevSlide} size={30} />
      </div>
      </div>
      </carousel>

     
    </div>
  );
};

export default Home;
