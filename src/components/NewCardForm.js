import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const emojis = EMOJI_LIST.map((symbol, i) => {
      return (
        <option key={i} value={symbol}>{emoji.getUnicode(symbol)}</option>
      );
    });

    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add new card</h3>
        <form className="new-card-form__form">
          <label className="new-card-form__form-label"> Message </label>
          <textarea className="new-card-form__form-textarea"
            name="content"
            id="content"
            type="text"
          >
          </textarea>

          <label className="new-card-form__form-label"> Emoji </label>
          <select className="new-card-form__form-select">
            {emojis}
          </select>

          <input type="submit" value="Submit Line" className="new-card-form__form-button" />

        </form>

      </section>
    );
  }
}

export default NewCardForm;