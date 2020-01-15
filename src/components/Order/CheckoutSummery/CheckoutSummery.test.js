import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckoutSummery from './CheckoutSummery';

describe('<CheckoutSummery />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CheckoutSummery />);
    const checkoutSummery = getByTestId('CheckoutSummery');

    expect(checkoutSummery).toBeInTheDocument();
  });
});