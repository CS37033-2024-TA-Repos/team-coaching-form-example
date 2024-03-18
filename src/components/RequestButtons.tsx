import React from 'react';
import './RequestButtons.css';

function RequestButtons() {
    function handleSubmit() {
        console.log("submit");
    }

    function handleClear() {
        console.log("clear");
    }
    return (
        <div className={"requestButtonsDiv"}>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default RequestButtons;
