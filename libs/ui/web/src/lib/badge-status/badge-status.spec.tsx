import { render } from '@testing-library/react';

import BadgeStatus from './badge-status.component';

describe('BadgeStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BadgeStatus />);
    expect(baseElement).toBeTruthy();
  });
});
