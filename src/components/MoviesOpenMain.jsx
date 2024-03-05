import React from "react";
import { Like, PlayMedia, Plus, Sound } from "../assets/Icons";

const MoviesOpenMain = () => {
  return (
    <div className="container bg-movie-show-open bg-no-repeat bg-contain 2xl:pt-80 xl:bg-cover xl:pt-60 lg:pt-10 lg:bg-cover">
      <div className="movies-open-main flex flex-col items-center gap-10 mt-40 pb-90px bg-gradient-to-t from-black-08  to-transparent 2xl:pb-90px 2xl:mt-20 xl:pb-40px">
        <span className="text-white text-38px font-semibold">
          Avengers : Endgame
        </span>
        <p className="text-gray-60 max-w-5xl text-center">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>
        <div className="flex items-center gap-5 ">
          <button className="flex items-center gap-2 border-red-50 bg-red-45 px-5 py-3 rounded-md">
            <PlayMedia />
            <span className="text-white">Play Now</span>
          </button>
          <button className="flex items-center justify-center bg-black-06 border border-black-15 rounded-md w-50px h-50px transition-all duration-300 hover:bg-black-15">
            <Plus />
          </button>
          <button className="flex items-center justify-center bg-black-06 border border-black-15 rounded-md w-50px h-50px transition-all duration-300 hover:bg-black-15">
            <Like />
          </button>
          <button className="flex items-center justify-center bg-black-06 border border-black-15 rounded-md w-50px h-50px transition-all duration-300 hover:bg-black-15">
            <Sound />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesOpenMain;
