import { evaluate } from "mathjs";
import { useState } from "react";

export default function Task2() {
    const [operations, setOperations] = useState('0');

    function calculateOperations() {
        try {
            setOperations(evaluate(operations).toString());
        } catch (err) {
            alert(err);
        }
    }

    function handleClick(e) {
        const value = e.target.getAttribute("value");
        if (value === "=") {
            calculateOperations();
            return;
        } else if (value === "C") {
            setOperations("0");
            return;
        }
        setOperations(operations => {
            if (operations === "0") {
                return value;
            } else {
                return operations + value;
            }
        })
    }

    return (<>
        <a style={{ position: "absolute", left: "5px", top: "5px", color: "white" }} href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task2.js" className="sourceCodeLink">Source Code</a>
        <div className="wrapperDiv task2" style={{ height: "100vh" }}>
            <div className="centerDiv container calculatorContainer p-0 m-0">
                <div className="display d-flex align-items-end justify-content-end">
                    <h1>{operations}</h1>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <button className="col-3 p-0 m-0" type="button" label="7" value="7" onClick={e => handleClick(e)}>7</button>
                    <button className="col-3 p-0 m-0" type="button" label="8" value="8" onClick={e => handleClick(e)}>8</button>
                    <button className="col-3 p-0 m-0" type="button" label="9" value="9" onClick={e => handleClick(e)}>9</button>
                    <button className="col-3 p-0 m-0" type="button" label="/" value="/" onClick={e => handleClick(e)}>/</button>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <button className="col-3 p-0 m-0" type="button" label="4" value="4" onClick={e => handleClick(e)}>4</button>
                    <button className="col-3 p-0 m-0" type="button" label="5" value="5" onClick={e => handleClick(e)}>5</button>
                    <button className="col-3 p-0 m-0" type="button" label="6" value="6" onClick={e => handleClick(e)}>6</button>
                    <button className="col-3 p-0 m-0" type="button" label="*" value="*" onClick={e => handleClick(e)}>*</button>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <button className="col-3 p-0 m-0" type="button" label="1" value="1" onClick={e => handleClick(e)}>1</button>
                    <button className="col-3 p-0 m-0" type="button" label="2" value="2" onClick={e => handleClick(e)}>2</button>
                    <button className="col-3 p-0 m-0" type="button" label="3" value="3" onClick={e => handleClick(e)}>3</button>
                    <button className="col-3 p-0 m-0" type="button" label="-" value="-" onClick={e => handleClick(e)}>-</button>
                </div>
                <div className="d-flex flex-row flex-wrap">
                    <button className="col-3 p-0 m-0" type="button" label="C" value="C" onClick={e => handleClick(e)}>C</button>
                    <button className="col-3 p-0 m-0" type="button" label="0" value="0" onClick={e => handleClick(e)}>0</button>
                    <button className="col-3 p-0 m-0" type="button" label="+" value="+" onClick={e => handleClick(e)}>+</button>
                    <button className="col-3 p-0 m-0" type="button" label="=" value="=" onClick={e => handleClick(e)}>=</button>
                </div>
                {/* <button type="button" label="C" value="C" onClick={e => handleClick(e)}>C</button> */}
            </div>
        </div>
    </>)
}