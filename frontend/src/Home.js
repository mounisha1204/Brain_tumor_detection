import React, { useState, useEffect } from "react";

function Home() {
  const quotes = [
    "Early detection saves lives – every second matters.",
    "Technology is not just about innovation, it’s about giving hope.",
    "Detect early, fight strong, live longer.",
    "From scan to solution – making detection smarter.",
    "Together, technology and humanity can defeat cancer."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, [quotes.length]);

  return (
    <div id="slide">
      <div id="left"></div>
      <div id="right">
        {quotes[index]}
      </div>
    </div>
  );
}

export default Home;
