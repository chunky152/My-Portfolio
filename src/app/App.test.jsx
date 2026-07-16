import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import App from './App';

vi.mock('@tsparticles/react', async () => {
  const React = await import('react');
  const Particles = ({ id }) => React.createElement('div', { id }, null);
  return {
    __esModule: true,
    default: Particles,
    Particles,
    ParticlesProvider: ({ children }) =>
      React.createElement(React.Fragment, null, children),
  };
});

vi.mock('@tsparticles/slim', () => ({
  __esModule: true,
  loadSlim: vi.fn(() => Promise.resolve()),
}));

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
