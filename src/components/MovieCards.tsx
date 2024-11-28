import { useEffect, useState } from "react";
import { Movie } from "../data/movies";
import { cn } from "../lib/utils";
import MovieCard from "./MovieCard";
import NoMoreMoviesCard from "./NoMoreMoviesCard";



type MovieCardsProps = {
  movies: Movie[];
  onDecision: (movieId: string) => void;
};

const MovieCards = ({ movies, onDecision }: MovieCardsProps) => {

  const [leftZero, setLeftZero] = useState(false);

  useEffect(() => {
    if (movies.length === 0) {
      const timer = setTimeout(() => setLeftZero(true), 100);
      return () => clearTimeout(timer);
    }
  }, [movies]);

  return (
    <div className={cn(
      //Universal
      ""
    )}>
      
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSwipe={onDecision} />
        ))
      ) : (
        <NoMoreMoviesCard className={leftZero ? '!left-0' : ''} />
      )}
    </div>
  );
};

export default MovieCards;
