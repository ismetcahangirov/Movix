"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaHeart, FaThumbsDown, FaBookmark } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import Slide from "@/components/Slide";
import TrailerSlide from "@/components/TrailerSlide";
import {
  getMovieById,
  getSimilarMovies,
  getMovieTrailer,
} from "@/features/MovieSlice";

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
    <div className="text-white max-w-6xl mx-auto py-10 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md w-full max-w-xs object-cover"
        />

        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-2">
              <strong>Reytinq: </strong> {movie.vote_average}
            </p>
            <p className="mb-2">
              <strong>Buraxılış ili: </strong> {movie.release_date}
            </p>
            <p>
              <strong>Haqqında: </strong> {movie.overview}
            </p>
          </div>

          <div className="flex gap-6 mt-6 text-3xl text-white cursor-pointer">
            <FaBookmark />
            <FaHeart />
            <FaThumbsDown />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {trailers.length > 0 && (
          <div className="my-12  h-[450px]">
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
