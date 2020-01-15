import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Spinner />);
    const spinner = getByTestId('Spinner');

    expect(spinner).toBeInTheDocument();
  });
});