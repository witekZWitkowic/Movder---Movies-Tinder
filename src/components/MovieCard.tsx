import TinderCard from "react-tinder-card";
import Button from "../ui/Button";
import { cn } from "../lib/utils";
import { Movie } from "../data/movies";


type MovieCardProps = {
  movie: Movie;
  onSwipe: (movieId: string) => void;
};

const MovieCard = ({ movie, onSwipe }: MovieCardProps) => {
  return (
    <TinderCard
      key={movie.id}
      className={cn(
        //Universal
        "swipe pressable w-[300px] h-[430px] flex flex-col items-center justify-evenly card-bg rounded-3xl m-auto absolute cursor-pointer",
        //Small
        "sm:w-[390px] sm:h-[590px] sm:top-[140px]",
        //Medium
        "",
        //Large
        "md:w-[380px] md:h-[520px]",
        //XLarge
        "xl:w-[400px] xl:h-[600px]"
      )}
      preventSwipe={['left', 'down', 'up']}
      onSwipe={() => onSwipe(movie.id)}
      swipeRequirementType={'position'}
      swipeThreshold={200}
    >
      <div className={cn(
        //Universal
        "flex flex-col items-center"
      )}>
        <h2 className={cn(
            //Universal
            "text-white text-[14px] font-bold pt-2",
            //Small
            "sm:text-[20px] ",
            //Medium
            "",
            //Large
            "lg:text-[18px]",
            //XLarge
            ""
        )}>{movie.title}</h2>
        <span
          className={cn(
            //Universal
            "mb-2 text-[14px] font-bold",
            {
                'text-green-500': movie.rating >= 7,
                'text-orange-500': movie.rating >= 5 && movie.rating < 7,
                'text-red-500': movie.rating < 5,
            },
            //Small
            "sm:text-[16px] ",
            //Medium
            "",
            //Large
            "",
            //XLarge
            "",
          )}
        >
          ({movie.rating}/10)
        </span>
      </div>
      <img
        className={cn(
            //Universal
            "h-[270px] w-[230px] rounded-3xl drag-none",
            //Small
            "sm:w-[300px] sm:h-[370px]",
            //Medium
            "md:w-[300px] md:h-[350px]",
            //Large
            "lg:h-[370px] lg:w-[300px]",
            //XLarge
            ""
        )}
        draggable={false}
        src={movie.imageURL}
        alt={movie.title}
      />
      <p className={cn(
        //Universal
        "text-[16px] text-white mt-2",
        //Small
        "",
        //Medium
        "",
        //Large
        "",
        //XLarge
        ""
      )}>
        {movie.summary}
      </p>
      <div className={cn(
        //Universal
        "w-[200px] flex justify-between",
        //Small
        "",
        //Medium
        "",
        //Large
        "",
        //XLarge
        ""
      )}>
        <div onClick={() => onSwipe(movie.id)}>
          <Button variation={1} background="bg-green-500" hover="bg-green-800" />
        </div>
        <div onClick={() => onSwipe(movie.id)}>
          <Button variation={2} background="bg-red-500" hover="bg-red-800" />
        </div>
      </div>
    </TinderCard>
  );
};

export default MovieCard;
