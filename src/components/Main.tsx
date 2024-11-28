import MovieCards from './MovieCards';
import { movies as initialMovies } from "../data/movies";
import { useState } from 'react';
import { cn } from '../lib/utils';

export const Main = () => {

  const [movies, setMovies] = useState(initialMovies);

  const handleSwipe = (movieId: string) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <section className={cn(
      //Universal
      "h-[100vh] bg-hero-section"
    )}>
      <div className={cn(
        //Universal
        "flex flex-col items-center place-content-center"
        
      )}>
        <h1 className={cn(
          //Universal
          "h-[10%] mt-0 mb-2 text-[80px] font-bold hero-text",
          //Small
          "sm:text-[100px]",
          //Large
          "lg:text-[110px]"
        )}>
          Movder
        </h1>
        <p className={cn(
          //Universal
          "mt-[-30px] text-[20px] text-zinc-100 tracking-widest font-semibold",
          //Small
          "sm:text-[30px]",
          //Medium
          "",
          //Large
          "",
          //XLarge
          ""
        )}>
          Find your perfect match!
        </p>
          <MovieCards movies={movies} onDecision={handleSwipe} />       
      </div>
    </section>
  );
};
