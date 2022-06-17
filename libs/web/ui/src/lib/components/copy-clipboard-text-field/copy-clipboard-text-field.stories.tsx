import { Meta, Story } from '@storybook/react';

import CopyClipboardTextFieldComponent from './copy-clipboard-text-field.component';
import { CopyClipboardTextFieldProps } from './copy-clipboard-text-field.types';

export default {
  component: CopyClipboardTextFieldComponent,
  title: 'CopyClipboardTextField',
} as Meta<CopyClipboardTextFieldProps>;

export const CopyClipboardTextField: Story<CopyClipboardTextFieldProps> = args => (
  <CopyClipboardTextFieldComponent {...args} />
);
CopyClipboardTextField.args = {
  value: 'Hello world',
  message: 'Text copied',
  disabled: true,
};
