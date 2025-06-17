import React, { useEffect, useRef } from "react";

const TypingEffect = () => {
    const texts = ["Fresh Graduate", "Aspirant Web Developer", "Aspirant Mobile App Developer"];
    const typingRef = useRef(null);
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenTexts = 2000;

    useEffect(() => {

        const typeText = () => {
            const currentText = texts[currentTextIndex];
            if (currentCharIndex < currentText.length) {
                typingRef.current.textContent += currentText.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(typeText, typingSpeed);
            } else if (typingRef.current) {
                setTimeout(eraseText, delayBetweenTexts);
            }
        };

        const eraseText = () => {
            if (currentCharIndex > 0) {
                typingRef.current.textContent = typingRef.current.textContent.slice(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(eraseText, erasingSpeed);
            } else {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(typeText, typingSpeed);
            }
        };

        const startTyping = () => {
            setTimeout(typeText, delayBetweenTexts);
        };

        startTyping();
    }, []);

    return (
        <span id="typing-text" ref={typingRef}></span>
    );
};

export default TypingEffect;
