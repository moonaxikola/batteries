import { alpha, Theme, styled } from '@mui/material/styles';

import { ColorSchema } from '../../theme/palette';
import { LabelColor, LabelVariant } from './label.types';

export const RootStyle = styled('span')(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme;
    ownerState: {
      color: LabelColor;
      variant: LabelVariant;
    };
  }) => {
    const isLight = theme.palette.mode === 'light';
    const { color, variant } = ownerState;

    const styleFilled = (c: ColorSchema) => ({
      color: theme.palette[c].contrastText,
      backgroundColor: theme.palette[c].main,
    });

    const styleOutlined = (c: ColorSchema) => ({
      color: theme.palette[c].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette[c].main}`,
    });

    const styleGhost = (c: ColorSchema) => ({
      color: theme.palette[c][isLight ? 'dark' : 'light'],
      backgroundColor: alpha(theme.palette[c].main, 0.16),
    });

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: theme.shape.borderRadius,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold,

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500_32]}`,
            }),
            ...(variant === 'ghost' && {
              color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
              backgroundColor: theme.palette.grey[500_16],
            }),
          }),
    };
  },
);
