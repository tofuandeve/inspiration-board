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

  removeCard = (cardId) => {
    const cards = this.state.cards.filter((cardItem) => {
      return cardItem.card.id !== cardId;
    });

    this.setState({ cards });
  }

  addCard = (card) => {
    const cards = this.state.cards;
    cards.push(card);
    this.setState({ cards, })
  }

  componentDidMount() {
    const cardUrl = `${this.props.url}/${this.props.boardName}/cards`;
    axios.get(cardUrl).then((response) => {
      this.setState({ cards: response.data })
    }).catch((error) => {
      this.setState({ error: 'Sorry, something went wrong' })
    })
  }

  render() {
    const cards = this.state.cards.map((cardItem, i) => {
      return (
        <section key={i}>
          <Card
            cardData={cardItem.card}
            removeCardCallBack={this.removeCard}>
          </Card>
        </section>)
    });

    return (
      <section>
        <h3>Board: {this.props.boardName}</h3>
        <NewCardForm addCardCallBack={this.addCard}></NewCardForm>

        <section className="board">{cards}</section>
      </section>
    )
  }

}

Board.propTypes = {

};

export default Board;
