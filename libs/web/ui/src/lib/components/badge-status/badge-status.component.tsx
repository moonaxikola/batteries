import { FC } from 'react';
import { useTheme } from '@mui/material/styles';

import type { BadgeStatusProps } from './badge-status.types';
import { RootStyle } from './badge-status.styles';

const BadgeStatus: FC<BadgeStatusProps> = ({ size = 'medium', status = 'offline', sx }) => {
  const theme = useTheme();

  return <RootStyle ownerState={{ status, size }} sx={sx} theme={theme} />;
};

export default BadgeStatus;
