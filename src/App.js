import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    // console.log("Component did Mount");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
        // console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>

      // <h1>App</h1>
    );
  }
}

export default App;
