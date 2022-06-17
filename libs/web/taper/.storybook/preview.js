import { ThemeProvider, CssBaseline } from '@mui/material';

import { getTheme } from '@moonaxikola/web/ui';

import { TaperGlobalStyles } from '../src/lib/components';
export const decorators = [
  Story => (
    <ThemeProvider theme={getTheme('dark')}>
      <CssBaseline />
      <TaperGlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
