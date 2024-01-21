import React, {ChangeEvent, useState} from 'react';
import './EmployeeFeedbackForm.css';
import RequestButtons from "../components/RequestButtons";
import {EmployeeFeedback} from "../common/EmployeeFeedback";

function EmployeeFeedbackForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    function submit() {
        if (name !== "" && comment !== "") {
            const feedback: EmployeeFeedback = {name: name, comment: comment};
            console.log(feedback);
            clear();
        }
    }

    function clear() {
        setName("");
        setComment("");
    }

    function handleNameInput(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleCommentInput(e: ChangeEvent<HTMLTextAreaElement>) {
        setComment(e.target.value);
    }


  return (
      <div className="SanitationDiv">
          <h1>Employee Feedback Form</h1>
          <div className={"formDiv"}>
              <div className={"inputDiv"}>
                  <p>Name:</p>
                  <input onChange={handleNameInput} value={name}/>
                  <p>Comment:</p>
                  <textarea className={"comment"} onChange={handleCommentInput} value={comment}/>
              </div>
              <RequestButtons submit={submit} clear={clear}/>
          </div>
      </div>
  );
}

export default EmployeeFeedbackForm;
