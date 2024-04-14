import React, { useEffect, useState } from "react";
import heroImage from "../assets/coffee-backgrounds/heroCoffee2Dark.jpg";

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
  const delayBeforeLoop = 2000; // Adjust the delay before looping (milliseconds)
  const fullText = "Have a sip with us...";

  useEffect(() => {
    const interval = setInterval(() => {
      if (!completed) {
        if (index === fullText.length) {
          setCompleted(true);
          setTimeout(() => {
            setIndex(0);
            setText("");
            setCompleted(false);
          }, delayBeforeLoop);
        } else {
          setText(fullText.substring(0, index + 1));
          setIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, completed, fullText, typingSpeed, delayBeforeLoop]);

  return (
    <div className="relative flex justify-center">
      <img
        src={heroImage}
        alt="Coffee background"
        className="w-full h-[500px] xl:h-fit object-cover"
      />
      <div className="absolute flex justify-center items-center z-50 top-44">
        <h1 className="font-mono italic text-white text-xl xl:text-3xl lg:text-2xl text-center">
          "{text}"
        </h1>
      </div>
    </div>
  );
}

export default Hero;
