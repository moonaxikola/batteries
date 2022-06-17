import { BoxProps } from '@mui/material';
import { ReactElement } from 'react';

export type LabelColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export type LabelVariant = 'filled' | 'outlined' | 'ghost';

export interface LabelProps extends BoxProps {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  color?: LabelColor;
  variant?: LabelVariant;
}
