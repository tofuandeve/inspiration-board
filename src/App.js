import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
    };
  }

  componentDidMount() {
    const url = "https://inspiration-board.herokuapp.com/boards";
    axios.get(url).then((response) => {
      this.setState({ boards: response.data })
    }).catch((error) => {
      this.setState({ error: 'Sorry, something went wrong' })
    })
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards"
          boardName="Ada-Lovelace">
        </Board>
      </section>
    );
  }
}

export default App;
