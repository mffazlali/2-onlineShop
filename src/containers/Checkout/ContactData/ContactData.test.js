import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactData from './ContactData';

describe('<ContactData />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ContactData />);
    const contactData = getByTestId('ContactData');

    expect(contactData).toBeInTheDocument();
  });
});