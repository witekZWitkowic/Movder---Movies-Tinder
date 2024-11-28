import { BsFillHeartFill, BsFillHeartbreakFill } from 'react-icons/bs'
import { cn } from '../lib/utils';

type ButtonProps = {
  variation: number;
  background: string;
  hover: string;
}

const Button = ({ variation, background, hover }: ButtonProps) => {
  return (
    <>
      <div className={cn(
        //Hover
        {
          [`hover:${hover}`]: hover
        },
        //Universal
        "pressable flex justify-center sm:mt-0 mt-2 submit-button px-6 pb-1 h-[50px] w-[50px] rounded-full cursor-pointer transition ease-in-out duration-300",
        background
      )}>
        <button className={cn(
          //Universal
          "h-[53px] text-[25px] text-zinc-200 font-semibold"
        )}>
          {variation === 1 ? <BsFillHeartFill /> : <BsFillHeartbreakFill />}
        </button>
      </div>
    </>
  );
};

export default Button;
