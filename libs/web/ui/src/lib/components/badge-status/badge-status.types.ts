import { BoxProps } from '@mui/material';

export type BadgeStatusEnum = 'away' | 'busy' | 'unread' | 'online' | 'offline' | 'invisible' | string;

export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeStatusProps extends BoxProps {
  size?: BadgeSize;
  status?: BadgeStatusEnum;
}
