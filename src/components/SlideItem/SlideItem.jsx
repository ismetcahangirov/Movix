import React, { useRef, useEffect } from "react";
import SaveButton from "../SaveButton";
import Rating from "../Rating";

const SlideItem = ({ movie, onClick, reportWidth }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      const width = imgRef.current.offsetWidth;
      reportWidth && reportWidth(width);
    }
  }, [reportWidth]);

  return (
    <div
      className="relative cursor-pointer"
      onClick={onClick}
      style={{ flexShrink: 0 }}
    >
      <img
        ref={imgRef}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="min-w-[250px] md:min-w-[203px] h-[250px]  md:h-[270px] object-cover block"
      />
      <div className="absolute top-2 left-2 z-10">
        <SaveButton movie={movie} />
      </div>

      <div className="absolute bottom-2 right-2">
        <Rating
          rating={movie.vote_average}
          size="w-8 h-8 text-sm md:w-10 md:h-10 md:text-lg"
        />
      </div>
    </div>
  );
};

export default SlideItem;
