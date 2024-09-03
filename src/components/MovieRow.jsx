import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

//   console.log(movies);

  return (
    <>
      <h2 className="font-nsans-bold capitalize p-4 md:text-xl">{title}</h2>

      <div className="relative flex item-center">
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
        {
             movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
             )   )     
             
             }
        </div>
      </div>
    </>
  );
};

export default MovieRow;
