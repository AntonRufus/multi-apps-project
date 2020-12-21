import css from "./BrowserTabs.module.css";
import React, {useState} from "react";

const BrowserTab = props => {
    const [highlightStyle, setHighlightStyle] = useState({left: 0, opacity: 0});

    const moveHighlight = (e) => {
        //update highlightStyle to move the highlight
        setHighlightStyle({
            left: e.nativeEvent.layerX - 75,
        });
    };

    const hideHighlight = () => {
        //update highlightStyle to move the highlight
        setHighlightStyle({
            opacity: 0,
        });
    };

    return  <div className={css.tab} onMouseMove={moveHighlight} onMouseOut={hideHighlight}>
                <div className={css.highlight} style={highlightStyle}/>
                {props.children}
            </div>
};

export default BrowserTab;
