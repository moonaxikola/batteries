import { render } from '@testing-library/react';

import Label from './label.component';

describe('Label', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Label />);
    expect(baseElement).toBeTruthy();
  });
});
