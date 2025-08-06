"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import Slide from "../Slide";
import { getTopRatedMovies } from "@/features/MovieSlice";
import { FaStar } from "react-icons/fa";

const TopRatedSection = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <section className="container mx-auto max-w-[1280px] px-4 py-6 group relative">
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 text-left flex gap-1">
        <FaStar className="text-yellow-400" /> Ən Yüksək Reytinqli Filmlər
      </h2>
      <Slide items={topRatedMovies} name={"topRated"} />
    </section>
  );
};

export default TopRatedSection;
