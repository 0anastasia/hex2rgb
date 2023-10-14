import { useState } from "react";
import React from "react";
import "./hex2rgb.css";

function Hex2rgb() {
    let [hexState, setHexState] = useState('#');
    let [rgbState, setRgbState] = useState('RGB(255, 255, 255)');
    let [backgroundColor, SetBackgroundColor] = useState('RGB(255, 255, 255)');

    const inputHandler = (e: any) => {
        const { value } = e.target;
        if(value.lenght > 7) return;
        setHexState(hexState = value ? value : '#');
        setHexState(hexState = value[0] != '#' ? '#' + value : value);

        if(value.lenght === 7) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
            const rgb = result ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Ошибка!';

            setRgbState(rgbState = rgb);
            if(rgb != 'ошибка') SetBackgroundColor(backgroundColor = rgb);
        } else {
            setRgbState(rgbState = backgroundColor);
        }
    }

    return(
        <div className="hex2rgb-container" style={{backgroundColor: backgroundColor}}>
        <form className="hex2rgb-form" onSubmit={(e) => e.preventDefault()}>
            <input className=" hex2rgb-field" type="text" value={hexState} onChange={inputHandler}/>
            <div className=" hex2rgb-field">{ rgbState }</div>
        </form>
    </div>
    );
}

Hex2rgb();