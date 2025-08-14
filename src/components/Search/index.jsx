"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovies,
  clearSearchResults,
} from "@/app/redux/features/MovieSlice";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchResults, searchStatus } = useSelector((state) => state.movies);
  const [value, setValue] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (value.trim().length > 0) {
      dispatch(searchMovies(value));
      setShowResults(true);
    } else {
      dispatch(clearSearchResults());
      setShowResults(false);
      setHighlightedIndex(-1);
    }
  }, [value, dispatch]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setHighlightedIndex(-1);
  };

  const handleClickResult = (movieId) => {
    setValue("");
    setShowResults(false);
    dispatch(clearSearchResults());
    setHighlightedIndex(-1);
    router.push(`/movie/${movieId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < searchResults.slice(0, 4).length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : searchResults.slice(0, 4).length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < searchResults.length) {
        handleClickResult(searchResults[highlightedIndex].id);
      } else if (searchResults.length > 0) {
        handleClickResult(searchResults[0].id);
      }
    } else if (e.key === "Escape") {
      setShowResults(false);
      setHighlightedIndex(-1);
    }
  };

  return (
    <div className="relative w-max max-w-md">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search movies..."
        className="px-2 py-1 text-sm rounded text-white bg-search placeholder-white/70
                   w-full md:w-32 lg:w-40 xl:w-48 flex-shrink-0 min-w-[80px] outline-none"
      />

      {showResults && searchResults.length > 0 && (
        <ul className="absolute z-50 w-full bg-gray-800 border border-gray-700 rounded mt-1 max-h-60 overflow-y-auto shadow-lg text-white">
          {searchResults.slice(0, 4).map((movie, index) => (
            <li
              key={movie.id}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-600 ${
                highlightedIndex === index ? "bg-gray-600" : ""
              }`}
              onClick={() => handleClickResult(movie.id)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}

      {showResults && searchStatus === "loading" && (
        <div className="absolute z-50 w-full bg-white border border-gray-300 rounded mt-1 px-4 py-2 text-gray-600">
          Loading...
        </div>
      )}

      {showResults &&
        searchStatus === "succeeded" &&
        searchResults.length === 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-300 rounded mt-1 px-4 py-2 text-gray-500">
            No results found.
          </div>
        )}
    </div>
  );
};

export default SearchInput;
