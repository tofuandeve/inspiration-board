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
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url).then((response) => {
      this.setState({
        cards: response.data,
      })
    }).catch((error) =>{
      this.setState({
        error: 'Sorry, something went wrong',
      })
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
        <section className="board">{cards}</section>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
