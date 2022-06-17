import { AvatarProps as MUIAvatarProps } from '@mui/material';

export type AvatarColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

export interface AvatarProps extends MUIAvatarProps {
  color?: AvatarColor;
}
