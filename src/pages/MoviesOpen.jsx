import React, { Fragment } from "react";
import HomeMain from "../components/HomeMain";
import MoviesOpenMain from "../components/MoviesOpenMain";
import actor from "../assets/actor.png";
import {
  Genres,
  Language,
  LeftArrow,
  Plus,
  Rate,
  ReleasedDate,
  RightArrow,
} from "../assets/Icons";

const MoviesShows = () => {
  return (
    <Fragment>
      <main>
        <div className="container">
          <MoviesOpenMain />
          <div className="about-film flex flex-col xl:grid xl:grid-cols-[auto,520px] gap-10 mt-40">
            <div className="description flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
              <h1 className="text-gray-60 text-18px">Description</h1>
              <span className="text-18px text-white">
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </span>
            </div>
            <div className="cast xl:row-start-2 xl:row-end-3 flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
              <div className="cast-header flex items-center justify-between">
                <h1 className="text-gray-60 text-18px">Cast</h1>
                <div className="flex items-center gap-5">
                  <button className="border-2 border-black-15 bg-black w-12 h-12 flex items-center transition-all duration-300 justify-center rounded-full hover:bg-black-20">
                    <LeftArrow />
                  </button>
                  <button className="border-2 border-black-15 bg-black w-12 h-12 flex items-center transition-all duration-300 justify-center rounded-full hover:bg-black-20">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="actors flex flex-wrap gap-5 xl:col-span-1 flex justify-between ">
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
                <img src={actor} alt="actor" />
              </div>
            </div>
            <div className="reviews xl:row-start-3 xl:row-end-4 flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
              <div className="review-header flex flex-col items-start gap-5 md:items-center md:flex-row md:justify-between">
                <h1 className="text-gray-60 text-18px">Reviews</h1>
                <button className="flex items-center gap-5 bg-black-08 border border-black-15  p-14px rounded-md">
                  <Plus />
                  <span className="text-white text-18px">Add your review</span>
                </button>
              </div>
              <div className="reviews-row flex flex-col gap-5 md:flex-row xl:items-start xl:justify-between">
                <div className="bg-black-06 p-20px border border-black-15 rounded-md flex flex-col gap-5">
                  <div className="commented-person flex items-center gap-5 flex-col md:flex-row md:justify-between">
                    <div className="detail">
                      <span className="text-white text-20px">Hamidov</span>
                      <p className="text-gray-60 text-18px">Uzbekistan</p>
                    </div>
                    <div className="rating flex items-center gap-3">
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <span className="text-gray-60 text-18px">5</span>
                    </div>
                  </div>
                  <div className="comment max-w-96">
                    <span className="max-w-40 text-black-30">
                      This movie was recommended to me by a very dear friend who
                      went for the movie by herself. I went to the cinemas to
                      watch but had a houseful board so couldn’t watch it.
                    </span>
                  </div>
                </div>
                <div className="bg-black-06 p-20px border border-black-15 rounded-md flex flex-col gap-5">
                  <div className="commented-person flex items-center gap-5 flex-col md:flex-row md:justify-between">
                    <div className="detail">
                      <span className="text-white text-20px">Hamidov</span>
                      <p className="text-gray-60 text-18px">Uzbekistan</p>
                    </div>
                    <div className="rating flex items-center gap-3">
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <Rate />
                      <span className="text-gray-60 text-18px">5</span>
                    </div>
                  </div>
                  <div className="comment max-w-96">
                    <span className="max-w-40 text-black-30">
                      This movie was recommended to me by a very dear friend who
                      went for the movie by herself. I went to the cinemas to
                      watch but had a houseful board so couldn’t watch it.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="release xl:row-start-1 xl:row-end-4 xl:col-start-2 xl:scol-end-3  flex flex-col gap-8 bg-black-10 p-50px border rounded-md border-black-15">
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
                <div className="flex flex-col gap-5 md:justify-between md:flex-row md:items-center">
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

export default MoviesShows;
