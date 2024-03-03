import React from "react";

const PremiumPlan = () => {
  return (
    <div className="bg-black-10 flex flex-col p-10 border border-black-15 rounded-md">
      <span className="text-white text-24px">Basic Plan</span>
      <span className="text-gray-60 mt-4 mb-12 max-w-96">
        Enjoy an extensive library of movies and shows, featuring a range of
        content, including recently released titles.
      </span>
      <h1 className="text-white flex items-end gap-2 text-40px">
        $9.99<span className="text-18px text-gray-60">/month</span>
      </h1>
      <div className="buy-button flex items-center gap-5 mt-50px">
        <button className="py-5 px-6 text-white bg-black border border-black-12 rounded-md text-18px">
          Start Free Trial
        </button>
        <button className="py-5 px-6 text-white bg-red-50  border-red-50 rounded-md text-18px">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PremiumPlan;
