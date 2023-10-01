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
    expect(dots.className).toBe(
      'flex relative items-center gap-2 bg-white dark:bg-dark rounded-xl py-1 px-2 border border-neutral-300 dark:border-neutral-700'
    );
  });
});
