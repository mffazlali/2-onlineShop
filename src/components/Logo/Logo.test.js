import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './Logo';

describe('<Logo />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Logo />);
    const logo = getByTestId('Logo');

    expect(logo).toBeInTheDocument();
  });
});