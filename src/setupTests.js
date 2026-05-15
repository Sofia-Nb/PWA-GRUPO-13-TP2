// src/setupTests.js
import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Simulación de IntersectionObserver
class MockIntersectionObserver {
  constructor() {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);