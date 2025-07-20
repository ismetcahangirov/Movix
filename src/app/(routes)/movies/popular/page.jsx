"use client";

import { getPopularMovies } from "@/features/MoviesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopularPage = () => {
  const dispatch = useDispatch();

  const { popularMovies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <div>
      {popularMovies.map((movie) => [
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Film Poster"
          />
        </div>,
      ])}
    </div>
  );
};

export default PopularPage;
