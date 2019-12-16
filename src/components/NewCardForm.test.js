import React from 'react';
import {render, cleanup} from '@testing-library/react';
import NewCardForm from './NewCardForm.js';
import cards from '../data/card-data.json';

const addCard = jest.fn();

describe('NewCardForm', () => {
    test('that it matches the existing snapshot', () => {
        const {asFragment} = render(
            <NewCardForm addCardCallBack={addCard}></NewCardForm>
        )

        expect(asFragment()).toMatchSnapshot();
    });

    afterEach(cleanup);
});