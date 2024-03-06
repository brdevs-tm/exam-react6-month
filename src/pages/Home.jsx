import React, { Fragment } from "react";
import HomeMain from "../components/HomeMain";
import { LeftArrow, RightArrow } from "../assets/Icons";
import CategoriesCard from "../components/CategoriesCard";
import StreamingDevice from "../components/StreamingDevice";
import FAQ from "../components/FAQ";
import PremiumPlan from "../components/PremiumPlan";

const Home = () => {
  document.title = "Home";
  return (
    <Fragment>
      <main className="overflow-hidden">
        <div className="flex">
          <HomeMain />
        </div>
        <div className="explore-categories container mt-48 flex flex-col gap-10">
          <div className="categories-header flex flex-col gap-5 items-start md:flex-row md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="text-white text-2xl">
                Explore our wide variety of categories
              </span>
              <p className="text-gray-60 text-base">
                Whether you're looking for a comedy to make you laugh, a drama
                to make you think, or a documentary to learn something new
              </p>
            </div>
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
          <div className="categories-row grid grid-cols-2 gap-150px md:flex md:justify-between md:gap-0">
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
            <CategoriesCard />
          </div>
        </div>
        <div className="streaming-devices container mt-40">
          <div className="streaming-devices-header flex flex-col gap-4">
            <span className="text-white text-3xl">
              We Provide you streaming experience across various devices.
            </span>
            <p className="text-gray-500 max-w-7xl">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
          </div>
          <div className="streaming-devices-row grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-20">
            <StreamingDevice />
            <StreamingDevice />
            <StreamingDevice />
            <StreamingDevice />
            <StreamingDevice />
            <StreamingDevice />
          </div>
        </div>
        <div className="frequently-asked-quests container mt-150px">
          <div className="faq-header flex flex-col gap-5 md: flex-row md:justify-between">
            <div className="flex flex-col gap-14px">
              <span className="text-white text-38px">
                Frequently Asked Questions
              </span>
              <p className="text-gray-500 max-w-7xl text-18px">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
            <button className="bg-red-50 text-white border border-red-50 rounded-md px-6 py-4 text-18px">
              Ask a Question
            </button>
          </div>
          <div className="faq-row grid grid-cols-1 gap-5 mt-20 md:grid-cols-2">
            {[...Array(8)].map((_, index) => (
              <FAQ key={index} index={index} />
            ))}
          </div>
        </div>
        <div className="premium-plan container mt-150px">
          <div className="premium-header flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-14px">
              <span className="text-white text-38px">
                Frequently Asked Questions
              </span>
              <p className="text-gray-500 max-w-7xl text-18px">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </p>
            </div>
            <div className="plan-duration flex items-center justify-between px-5 py-2 bg-black border border-black-12 rounded-lg ">
              <button className="rounded-md px-6 py-2 text-18px text-white transition-all duration-300 hover:bg-black-12">
                Monthly
              </button>
              <button className="rounded-md px-6 py-2 text-18px text-white transition-all duration-300 hover:bg-black-12">
                Yearly
              </button>
            </div>
          </div>
          <div className="premimu-pans-row flex items-center justify-center mt-80px flex-wrap gap-y-5 lg:justify-between">
            <PremiumPlan />
            <PremiumPlan />
            <PremiumPlan />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
