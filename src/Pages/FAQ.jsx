import React, { useState } from "react";
import bar from "../images/bars.png";
import "./Scroll.css";
import logo from "../images/logo.png";
import Footer from "../Components/Footer";
import UDrawer from "../Components/UDrawer";
import faqexpand from "../images/faqlogo.png";

function FAQ() {
  const [isOpens, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const questions = [
    "What is a proxy generator?",
    "What is a proxy generator and how do I use it cause this is a longer question to test the boundaries of this FAQ.",
    "Help me with my password?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    "How do I use the internet?",
    // Add more questions as needed
  ];

  const answers = [
    "What is a proxy generator and how do i use it cause this is a longer question to test the boundaries of this FAQ entry and how it should look for dev.",
    "Answer to question 2",
    "Answer to question 3",
    "Answer to question 4",
    "Answer to question 5",
    "Answer to question 6",
    "Answer to question 7",
    "Answer to question 8",
    "Answer to question 9",
    "Answer to question 10",
    "Answer to question 11",
    // Add more answers as needed
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  return (
    <div>
      <div className="min-h-screen bg-[linear-gradient(135deg,_rgba(87,120,117,1)_3%,_rgba(74,82,89,1)_30%,_rgba(74,82,89,1)_69%,_rgba(83,107,108,1)_98%)]">
        {/* Nav */}
        <nav className=" fixed flex justify-between p-5 md:pl-20 md:pr-20  w-full h-[5rem] bg-[#343434]">
          <div className=" flex ">
            <img
              onClick={setIsOpen}
              className=" h-[2rem] w-[2rem] mt-1 lg:hidden"
              src={bar}
              alt=""
            />
            <img className=" w-[7rem] h-[3rem]" src={logo} alt="" />
          </div>
          <div className=" hidden md:flex">
            <ul className="mt-2 flex gap-2 md:gap-12 text-sm text-white font-bold">
              <li className=" mt-1">Home</li>
              <li className=" mt-1">Login</li>
              <button className=" bg-[#00B795] text-black text-sm rounded-md px-2 py-1 md:px-4 md:py-2">
                Sign Up Now
              </button>
            </ul>
          </div>
        </nav>
        {/* Drawer */}
        <div className=" lg:hidden ">
          <UDrawer isOpen={isOpens} setIsOpen={setIsOpen}>
            <div className=" flex flex-col gap-2 mt-[1rem]">
              <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                <h1 className=" text-white font-bold text-xl ">Home</h1>
              </div>

              <div className=" flex gap-5 px-10 py-5 hover:bg-gray-400 w-[15rem] rounded-r-md">
                <h1 className=" text-white font-bold text-xl ">Login</h1>
              </div>

              <div className=" flex gap-5 px-10 py-5 hover:bg-green-600 w-[15rem] rounded-r-md">
                <h1 className=" text-green-500 hover:text-white font-bold text-xl ">
                  Sign Up Now
                </h1>
              </div>
            </div>
          </UDrawer>
        </div>
        {/* content */}
        <div className="lg:ml-44 pt-[10rem] p-6">
          <h1 className=" text-white text-3xl lg:text-5xl font-bold ">FAQ</h1>

          <p className="text-base mt-6 md:w-[30rem] text-[#FFFFE8]">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
          <div className=" lg:ml-6 flex flex-col md:flex-row gap-5 lg:gap-[3rem] w-[100%]">
            
            
            

          <div className="md:w-full h-[30rem] md:h-[35rem] lg:h-[34rem] lg:w-[30%] bg-[#343434] shadow-md shadow-[#000000] mt-8 rounded-xl p-3 overflow-y-scroll">
        <div className="flex flex-col gap-5 p-2">
          {questions.map((question, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-5">
                <p className={`text-[#FFFFE8] ${index === selectedQuestion ? 'font-bold' : ''}`}>
                  {question}
                </p>
              </div>
              <img
                className="w-6 h-6 cursor-pointer"
                src={faqexpand}
                alt={`Expand icon for question ${index + 1}`}
                onClick={() => handleQuestionClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#343434] shadow-md shadow-[#000000] lg:mr-24 w-full lg:w-[47%] lg:h-full mt-8  rounded-md p-5">
        <div className="text-white flex flex-col gap-20">
          <div className="flex flex-col gap-7">
            <h3 className="md:text-lg lg:text-xl font-semibold">{questions[selectedQuestion]}</h3>
            <p className="text-sm lg:text-base">{answers[selectedQuestion]}</p>
          </div>
          <div className="mt-4 lg:mt-6">
            <h3 className="text-[#FFFFE8] text-lg lg:text-xl font-semibold">Still need help?</h3>
            <p className="text-sm lg:text-base">
              If you are logged in you can submit a support ticket to our customer service team.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-100 text-black text-sm rounded-md w-[10rem] px-2 py-2">
            Go to Support
          </button>
        </div>
      </div>

          </div>
        </div>
        {/* footer */}
      <Footer/>
      </div>
    </div>
  );
}

export default FAQ;