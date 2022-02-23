import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button text', () => {
  render(<App />);
  const buttonText = screen.getByText(/search pokemon/i);
  expect(buttonText).toBeInTheDocument();
});
