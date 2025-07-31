"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import {
  getMovieById,
  getSimilarMovies,
  getMovieTrailer,
} from "@/features/MovieSlice";
import Spinner from "@/components/Spinner";
import TrailerSlide from "@/components/TrailerSlide";
import Slide from "@/components/Slide";
import SaveButton from "@/components/SaveButton";
import Rating from "@/components/Rating";

const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie, status, error, similarMovies, trailer } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (id) {
      dispatch(getMovieById(id));
      dispatch(getSimilarMovies(id));
      dispatch(getMovieTrailer(id));
    }
  }, [dispatch, id]);

  if (status === "loading") return <Spinner />;
  if (error) return <div className="text-red-500">Xəta baş verdi: {error}</div>;
  if (!movie) return null;

  const trailers = trailer
    ? trailer.filter((v) => v.type === "Trailer" && v.site === "YouTube")
    : [];

  return (
    <div className="text-white container mx-auto w-full max-w-[1280px] py-5 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full max-w-xs">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md w-full object-cover h-[350px]"
          />

          <div className="absolute top-3 left-3 z-10">
            <SaveButton movie={movie} />
          </div>

          <div className="absolute bottom-3 right-3">
            <Rating rating={movie.vote_average} size="w-12 h-12 text-lg" />
          </div>
        </div>

        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-2">
              <strong>Buraxılış ili: </strong> {movie.release_date}
            </p>
            <p>
              <strong>Haqqında: </strong> {movie.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {trailers.length > 0 && (
          <div className="my-12 h-[450px]">
            <h2 className="text-2xl font-bold mb-4">Trailerlar</h2>
            <TrailerSlide trailers={trailers} />
          </div>
        )}

        {similarMovies && similarMovies.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Oxşar filmlər</h2>
            <Slide items={similarMovies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
