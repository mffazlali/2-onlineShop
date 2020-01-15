import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderSummery from './OrderSummery';

describe('<OrderSummery />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<OrderSummery />);
    const orderSummery = getByTestId('OrderSummery');

    expect(orderSummery).toBeInTheDocument();
  });
});