import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeReamining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain
}) => {
  // console.log(props.selectedParagraph);
  return (
    <>
      <div className="challenge-section-container">
        <h1 className="chellenge-section-header" data-aos="fade-down">
          Take a speed test now
        </h1>
        <TestContainer 
        selectedParagraph={selectedParagraph}
        timeReamining = {timeReamining}
        timeStarted ={timeStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange ={onInputChange}
        startAgain={startAgain}
        />
      </div>
    </>
  );
};

export default ChallengeSection;
