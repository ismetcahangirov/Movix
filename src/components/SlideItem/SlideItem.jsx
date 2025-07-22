"use client";

import React from "react";
import { FaHeart, FaThumbsDown, FaBookmark } from "react-icons/fa";

const SlideItem = ({ movie, onClick }) => {
  return (
    <div className="relative min-w-[190px] h-[270px] group">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={onClick}
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
  );
};

export default SlideItem;
