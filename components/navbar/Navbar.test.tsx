import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', async () => {
  const { getByText } = render(
    <Navbar />
  );

  expect(getByText('Github')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
});

