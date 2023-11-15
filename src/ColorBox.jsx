import { useState } from "react";
import './square.css';
const randomChoice = function (arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}
export default function ColorBox({color}){
    // console.log(color);
    const [c, setC] = useState(randomChoice(color));
    const newColor = () => {
        setC(randomChoice(color));
    };
    return <div className="square" onClick={newColor} style ={{backgroundColor : `#${c}`}}></div>
}