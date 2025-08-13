import React, { useRef } from "react";
import SaveButton from "../SaveButton";
import Rating from "../Rating";

const SlideItem = ({ movie, onClick }) => {
  const imgRef = useRef(null);

  return (
    <div
      ref={imgRef}
      className="relative cursor-pointer w-full md:w-max slide-item"
      onClick={onClick}
      style={{ flexShrink: 0 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[250px] md:min-w-[203px] md:h-[270px] md:object-cover object-contain block outline outline-midnight"
      />

      <div className="absolute left-12 top-2 md:left-2 z-50">
        <SaveButton movie={movie} />
      </div>

      <div className="absolute bottom-2 right-12 md:right-2">
        <Rating
          rating={movie.vote_average}
          size="w-8 h-8 text-sm md:w-10 md:h-10 md:text-lg"
        />
      </div>
    </div>
  );
};

export default SlideItem;
