import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationItems from './NavigationItems';

describe('<NavigationItems />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<NavigationItems />);
    const navigationItems = getByTestId('NavigationItems');

    expect(navigationItems).toBeInTheDocument();
  });
});