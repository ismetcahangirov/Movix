import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import SlideItem from "../SlideItem/SlideItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slide = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(210);
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const uniqueItems = items.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
  );

  const rightClick = () => {
    if (index < uniqueItems.length - 1) {
      setIndex(index + 1);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
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
    <div className="relative w-full group overflow-hidden">
      <div
        className="flex transition-all duration-300 md:gap-4"
        style={{ marginLeft: `-${index * slideWidth}px` }}
      >
        {uniqueItems.map((movie, i) => (
          <SlideItem
            key={movie.id}
            movie={movie}
            onClick={() => handleImageClick(movie.id)}
            reportWidth={(width) => {
              if (i === 0 && width !== slideWidth) {
                setSlideWidth(width);
              }
            }}
          />
        ))}
      </div>

      {index > 0 && (
        <button
          onClick={leftClick}
          className="absolute opacity-0 group-hover:opacity-100 left-0 top-0 h-full px-3 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleLeft size={25} />
        </button>
      )}

      {index < uniqueItems.length - 4 && (
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
