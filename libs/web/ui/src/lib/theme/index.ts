import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

export type ThemeMode = 'light' | 'dark';

export function getTheme(mode: ThemeMode) {
  const theme = createTheme({
    palette: palette[mode],
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    shadows: shadows[mode],
    customShadows: customShadows[mode],
  });

  theme.components = componentsOverride(theme);

  return theme;
}
