import { useEffect, useRef } from "react";

export default function About() {
  const typingRef = useRef(null);
  const fullText =
    "Hi, I'm Hanna Rizza Malana, an aspiring web developer. I graduated from Rizal Technological University with a degree in Bachelor of Science in Information Technology. I'm currently enrolled in the Uplift Code Camp Bootcamp to deepen my knowledge in web development. Aside from that, I've also gained valuable experience in applying best coding practices and collaborating effectively with fellow developers.";

  useEffect(() => {
    let index = 0;
    const element = typingRef.current;
    element.textContent = ""; // ✅ Clear content at start

    const type = () => {
      if (index < fullText.length) {
        element.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, 25); // Adjust speed as needed
      }
    };

    type(); // Start typing effect
  }, []); // ✅ Runs only once when component mounts

  return (
    <div className="flex justify-center min-h-screen py-10 px-4">
      <div className="max-w-screen-lg w-full">
        <h1
          ref={typingRef}
          className="text-xl leading-relaxed text-white break-words"
        ></h1>
      </div>
    </div>
  );
}
