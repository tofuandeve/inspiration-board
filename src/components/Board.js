import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      // cards: [],
      cards: CARD_DATA.cards,
    };
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      return (
        <section key={i}>
          <Card cardData={card}></Card>
        </section>)
    });

    return (
      <div>
        <h3>Board: {this.props.boardName}</h3>
        <section>{cards}</section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
