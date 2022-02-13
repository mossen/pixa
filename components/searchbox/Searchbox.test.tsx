import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBox from './Searchbox';

test('renders SearchBox component', async () => {
  const { getByText } = render(
    <SearchBox  />
  );
  const element = getByText('Search');
  expect(element).toBeInTheDocument();
});

test('allows user to add the keyword', async () => {
  render(<SearchBox />);

  fireEvent.change(screen.getByTestId(/search-input/i), {
    target: { value: 'react' },
  });
  const input = await screen.findByDisplayValue('react');

  expect(input).toBeInTheDocument();
});
