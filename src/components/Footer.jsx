import React from "react";
import { Facebook, LinkedIn, Twitter } from "../assets/Icons";

const Footer = () => {
  return (
    <footer className=" bg-black-06 pt-100px mt-120px pb-10">
      <div className="container flex flex-col gap-5 items-center justify-center flex-wrap lg:flex-row lg:items-start lg:justify-between">
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">Home</li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Categories
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Devices
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Pricing
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            FAQ
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">Movies</li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Genres
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Trending
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            New Release
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Popular
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">Shows</li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Genres
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Trending
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            New Release
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Popular
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">Support</li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Contact us
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">Subscription</li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Plans
          </li>
          <li className="text-gray-60 text-18px transition-all duration-300  hover: text-gray-75 lg:block hidden">
            Features
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-6">
          <li className="text-white font-semibold text-20px">
            Connect With Us
          </li>
          <ul className="flex items-center gap-6">
            <a
              href="#"
              className="bg-black-10 border border-black-15 rounded-md p-4 transition-all duration-300 hover:bg-black-25"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="bg-black-10 border border-black-15 rounded-md p-4 transition-all duration-300 hover:bg-black-25"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="bg-black-10 border border-black-15 rounded-md p-4 transition-all duration-300 hover:bg-black-25"
            >
              <LinkedIn />
            </a>
          </ul>
        </ul>
      </div>
      <div className="container border border-black-15 mt-10 mb-5"></div>
      <div className="container flex items-center gap-5 justify-center flex-col lg:flex-row lg:justify-between">
        <span className="font-medium text-18px text-gray-60">
          @2024 streamvib, All Rights Reserved
        </span>
        <div className="flex items-center gap-5">
          <span className="text-gray-60 text-18px">Term of Use</span>
          <span className="text-gray-60 text-18px">Privacy Policy</span>
          <span className="text-gray-60 text-18px">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
