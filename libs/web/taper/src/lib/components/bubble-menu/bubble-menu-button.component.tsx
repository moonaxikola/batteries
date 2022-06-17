import { FC } from 'react';
import { Label } from '@moonaxikola/web/ui';
import { IconButton, Tooltip, Typography, useTheme } from '@mui/material';

import { BubbleMenuButtonProps } from './bubble-menu.types';

const BubbleMenuButton: FC<BubbleMenuButtonProps> = ({ active, icon: Icon, name, shortcut, command }) => {
  const theme = useTheme();
  const color = active ? theme.palette.text.primary : theme.palette.text.disabled;

  return (
    <Tooltip
      title={
        <Typography variant="caption" sx={{ alignItems: 'center' }}>
          {name}
          {shortcut && <Label sx={{ fontSize: 'inherit', ml: 1 }}>{shortcut}</Label>}
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
