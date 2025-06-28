import TypingEffect from "../../utils/typingEffect.jsx";
import YellowImage from "../../../assets/img/YellowImage.png";
import Resume from "../Resume/Resume.jsx"
import Counter from "../Counter/Counter.jsx";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col md:flex-row items-center justify-center ">
  {/* Left Side: Name + Typing */}
  <div className="flex flex-col justify-center text-white max-w-lg mb-30 space-y-5">
  <h1 className="text-6xl md:text-5xl lg:text-8xl font-bold ">
    I'm <span className="text-yellow-300">Hanna</span><br />
    <span className="text-yellow-300">Rizza Malana</span>
  </h1>

  {/* Typing effect directly below the name */}
  <h1 className="block text-2xl after:content-['|'] after:ml-1 after:animate-blink after:text-yellow-300">
    <TypingEffect/>
  </h1>
  
    <Resume/>
  
    <Counter/>
  
  
</div>


  {/* Right Side: Image */}
  <div className="mt-8 md:mt-0 md:ml-8 ">
    <img
      src={YellowImage}
      alt="Hanna"
      className="w-auto max-h-svh rounded-lg shadow-lg hidden md:block "
    />
  </div>
</div>
  )}
