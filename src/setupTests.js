// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mocks for jsdom missing browser APIs used by components (CI environment)
// - stub window.scrollTo used in ScrollToTop
// - stub HTMLCanvasElement.getContext used by react-tsparticles

// noop scrollTo so tests don't error when components call it
window.scrollTo = () => {};

// provide a minimal getContext implementation for canvas
if (!HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = () => ({
    // minimal 2D context-like shape (add methods if tests require them)
  });
}
