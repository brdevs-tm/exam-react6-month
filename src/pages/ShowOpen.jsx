import React, { Fragment } from "react";
import HomeMain from "../components/HomeMain";
import MoviesOpenMain from "../components/MoviesOpenMain";
import {
  DownArrow,
  Genres,
  Language,
  Rate,
  ReleasedDate,
  UpArrow,
} from "../assets/Icons";

import actor from "../assets/actor.png";

const ShowOpen = () => {
  document.title = "Show Open";
  return (
    <Fragment>
      <main>
        <div className="container">
          <MoviesOpenMain />
          <div className="about-film grid grid-cols-2 gap-10 mt-40">
            <div className="season-episodes flex flex-col gap-10 bg-black-10 p-50px border rounded-md border-black-15">
              <h1 className="text-white text-24px">Seasons and Episodes</h1>
              <div className="seasons-column flex flex-col items-start justify-center gap-5">
                <div className="season flex w-[100%]">
                  <div className="flex items-center w-[100%] justify-between  bg-black-06 border-black-15 rounded-md p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-24px text-white">Season 1</span>
                      <p className="text-gray-60 text-18px">9 Episodes</p>
                    </div>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <DownArrow />
                    </button>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <UpArrow />
                    </button>
                  </div>
                </div>
                <div className="season flex w-[100%]">
                  <div className="flex items-center w-[100%] justify-between  bg-black-06 border-black-15 rounded-md p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-24px text-white">Season 1</span>
                      <p className="text-gray-60 text-18px">9 Episodes</p>
                    </div>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <DownArrow />
                    </button>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <UpArrow />
                    </button>
                  </div>
                </div>
                <div className="season flex w-[100%]">
                  <div className="flex items-center w-[100%] justify-between  bg-black-06 border-black-15 rounded-md p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-24px text-white">Season 1</span>
                      <p className="text-gray-60 text-18px">9 Episodes</p>
                    </div>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <DownArrow />
                    </button>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <UpArrow />
                    </button>
                  </div>
                </div>
                <div className="season flex w-[100%]">
                  <div className="flex items-center w-[100%] justify-between  bg-black-06 border-black-15 rounded-md p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-24px text-white">Season 1</span>
                      <p className="text-gray-60 text-18px">9 Episodes</p>
                    </div>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <DownArrow />
                    </button>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <UpArrow />
                    </button>
                  </div>
                </div>
                <div className="season flex w-[100%]">
                  <div className="flex items-center w-[100%] justify-between  bg-black-06 border-black-15 rounded-md p-5">
                    <div className="flex items-center gap-3">
                      <span className="text-24px text-white">Season 1</span>
                      <p className="text-gray-60 text-18px">9 Episodes</p>
                    </div>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <DownArrow />
                    </button>
                    <button className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black">
                      <UpArrow />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="release row-start-1 row-end-4 col-start-2 col-end-3  flex flex-col gap-8 bg-black-10 p-50px border rounded-md border-black-15">
              <div className="release-year flex flex-col gap-5">
                <div className="release-header flex items-center gap-5">
                  <ReleasedDate />
                  <span className="text-black-30">Released Year</span>
                </div>
                <span className="released-date text-white text-18px">2020</span>
              </div>
              <div className="available-langs flex flex-col gap-5 ">
                <div className="available-lang-header flex items-center gap-5">
                  <Language />
                  <span className="text-black-30">Available Languages</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="items-center justify-center text-white bg-black-08 border-black-15 rounded-md py-8px px-14px">
                    English
                  </span>
                  <span className="items-center justify-center text-white bg-black-08 border-black-15 rounded-md py-8px px-14px">
                    English
                  </span>
                  <span className="items-center justify-center text-white bg-black-08 border-black-15 rounded-md py-8px px-14px">
                    English
                  </span>
                  <span className="items-center justify-center text-white bg-black-08 border-black-15 rounded-md py-8px px-14px">
                    English
                  </span>
                  <span className="items-center justify-center text-white bg-black-08 border-black-15 rounded-md py-8px px-14px">
                    English
                  </span>
                </div>
              </div>
              <div className="film-rating flex flex-col gap-5">
                <div className="film-rating-header flex items-center gap-5">
                  <Rate />
                  <span className="text-black-30">Rating</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col bg-black-08 border-black-15 rounded-md py-15px px-30px gap-2">
                    <span className="text-white text-20px">IMDb</span>
                    <div className="flex gap-2">
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                    </div>
                  </div>
                  <div className="flex flex-col bg-black-08 border-black-15 rounded-md py-15px px-30px gap-2">
                    <span className="text-white text-20px">IMDb</span>
                    <div className="flex gap-2">
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                    </div>
                  </div>
                </div>
              </div>
              <div className="genres flex flex-col gap-5">
                <div className="genres-header flex gap-5">
                  <Genres />
                  <span className="text-black-30">Genres</span>
                </div>
                <div className="flex items-start gap-5">
                  <span className="text-white text-18px bg-black-08 border-black-15 p-5 rounded-md">
                    Action
                  </span>
                  <span className="text-white text-18px bg-black-08 border-black-15 p-5 rounded-md">
                    Action
                  </span>
                </div>
              </div>
              <div className="director flex gap-5 items-start p-15px bg-black-08 border-black-15 rounded-md">
                <img src={actor} width={60} height={60} alt="director" />
                <div className="flex flex-col">
                  <span className="text-white text-18px">Jahongir Hamidov</span>
                  <p className="text-gray-60 text-16px">Uzbekistan</p>
                </div>
              </div>
              <div className="music flex gap-5 items-start p-15px bg-black-08 border-black-15 rounded-md">
                <img src={actor} width={60} height={60} alt="music" />
                <div className="flex flex-col">
                  <span className="text-white text-18px">Jahongir Hamidov</span>
                  <p className="text-gray-60 text-16px">Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default ShowOpen;
