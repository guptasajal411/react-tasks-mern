import { useEffect, useState } from "react";

export default function Task1(){
    const [inputText, setInputText] = useState(null);
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        inputText && setWordCount(inputText.trim().split(/\s+/).length);
    }, [inputText])

    return (<>
        <a href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task1.js" className="sourceCodeLink">Source Code</a>
        <div className="wrapperDiv task1" style={{height: "100vh"}}>
            <div className="centerDiv">
                <h1>Responsive Paragraph Word Counter</h1>
                <textarea className="textarea" rows={4} onChange={e => setInputText(e.target.value)} />
                <p>Word Count: {wordCount}</p>
            </div>
        </div>
    </>)
}