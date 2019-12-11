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
    const allBoards = this.state.boards.map((boardItem, i) => {
      return (
        <section key={i}>
          <Board
            url="https://inspiration-board.herokuapp.com/boards"
            boardName={boardItem.board.name}></Board>
        </section>);
    });

    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        {allBoards}
      </section>
    );
  }
}

export default App;
