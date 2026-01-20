import React from "react";
import Container from "../Container";
import Images from "../Images";
import myimg from "/src/assets/myImg.png";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className='bg-[url("/src/assets/banner.png")] bg-no-repeat bg-cover bg-center py-10'>
      <Container>
        <div className="flex sm:flex-wrap items-center justify-around">
          <div className="">
            <Images
              srcImg={myimg}
              className={"md:h-[600px] sm:h-[400px] sm:w-[400px]"}
            />
          </div>
          <div className="relative sm:text-center lg:text-start  sm:mt-5">
            <div className="lg:w-10 lg:h-1 sm:h-0.5 sm:w-7  sm:top-6 bg-common absolute  lg:top-8 sm:left-31  lg:-left-2"></div>
            <h1 className="lg:text-[51px] sm:text-4xl font-bold font-poppins text-common uppercase lg:ml-10 lg:leading-16 sm:leading-12">
              I'm Jaber.
              <br />
              <span className="text-white ">Frontend Developer</span>
            </h1>
            <p className="text-sm text-white font-open lg:leading-9 sm:leading-6 w-[500px] lg:mt-5 sm:mt-2">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div
              onClick={handleClick}
              className="mt-10 sm:mt-5 text-base text-white font-medium font-poppins uppercase inline-flex gap-x-2 items-center border border-common py-1 px-3 rounded-4xl hover:bg-common duration-300 cursor-pointer"
            >
              <div className="">
                <button className="text-base text-white font-semibold font-poppins cursor-pointer uppercase">
                  more about me
                </button>
              </div>
              <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
