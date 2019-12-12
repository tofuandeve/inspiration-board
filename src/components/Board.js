import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    const cardUrl = this.props.url + "/"+ this.props.boardName + "/cards";
    axios.get(cardUrl).then((response) => {
      this.setState({ cards: response.data })
    }).catch((error) =>{
      this.setState({ error: 'Sorry, something went wrong' })
    })
  }

  render() {
    const cards = this.state.cards.map((cardItem, i) => {
      return (
        <section key={i}>
          <Card cardData={cardItem.card}></Card>
        </section>)
    });

    return (
      <div >
        <h3>Board: {this.props.boardName}</h3>
        <button
          type="button"
          className="btn btn-danger"
          aria-label="Close"
        >
          Delete board
        </button>
        <section className="board">{cards}</section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
