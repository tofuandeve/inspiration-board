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
    const cardsUrl = "https://inspiration-board.herokuapp.com/cards"
    axios.delete(`${cardsUrl}/${cardId}`)
      .then((response) => {
        const cards = this.state.cards.filter((cardItem) => cardItem.card.id !== cardId);
        this.setState({ cards, });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  addCard = (card) => {
    const url = `https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`
    axios.post(url, card)
      .then((response) => {
        const updatedCards = this.state.cards;
        updatedCards.push(response.data);
        this.setState({
          cards: updatedCards,
          error: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
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
