import React, { Component } from "react";
import "./App.css";
import Header from './Header.js'
import Smurfs from './Smurfs.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Smurfs />
      </div>
    );
  }
}

export default App;
