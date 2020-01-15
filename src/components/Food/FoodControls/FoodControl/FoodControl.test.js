import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodControl from './FoodControl';

describe('<FoodControl />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<FoodControl />);
    const foodControl = getByTestId('FoodControl');

    expect(foodControl).toBeInTheDocument();
  });
});