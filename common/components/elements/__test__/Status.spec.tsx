import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Status from '../Status';

describe('Status Component', () => {
  beforeEach(() => {
    render(<Status />);
  });

  it('Should render available element', () => {
    const dots = screen.getByTestId('available-hire');
    expect(dots).toBeTruthy();
    expect(dots.className).toBe('flex items-center gap-2');
  });
});
