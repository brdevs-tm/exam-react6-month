import React, { Fragment, useState } from "react";
import HomeMain from "../components/HomeMain";
import MoviesOpenMain from "../components/MoviesOpenMain";
import {
  DownArrow,
  Duration,
  Genres,
  Language,
  LeftArrow,
  PlayMedia2,
  Plus,
  Rate,
  ReleasedDate,
  RightArrow,
  UpArrow,
} from "../assets/Icons";

import actor from "../assets/actor.png";

const ShowOpen = () => {
  document.title = "Show Open";

  // Set initial visibility state for each season
  const [isEpisodesVisible, setIsEpisodesVisible] = useState(
    Array(4).fill(true)
  );

  // Toggle visibility of episodes for a particular season
  const toggleEpisodesVisibility = (index) => {
    const updatedVisibility = [...isEpisodesVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsEpisodesVisible(updatedVisibility);
  };

  // Function to generate the desired number of season blocks
  const renderSeasons = () => {
    const seasonsCount = 4; // Number of seasons to render
    const seasons = [];

    // Loop to generate the season blocks
    for (let i = 1; i <= seasonsCount; i++) {
      seasons.push(
        <div
          key={i}
          className="season flex flex-col w-[100%] bg-black-06 border-black-15 rounded-md p-5"
        >
          <div className="flex items-center w-[100%] justify-between">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <span className="text-24px text-white">Season {i}</span>
              <p className="text-gray-60 text-18px">9 Episodes</p>
            </div>
            <button
              className="bg-black-08 border border-black-15 rounded-full p-4 transition-all duration-300 hover:bg-black-12 active:bg-black"
              onClick={() => toggleEpisodesVisibility(i - 1)} // Pass the index of the season
            >
              {isEpisodesVisible[i - 1] ? <DownArrow /> : <DownArrow />}
            </button>
          </div>
          <div
            className={`film-episodes w-[100%] flex flex-col xl:flex-row gap-40px mt-10 ${
              isEpisodesVisible[i - 1] ? "hidden" : "block"
            }`}
          >
            <div className="episode-num">
              <span className="text-gray-60 text-30px">1</span>
            </div>
            <div className="episode-details w-[100%] flex flex-col 2xl:flex 2xl:flex-row 2xl:justify-center gap-5">
              <div className="flex items-center justify-center border border-black-15 rounded-md">
                <PlayMedia2 />
              </div>
              <div className="episode-name flex w-[100%] flex-col gap-2">
                <div className="w-[100%] flex flex-col gap-2 2xl:flex 2xl:flex-row 2xl:justify-between ">
                  <span className="text-white ">
                    Chapter One : The Vanishing of Will Byers
                  </span>
                  <h1 className="flex items-center gap-3 bg-black-08 border border-black-15 rounded p-2">
                    <Duration />
                    <span className="text-gray-60 text-16px">49 min</span>
                  </h1>
                </div>
                <div className="flex">
                  <span className="text-gray-600 text-18px max-w-360px">
                    On his way from a friend’s house, young Will sees something
                    terrifying . Nearby, a sinister secret lurks in the depths
                    of a government lab.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return seasons;
  };

  return (
    <Fragment>
      <main>
        <div className="container">
          <MoviesOpenMain />
          <div className="about-film flex flex-col md:grid md:grid-cols-2 gap-10 mt-40">
            <div className="season-episodes md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 flex flex-col gap-10 bg-black-10 p-50px border rounded-md border-black-15">
              <h1 className="text-white text-24px">Seasons and Episodes</h1>
              {/* Render the generated season blocks */}
              {renderSeasons()}
            </div>
            <div className="description col-start-1 col-end-2 row-start-2 row-start-3 flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
              <h1 className="text-gray-60 text-18px">Description</h1>
              <span className="text-18px text-white">
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </span>
            </div>
            <div className="cast md:col-start-1 md:col-end-2 flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
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
              <div className="actors flex justify-between flex-wrap gap-5">
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
            <div className="reviews md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5 flex flex-col gap-5 bg-black-10 p-50px border rounded-md border-black-15">
              <div className="review-header flex flex-col  justify-start lg:items-center lg:justify-between">
                <h1 className="text-gray-60 text-18px">Reviews</h1>
                <button className="flex items-center gap-5 bg-black-08 border border-black-15  p-14px rounded-md">
                  <Plus />
                  <span className="text-white text-18px">Add your review</span>
                </button>
              </div>
              <div className="reviews-row flex items-start justify-center flex-wrap gap-5">
                <div className="bg-black-06 p-20px border border-black-15 rounded-md flex flex-col gap-5">
                  <div className="commented-person flex flex-col lg:items-center lg:gap-32">
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
                  <div className="commented-person flex flex-col lg:items-center lg:gap-32">
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
            <div className="release row-start-5 row-end-6 md:row-start-1 md:row-end-5 md:col-start-2 md:col-end-3  flex flex-col gap-8 bg-black-10 p-50px border rounded-md border-black-15">
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
                <div className="flex flex-col gap-5 sm:flex-row md:flex-col lg:flex-row justify-between items-center">
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
