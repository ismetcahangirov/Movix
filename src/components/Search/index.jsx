import React from "react";

const SearchInput = () => {
  return (
    <input
      type="text"
      placeholder="Axtar..."
      className=" px-2 py-1 text-sm rounded text-white bg-search placeholder-white/70
                        w-full  md:w-32 lg:w-40 xl:w-48 flex-shrink-0 md:flex-shrink min-w-[80px] outline-none"
    />
  );
};

export default SearchInput;
