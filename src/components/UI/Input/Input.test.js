import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('<Input />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('Input');

    expect(input).toBeInTheDocument();
  });
});