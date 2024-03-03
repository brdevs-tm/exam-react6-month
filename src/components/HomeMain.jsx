import React from "react";
import { PlayMedia } from "../assets/Icons";

const HomeMain = () => {
  return (
    <div className="home-main bg-home-header bg-contain bg-no-repeat w-screen pt-80">
      <div className="container pt-80">
        <div className="home-main flex flex-col items-center gap-10 mt-40">
          <span className="text-white">The Bset Streaming Experience</span>
          <p className="text-gray-60 max-w-5xl text-center">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="flex items-center gap-2 border-red-50 bg-red-45 px-5 py-3 rounded-md">
            <PlayMedia />
            <span className="text-white">Start Watching now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
