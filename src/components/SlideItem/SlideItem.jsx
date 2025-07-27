"use client";

import React from "react";
import SaveButton from "../SaveButton";

const SlideItem = ({ movie, onClick }) => {
  const getRatingColor = (rating) => {
    if (rating >= 8) return "bg-green-500";
    if (rating >= 5) return "bg-yellow-400";
    return "bg-red-500";
  };

  const roundedRating = Math.round(movie.vote_average);

  return (
    <div
      className="relative min-w-[190px] h-[270px] group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-md w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
      />

      <div className="absolute top-2 left-2 z-10">
        <SaveButton movie={movie} />
      </div>

      <div
        className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getRatingColor(
          roundedRating
        )}`}
      >
        {roundedRating}
      </div>
    </div>
  );
};

export default SlideItem;
