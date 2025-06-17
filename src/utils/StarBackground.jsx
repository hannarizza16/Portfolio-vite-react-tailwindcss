import { useEffect, useRef } from "react";
import { initStars } from "./star";

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            initStars(canvasRef.current);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full min-h-screen h-[200%] z-0 pointer-events-none"
        />
    );
};

export default StarBackground;
