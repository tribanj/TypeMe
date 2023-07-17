import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";
const TypingChallenge = ({
  timeReamining,
  timeStarted,
  testInfo,
  onInputChange
}) => {
  return (
    <>
      <div className="Typing-challenge">
        <div className="timer-container">
          <p className="timer">
            00:
            {timeReamining >= 10 ? timeReamining : `0${timeReamining}`}
          </p>
          <p className="timer-info">
            {!timeStarted && "Start typing to start the test"}
          </p>
        </div>

        <div className="textarea-container">
          <div className="textarea-left">
            <div className="textarea test-paragraph">
              {/* {selectedParagraph} */}
              {testInfo.map((individualLetterInfo,index) => {
                return <TestLetter 
                key={index}
                individualLetterInfo={individualLetterInfo} />
              })}
            </div>
          </div>

          <div className="textarea-right">
            <textarea
             
            //  onChange={(e) => onInputChange(e.target.value)}
             onChange={(e)=> onInputChange(e.target.value)}
              className="textarea"
              placeholder="Start typing here"
            >
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypingChallenge;
