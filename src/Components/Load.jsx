import React, { useEffect, useState } from "react";
import "./Load.css";
import logos from "../assets/video/logos.mp4"; // Adjust the path as necessary
const Load = () => {
   const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1000); // Fade starts at 13.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <video
        className="loading-video"
        src={logos}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};


export default Load;
