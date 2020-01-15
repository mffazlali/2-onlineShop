import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Food from './Food';

describe('<Food />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Food />);
    const food = getByTestId('Food');

    expect(food).toBeInTheDocument();
  });
});