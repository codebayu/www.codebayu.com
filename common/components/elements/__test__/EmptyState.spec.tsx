import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import EmptyState from '../EmptyState';

describe('EmptyState Component', () => {
  beforeEach(() => {
    render(<EmptyState message="test message" />);
  });

  it('Should render mood icon element', () => {
    const icon = screen.getByTestId('mood-icon');
    expect(icon).toBeTruthy();
  });

  it('Should render message element', () => {
    const message = screen.getAllByText('test message');
    expect(message).toBeTruthy();
  });
});
