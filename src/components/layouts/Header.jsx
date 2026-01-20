import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-body py-5">
      <Container>
        <div className="">
          <ul className=" md:text-base sm:text-sm sm:font-light text-white md:font-medium font-poppins uppercase flex lg:gap-x-10 sm:gap-x-5 justify-center">
            <li className="group">
              <Link
                to={"/"}
                className="group-hover:bg-common group-hover:text-white flex items-center gap-x-2 border border-common px-3 py-1 rounded-4xl duration-300"
              >
                Home
                <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 ">
                  <IoHome />
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/about"}
                className="group-hover:bg-common group-hover:text-white flex items-center gap-x-2 border border-common px-3 py-1 rounded-4xl duration-300"
              >
                About
                <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 ">
                  <FaUser />
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/portfolio"}
                className="group-hover:bg-common group-hover:text-white flex items-center gap-x-2 border border-common px-3 py-1 rounded-4xl duration-300"
              >
                Portfolio
                <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 ">
                  <FaBriefcase />
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/contact"}
                className="group-hover:bg-common group-hover:text-white flex items-center gap-x-2 border border-common px-3 py-1 rounded-4xl duration-300"
              >
                Contact
                <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 ">
                  <IoMailOpen />
                </div>
              </Link>
            </li>
            <li className="group">
              <Link
                to={"/blog"}
                className="group-hover:bg-common group-hover:text-white flex items-center gap-x-2 border border-common px-3 py-1 rounded-4xl duration-300"
              >
                Blog
                <div className="bg-common h-8 w-8 flex items-center justify-center -mr-2 rounded-full border border-common duration-300 ">
                  <IoChatbubblesSharp />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
