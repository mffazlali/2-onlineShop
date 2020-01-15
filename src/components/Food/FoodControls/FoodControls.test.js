import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodControls from './FoodControls';

describe('<FoodControls />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<FoodControls />);
    const foodControls = getByTestId('FoodControls');

    expect(foodControls).toBeInTheDocument();
  });
});