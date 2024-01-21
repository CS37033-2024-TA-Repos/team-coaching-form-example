import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div className={"HomepageDiv"}>
            <h1>Homepage</h1>
            <div className={"buttonDiv"}>
                <a href={"/EmployeeFeedbackForm"}>
                    <button className={"NavButton"}>Employee Feedback Form</button>
                </a>
            </div>
        </div>
    );
}

export default Homepage;
