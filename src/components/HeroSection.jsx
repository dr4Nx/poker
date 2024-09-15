import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { ReactTyped } from "react-typed";
import pokertable from "../assets/poker-table.jpg"
import pokerfuture from "../assets/poker-futuristic.jpeg"


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide py-4">
            Poker is Premier Gambling 
        </h1>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
            {"for: "}
            <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            <ReactTyped 
                strings={[
                    "Computer Scientists",
                    "Mathematicians",
                    "Traders",
                    "Data Scientists",
                    "Statisticians",
                    "Engineers",
                    "Businesspeople",
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={5000}
                showCursor={false}
                loop
            />
            </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Push your logical reasoning, social aptitude, and critical thinking to the limit with this zero-sum game. Play strong hands, bluff opponents, and win at showdown to make the money.
        </p>
        <div className="flex justify-center my-10">
            <a href="https://www.pokernow.club/" className="bg-gradient-to-r from-red-500 to-red-800 py-3 px-4 mx-3 rounded-md">
                Let's Play!
            </a>
            <a href="https://www.pokeratberkeley.org/" className="py-3 px-4 mx-3 rounded-md border">
                Poker @ Cal
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <img className="rounded-lg w-1/2 border border-red-700 shadow-red-400 mx-2 my-4" src={pokertable} />
            <img className="rounded-lg w-1/2 border border-red-700 shadow-red-400 mx-2 my-4" src={pokerfuture} />


        </div>
    </div>
  )
};

export default HeroSection;