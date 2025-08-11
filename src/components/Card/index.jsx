"use client";

import React from "react";
import SaveButton from "../SaveButton";
import Rating from "../Rating";

const Card = ({ movie, onClick }) => {
  return (
    <div
      className="relative w-[130px] h-[180px] md:min-w-[190px] md:h-[270px] group cursor-pointer"
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

      <div className="absolute bottom-2 right-2">
        <Rating
          rating={movie.vote_average}
          size="w-8 h-8 text-sm md:w-10 md:h-10 md:text-lg"
        />
      </div>
    </div>
  );
};

export default Card;
