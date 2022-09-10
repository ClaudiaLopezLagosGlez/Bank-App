import React from "react";
import Card from "react-bootstrap/Card";
import logo from "./images/BankLogo.png";

export function Home() {
  return (
    <>
      <h1></h1>
      <div className="CardHome text-secondary text-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          <Card border="secondary" style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>
                <h2>Welcome to the Bank App!</h2>
              </Card.Title>

              <Card.Text>
                <p></p>
                <p>For all your banking needs</p>
                <p></p>
              </Card.Text>
              <div className="ImageLogo">
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  width="400"
                  height="250"
                />
              </div>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    </>
  );
}

export default Home;
