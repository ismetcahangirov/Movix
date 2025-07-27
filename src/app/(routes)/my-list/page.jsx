"use client";

import SlideItem from "@/components/SlideItem/SlideItem";
import React from "react";
import { useSelector } from "react-redux";

const MyListPage = () => {
  const savedMovies = useSelector((state) => state.movies.savedMovies);

  if (savedMovies.length === 0) {
    return (
      <div className="text-white text-center py-10 text-xl">
        Siyahıda film yoxdur.
      </div>
    );
  }

  return (
    <div className="text-white container mx-auto max-w-[1280px] py-5 px-4">
      <h1 className="text-3xl font-bold mb-6">Yadda saxlanılan filmlər</h1>
      <div className="flex gap-4 flex-wrap">
        {savedMovies.map((movie) => (
          <SlideItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyListPage;
