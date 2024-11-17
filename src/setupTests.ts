// src/setupTests.ts
import '@testing-library/jest-dom';

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
});

// Extend expect matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}