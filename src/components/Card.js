import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const symbol = this.props.cardData.emoji;
    const text = this.props.cardData.text;
    return (
      <section className="card card__content">
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{(symbol) ? emoji.getUnicode(symbol) : ""}</p>
        <section>
          <button
            className="card__delete"
            type="button"
            aria-label="Close"
          >
            Delete
        </button>
        </section>
      </section>
    )
  }
}

Card.propTypes = {
};

export default Card;
