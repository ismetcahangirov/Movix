"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import Slide from "../Slide";
import { getUpcomingMovies } from "@/features/MovieSlice";

const UpcomingSection = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <section className="container mx-auto max-w-[1280px] px-4 py-6 group relative">
      <h2 className="text-white text-3xl font-bold mb-6 text-left">
        Gələcək Filmlər
      </h2>
      <Slide items={upcomingMovies} />
    </section>
  );
};

export default UpcomingSection;
