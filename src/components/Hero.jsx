import axios from "axios";
import React, { useEffect, useState } from "react";
import endPoints, { createImageUrl } from "../services/movieServices";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endPoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    //   console.log(randomMovie);
      setMovie(randomMovie);
    });
  }, []);

   const truncate = (str, length) => {
    if(!str) return;
    return str.length > length ? str.slice(0, length) + "..." : str;
  }
  

  if (!movie)
    return (
      <>
        <p>fetcheing movies.....</p>
      </>
    );

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="w-full absolute h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
          <img className="w-full h-full object-cover object-top"
            src={createImageUrl(backdrop_path, "original")}
            alt={title}
          />

          <div className="w-full absolute top-[10%] lg:top-[25%] p-4 md:p-8">
            <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
            <div className="mt-8 mb-4">
                <button className="Capitalize border bg-gray-300 text-black px-5 py-2 rounded-md">Play</button>
                <button className="Capitalize border border-gray-300 px-5 py-2 ml-4 rounded-md">Watch Later</button>
            </div>
            <div>
                <p className="text-gray-400 text-sm">{release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncate(overview, 165)}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
