import React, { useState } from 'react';

function Task5() {
    const [birthDate, setBirthDate] = useState(null);
    const [age, setAge] = useState(null);

    function handleDateChange() {
        const selectedDate = new Date(birthDate);
        setBirthDate(selectedDate);

        const today = new Date();
        const calculatedAge = today.getFullYear() - selectedDate.getFullYear();

        if (
            today.getMonth() < selectedDate.getMonth() ||
            (today.getMonth() === selectedDate.getMonth() &&
                today.getDate() < selectedDate.getDate())
        ) {
            setAge(calculatedAge - 1);
        } else {
            setAge(calculatedAge);
        }
    };

    return (<>
        <a href="https://github.com/guptasajal411/react-tasks-mern/blob/master/src/Task5.js" className="sourceCodeLink">Source Code</a>
        <div className='wrapperDiv' style={{ height: "100vh" }}>
            <div className="centerDiv text-center">
                <h1>Age Calculator</h1>
                <p>Enter your date of birth</p>
                <input
                    type="date"
                    id="birthdate"
                    onChange={e => setBirthDate(e.target.value)}
                    style={{ width: "100%" }}
                /><br />
                <button onClick={handleDateChange} className='px-2 py-1 mt-1' type="button" style={{ background: "#007bff", color: "white", border: "none", borderRadius: "3px" }}>Calculate Age</button>
                {age && <h4 className='mt-1'>You are {age} years old</h4>}
            </div>
        </div>
    </>
    );
}

export default Task5;