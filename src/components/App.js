import React, { Component } from "react";

import Nav from "./Nav";
import PostForm from "./Post-form";
import { render } from "@testing-library/react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      message: " ",

      chirp: [
        {
          name: "Jackie",
          message: "Hi! I'm from Mobile",
        },
        { name: "Eddie", message: "I was born in Seattle!" },
        { name: "Rajeeyah", message: "My favorite color is red!" },
      ],
    };
  }
  handleName(e) {
    this.setState({
      name: e.target.value, //will set state of name to the value of what's in text box
    });
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value, // will set state of the new/empty chirp to the value of 2nd text box
    });
  }

  handleSubmit = () => {
    let newChirp = {
      name: this.state.name,
      message: this.state.message,
    };
    this.setState({
      chirp: [...this.state.chirp, newChirp], //will add variable to the chirp array
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div>
          <input
            onChange={(e) => {
              this.handleName(e);
            }}
          />
          <input
            onChange={(e) => {
              this.handleMessage(e);
            }}
          />
          <button onClick={this.handleSubmit}>New Chirp</button>
        </div>
        {this.state.chirp.map((chirp, index) => {
          return (
            <div>
              {/* //maps needs a unique key for ordering. each child needs a unique key */}
              <div key={index} className="card">
                <div className="card-header">Chirps</div>
                <div className="card-body">
                  <h5 className="card-title">{chirp.name}</h5>
                  <p className="card-text">{chirp.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
