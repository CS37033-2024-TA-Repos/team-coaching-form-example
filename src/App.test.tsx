import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders employee feedback form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Employee/i);
  expect(linkElement).toBeInTheDocument();
});
