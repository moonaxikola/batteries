import { IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

import { BubbleMenuButtonProps } from './bubble-menu.types';

const BubbleMenuButton: FC<BubbleMenuButtonProps> = ({ active, icon: Icon, name, shortcut, command }) => {
  const theme = useTheme();
  const color = active ? theme.palette.text.primary : theme.palette.text.disabled;

  return (
    <Tooltip
      title={
        <Typography variant="caption">
          {name} <code>{shortcut}</code>
        </Typography>
      }
    >
      <IconButton size="small" onClick={command}>
        <Icon fontSize="inherit" sx={{ color }} />
      </IconButton>
    </Tooltip>
  );
};

export default BubbleMenuButton;
