import React from 'react';
import './RequestButtons.css';
import {RequestButtonsInterface} from "../common/RequestButtonsInterface";

type requestButtonsProps = {
    submit: Function
    clear: Function
}
function RequestButtons(props: requestButtonsProps) {
    function handleSubmit() {
        props.submit();
    }

    function handleClear() {
        props.clear();
    }
    return (
        <div className={"requestButtonsDiv"}>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default RequestButtons;
