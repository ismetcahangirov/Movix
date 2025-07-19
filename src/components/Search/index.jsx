import React from "react";

const SearchInput = () => {
  return (
    <input
      type="text"
      placeholder="Axtar..."
      className="ml-2 px-2 py-1 text-sm rounded text-white bg-search placeholder-white/70
                        w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 flex-shrink min-w-[80px]"
    />
  );
};

export default SearchInput;
