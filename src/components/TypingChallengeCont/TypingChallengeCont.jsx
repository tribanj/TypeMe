import React from "react";
import "./TypingChallengeCont.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeCont = ({
  testInfo,
  selectedParagraph,
  words,
  characters,
  wpm,
  timeReamining,
  timeStarted,
  onInputChange,
}) => {
  return (
    <>
      <div className="typing-challenge-container">
        <div className="details-container">
          {/* words typed */}
          <ChallengeDetailsCard cardName="words" cardValue={words} />

          {/* characters typed  */}

          <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

          {/* speed */}

          <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
        </div>

        {/* The real challenge */}
        <div className="typewritter-container">
          <TypingChallenge
            onInputChange={onInputChange}
            selectedParagraph={selectedParagraph}
            timeReamining={timeReamining}
            timeStarted={timeStarted}
            testInfo={testInfo}
          />
        </div>
      </div>
    </>
  );
};

export default TypingChallengeCont;
