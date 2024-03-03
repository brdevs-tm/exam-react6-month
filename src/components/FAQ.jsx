import React, { useState } from "react";
import { Plus, Minus } from "../assets/Icons";

const FAQ = ({ index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fa-question flex items-center justify-between p-4 border border-black-15 rounded-md transition-all duration-300">
      <div className="flex items-center justify-center gap-5">
        <span className="text-white bg-black-15 p-5 border-black-12 rounded-md">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        <div>
          <span className="text-white transition-all duration-300">
            How can I call you?
          </span>
          <p
            className={`text-black-25 text-18px transition-opacity duration-300 ${
              expanded ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
            }`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
        </div>
      </div>
      <button
        className="bg-black-15 p-5 border-black-12 rounded-md transition-all duration-300"
        onClick={toggleExpand}
      >
        <div
          className={`transition-opacity duration-300 ${
            expanded ? "opacity-0" : "opacity-100"
          }`}
        >
          <Plus />
        </div>
        <div
          className={`transition-opacity duration-300 ${
            expanded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Minus />
        </div>
      </button>
    </div>
  );
};

export default FAQ;
