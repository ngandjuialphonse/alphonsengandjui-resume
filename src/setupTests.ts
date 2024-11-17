// src/setupTests.ts
import '@testing-library/jest-dom';

// Extend expect matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}

beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() { return false; },
    };
  };

  // Silence React Router warnings
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes('React Router')) return;
    originalWarn(...args);
  };
});