import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders Layout component', async () => {
  const { getByText } = render(
    <Layout><p>Children</p></Layout>
  );

  expect(getByText('Children')).toBeInTheDocument();
  expect(getByText('Github')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
});

