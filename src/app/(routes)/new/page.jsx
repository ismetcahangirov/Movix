"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewMovies } from "@/app/redux/features/MovieSlice";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

const NewPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { newMovies, status } = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const ref = useRef();

  useEffect(() => {
    dispatch(getNewMovies(page));
  }, [dispatch, page]);

  const lastElementRef = useCallback(
    (node) => {
      if (status === "loading") return;
      if (ref.current) ref.current.disconnect();

      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) ref.current.observe(node);
    },
    [status]
  );

  const uniqueMovies = newMovies.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );

  return (
    <div className="text-white container mx-auto max-w-[1280px] py-5 px-4">
      <h2 className="text-3xl font-bold mb-6">Yeni Filmlər</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {uniqueMovies.map((movie, index) => {
          const onClick = () => router.push(`/movie/${movie.id}`);

          if (index === uniqueMovies.length - 1) {
            return (
              <div key={movie.id} ref={lastElementRef}>
                <Card movie={movie} onClick={onClick} />
              </div>
            );
          }

          return <Card key={movie.id} movie={movie} onClick={onClick} />;
        })}
      </div>

      {status === "loading" && <Spinner />}
    </div>
  );
};

export default NewPage;
