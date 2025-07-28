"use client";

import React from "react";

const Rating = ({ rating, size = "w-8 h-8 text-sm" }) => {
  const getRatingColor = (rating) => {
    if (rating >= 8) return "bg-green-500";
    if (rating >= 5) return "bg-yellow-400";
    return "bg-red-500";
  };

  const roundedRating = Math.round(rating);

  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold ${getRatingColor(
        roundedRating
      )} ${size}`}
    >
      {roundedRating}
    </div>
  );
};

export default Rating;
