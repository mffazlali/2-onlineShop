import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationItem from './NavigationItem';

describe('<NavigationItem />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<NavigationItem />);
    const navigationItem = getByTestId('NavigationItem');

    expect(navigationItem).toBeInTheDocument();
  });
});