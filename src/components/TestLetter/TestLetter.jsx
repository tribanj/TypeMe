import React from "react";
import "./TestLetter.css";
const TestLetter = ({ individualLetterInfo }) => {
  const { status } = individualLetterInfo;
//   let statusClass;

  const statusClass = {
    correct:"test-letter-correct",
    incorrect:"test-letter-incorrect",
    notAttempted:"not-attempted"
  }[status];
  return (
    <>
      <span className={`test-letter ${statusClass}`}>
        {individualLetterInfo.testLetter}
      </span>
    </>
  );
};

export default TestLetter;
