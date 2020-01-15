import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SlideDrawer from './SlideDrawer';

describe('<SlideDrawer />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<SlideDrawer />);
    const slideDrawer = getByTestId('SlideDrawer');

    expect(slideDrawer).toBeInTheDocument();
  });
});