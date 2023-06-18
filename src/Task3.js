import { useState } from "react";

export default function Task3({ colors }) {
    const [showColorList, setShowColorList] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleButtonClick = () => {
        setShowColorList(!showColorList);
    };

    const handleColorClick = (color) => {
        setSelectedColor(color);
        setShowColorList(false);
    };
    return (<>
        <a href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task3.js" className="sourceCodeLink">Source Code</a>
        <div className="wrapperDiv" style={{ height: "100vh" }}>
            <div className="centerDiv text-center">
                <button onClick={handleButtonClick}>Pick a color</button>
                {showColorList && (
                    <ul>
                        {colors.map((color, index) => (
                            <li key={index} onClick={() => handleColorClick(color)}>
                                <div style={{ backgroundColor: color, width: '20px', height: '20px' }}></div>
                            </li>
                        ))}
                    </ul>
                )}
                {selectedColor && (
                    <div>
                        Selected color: <span style={{ backgroundColor: selectedColor }}>{selectedColor}</span>
                    </div>
                )}
            </div>
        </div>
    </>)
}