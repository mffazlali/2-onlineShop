import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DrawerToggle from './DrawerToggle';

describe('<DrawerToggle />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<DrawerToggle />);
    const drawerToggle = getByTestId('DrawerToggle');

    expect(drawerToggle).toBeInTheDocument();
  });
});