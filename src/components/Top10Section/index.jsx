"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import Slide from "../Slide";
import { getTop10Movies } from "@/features/MovieSlice";

const Top10Section = () => {
  const dispatch = useDispatch();
  const { top10Movies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getTop10Movies());
  }, [dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <section className="container mx-auto max-w-[1280px] px-4 py-6 group relative">
      <h2 className="text-white text-3xl font-bold mb-6 text-left">
        Bu gün top 10 filmlər
      </h2>
      <Slide items={top10Movies} name={"top10"} />
    </section>
  );
};

export default Top10Section;
