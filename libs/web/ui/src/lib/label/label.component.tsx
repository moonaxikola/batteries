import { FC } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import type { LabelProps } from './label.types';
import { RootStyle } from './label.styles';

const Label: FC<LabelProps> = ({ children, color = 'default', variant = 'ghost', startIcon, endIcon, sx }) => {
  const theme = useTheme();

  const style = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  };

  return (
    <RootStyle
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
      theme={theme}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  );
};

export default Label;
