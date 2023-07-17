import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeCont from "../TypingChallengeCont/TypingChallengeCont";

const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeReamining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  // const timeRemaining = 30;
  return (
    <>
      <div className="test-container">
        {timeReamining > 0 ? (
          <div data-aos="fade-up" className="typing-challenge-container">
            <TypingChallengeCont
              timeReamining={timeReamining}
              timeStarted={timeStarted}
              words={words}
              characters={characters}
              wpm={wpm}
              selectedParagraph={selectedParagraph}
              testInfo={testInfo}
              onInputChange={onInputChange}
            />
          </div>
        ) : (
          <div className="try-again-container">
            <TryAgain
              words={words}
              characters={characters}
              wpm={wpm}
              startAgain={startAgain}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TestContainer;
