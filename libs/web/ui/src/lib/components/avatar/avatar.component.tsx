import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar as MUIAvatar } from '@mui/material';

import { AvatarProps } from './avatar.types';

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({ color = 'default', children, sx, ...rest }, ref) => {
  const theme = useTheme();

  if (color === 'default') {
    return (
      <MUIAvatar ref={ref} sx={sx} {...rest}>
        {children}
      </MUIAvatar>
    );
  }

  return (
    <MUIAvatar
      ref={ref}
      sx={{
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MUIAvatar>
  );
});

export default Avatar;
