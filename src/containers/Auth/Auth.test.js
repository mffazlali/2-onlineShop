import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Auth from './Auth';

describe('<Auth />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Auth />);
    const auth = getByTestId('Auth');

    expect(auth).toBeInTheDocument();
  });
});