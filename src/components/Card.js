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
        <span>
          {text}
          {(symbol) ? emoji.getUnicode(symbol) : ""}
        </span>
      </div>
    )
  }
}

Card.propTypes = {
};

export default Card;
