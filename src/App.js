import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Nav/Landing/Landing";
import Footer from "./components/Nav/Footer/Footer";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";

const defaultState = {
  selectedParagraph: "",
  timeStarted: false,
  timeReamining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;

  fetchNewParagraph =() =>{
    fetch(serviceUrl).then((response) =>
    response.text().then((data) => {
      const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => {
        return {
          testLetter: selectedLetter,
          status: "notAttempted",
        };
      });
      this.setState({...defaultState, testInfo, selectedParagraph: data });
    })
  );
  }

  componentDidMount() {
   this.fetchNewParagraph();
  }

  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeReamining > 0) {
        // ??change the WPM
        const timeSpent = TotalTime - this.state.timeReamining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeReamining: this.state.timeReamining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () =>{ this.fetchNewParagraph(); }

  handleUserInput = (inputValue) => {
    if (!this.state.timeStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //Make a copy of testInfo********************
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    //check for the correct type
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update the test Info
    testInfo[index].status = isCorrect ? "Correct" : "Incorrect";

    //Update the state
    this.setState({
      ...defaultState,
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <>
        <div className="app">
          {/* Landing Page  */}
          <Nav />
          <Landing />

          {/* Clallanges  */}
          <ChallengeSection
            selectedParagraph={this.state.selectedParagraph}
            words={this.state.words}
            characters={this.state.characters}
            wpm={this.state.wpm}
            timeReamining={this.state.timeReamining}
            timeStarted={this.state.timeStarted}
            testInfo={this.state.testInfo}
            onInputChange={this.handleUserInput}
            startAgain={this.startAgain}
          />

          {/* Footer  */}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
