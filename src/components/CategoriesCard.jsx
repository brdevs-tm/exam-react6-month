import React from "react";
import { PlayMedia, RightArrow } from "../assets/Icons";

const CategoriesCard = () => {
  return (
    <div className="category-card flex flex-col gap-7 p-8 pb-3 bg-black-10 rounded-md">
      <div className="img grid grid-cols-2 gap-20">
        <PlayMedia />
        <PlayMedia />
        <PlayMedia />
        <PlayMedia />
      </div>
      <button className="flex items-center justify-between">
        <span className="text-white">Action</span>
        <RightArrow />
      </button>
    </div>
  );
};

export default CategoriesCard;
