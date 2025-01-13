import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Qantas Wine Carousel', () => {
  render(<App />);
  const linkElement = screen.getByText(/Qantas Wine Carousel/i);
  expect(linkElement).toBeInTheDocument();
});
