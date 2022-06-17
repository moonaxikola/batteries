import { TextFieldProps } from '@mui/material';

export interface CopyClipboardTextFieldProps extends Omit<TextFieldProps, 'value' | 'InputProps'> {
  value: string;
  message?: string;
}
