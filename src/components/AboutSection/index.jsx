import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto max-w-[1280px] px-4 py-6 group relative"
    >
      <h2 className="text-white text-xl md:text-3xl font-bold mb-6 text-left flex gap-2 items-center">
        <FaCircleInfo className="text-green-400" /> Haqqında
      </h2>
      <p className="text-white text-justify">
        Bu platforma, The Movie Database (TMDB) API-dən əldə edilən məlumatlar
        əsasında qurulmuşdur. <br /> Burada siz yeni filmləri, populyar ekran
        əsərlərini və şəxsi siyahınıza əlavə etdiyiniz filmləri izləyə
        bilərsiniz. <br /> <br />
        🔍 Axtarış – İstədiyiniz filmi və ya serialı ad, janr və ya digər
        kriteriyalara görə tapın. <br />
        📊 Populyar & Yeni – Ən son trendləri və yeni çıxan layihələri kəşf
        edin. <br />
        ❤️ Mənim Siyahılarım – Sevdiyiniz filmləri şəxsi kolleksiyanıza əlavə
        edin və istədiyiniz zaman izləyin. <br /> <br />
        ℹ️ Qeyd: Bütün film və serial məlumatları TMDB-dən avtomatik olaraq əldə
        edilir. <br /> Platforma heç bir media faylı saxlamır, yalnız məlumat
        təqdim edir.
      </p>
    </section>
  );
};

export default AboutSection;
