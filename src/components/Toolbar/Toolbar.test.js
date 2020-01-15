import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toolbar from './Toolbar';

describe('<Toolbar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Toolbar />);
    const toolbar = getByTestId('Toolbar');

    expect(toolbar).toBeInTheDocument();
  });
});