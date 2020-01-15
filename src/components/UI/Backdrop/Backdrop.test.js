import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Backdrop />);
    const backdrop = getByTestId('Backdrop');

    expect(backdrop).toBeInTheDocument();
  });
});