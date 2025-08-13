import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SlideItem from "../SlideItem/SlideItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slide = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const uniqueItems = items.filter(
    (movie, idx, self) => idx === self.findIndex((m) => m.id === movie.id)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const firstSlide = containerRef.current.querySelector(".slide-item");
        if (firstSlide) {
          setSlideWidth(firstSlide.offsetWidth);
        }
      }
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener("resize", updateWidth);
  }, [items]);

  const limit = isDesktop ? uniqueItems.length - 6 : uniqueItems.length - 1;

  const rightClick = () => {
    if (index < limit) {
      setIndex((prev) => prev + 1);
    }
  };

  const leftClick = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleImageClick = (id) => {
    router.push(currentUser ? `/movie/${id}` : "/login");
  };

  return (
    <div ref={containerRef} className="relative w-full group overflow-hidden">
      <div
        className="flex transition-all duration-300"
        style={{
          transform: `translateX(-${index * slideWidth}px)`,
        }}
      >
        {uniqueItems.map((movie) => (
          <SlideItem
            key={movie.id}
            movie={movie}
            onClick={() => handleImageClick(movie.id)}
          />
        ))}
      </div>

      {index > 0 && (
        <button
          onClick={leftClick}
          className="absolute md:opacity-0 group-hover:opacity-100 left-0 top-0 h-full  md:px-3 px-1 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleLeft size={25} />
        </button>
      )}

      {index < limit && (
        <button
          onClick={rightClick}
          className="absolute md:opacity-0 group-hover:opacity-100 right-0 top-0 h-full md:px-3 px-1 flex items-center bg-black/30 text-white text-xl z-10 transition-all duration-500 ease-in-out"
        >
          <FaAngleRight size={25} />
        </button>
      )}
    </div>
  );
};

export default Slide;
