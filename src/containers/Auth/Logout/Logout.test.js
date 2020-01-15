import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logout from './Logout';

describe('<Logout />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Logout />);
    const logout = getByTestId('Logout');

    expect(logout).toBeInTheDocument();
  });
});