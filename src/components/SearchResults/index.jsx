"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { clearSearchResults } from "@/features/MovieSlice";
import Spinner from "../Spinner";

const SearchResults = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const searchResults = useSelector((state) => state.movies.searchResults);
  const searchStatus = useSelector((state) => state.movies.searchStatus);

  console.log("Search Status:", searchStatus);
  console.log("Search Results:", searchResults);
  const handleMovieClick = (id) => {
    dispatch(clearSearchResults());
    router.push(`/movie/${id}`);
  };

  if (searchStatus === "loading") {
    return <Spinner />;
  }

  if (searchStatus === "failed") {
    return <div className="p-4 text-red-600">Axtarışda xəta tapıldı.</div>;
  }

  if (!searchResults || searchResults.length === 0) {
    return null;
  }

  return (
    <div className=" absolute z-50 bg-search rounded-b max-h-96 overflow-y-auto w-full top-full left-0 shadow-md">
      <ul>
        {searchResults.map((movie) => (
          <li
            key={movie.id}
            className="cursor-pointer hover:bg-gray-700 px-4 py-2 border-b border-gray-600 text-white"
            onClick={() => handleMovieClick(movie.id)}
          >
            {movie.title || movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
