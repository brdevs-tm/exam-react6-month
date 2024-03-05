import React, { Fragment } from "react";
import HomeMain from "../components/HomeMain";
import MoviesOpenMain from "../components/MoviesOpenMain";
import { LeftArrow, RightArrow } from "../assets/Icons";
import CategoriesCard from "../components/CategoriesCard";

const MoviesShow = () => {
  document.title = "Movies Show";
  return (
    <Fragment>
      <main>
        <div className="container flex flex-col">
          <MoviesOpenMain />
          <div className="movies mt-180px flex flex-col border-4 border-black-15 rounded-md p-10 relative">
            <div className="relative">
              <span className="bg-red-50 text-white border border-red-50 rounded-md px-6 py-4 text-18px absolute top-[-70px]">
                Movies
              </span>
            </div>
            <div className="our-genres flex flex-col mt-36px">
              <div className="our-genres-header flex items-center justify-between">
                <span className="text-white text-38px">Our Genres</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="our-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="our-genres flex flex-col mt-36px">
              <div className="our-genres-header flex items-center justify-between">
                <span className="text-white text-38px">Our Genres</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="our-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="top-ten-genres flex flex-col mt-36px">
              <div className="top-ten-genres-header flex items-center justify-between">
                <span className="text-white text-38px">
                  Popular Top 10 In Genres
                </span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="top-ten-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="trending-now flex flex-col mt-36px">
              <div className="trending-now-header flex items-center justify-between">
                <span className="text-white text-38px">Trending Now</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="trending-now-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="new-releases flex flex-col mt-36px">
              <div className="new-release-header flex items-center justify-between">
                <span className="text-white text-38px">New Releases</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="new-release-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="must-watch flex flex-col mt-36px">
              <div className="must-watch-header flex items-center justify-between">
                <span className="text-white text-38px">
                  Must - Watch Movies
                </span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="must-watch-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
          </div>
          <div className="movies mt-180px flex flex-col border-4 border-black-15 rounded-md p-10 relative">
            <div className="relative">
              <span className="bg-red-50 text-white border border-red-50 rounded-md px-6 py-4 text-18px absolute top-[-70px]">
                Shows
              </span>
            </div>
            <div className="our-genres flex flex-col mt-36px">
              <div className="our-genres-header flex items-center justify-between">
                <span className="text-white text-38px">Our Genres</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="our-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="our-genres flex flex-col mt-36px">
              <div className="our-genres-header flex items-center justify-between">
                <span className="text-white text-38px">Our Genres</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="our-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="top-ten-genres flex flex-col mt-36px">
              <div className="top-ten-genres-header flex items-center justify-between">
                <span className="text-white text-38px">
                  Popular Top 10 In Genres
                </span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="top-ten-genres-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="trending-now flex flex-col mt-36px">
              <div className="trending-now-header flex items-center justify-between">
                <span className="text-white text-38px">Trending Now</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="trending-now-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="new-releases flex flex-col mt-36px">
              <div className="new-release-header flex items-center justify-between">
                <span className="text-white text-38px">New Releases</span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="new-release-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="must-watch flex flex-col mt-36px">
              <div className="must-watch-header flex items-center justify-between">
                <span className="text-white text-38px">
                  Must - Watch Movies
                </span>
                <div className="flex items-center gap-4 border-4 border-black-12 rounded-md px-2 py-2 bg-black">
                  <button className="rounded-md p-4 bg-black-12">
                    <LeftArrow />
                  </button>
                  {[1, 2, 3, 4].map((_, index) => (
                    <span
                      key={index}
                      className="border-2 border-red-50 px-1 bg-red-50 rounded-sm"
                    ></span>
                  ))}
                  <button className="rounded-md p-4 bg-black-12">
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className="must-watch-row flex items-center justify-between mt-10">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default MoviesShow;
