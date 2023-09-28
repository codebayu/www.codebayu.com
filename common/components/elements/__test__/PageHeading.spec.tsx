import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import PageHeading from '../PageHeading';

describe('Page Heading Component', () => {
  beforeEach(() => {
    render(<PageHeading title="Test title" description="Test description" />);
  });

  it('Should render H1 element', () => {
    const h1 = screen.getAllByText('Test title');
    expect(h1).toBeTruthy();
  });

  it('Should render P element', () => {
    const p = screen.getAllByText('Test description');
    expect(p).toBeTruthy();
  });
});
