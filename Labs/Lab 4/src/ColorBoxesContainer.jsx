import ColorBox from "./ColorBox"

export default function ColorBoxesContainer({ colors }) {
    
    const boxes = []

    for(let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={i} colorArray={colors} />)
    }

    return (

        <div className="ColorBoxesContainer">
            {boxes}
        </div>
    );
}