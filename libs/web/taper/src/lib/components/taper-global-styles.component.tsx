import { FC } from 'react';
import { GlobalStyles, useTheme } from '@mui/material';

export const TaperGlobalStyles: FC = () => {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        ".tippy-box[data-theme~='moona']": {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(0.5),
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.primary,
        },
        ".tippy-box[data-theme~='moona'][data-placement^='top'] > .tippy-arrow::before": {
          borderTopColor: theme.palette.background.paper,
        },
        ".tippy-box[data-theme~='moona'][data-placement^='bottom'] > .tippy-arrow::before": {
          borderBottomColor: theme.palette.background.paper,
        },
        ".tippy-box[data-theme~='moona'][data-placement^='left'] > .tippy-arrow::before": {
          borderLeftColor: theme.palette.background.paper,
        },
        ".tippy-box[data-theme~='moona'][data-placement^='right'] > .tippy-arrow::before": {
          borderRightColor: theme.palette.background.paper,
        },

        // Arrow
        ".tippy-box[data-placement^='top'] > .tippy-svg-arrow": {
          bottom: 0,
        },
        ".tippy-box[data-placement^='top'] > .tippy-svg-arrow:after": {
          top: theme.spacing(2),
          transform: 'rotate(180deg)',
        },
        ".tippy-box[data-placement^='top'] > .tippy-svg-arrow > svg": {
          top: theme.spacing(2),
          transform: 'rotate(180deg)',
        },

        ".tippy-box[data-placement^='bottom'] > .tippy-svg-arrow": {
          top: 0,
        },
        ".tippy-box[data-placement^='bottom'] > .tippy-svg-arrow > svg": {
          bottom: theme.spacing(2),
        },
        ".tippy-box[data-placement^='left'] > .tippy-svg-arrow": {
          right: 0,
        },
        ".tippy-box[data-placement^='left'] > .tippy-svg-arrow:after": {
          transform: 'rotate(90deg)',
          top: `calc(50% - ${theme.spacing(0.375)})`,
          left: theme.spacing(1.375),
        },
        ".tippy,-box[data-placement^='left'] > .tippy-svg-arrow > svg": {
          transform: 'rotate(90deg)',
          top: `calc(50% - ${theme.spacing(0.375)})`,
          left: theme.spacing(1.375),
        },
        ".tippy-box[data-placement^='right'] > .tippy-svg-arrow": {
          left: 0,
        },
        ".tippy-box[data-placement^='right'] > .tippy-svg-arrow:after": {
          transform: 'rotate(-90deg)',
          top: `calc(50% - ${theme.spacing(0.375)})`,
          right: theme.spacing(1.375),
        },
        ".tippy-box[data-placement^='right'] > .tippy-svg-arrow > svg": {
          transform: 'rotate(-90deg)',
          top: `calc(50% - ${theme.spacing(0.375)})`,
          right: theme.spacing(1.375),
        },
        '.tippy-svg-arrow': {
          position: 'absolute',
          width: theme.spacing(2),
          height: theme.spacing(2),
          fill: theme.palette.background.paper,
          textAlign: 'initial',
        },
        '.tippy-svg-arrow > svg': {
          position: 'absolute',
        },

        // Arrow size
        ".tippy-box[data-theme~='moona'] > .tippy-arrow::before": {
          transform: 'scale(1.5)',
        },

        // Scale animation
        ".tippy-box[data-animation='scale'][data-placement^='top']": {
          transformOrigin: 'bottom',
        },
        ".tippy-box[data-animation='scale'][data-placement^='bottom']": {
          transformOrigin: 'top',
        },
        ".tippy-box[data-animation='scale'][data-placement^='left']": {
          transformOrigin: 'right',
        },
        ".tippy-box[data-animation='scale'][data-placement^='right']": {
          transformOrigin: 'left',
        },
        ".tippy-box[data-animation='scale'][data-state='hidden']": {
          transform: 'scale(0.5)',
          opacity: 0,
        },
        ".tippy-box[data-theme~='moona'] > .tippy-svg-arrow": {
          fill: theme.palette.background.paper,
        },
      }}
    />
  );
};
