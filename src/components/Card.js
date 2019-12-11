import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const symbol = this.props.cardData.emoji;
    const text = this.props.cardData.text;
    return (
      <div className="card">         
        <p className="card__content card__content-text">{text}</p>
        <p className="card__content card__content-emoji">{(symbol) ? emoji.getUnicode(symbol) : ""}</p>
      </div>
    )
  }
}

Card.propTypes = {
};

export default Card;
