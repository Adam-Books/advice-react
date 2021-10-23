import React from "react";
import axios from "axios";
import Image from "./images/city.jpg";

import styled, { createGlobalStyle } from "styled-components";
import Button from "./ButtonStyle";

const GlobalStyle = createGlobalStyle`
#root,
html,
body {
    padding: 0;
    margin: 0;
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Container = styled.div`
  height: 100%;
  background: linear-gradient(#0000004d, #0000004d), url(${Image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Card = styled.div`
  background: #f5f5f5;
  width: 40%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
  padding: 2%;
  box-shadow: 5px 5px;

  @media only screen and (max-width: 950px) {
    width: 80%;
    height: 30%;
  }

  @media only screen and (max-width: 460px) {
    font-size: 60%;
    width: 80%;
    height: 40%;
    padding: 4%;
  }
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  height: 580px;
`;

const Span = styled.span`
  color: #164ca7;
  font-size: 12px;
  letter-spacing: 0.7px;

  @media only screen and (max-width: 950px) {
    font-size: 10px;
  }
`;

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
      <>
        <GlobalStyle />
        <Container>
          <Card>
            <Heading>{advice}</Heading>
            <Button onClick={this.fetchAdvice}>
              <Span>GIVE ME ADVICE!</Span>
            </Button>
          </Card>
        </Container>
      </>
      // <h1>App</h1>
    );
  }
}

export default App;
