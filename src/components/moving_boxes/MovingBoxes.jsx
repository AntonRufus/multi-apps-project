import React, {useEffect, useRef} from "react";
import css from "./MovingBoxes.module.css";

const MovingBoxes = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.canvas.width = window.innerWidth - 600;
        context.canvas.height = window.innerHeight - 250;
        /*
        context.canvas.width = 1280;
        context.canvas.height = 720;
        */
    }, []);

    return (
        <div className={css.wrapper}>
            <canvas ref={canvasRef}/>

            <div className="arrows">
                <button>Up</button>
                <button>Left</button>
                <button>Down</button>
                <button>Right</button>
            </div>

            <div className={css.images}>
                <img src="https://i.imgur.com/JYUB0m3.png" alt="Down"/>
                <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right"/>
                <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up"/>
                <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left"/>
            </div>
        </div>
    )
};

export default MovingBoxes;
