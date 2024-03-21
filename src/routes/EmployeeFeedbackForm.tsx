import React, {ChangeEvent, useState} from 'react';
import './EmployeeFeedbackForm.css';
import RequestButtons from "../components/RequestButtons";
import {EmployeeFeedback} from "../common/EmployeeFeedback";

function EmployeeFeedbackForm() {
    const [feedback, setFeedback] = useState<EmployeeFeedback>({name: "", comment: ""});

    function clear() {
        setFeedback({name: "", comment: ""});
    }

    function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
        setFeedback({...feedback, name: e.target.value});
    }

    function handleCommentInput(e: ChangeEvent<HTMLTextAreaElement>) {
        setFeedback({...feedback, comment: e.target.value});
    }


  return (
      <div className="SanitationDiv">
          <h1>Employee Feedback Form</h1>
          <div className={"formDiv"}>
              <div className={"inputDiv"}>
                  <p>Name:</p>
                  <input onChange={handleNameInput} value={feedback.name}/>
                  <p>Comment:</p>
                  <textarea className={"comment"} onChange={handleCommentInput} value={feedback.comment}/>
              </div>
              <RequestButtons feedback={feedback} clear={clear}/>
          </div>
      </div>
  );
}

export default EmployeeFeedbackForm;
