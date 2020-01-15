import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Checkout from './Checkout';

describe('<Checkout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Checkout />);
    const checkout = getByTestId('Checkout');

    expect(checkout).toBeInTheDocument();
  });
});