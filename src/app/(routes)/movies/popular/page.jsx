"use client";

import { getPopularProducts } from "@/features/ProductsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopularPage = () => {
  const dispatch = useDispatch();

  const { popularProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  return (
    <div>
      {popularProducts.map((movie) => [
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Film Poster"
          />
        </div>,
      ])}
    </div>
  );
};

export default PopularPage;
