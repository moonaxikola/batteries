import { render } from '@testing-library/react';

import WebTaper from './web-taper';

describe('WebTaper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebTaper />);
    expect(baseElement).toBeTruthy();
  });
});
