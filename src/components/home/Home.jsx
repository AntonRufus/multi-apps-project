import React, { useState } from "react";
import { css } from "@emotion/css";

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState("#282c34");
  const [fontSize, setFontSize] = useState("4vmax");
  const [padding, setPadding] = useState("22vmax");
  const [opacity, setOpacity] = useState("0.6");
  const [color, setColor] = useState("0.6");

  const setStyle = (background, font, padding, opacity, color) => {
    setBackgroundColor(background);
    setFontSize(font);
    setPadding(padding);
    setOpacity(opacity);
    setColor(color);
  };

  const newStyle = css`
    transition-duration: 0.7s;
    text-align: center;
    border-radius: 10px;
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    padding: ${padding};
    opacity: ${opacity};
    color: ${color};

    @media (max-width: 1200px) {
      margin: 1vmax;
      font-size: 3vmax;
      //padding: 5vmax;
    }

    @media (max-width: 905px) {
      //padding: 8vmax;
    }

    @media (max-width: 605px) {
      //padding: 5vmax;
    }

    @media (max-width: 400px) {
      padding: 25vmax 5vmax;
    }
  `;

  return (
    <div className={newStyle}>
      <div
        onMouseEnter={() => setStyle("#3a3b47", "6vmax", "9vmax", 1, "inherit")}
        onMouseOut={() => setStyle("#282c34", "4vmax", "22vmax", 0.5, "yellow")}
      >
        Hi There!
      </div>
    </div>
  );
};

export default Home;
