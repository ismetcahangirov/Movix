"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

import Spinner from "@/components/Spinner";
import TrailerSlide from "@/components/TrailerSlide";
import Slide from "@/components/Slide";
import SaveButton from "@/components/SaveButton";
import Rating from "@/components/Rating";
import {
  getMovieById,
  getSimilarMovies,
  getMovieTrailer,
} from "@/app/redux/features/MovieSlice";

const MoviePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie, status, error, similarMovies, trailer } = useSelector(
    (state) => state.movies
  );
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (currentUser === null) {
      router.push("/login");
      return;
    }
    if (id) {
      dispatch(getMovieById(id));
      dispatch(getSimilarMovies(id));
      dispatch(getMovieTrailer(id));
    }
  }, [dispatch, id, currentUser, router]);

  if (!currentUser) {
    return (
      <div className="text-white text-center py-10 text-xl">
        Giriş tələb olunur...
      </div>
    );
  }

  if (status === "loading") return <Spinner />;
  if (error) return <div className="text-red-500">Xəta baş verdi: {error}</div>;

  if (!movie)
    return (
      <div className="text-white text-center py-10 text-xl">
        Film məlumatı yüklənir...
      </div>
    );

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
            className="rounded-md w-full object-contain md:object-cover h-[200px] md:h-[350px]"
          />
          <div className="absolute top-3 left-3 z-10">
            <SaveButton movie={movie} />
          </div>
          <div className="absolute bottom-3 right-3">
            <Rating
              rating={movie.vote_average}
              size="w-8 h-8 text-sm md:w-12 md:h-12 md:text-lg"
            />
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

      <div className="flex flex-col gap-8 ">
        {trailers.length > 0 && (
          <div className="mt-10 md:mb-12 h-max md:h-[450px]">
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
