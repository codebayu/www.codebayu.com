import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import CircleProgress from '../CircleProgress';

describe('Circular Progress Component', () => {
  beforeEach(() => {
    render(<CircleProgress value={90} />);
  });

  it('Should render progress element', () => {
    const progress = screen.getByTestId('progress');
    expect(progress).toBeTruthy();
  });
});
