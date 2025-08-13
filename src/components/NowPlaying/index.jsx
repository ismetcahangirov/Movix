"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import Slide from "../Slide";
import { getNewMovies } from "@/app/redux/features/MovieSlice";
import { MdOutlineMovieFilter } from "react-icons/md";

const NowPlayingSection = () => {
  const dispatch = useDispatch();
  const { newMovies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getNewMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <section className="container mx-auto max-w-[1280px] px-4 py-6 group relative">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 text-left flex gap-2 items-center">
        <MdOutlineMovieFilter className="text-red-400" /> Hazırda Kinoteatrlarda
      </h2>
      <Slide items={newMovies} name={"nowPlaying"} />
    </section>
  );
};

export default NowPlayingSection;
