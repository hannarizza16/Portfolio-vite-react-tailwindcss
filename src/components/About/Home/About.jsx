import { useEffect, useRef } from "react";
import skills from "./Skills.jsx"

export default function About() {
  const typingRef = useRef(null);
  const fullText =
    "Hi, I'm Hanna Rizza Malana, an aspiring web developer. I graduated from Rizal Technological University with a degree in Bachelor of Science in Information Technology. I also enrolled in the Uplift Code Camp Bootcamp to deepen my knowledge in web development. Aside from that, I've also gained valuable experience in applying best coding practices and collaborating effectively with fellow developers.";

  useEffect(() => {
    let index = 0;
    const element = typingRef.current;
    element.textContent = ""; // Clear content at start

    const type = () => {
      if (index < fullText.length) {
        element.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, 25); 
      }
    };

    type(); // Start typing effect
  }, []); 

  return (
    <div className="flex justify-center min-h-screen py-15 px-4">
      <div className="max-w-screen-lg w-full ">
        <span ref={typingRef} className="text-xl leading-relaxed block h-32 text-white break-words"></span>
        <div className="text-2xl font-semibold pt-50">
          <h1>SKILLS AND TOOLS</h1>
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          
            {skills.map((skill) => (
              <div key={skill.id} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span key={skill.id} className="flex items-center gap-2 text-lg text-white box-border border- p-2  cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <img src={skill.icon} alt={skill.skill} className="w-10 h-auto" />
              {skill.skill}
              </span>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
