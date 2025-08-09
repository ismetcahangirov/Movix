"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const MyListPage = () => {
  const router = useRouter();
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
      <h2 className="text-3xl font-bold mb-6">Yadda saxlanılan filmlər</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {savedMovies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            onClick={() => router.push(`/movie/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyListPage;
