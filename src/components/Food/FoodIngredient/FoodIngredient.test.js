import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FoodIngredient from './FoodIngredient';

describe('<FoodIngredient />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<FoodIngredient />);
    const foodIngredient = getByTestId('FoodIngredient');

    expect(foodIngredient).toBeInTheDocument();
  });
});