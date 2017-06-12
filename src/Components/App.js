import React, { Component } from 'react';
import logo from '../static/img/logo.svg';
import './App.css';
import styled from 'styled-components'

const AppDiv = styled.div`
    text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppDiv>
    );
  }
}

export default App;
