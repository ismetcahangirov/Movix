"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";
import { toggleSaveMovie } from "@/features/MovieSlice";

const SaveButton = ({ movie }) => {
  const dispatch = useDispatch();
  const savedMovies = useSelector((state) => state.movies.savedMovies);

  const isSaved = savedMovies.find((m) => m.id === movie.id);

  const toggleSave = (e) => {
    e.stopPropagation();
    dispatch(toggleSaveMovie(movie));
  };

  return (
    <button onClick={toggleSave} className="text-white text-xl">
      <FaBookmark className={isSaved ? "text-red-500" : "text-white"} />
    </button>
  );
};

export default SaveButton;
