import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-tsparticles', () => {
  const React = require('react');
  const Particles = ({ id }) => React.createElement('div', { id }, null);
  return {
    __esModule: true,
    default: Particles,
    Particles,
  };
});

jest.mock('tsparticles-slim', () => ({
  __esModule: true,
  loadSlim: jest.fn(() => Promise.resolve()),
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
