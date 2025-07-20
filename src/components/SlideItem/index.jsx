"use client";

import React, { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaHeart,
  FaThumbsDown,
  FaBookmark,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const SlideItem = ({ items }) => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const rightClick = () => {
    if (index < items.length - 6) {
      setIndex(index + 4);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 4);
    }
  };

  const handleImageClick = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-300 gap-4"
          style={{ marginLeft: `-${index * 210}px` }}
        >
          {items.map((movie) => (
            <div
              key={movie.id}
              className="relative min-w-[190px] h-[270px] group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
                onClick={() => handleImageClick(movie.id)}
                className="rounded-md w-full h-full object-cover transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
              />

              <div className="absolute top-2 left-2 text-white text-lg">
                <FaBookmark className="cursor-pointer" />
              </div>

              <div className="absolute bottom-2 right-2 flex gap-3 text-white text-lg">
                <FaHeart className="cursor-pointer" />
                <FaThumbsDown className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {index > 0 && (
        <button
          onClick={leftClick}
          className="absolute opacity-0 group-hover:opacity-100 left-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleLeft size={25} />
        </button>
      )}

      {index < items.length - 6 && (
        <button
          onClick={rightClick}
          className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleRight size={25} />
        </button>
      )}
    </div>
  );
};

export default SlideItem;
