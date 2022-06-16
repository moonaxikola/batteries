import { render } from '@testing-library/react';

import CopyClipboardTextField from './copy-clipboard-text-field.component';

describe('CopyClipboardTextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyClipboardTextField value="Hello world" />);
    expect(baseElement).toBeTruthy();
  });
});
