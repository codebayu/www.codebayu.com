import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Breakline from '../Breakline';

describe('Breakline Component', () => {
  const props = {
    className: 'mt-2'
  };
  beforeEach(() => {
    render(<Breakline className={props.className} />);
  });

  it('Should render breakline element', () => {
    const breakline = screen.getByTestId('breakline');
    expect(breakline).toBeTruthy();
    expect(breakline.className).toBe(`border-t border-gray-300 dark:border-neutral-700 my-4 ${props.className}`);
  });
});
