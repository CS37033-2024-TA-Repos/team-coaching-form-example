import React from 'react';
import './RequestButtons.css';
import {EmployeeFeedback} from "../common/EmployeeFeedback";

type requestButtonsProps = {
    feedback: EmployeeFeedback
    clear: Function
}
function RequestButtons(props: requestButtonsProps) {
    function handleSubmit() {
        console.log(props.feedback);
        props.clear();
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
