import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock fetch globally
global.fetch = vi.fn();

// Cleanup after each test
import { cleanup } from '@testing-library/react';
afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});