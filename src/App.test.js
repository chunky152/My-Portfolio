import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-tsparticles', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: (props) => React.createElement('div', props, null),
    Particles: (props) => React.createElement('div', props, null),
  };
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
