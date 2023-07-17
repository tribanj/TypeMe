import React from "react";
import './TryAgain.css'

const TryAgain = ({ words, characters, wpm,startAgain }) => {
  return (
    <>
      <div className="try-again-container">
        <h1>Test result</h1>
        <div className="result-container">
          <p>
            <b>characters:</b>
            {characters}
          </p>
          <p>
            <b>Words:</b>
            {words}
          </p>
          <p>
            <b>Speed:</b>
            {wpm}
          </p>
        </div>
        <div>
          <button onClick={() => startAgain()} className="end-buttons start-again-btn">Try Again</button>
          <button
            className="end-buttons share-btn"
            onClick={() => {
              window.open(
                "http://facebook.com/sharer/sharer.php?u=tribhuwanm.com/typingtest, facebook-share-dialog",
                "width=800,height=600"
              );
            }}
          >
            Share
          </button>
          <button className="end-buttons tweet-btn"
            onClick={() => {
                window.open(
                  "http://twitter.com/intent/tweet?text=tribhuwanm.com, Twitter",
                  "width=800,height=600"
                );
              }}
          >Tweet</button>
        </div>
      </div>
    </>
  );
};

export default TryAgain;
