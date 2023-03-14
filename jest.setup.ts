/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

window.matchMedia = window.matchMedia || function(): {
  matches: boolean,
  addListener(): void,
  removeListener(): void
} {
  return {
    matches: false,
    addListener() {},
    removeListener() {}
  };
};
