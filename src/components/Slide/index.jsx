"use client";

import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import SlideItem from "../SlideItem/SlideItem";

const Slide = ({ items }) => {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const rightClick = () => {
    if (index < items.length - 4) {
      setIndex(index + 4);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 4);
    }
  };

  const handleImageClick = (id) => {
    if (currentUser) {
      router.push(`/movie/${id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-300 gap-4"
          style={{ marginLeft: `-${index * 210}px` }}
        >
          {items.map((movie) => (
            <SlideItem
              key={movie.id}
              movie={movie}
              onClick={() => handleImageClick(movie.id)}
            />
          ))}
        </div>
      </div>

      {index > 0 && (
        <button
          onClick={leftClick}
          className="absolute opacity-0 group-hover:opacity-100 left-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleLeft size={25} />
        </button>
      )}

      {index < items.length - 4 && (
        <button
          onClick={rightClick}
          className="absolute opacity-0 group-hover:opacity-100 right-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleRight size={25} />
        </button>
      )}
    </div>
  );
};

export default Slide;
