import { cn } from '../lib/utils'

type Props = {
    className: string
}
const NoMoreMoviesCard = ({className}: Props) => {
  return (
    <div
    className={cn(
        //Universal
        "swipe pressable w-[300px] h-[450px] flex flex-col items-center justify-evenly card-bg rounded-3xl m-auto duration-300 !left-[-3000px]",
        //Small
        "sm:w-[390px] sm:h-[590px] sm:top-[140px]",
        //Medium
        "",
        //Large
        "md:w-[380px] md:h-[520px]",
        //XLarge
        "xl:w-[400px] xl:h-[600px]",
        className
      )}
    >
      <div className={cn(
        //Universal
        "flex flex-col items-center"
      )}>
        <h2 className={cn(
            //Universal
            "text-white text-[14px] font-bold pt-2 mb-4",
            //Small
            "sm:text-[20px]",
            //Medium
            "",
            //Large
            "lg:text-[18px]",
            //XLarge
            ""
        )}>No more movies to swipe!</h2>
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
           "lg:h-[370px] lg:w-[300px]"

        )}
        src='https://wallpapers.com/images/hd/black-and-white-sad-meme-qq7lsi1qvp3di2xd.jpg'
      />
      <p className={cn(
        //Universal
        "mt-4 text-[16px] text-white text-center max-w-[250px]",
        //Medium
        "md:max-w-[300px] md:text-[18px]"
      )}>
        Now please, wait patiently for the movies to be released in your fav cinema!
      </p>
      
    </div>
  )
}

export default NoMoreMoviesCard