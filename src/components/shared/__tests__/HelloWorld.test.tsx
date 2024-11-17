// src/components/shared/__tests__/HelloWorld.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('renders HelloWorld component', () => {
  render(<HelloWorld />);
  const element = screen.getByText(/hello, world!/i);
  expect(element).toBeInTheDocument();
});