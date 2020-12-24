import React, {useState} from "react";
import {css} from '@emotion/css';

const Home = () => {

    const [backgroundColor, setBackgroundColor] = useState("#282c34");
    const [fontSize, setFontSize] = useState("4vmax");
    const [padding, setPadding] = useState("22vmax");

    const setStyle = (background, font, padding) => {
        setBackgroundColor(background);
        setFontSize(font);
        setPadding(padding);
    };

    const newStyle = css`
        transition-duration: 0.7s;
        text-align: center;
        border-radius: 10px;
        background-color: ${backgroundColor};
        font-size: ${fontSize};
        padding: ${padding};
        @media (max-width: 1200px) {
        margin: 1vmax;
        font-size:  3vmax;
        padding: 10vmax;
        }
        @media (max-width: 905px) {
        margin: 1vmax;
        font-size:  3vmax;
        padding: 10vmax;
        }
`;

    return <div className={newStyle}>
                <div
                    onMouseEnter={() => setStyle("#3a3b47", "6vmax", "9vmax")}
                    onMouseOut={() => setStyle("#282c34", "4vmax", "22vmax")}
                >
                    Hi There!
                </div>
            </div>;
};

export default Home;
