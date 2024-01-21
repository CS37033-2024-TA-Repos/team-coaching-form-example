import React from 'react';
import './RequestButtons.css';
import {RequestButtonsInterface} from "../common/RequestButtonsInterface";

function RequestButtons({submit, clear}: RequestButtonsInterface) {
    function handleSubmit() {
        submit();
    }

    function handleClear() {
        clear();
    }
    return (
        <div className={"requestButtonsDiv"}>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
            <a href={"/"}>
                <button>Back</button>
            </a>
        </div>
    );
}

export default RequestButtons;
