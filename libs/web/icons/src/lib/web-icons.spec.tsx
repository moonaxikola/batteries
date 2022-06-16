import { render } from '@testing-library/react';

import WebIcons from './web-icons';

describe('WebIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebIcons />);
    expect(baseElement).toBeTruthy();
  });
});
