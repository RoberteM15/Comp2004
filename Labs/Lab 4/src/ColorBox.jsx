import { useState } from "react"

export default function ColorBox({ colorArray }) {

    const colorsCount = colorArray.length;
    const [color, setColor] = useState(colorArray[Math.floor(Math.random() * colorsCount)])

    return (
        <div className="ColorBox" 
            style={{backgroundColor: color }}
            onClick={() => setColor(colorArray[Math.floor(Math.random() * colorsCount)])}
        >
        </div>
    )
}