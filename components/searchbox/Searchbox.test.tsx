import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBox from './Searchbox';

test('renders SearchBox component', async () => {
  const { getByRole } = render(<SearchBox />);
  expect(getByRole('textbox')).toBeInTheDocument();
});

test('allows user to add the keyword', async () => {
  render(<SearchBox />);

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'react' },
  });
  const input = await screen.findByDisplayValue('react');

  expect(input).toBeInTheDocument();
});
