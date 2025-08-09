import React, { useRef, useEffect } from "react";

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
        className="min-w-[250px] md:min-w-[190px] h-[250px]  md:h-[270px] object-cover block"
      />
    </div>
  );
};

export default SlideItem;
