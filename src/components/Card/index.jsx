"use client";

import React from "react";
import SaveButton from "../SaveButton";
import Rating from "../Rating";

const Card = ({ movie, onClick }) => {
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

      <div className="absolute bottom-2 right-2">
        <Rating rating={movie.vote_average} />
      </div>
    </div>
  );
};

export default Card;
