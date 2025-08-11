"use client";

import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const TrailerSlide = ({ trailers }) => {
  const [index, setIndex] = useState(0);

  const rightClick = () => {
    if (index < trailers.length - 1) {
      setIndex(index + 1);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full h-[200px] md:h-[450px] group overflow-hidden">
      <div className="w-full h-full">
        <div
          className="flex transition-all duration-500 h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {trailers.map(({ id, key, name }) => (
            <div
              key={id}
              className="min-w-full h-full flex-shrink-0"
              title={name}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${key}?autoplay=0&controls=1`}
                title={name}
              />
            </div>
          ))}
        </div>
      </div>

      {index > 0 && (
        <button
          onClick={leftClick}
          className="absolute opacity-0 group-hover:opacity-100 left-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-opacity duration-500"
          aria-label="previous trailer"
        >
          <FaAngleLeft size={25} />
        </button>
      )}

      {index < trailers.length - 1 && (
        <button
          onClick={rightClick}
          className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-opacity duration-500"
          aria-label="next trailer"
        >
          <FaAngleRight size={25} />
        </button>
      )}
    </div>
  );
};

export default TrailerSlide;
