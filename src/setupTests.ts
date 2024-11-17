// src/setupTests.ts
import '@testing-library/jest-dom';
// setupTests.ts
beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };
});