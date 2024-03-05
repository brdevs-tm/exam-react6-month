import React from "react";

const PremiumPlan = () => {
  return (
    <div className="bg-black-10 flex flex-col p-6 md:p-10 border border-black-15 rounded-md">
      <span className="text-white text-lg md:text-2xl">Basic Plan</span>
      <span className="text-gray-60 mt-3 md:mt-4 mb-6 md:mb-12 max-w-96">
        Enjoy an extensive library of movies and shows, featuring a range of
        content, including recently released titles.
      </span>
      <h1 className="text-white flex items-end gap-2 text-2xl md:text-3xl lg:text-4xl">
        $9.99<span className="text-base md:text-18px text-gray-60">/month</span>
      </h1>
      <div className="buy-button flex flex-col md:flex-row items-center gap-3 md:gap-5 mt-3 md:mt-6 lg:mt-8">
        <button className="py-3 md:py-5 px-6 text-white bg-black border border-black-12 rounded-md text-base md:text-lg">
          Start Free Trial
        </button>
        <button className="py-3 md:py-5 px-6 text-white bg-red-50 border-red-50 rounded-md text-base md:text-lg">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PremiumPlan;
