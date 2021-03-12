import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        FullName: "Ilyes Bouchneb",
        Bio: "",
        Profession: "Dévelopement",
        imgsrc: "ilyes.jpg",
      },
      show: true,
    };
  }
  handleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        {this.state.show ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgsrc} />
            <Card.Body>
              <Card.Title>
                <h2>{this.state.person.FullName}</h2>
              </Card.Title>
              <Card.Text>
                <h3>{this.state.person.Bio}</h3>
                <h3>{this.state.person.Profession}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
        <Button className="bn" onClick={this.handleShow} variant="primary">
          {this.state.show ? "Hide" : "show"}
        </Button>
      </div>
    );
  }
}
export default App;
